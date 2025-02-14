import { EventSourceMessage } from '@microsoft/fetch-event-source';
import { AiModelTypeProp } from '../types.js';
type ChromeAISuggestionsEventSourceConstructorArgs = {
    content: string;
    promptType: string;
    options?: {
        postId?: number | string;
        feature?: 'ai-assistant-experimental' | string | undefined;
        sourceLanguage?: string;
        targetLanguage?: string;
        functions?: Array<object>;
        model?: AiModelTypeProp;
    };
};
type FunctionCallProps = {
    name?: string;
    arguments?: string;
};
export default class ChromeAISuggestionsEventSource extends EventTarget {
    fullMessage: string;
    fullFunctionCall: FunctionCallProps;
    isPromptClear: boolean;
    controller: AbortController;
    errorUnclearPromptTriggered: boolean;
    constructor(data: ChromeAISuggestionsEventSourceConstructorArgs);
    initSource({ content, promptType, options, }: ChromeAISuggestionsEventSourceConstructorArgs): void;
    initEventSource(): Promise<void>;
    close(): void;
    checkForUnclearPrompt(): void;
    processEvent(e: EventSourceMessage): void;
    processErrorEvent(e: any): void;
    translate(text: string, target: string, source?: string): Promise<void>;
    summarize(text: string): Promise<string>;
}
export {};
