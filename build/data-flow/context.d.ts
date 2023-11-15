import React from 'react';
/**
 * Types & Constants
 */
import SuggestionsEventSource from '../suggestions-event-source';
import type { AskQuestionOptionsArgProps } from '../ask-question';
import type { RequestingErrorProps } from '../hooks/use-ai-suggestions';
import type { PromptProp } from '../types';
import type { RequestingStateProp } from '../types';
export type AiDataContextProps = {
    suggestion: string;
    requestingError: RequestingErrorProps;
    requestingState: RequestingStateProp;
    requestSuggestion: (prompt: PromptProp, options?: AskQuestionOptionsArgProps) => void;
    stopSuggestion: () => void;
    eventSource: SuggestionsEventSource | null;
};
type AiDataContextProviderProps = {
    value: AiDataContextProps;
    children: React.ReactElement;
};
/**
 * AI Data Context
 *
 * @returns {AiDataContextProps} Context.
 */
export declare const AiDataContext: React.Context<AiDataContextProps>;
/**
 * AI Data Context Provider
 *
 * @param {AiDataContextProviderProps} props - Component props.
 * @returns {React.ReactElement}                           Context provider.
 * @example
 * <AiDataContextProvider value={ value }>
 * 	{ children }
 * </AiDataContextProvider>
 */
export declare const AiDataContextProvider: ({ value, children, }: AiDataContextProviderProps) => React.ReactElement;
export {};
