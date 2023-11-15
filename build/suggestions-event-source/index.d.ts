/**
 * External dependencies
 */
import { EventSourceMessage } from '@microsoft/fetch-event-source';
import type { AiModelTypeProp, PromptProp } from '../types';
type SuggestionsEventSourceConstructorArgs = {
    url?: string;
    question: PromptProp;
    token?: string;
    options?: {
        postId?: number;
        feature?: 'ai-assistant-experimental' | string | undefined;
        fromCache?: boolean;
        functions?: Array<object>;
        model?: AiModelTypeProp;
    };
};
type FunctionCallProps = {
    name?: string;
    arguments?: string;
};
/**
 * SuggestionsEventSource is a wrapper around EvenTarget that emits
 * a 'chunk' event for each chunk of data received, and a 'done' event
 * when the stream is closed.
 * It also emits a 'suggestion' event with the full suggestion received so far
 *
 * @returns {EventSource} The event source
 * @fires SuggestionsEventSource#suggestion                - The full suggestion has been received so far
 * @fires SuggestionsEventSource#message                   - A message has been received
 * @fires SuggestionsEventSource#chunk                     - A chunk of data has been received
 * @fires SuggestionsEventSource#done                      - The stream has been closed. No more data will be received
 * @fires SuggestionsEventSource#error                     - An error has occurred
 * @fires SuggestionsEventSource#error_network             - The EventSource connection to the server returned some error
 * @fires SuggestionsEventSource#error_context_too_large   - The server returned a 413 error
 * @fires SuggestionsEventSource#error_moderation          - The server returned a 422 error
 * @fires SuggestionsEventSource#error_quota_exceeded      - The server returned a 429 error
 * @fires SuggestionsEventSource#error_service_unavailable - The server returned a 503 error
 * @fires SuggestionsEventSource#error_unclear_prompt      - The server returned a message starting with JETPACK_AI_ERROR
 */
export default class SuggestionsEventSource extends EventTarget {
    fullMessage: string;
    fullFunctionCall: FunctionCallProps;
    isPromptClear: boolean;
    controller: AbortController;
    errorUnclearPromptTriggered: boolean;
    constructor(data: SuggestionsEventSourceConstructorArgs);
    initEventSource({ url, question, token, options, }: SuggestionsEventSourceConstructorArgs): Promise<void>;
    checkForUnclearPrompt(): void;
    close(): void;
    processEvent(e: EventSourceMessage): void;
    processConnectionError(response: any): void;
    processErrorEvent(e: any): void;
}
export {};
