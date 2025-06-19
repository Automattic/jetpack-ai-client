import debugFactory from 'debug';
import { PROMPT_TYPE_CHANGE_LANGUAGE, PROMPT_TYPE_SUMMARIZE } from "../constants.js";
import { getErrorData } from "../hooks/use-ai-suggestions/index.js";
import { renderHTMLFromMarkdown, renderMarkdownFromHTML } from "../libs/markdown/index.js";
import { ERROR_RESPONSE, ERROR_NETWORK } from "../types.js";
const debug = debugFactory('ai-client:chrome-ai-suggestions');
export default class ChromeAISuggestionsEventSource extends EventTarget {
    fullMessage;
    fullFunctionCall;
    isPromptClear;
    controller;
    errorUnclearPromptTriggered;
    constructor(data) {
        super();
        this.fullMessage = '';
        this.fullFunctionCall = {
            name: '',
            arguments: '',
        };
        this.isPromptClear = false;
        this.controller = new AbortController();
        this.initSource(data);
    }
    initSource({ content, promptType, options = {}, }) {
        if (promptType === PROMPT_TYPE_CHANGE_LANGUAGE) {
            this.translate(content, options.targetLanguage, options.sourceLanguage);
        }
        if (promptType === PROMPT_TYPE_SUMMARIZE) {
            this.summarize(content, options.tone, options.wordCount);
        }
    }
    async initEventSource() { }
    close() { }
    checkForUnclearPrompt() { }
    processEvent(e) {
        let data;
        debug('processEvent', e);
        try {
            data = JSON.parse(e.data);
        }
        catch (err) {
            this.processErrorEvent(err);
            return;
        }
        if (e.event === 'translation' || e.event === 'summary') {
            this.dispatchEvent(new CustomEvent('suggestion', { detail: data.message }));
        }
        if (data.complete) {
            this.dispatchEvent(new CustomEvent('done', { detail: { message: data.message, source: 'chromeAI' } }));
        }
    }
    processErrorEvent(e) {
        debug('processErrorEvent', e);
        // Dispatch a generic network error event
        this.dispatchEvent(new CustomEvent(ERROR_NETWORK, { detail: e }));
        this.dispatchEvent(new CustomEvent(ERROR_RESPONSE, {
            detail: getErrorData(ERROR_NETWORK),
        }));
    }
    // use the Chrome AI translator
    async translate(text, target, source = '') {
        if (!('Translator' in self)) {
            return;
        }
        const translator = await self.Translator.create({
            sourceLanguage: source,
            targetLanguage: target,
        });
        if (!translator) {
            return;
        }
        try {
            const translation = await translator.translate(renderHTMLFromMarkdown({ content: text }));
            this.processEvent({
                id: '',
                event: 'translation',
                data: JSON.stringify({
                    message: renderMarkdownFromHTML({ content: translation }),
                    complete: true,
                }),
            });
        }
        catch (error) {
            this.processErrorEvent(error);
        }
    }
    // Helper function to format summarizer options
    getSummarizerOptions(tone, wordCount) {
        let sharedContext = `The summary you write should contain strictly less than ${wordCount ?? 50} words. Strive for precision in word count without compromising clarity and significance`;
        if (tone) {
            sharedContext += `\n - Write with a ${tone} tone.\n`;
        }
        const options = {
            sharedContext: sharedContext,
            type: 'teaser',
            format: 'plain-text',
            length: 'medium',
        };
        return options;
    }
    // use the Chrome AI summarizer
    async summarize(text, tone, wordCount) {
        if (!('Summarizer' in self)) {
            return;
        }
        const availability = await self.Summarizer.availability();
        if (availability === 'unavailable') {
            return;
        }
        const summarizerOptions = this.getSummarizerOptions(tone, wordCount);
        const summarizer = await self.Summarizer.create(summarizerOptions);
        if (availability !== 'available') {
            await summarizer.ready;
        }
        try {
            const context = `Write with a ${tone} tone.`;
            let summary = await summarizer.summarize(text, { context: context });
            wordCount = wordCount ?? 50;
            // gemini-nano has a tendency to exceed the word count, so we need to check and summarize again if necessary
            if (summary.split(' ').length > wordCount) {
                summary = await summarizer.summarize(summary, { context: context });
            }
            this.processEvent({
                id: '',
                event: 'summary',
                data: JSON.stringify({
                    message: summary,
                    complete: true,
                }),
            });
        }
        catch (error) {
            this.processErrorEvent(error);
        }
    }
}
