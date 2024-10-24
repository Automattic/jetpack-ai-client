import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { ExternalLink, Button } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Icon, check, arrowRight } from '@wordpress/icons';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import './style.scss';
import errorExclamation from '../../icons/error-exclamation.js';
import { ERROR_QUOTA_EXCEEDED } from '../../types.js';
export const MESSAGE_SEVERITY_WARNING = 'warning';
export const MESSAGE_SEVERITY_ERROR = 'error';
export const MESSAGE_SEVERITY_SUCCESS = 'success';
export const MESSAGE_SEVERITY_INFO = 'info';
const messageSeverityTypes = [
    MESSAGE_SEVERITY_WARNING,
    MESSAGE_SEVERITY_ERROR,
    MESSAGE_SEVERITY_SUCCESS,
    MESSAGE_SEVERITY_INFO,
];
const messageIconsMap = {
    [MESSAGE_SEVERITY_INFO]: null,
    [MESSAGE_SEVERITY_WARNING]: null,
    [MESSAGE_SEVERITY_ERROR]: errorExclamation,
    [MESSAGE_SEVERITY_SUCCESS]: check,
};
/**
 * React component to render a block message.
 *
 * @param {MessageProps} props - Component props.
 * @return {React.ReactElement }    Banner component.
 */
export default function Message({ severity = MESSAGE_SEVERITY_INFO, icon = null, showSidebarIcon = false, onSidebarIconClick = () => { }, children, }) {
    return (_jsxs("div", { className: clsx('jetpack-ai-assistant__message', `jetpack-ai-assistant__message-severity-${severity}`), children: [(messageIconsMap[severity] || icon) && (_jsx(Icon, { icon: messageIconsMap[severity] || icon })), _jsx("div", { className: "jetpack-ai-assistant__message-content", children: children }), showSidebarIcon && (_jsx(Button, { className: "jetpack-ai-assistant__message-sidebar", onClick: onSidebarIconClick, children: _jsx(Icon, { size: 20, icon: arrowRight }) }))] }));
}
/**
 * React component to render a guideline message.
 *
 * @return {React.ReactElement } - Message component.
 */
export function GuidelineMessage() {
    return (_jsxs(Message, { children: [_jsx("span", { children: __('AI-generated content could be inaccurate or biased.', 'jetpack-ai-client') }), _jsx(ExternalLink, { href: "https://automattic.com/ai-guidelines", children: __('Learn more', 'jetpack-ai-client') })] }));
}
/**
 * React component to render a fair usage limit message.
 *
 * @return {React.ReactElement } - Message component.
 */
export function FairUsageLimitMessage() {
    const message = __("You've reached this month's request limit, per our <link>fair usage policy</link>", 'jetpack-ai-client');
    const element = createInterpolateElement(message, {
        link: (_jsx(ExternalLink, { href: "https://jetpack.com/redirect/?source=ai-assistant-fair-usage-policy" })),
    });
    return _jsx(Message, { severity: MESSAGE_SEVERITY_WARNING, children: element });
}
/**
 * React component to render an upgrade message for free tier users
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @return {React.ReactElement } - Message component.
 */
export function UpgradeMessage({ requestsRemaining, severity, onUpgradeClick, upgradeUrl, }) {
    let messageSeverity = severity;
    if (messageSeverity == null) {
        messageSeverity = requestsRemaining > 0 ? MESSAGE_SEVERITY_INFO : MESSAGE_SEVERITY_WARNING;
    }
    return (_jsxs(Message, { severity: messageSeverity, children: [_jsx("span", { children: sprintf(
                // translators: %1$d: number of requests remaining
                __('You have %1$d requests remaining.', 'jetpack-ai-client'), requestsRemaining) }), _jsx(Button, { variant: "link", onClick: onUpgradeClick, href: upgradeUrl, target: upgradeUrl ? '_blank' : null, children: __('Upgrade now', 'jetpack-ai-client') })] }));
}
/**
 * React component to render an error message
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @return {React.ReactElement } - Message component.
 */
export function ErrorMessage({ error, code, onTryAgainClick, onUpgradeClick, upgradeUrl, }) {
    const errorMessage = error || __('Something went wrong', 'jetpack-ai-client');
    return (_jsxs(Message, { severity: MESSAGE_SEVERITY_ERROR, children: [_jsx("span", { children: sprintf(
                // translators: %1$d: A dynamic error message
                __('Error: %1$s', 'jetpack-ai-client'), errorMessage) }), code === ERROR_QUOTA_EXCEEDED ? (_jsx(Button, { variant: "link", onClick: onUpgradeClick, href: upgradeUrl, target: upgradeUrl ? '_blank' : null, children: __('Upgrade now', 'jetpack-ai-client') })) : (_jsx(Button, { variant: "link", onClick: onTryAgainClick, children: __('Try again', 'jetpack-ai-client') }))] }));
}
