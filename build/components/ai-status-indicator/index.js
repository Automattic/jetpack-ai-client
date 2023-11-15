import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Icon } from '@wordpress/components';
import classNames from 'classnames';
/*
 * Internal dependencies
 */
import { aiAssistantIcon } from '../../icons';
import './style.scss';
/**
 * AiStatusIndicator component.
 *
 * @param {AiStatusIndicatorProps} props - component props.
 * @returns {React.ReactElement} - rendered component.
 */
export default function AiStatusIndicator({ state, size = 24, }) {
    return (_jsx("div", { className: classNames('jetpack-ai-status-indicator__icon-wrapper', {
            [`is-${state}`]: true,
        }), children: _jsx(Icon, { icon: aiAssistantIcon, size: size }) }));
}
