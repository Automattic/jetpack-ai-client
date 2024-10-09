import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External Dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { useMemo } from '@wordpress/element';
/**
 * Internal Dependencies
 */
import useAiSuggestions from '../hooks/use-ai-suggestions/index.js';
import { AiDataContextProvider } from './index.js';
/**
 * High Order Component that provides the
 * AI Assistant Data context to the wrapped component.
 *
 * @param {React.ReactElement} WrappedComponent - component to wrap.
 * @return {React.ReactElement} Wrapped component, with the AI Assistant Data context.
 */
const withAiDataProvider = createHigherOrderComponent((WrappedComponent) => {
    return props => {
        // Connect with the AI Assistant communication layer.
        const { suggestion, error: requestingError, requestingState, request: requestSuggestion, stopSuggestion, eventSource, } = useAiSuggestions();
        // Build the context value to pass to the ai assistant data provider.
        const dataContextValue = useMemo(() => ({
            suggestion,
            requestingError,
            requestingState,
            eventSource,
            requestSuggestion,
            stopSuggestion,
        }), [
            suggestion,
            requestingError,
            requestingState,
            eventSource,
            requestSuggestion,
            stopSuggestion,
        ]);
        return (_jsx(AiDataContextProvider, { value: dataContextValue, children: _jsx(WrappedComponent, { ...props }) }));
    };
}, 'withAiDataProvider');
export default withAiDataProvider;
