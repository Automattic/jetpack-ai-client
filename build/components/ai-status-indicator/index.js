import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Spinner } from '@wordpress/components';
import classNames from 'classnames';
import './style.scss';
/**
 * AiStatusIndicator component.
 *
 * @param {AiStatusIndicatorProps} props - component props.
 * @returns {React.ReactElement} - rendered component.
 */
export default function AiStatusIndicator({ state }) {
    return (_jsx("div", { className: classNames('jetpack-ai-status-indicator__icon-wrapper', {
            [`is-${state}`]: true,
        }), children: _jsx(Spinner, {}) }));
}
