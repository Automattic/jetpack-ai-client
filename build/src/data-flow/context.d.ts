/**
 * Types & Constants
 */
import SuggestionsEventSource from '../suggestions-event-source/index.ts';
import type { AskQuestionOptionsArgProps } from '../ask-question/index.ts';
import type { RequestingErrorProps } from '../hooks/use-ai-suggestions/index.ts';
import type { PromptProp, RequestingStateProp } from '../types.ts';
import type { ReactElement } from 'react';
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
    children: ReactElement;
};
/**
 * AI Data Context
 *
 * @return {AiDataContextProps} Context.
 */
export declare const AiDataContext: import("react").Context<object | AiDataContextProps>;
/**
 * AI Data Context Provider
 *
 * @param {AiDataContextProviderProps} props - Component props.
 * @return {ReactElement}                           Context provider.
 * @example
 * <AiDataContextProvider value={ value }>
 * 	{ children }
 * </AiDataContextProvider>
 */
export declare const AiDataContextProvider: ({ value, children, }: AiDataContextProviderProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
