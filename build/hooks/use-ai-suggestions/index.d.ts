/**
 * Types & constants
 */
import type { AskQuestionOptionsArgProps } from '../../ask-question/index.js';
import type SuggestionsEventSource from '../../suggestions-event-source/index.js';
import type { PromptProp, SuggestionErrorCode } from '../../types.js';
import type { RequestingStateProp } from '../../types.js';
export type RequestingErrorProps = {
    code: SuggestionErrorCode;
    message: string;
    severity: 'info' | 'error';
};
type useAiSuggestionsOptions = {
    prompt?: PromptProp;
    autoRequest?: boolean;
    /**
     * AskQuestion options.
     */
    askQuestionOptions?: AskQuestionOptionsArgProps;
    onSuggestion?: (suggestion: string) => void;
    onDone?: (content: string) => void;
    onError?: (error: RequestingErrorProps) => void;
};
type useAiSuggestionsProps = {
    suggestion: string;
    error: RequestingErrorProps | undefined;
    requestingState: RequestingStateProp;
    eventSource: SuggestionsEventSource | undefined;
    request: (prompt: PromptProp, options?: AskQuestionOptionsArgProps) => Promise<void>;
    reset: () => void;
    stopSuggestion: () => void;
};
/**
 * Get the error data for a given error code.
 *
 * @param {SuggestionErrorCode} errorCode - The error code.
 * @returns {RequestingErrorProps}          The error data.
 */
export declare function getErrorData(errorCode: SuggestionErrorCode): RequestingErrorProps;
/**
 * React custom hook to get suggestions from AI,
 * by hitting the query endpoint.
 *
 * @param {useAiSuggestionsOptions} options - The options for the hook.
 * @returns {useAiSuggestionsProps}           The props for the hook.
 */
export default function useAiSuggestions({ prompt, autoRequest, askQuestionOptions, onSuggestion, onDone, onError, }?: useAiSuggestionsOptions): useAiSuggestionsProps;
export {};
