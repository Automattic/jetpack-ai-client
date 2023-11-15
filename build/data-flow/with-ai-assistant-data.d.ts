import React from 'react';
/**
 * High Order Component that provides the
 * AI Assistant Data context to the wrapped component.
 *
 * @param {React.ReactElement} WrappedComponent - component to wrap.
 * @returns {React.ReactElement}          		  Wrapped component, with the AI Assistant Data context.
 */
declare const withAiDataProvider: (Inner: React.ComponentType<{}>) => (props: any) => import("react/jsx-runtime").JSX.Element;
export default withAiDataProvider;
