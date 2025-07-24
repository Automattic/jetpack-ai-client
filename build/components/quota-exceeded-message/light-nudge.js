import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';
export const LightNudge = ({ title, description, buttonText = null, checkoutUrl = null, goToCheckoutPage = null, isRedirecting = false, showButton = true, target = '_top', }) => {
    const redirectingText = __('Redirecting…', 'jetpack-ai-client');
    return (_jsx("div", { className: "jetpack-upgrade-plan-banner-light", children: _jsx(Notice, { status: "error", isDismissible: false, children: _jsxs("p", { children: [title && _jsx("strong", { children: title }), description, ' ', showButton && (_jsx(Button, { href: isRedirecting ? null : checkoutUrl, onClick: goToCheckoutPage, variant: "link", target: target, children: _jsx("span", { children: isRedirecting ? redirectingText : buttonText }) }))] }) }) }));
};
