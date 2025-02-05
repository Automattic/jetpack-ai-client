import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { useAnalytics } from '@automattic/jetpack-shared-extension-utils';
import { Button } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, warning } from '@wordpress/icons';
/**
 * Internal dependencies
 */
import { EVENT_PLACEMENT_UPGRADE_PROMPT, EVENT_UPGRADE } from '../constants.js';
import { useCheckout } from '../hooks/use-checkout.js';
import useLogoGenerator from '../hooks/use-logo-generator.js';
import './upgrade-nudge.scss';
export const UpgradeNudge = () => {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const buttonText = __('Upgrade', 'jetpack-ai-client');
    const upgradeMessage = createInterpolateElement(__('Not enough requests left to generate a logo. <strong>Upgrade now to increase it.</strong>', 'jetpack-ai-client'), {
        strong: _jsx("strong", {}),
    });
    const { nextTierCheckoutURL: checkoutUrl } = useCheckout();
    const { context } = useLogoGenerator();
    const handleUpgradeClick = () => {
        recordTracksEvent(EVENT_UPGRADE, { context, placement: EVENT_PLACEMENT_UPGRADE_PROMPT });
    };
    return (_jsx("div", { className: "jetpack-upgrade-plan-banner", children: _jsxs("div", { className: "jetpack-upgrade-plan-banner__wrapper", children: [_jsxs("div", { children: [_jsx(Icon, { className: "jetpack-upgrade-plan-banner__icon", icon: warning }), _jsx("span", { className: "jetpack-upgrade-plan-banner__banner-description", children: upgradeMessage })] }), _jsx(Button, { href: checkoutUrl, target: "_blank", className: "is-primary", onClick: handleUpgradeClick, children: buttonText })] }) }));
};
