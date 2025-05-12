/**
 * Types & constants
 */
import type { AskQuestionOptionsArgProps } from '../../ask-question/index.ts';
import type SuggestionsEventSource from '../../suggestions-event-source/index.ts';
import type { PromptProp, SuggestionErrorCode, RequestingStateProp, AiModelTypeProp } from '../../types.ts';
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
    initialRequestingState?: RequestingStateProp;
    onSuggestion?: (suggestion: string) => void;
    onDone?: (content: string, skipRequestCount?: boolean, modelUsed?: AiModelTypeProp) => void;
    onStop?: () => void;
    onError?: (error: RequestingErrorProps) => void;
    onAllErrors?: (error: RequestingErrorProps, skipRequestCount?: boolean) => void;
};
type useAiSuggestionsProps = {
    suggestion: string;
    model: AiModelTypeProp;
    error: RequestingErrorProps | undefined;
    requestingState: RequestingStateProp;
    eventSource: SuggestionsEventSource | undefined;
    request: (prompt: PromptProp, options?: AskQuestionOptionsArgProps) => Promise<void>;
    reset: () => void;
    stopSuggestion: () => void;
    handleErrorQuotaExceededError: () => void;
};
/**
 * Get the error data for a given error code.
 *
 * @param {SuggestionErrorCode} errorCode - The error code.
 * @return {RequestingErrorProps}          The error data.
 */
export declare function getErrorData(errorCode: SuggestionErrorCode): RequestingErrorProps;
/**
 * Remove the llama artifact from a suggestion.
 *
 * @param {string} suggestion - The suggestion.
 * @return {string}            The suggestion without the llama artifact.
 */
export declare function removeLlamaArtifact(suggestion: string): string;
/**
 * React custom hook to get suggestions from AI,
 * by hitting the query endpoint.
 *
 * @param {useAiSuggestionsOptions} options - The options for the hook.
 * @return {useAiSuggestionsProps}           The props for the hook.
 */
export default function useAiSuggestions({ prompt, autoRequest, askQuestionOptions, initialRequestingState, onSuggestion, onDone, onStop, onError, onAllErrors, }?: useAiSuggestionsOptions): useAiSuggestionsProps;
export {};
