import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export const FeatureFetchFailureScreen = ({ onCancel, onRetry }) => {
    const errorMessage = __('We are sorry. There was an error loading your Jetpack AI plan data. Please, try again.', 'jetpack-ai-client');
    const errorMessageWithoutRetry = __('We are sorry. There was an error loading your Jetpack AI plan data. Please, reload the page and try again.', 'jetpack-ai-client');
    return (_jsxs("div", { className: "jetpack-ai-logo-generator-modal__notice-message-wrapper", children: [_jsx("div", { className: "jetpack-ai-logo-generator-modal__notice-message", children: _jsx("span", { className: "jetpack-ai-logo-generator-modal__loading-message", children: onRetry ? errorMessage : errorMessageWithoutRetry }) }), _jsxs("div", { className: "jetpack-ai-logo-generator-modal__notice-actions", children: [_jsx(Button, { variant: "tertiary", onClick: onCancel, children: __('Cancel', 'jetpack-ai-client') }), onRetry && (_jsx(Button, { variant: "primary", onClick: onRetry, children: __('Try again', 'jetpack-ai-client') }))] })] }));
};
