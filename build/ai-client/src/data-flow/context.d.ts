/**
 * External dependencies
 */
import React from 'react';
/**
 * Types & Constants
 */
import SuggestionsEventSource from '../suggestions-event-source/index.js';
import type { AskQuestionOptionsArgProps } from '../ask-question/index.js';
import type { RequestingErrorProps } from '../hooks/use-ai-suggestions/index.js';
import type { PromptProp } from '../types.js';
import type { RequestingStateProp } from '../types.js';
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
 * @return {AiDataContextProps} Context.
 */
export declare const AiDataContext: React.Context<object | AiDataContextProps>;
/**
 * AI Data Context Provider
 *
 * @param {AiDataContextProviderProps} props - Component props.
 * @return {React.ReactElement}                           Context provider.
 * @example
 * <AiDataContextProvider value={ value }>
 * 	{ children }
 * </AiDataContextProvider>
 */
export declare const AiDataContextProvider: ({ value, children, }: AiDataContextProviderProps) => React.ReactElement;
export {};
