import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { useAnalytics } from '@automattic/jetpack-shared-extension-utils';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import getRedirectUrl from '../../../../components/tools/jp-redirect/index.js';
import { EVENT_PLACEMENT_FREE_USER_SCREEN, EVENT_UPGRADE } from '../constants.js';
import useLogoGenerator from '../hooks/use-logo-generator.js';
export const UpgradeScreen = ({ onCancel, upgradeURL, reason }) => {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const upgradeMessageFeature = __('Upgrade your Jetpack AI for access to logo generation. This upgrade will also increase the amount of monthly requests you can use in for all AI-powered features.', 'jetpack-ai-client');
    const upgradeMessageRequests = __('Not enough requests left to generate a logo. Upgrade your Jetpack AI to increase the amount of requests you can use in all AI-powered features.', 'jetpack-ai-client');
    const upgradeInfoUrl = getRedirectUrl('ai-logo-generator-fair-usage-policy', {
        anchor: 'usage-limitations-and-upgrades',
    });
    const { context } = useLogoGenerator();
    const handleUpgradeClick = () => {
        recordTracksEvent(EVENT_UPGRADE, { context, placement: EVENT_PLACEMENT_FREE_USER_SCREEN });
        onCancel();
    };
    return (_jsxs("div", { className: "jetpack-ai-logo-generator-modal__notice-message-wrapper", children: [_jsxs("div", { className: "jetpack-ai-logo-generator-modal__notice-message", children: [_jsx("span", { className: "jetpack-ai-logo-generator-modal__loading-message", children: reason === 'feature' ? upgradeMessageFeature : upgradeMessageRequests }), "\u00A0", _jsx(Button, { variant: "link", href: upgradeInfoUrl, target: "_blank", children: __('Learn more about Jetpack AI.', 'jetpack-ai-client') })] }), _jsxs("div", { className: "jetpack-ai-logo-generator-modal__notice-actions", children: [_jsx(Button, { variant: "tertiary", onClick: onCancel, children: __('Cancel', 'jetpack-ai-client') }), _jsx(Button, { variant: "primary", href: upgradeURL, target: "_blank", onClick: handleUpgradeClick, children: __('Upgrade', 'jetpack-ai-client') })] })] }));
};
