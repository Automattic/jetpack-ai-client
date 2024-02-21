import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { ExternalLink, Button } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Icon, warning, info, cancelCircleFilled as error, check as success, } from '@wordpress/icons';
import './style.scss';
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
    [MESSAGE_SEVERITY_WARNING]: warning,
    [MESSAGE_SEVERITY_ERROR]: error,
    [MESSAGE_SEVERITY_SUCCESS]: success,
    [MESSAGE_SEVERITY_INFO]: info,
};
/**
 * React component to render a block message.
 *
 * @param {MessageProps} props - Component props.
 * @returns {React.ReactElement }    Banner component.
 */
export default function Message({ severity = null, icon = null, children, }) {
    return (_jsxs("div", { className: "jetpack-ai-assistant__message", children: [(severity || icon) && _jsx(Icon, { icon: messageIconsMap[severity] || icon }), _jsx("div", { className: "jetpack-ai-assistant__message-content", children: children })] }));
}
/**
 * React component to render a guideline message.
 *
 * @returns {React.ReactElement } - Message component.
 */
export function GuidelineMessage() {
    return (_jsx(Message, { severity: MESSAGE_SEVERITY_INFO, children: createInterpolateElement(__('AI-generated content could be inaccurate or biased. <link>Learn more</link>', 'jetpack-ai-client'), {
            link: _jsx(ExternalLink, { href: "https://automattic.com/ai-guidelines" }),
        }) }));
}
/**
 * React component to render a upgrade message.
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @returns {React.ReactElement } - Message component.
 */
export function UpgradeMessage({ requestsRemaining, onUpgradeClick, }) {
    return (_jsx(Message, { severity: MESSAGE_SEVERITY_INFO, children: createInterpolateElement(sprintf(
        // translators: %1$d: number of requests remaining
        __('You have %1$d free requests remaining. <link>Upgrade</link> and avoid interruptions', 'jetpack-ai-client'), requestsRemaining), {
            link: _jsx(Button, { variant: "link", onClick: onUpgradeClick }),
        }) }));
}
