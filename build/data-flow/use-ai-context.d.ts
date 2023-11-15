/**
 * Internal dependencies
 */
import { RequestingErrorProps } from '../types';
/**
 * Types & constants
 */
import type { AiDataContextProps } from './context';
import type { AskQuestionOptionsArgProps } from '../ask-question';
export type UseAiContextOptions = {
    askQuestionOptions?: AskQuestionOptionsArgProps;
    onDone?: (content: string) => void;
    onSuggestion?: (suggestion: string) => void;
    onError?: (error: RequestingErrorProps) => void;
};
/**
 * useAiContext hook to provide access to
 * the AI Assistant data (from context),
 * and to subscribe to the request events (onDone, onSuggestion).
 *
 * @param {UseAiContextOptions} options - the hook options.
 * @returns {AiDataContextProps}          the AI Assistant data context.
 */
export default function useAiContext({ onDone, onSuggestion, onError, }?: UseAiContextOptions): AiDataContextProps;
