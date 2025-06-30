import type { ComponentType } from 'react';
/**
 * High Order Component that provides the
 * AI Assistant Data context to the wrapped component.
 *
 * @param {ReactElement} WrappedComponent - component to wrap.
 * @return {ReactElement} Wrapped component, with the AI Assistant Data context.
 */
declare const withAiDataProvider: (Inner: ComponentType) => (props: any) => import("react/jsx-runtime").JSX.Element;
export default withAiDataProvider;
