import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { PlainText } from '@wordpress/block-editor';
import classNames from 'classnames';
/**
 * Internal dependencies
 */
import AiStatusIndicator from '../ai-status-indicator/index.js';
import './style.scss';
/**
 * Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.
 *
 * @param {AIControlProps} props - Component props
 * @returns {ReactElement}       Rendered component
 */
export default function AIControl({ className, disabled = false, value = '', placeholder = '', isTransparent = false, state = 'init', onChange, banner = null, error = null, actions = null, message = null, promptUserInputRef = null, wrapperRef = null, }) {
    return (_jsxs("div", { className: classNames('jetpack-components-ai-control__container-wrapper', className), ref: wrapperRef, children: [error, _jsxs("div", { className: "jetpack-components-ai-control__container", children: [banner, _jsxs("div", { className: classNames('jetpack-components-ai-control__wrapper', {
                            'is-transparent': isTransparent,
                        }), children: [_jsx(AiStatusIndicator, { state: state }), _jsx("div", { className: "jetpack-components-ai-control__input-wrapper", children: _jsx(PlainText, { value: value, onChange: onChange, placeholder: placeholder, className: "jetpack-components-ai-control__input", disabled: disabled, ref: promptUserInputRef }) }), actions] }), message] })] }));
}
