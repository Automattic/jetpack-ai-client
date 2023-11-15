import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { PlainText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useKeyboardShortcut } from '@wordpress/compose';
import { forwardRef, useImperativeHandle, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, closeSmall, check, arrowUp } from '@wordpress/icons';
import classNames from 'classnames';
/**
 * Internal dependencies
 */
import './style.scss';
import AiStatusIndicator from '../ai-status-indicator';
import { GuidelineMessage } from './message';
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
/**
 * AI Control component.
 *
 * @param {AIControlProps} props       - Component props.
 * @param {React.MutableRefObject} ref - Ref to the component.
 * @returns {React.ReactElement}         Rendered component.
 */
export function AIControl({ disabled = false, value = '', placeholder = '', showAccept = false, acceptLabel = __('Accept', 'jetpack-ai-client'), showButtonLabels = true, isTransparent = false, state = 'init', showClearButton = true, showGuideLine = false, onChange = noop, onSend = noop, onStop = noop, onAccept = noop, }, ref // eslint-disable-line @typescript-eslint/ban-types
) {
    const promptUserInputRef = useRef(null);
    const loading = state === 'requesting' || state === 'suggesting';
    // Pass the ref to forwardRef.
    useImperativeHandle(ref, () => promptUserInputRef.current);
    useKeyboardShortcut('mod+enter', () => {
        if (showAccept) {
            onAccept?.();
        }
    }, {
        target: promptUserInputRef,
    });
    useKeyboardShortcut('enter', e => {
        e.preventDefault();
        onSend?.(value);
    }, {
        target: promptUserInputRef,
    });
    const actionButtonClasses = classNames('jetpack-components-ai-control__controls-prompt_button', {
        'has-label': showButtonLabels,
    });
    return (_jsxs("div", { className: "jetpack-components-ai-control__container", children: [_jsxs("div", { className: classNames('jetpack-components-ai-control__wrapper', {
                    'is-transparent': isTransparent,
                }), children: [_jsx(AiStatusIndicator, { state: state }), _jsx("div", { className: "jetpack-components-ai-control__input-wrapper", children: _jsx(PlainText, { value: value, onChange: onChange, placeholder: placeholder, className: "jetpack-components-ai-control__input", disabled: loading || disabled, ref: promptUserInputRef }) }), value?.length > 0 && showClearButton && (_jsx(Button, { icon: closeSmall, className: "jetpack-components-ai-control__clear", onClick: () => onChange('') })), _jsx("div", { className: "jetpack-components-ai-control__controls-prompt_button_wrapper", children: !loading ? (_jsxs(Button, { className: actionButtonClasses, onClick: () => onSend?.(value), isSmall: true, disabled: !value?.length || disabled, label: __('Send request', 'jetpack-ai-client'), children: [_jsx(Icon, { icon: arrowUp }), showButtonLabels && __('Send', 'jetpack-ai-client')] })) : (_jsxs(Button, { className: actionButtonClasses, onClick: onStop, isSmall: true, label: __('Stop request', 'jetpack-ai-client'), children: [_jsx(Icon, { icon: closeSmall }), showButtonLabels && __('Stop (ESC)', 'jetpack-ai-client')] })) }), showAccept && (_jsx("div", { className: "jetpack-components-ai-control__controls-prompt_button_wrapper", children: _jsxs(Button, { className: actionButtonClasses, onClick: onAccept, isSmall: true, label: acceptLabel, children: [_jsx(Icon, { icon: check }), showButtonLabels && acceptLabel] }) }))] }), showGuideLine && _jsx(GuidelineMessage, {})] }));
}
export default forwardRef(AIControl);
