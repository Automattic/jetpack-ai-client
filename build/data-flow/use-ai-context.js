/**
 * External dependencies
 */
import { useCallback, useContext, useEffect } from 'react';
/**
 * Internal dependencies
 */
import { ERROR_RESPONSE } from '../types.js';
import { AiDataContext } from './index.js';
/**
 * useAiContext hook to provide access to
 * the AI Assistant data (from context),
 * and to subscribe to the request events (onDone, onSuggestion).
 *
 * @param {UseAiContextOptions} options - the hook options.
 * @return {AiDataContextProps}          the AI Assistant data context.
 */
export default function useAiContext({ onDone, onSuggestion, onError, } = {}) {
    const context = useContext(AiDataContext);
    const { eventSource } = context;
    const done = useCallback((event) => onDone?.(event?.detail), [onDone]);
    const suggestion = useCallback((event) => onSuggestion?.(event?.detail), [onSuggestion]);
    const error = useCallback((event) => {
        onError?.(event?.detail);
    }, []);
    useEffect(() => {
        if (!eventSource) {
            return;
        }
        if (onDone) {
            eventSource.addEventListener('done', done);
        }
        if (onSuggestion) {
            eventSource.addEventListener('suggestion', suggestion);
        }
        if (onError) {
            eventSource.addEventListener(ERROR_RESPONSE, error);
        }
        return () => {
            eventSource.removeEventListener('done', done);
            eventSource.removeEventListener('suggestion', suggestion);
            eventSource.removeEventListener(ERROR_RESPONSE, error);
        };
    }, [eventSource]);
    return context;
}
