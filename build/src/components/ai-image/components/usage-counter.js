import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createInterpolateElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import './usage-counter.scss';
/**
 * UsageCounter component
 * @param {UsageCounterProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function UsageCounter({ currentLimit, currentUsage, cost }) {
    const requestsBalance = currentLimit - currentUsage;
    const requestsNeeded = createInterpolateElement(
    // Translators: %d is the cost of one image.
    sprintf(__('Requests needed: <counter>%d</counter>', 'jetpack-ai-client'), cost), {
        counter: _jsx("span", {}),
    });
    const requestsAvailable = createInterpolateElement(sprintf(
    // Translators: %d is the current requests balance.
    __('Requests available: <counter>%d</counter>', 'jetpack-ai-client'), requestsBalance), {
        counter: requestsBalance < cost ? (_jsx("span", { className: "ai-assistant-featured-image__usage-counter-no-limit" })) : (_jsx("strong", {})),
    });
    return (_jsxs("div", { className: "ai-assistant-featured-image__usage-counter", children: [
            _jsx("span", { children: requestsNeeded }), _jsx("span", { children: requestsAvailable })
        ] }));
}
