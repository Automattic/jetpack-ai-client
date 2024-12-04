import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, info } from '@wordpress/icons';
/**
 * Internal dependencies
 */
import './style.scss';
/**
 * AiModalFooter component.
 *
 * @param {AiModalFooterProps} props - component props.
 * @return {React.ReactElement} - rendered component.
 */
export default function AiModalFooter({ onGuidelinesClick, onFeedbackClick, }) {
    const handleGuidelinesClick = useCallback(() => {
        onGuidelinesClick?.();
    }, [onGuidelinesClick]);
    const handleFeedbackClick = useCallback(() => {
        onFeedbackClick?.();
    }, [onFeedbackClick]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ai-image-modal__footer-disclaimer", children: [_jsx(Icon, { icon: info }), _jsx("span", { children: __('Generated images could be inaccurate, biased or include text.', 'jetpack-ai-client') }), _jsx(Button, { variant: "link", className: "ai-image-modal__guidelines-button", href: "https://jetpack.com/redirect/?source=ai-guidelines", target: "_blank", onClick: handleGuidelinesClick, children: _jsxs("span", { children: [__('Guidelines', 'jetpack-ai-client'), " \u2197"] }) })] }), _jsx(Button, { variant: "link", className: "ai-image-modal__feedback-button", href: "https://jetpack.com/redirect/?source=jetpack-ai-feedback", target: "_blank", onClick: handleFeedbackClick, children: _jsxs("span", { children: [__('Give feedback', 'jetpack-ai-client'), " \u2197"] }) })] }));
}
