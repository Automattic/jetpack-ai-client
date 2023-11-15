import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { createContext } from '@wordpress/element';
/**
 * AI Data Context
 *
 * @returns {AiDataContextProps} Context.
 */
export const AiDataContext = createContext({});
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
export const AiDataContextProvider = ({ value, children, }) => (_jsx(AiDataContext.Provider, { value: value, children: children }));
