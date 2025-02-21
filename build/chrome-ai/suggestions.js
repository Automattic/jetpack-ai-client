import { PROMPT_TYPE_CHANGE_LANGUAGE, PROMPT_TYPE_SUMMARIZE } from '../constants.js';
import { getErrorData } from '../hooks/use-ai-suggestions/index.js';
import { renderHTMLFromMarkdown, renderMarkdownFromHTML } from '../libs/markdown/index.js';
import { ERROR_RESPONSE, ERROR_NETWORK } from '../types.js';
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
            this.summarize(content);
        }
    }
    async initEventSource() { }
    close() { }
    checkForUnclearPrompt() { }
    processEvent(e) {
        let data;
        try {
            data = JSON.parse(e.data);
        }
        catch (err) {
            this.processErrorEvent(err);
            return;
        }
        if (e.event === 'translation') {
            this.dispatchEvent(new CustomEvent('suggestion', { detail: data.message }));
        }
        if (data.complete) {
            this.dispatchEvent(new CustomEvent('done', { detail: { message: data.message, source: 'chromeAI' } }));
        }
    }
    processErrorEvent(e) {
        // Dispatch a generic network error event
        this.dispatchEvent(new CustomEvent(ERROR_NETWORK, { detail: e }));
        this.dispatchEvent(new CustomEvent(ERROR_RESPONSE, {
            detail: getErrorData(ERROR_NETWORK),
        }));
    }
    // use the Chrome AI translator
    async translate(text, target, source = '') {
        if (!('translation' in self)) {
            return;
        }
        const translator = await self.translation.createTranslator({
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
    // TODO
    async summarize(text) {
        return text;
    }
}
