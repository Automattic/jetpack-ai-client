import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { PlainText } from '@wordpress/block-editor';
import { Button, ButtonGroup } from '@wordpress/components';
import { useKeyboardShortcut } from '@wordpress/compose';
import { forwardRef, useImperativeHandle, useRef, useEffect, useCallback, } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, closeSmall, check, arrowUp, trash, reusableBlock } from '@wordpress/icons';
import classNames from 'classnames';
import React from 'react';
/**
 * Internal dependencies
 */
import './style.scss';
import AiStatusIndicator from '../ai-status-indicator/index.js';
import { GuidelineMessage } from './message.js';
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
/**
 * AI Control component.
 *
 * @param {AiControlProps} props       - Component props.
 * @param {React.MutableRefObject} ref - Ref to the component.
 * @returns {React.ReactElement}         Rendered component.
 */
export function AIControl({ disabled = false, value = '', placeholder = '', showAccept = false, acceptLabel = __('Accept', 'jetpack-ai-client'), showButtonLabels = true, isTransparent = false, state = 'init', showGuideLine = false, customFooter = null, onChange = noop, onSend = noop, onStop = noop, onAccept = noop, onDiscard = null, showRemove = false, bannerComponent = null, errorComponent = null, }, ref // eslint-disable-line @typescript-eslint/ban-types
) {
    const promptUserInputRef = useRef(null);
    const loading = state === 'requesting' || state === 'suggesting';
    const [editRequest, setEditRequest] = React.useState(false);
    const [lastValue, setLastValue] = React.useState(value || null);
    useEffect(() => {
        if (editRequest) {
            promptUserInputRef?.current?.focus();
        }
        if (!editRequest && lastValue !== null && value !== lastValue) {
            onChange?.(lastValue);
        }
    }, [editRequest, lastValue, value]);
    const sendRequest = useCallback(() => {
        setLastValue(value);
        setEditRequest(false);
        onSend?.(value);
    }, [value]);
    const changeHandler = useCallback((newValue) => {
        onChange?.(newValue);
        if (state === 'init') {
            return;
        }
        if (!lastValue) {
            // here we're coming from a one-click action
            setEditRequest(newValue.length > 0);
        }
        else {
            // here we're coming from an edit action
            setEditRequest(newValue !== lastValue);
        }
    }, [lastValue, state]);
    const discardHandler = useCallback(() => {
        onDiscard?.();
    }, []);
    const cancelEdit = useCallback(() => {
        onChange(lastValue || '');
        setEditRequest(false);
    }, [lastValue]);
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
        sendRequest();
    }, {
        target: promptUserInputRef,
    });
    return (_jsxs("div", { className: "jetpack-components-ai-control__container-wrapper", children: [errorComponent, _jsxs("div", { className: "jetpack-components-ai-control__container", children: [bannerComponent, _jsxs("div", { className: classNames('jetpack-components-ai-control__wrapper', {
                            'is-transparent': isTransparent,
                        }), children: [_jsx(AiStatusIndicator, { state: state }), _jsx("div", { className: "jetpack-components-ai-control__input-wrapper", children: _jsx(PlainText, { value: value, onChange: changeHandler, placeholder: placeholder, className: "jetpack-components-ai-control__input", disabled: loading || disabled, ref: promptUserInputRef }) }), (!showAccept || editRequest) && (_jsx("div", { className: "jetpack-components-ai-control__controls-prompt_button_wrapper", children: !loading ? (_jsxs(_Fragment, { children: [editRequest && (_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: cancelEdit, variant: "secondary", label: __('Cancel', 'jetpack-ai-client'), children: showButtonLabels ? (__('Cancel', 'jetpack-ai-client')) : (_jsx(Icon, { icon: closeSmall })) })), showRemove && !editRequest && !value?.length && onDiscard && (_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: discardHandler, variant: "secondary", label: __('Cancel', 'jetpack-ai-client'), children: showButtonLabels ? (__('Cancel', 'jetpack-ai-client')) : (_jsx(Icon, { icon: closeSmall })) })), value?.length > 0 && (_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: sendRequest, variant: "primary", disabled: !value?.length || disabled, label: __('Send request', 'jetpack-ai-client'), children: showButtonLabels ? (__('Generate', 'jetpack-ai-client')) : (_jsx(Icon, { icon: arrowUp })) }))] })) : (_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: onStop, variant: "secondary", label: __('Stop request', 'jetpack-ai-client'), children: showButtonLabels ? (__('Stop', 'jetpack-ai-client')) : (_jsx(Icon, { icon: closeSmall })) })) })), showAccept && !editRequest && (_jsxs("div", { className: "jetpack-components-ai-control__controls-prompt_button_wrapper", children: [(value?.length > 0 || lastValue === null) && (_jsxs(ButtonGroup, { children: [_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", label: __('Discard', 'jetpack-ai-client'), onClick: discardHandler, tooltipPosition: "top", children: _jsx(Icon, { icon: trash }) }), _jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", label: __('Regenerate', 'jetpack-ai-client'), onClick: () => onSend?.(value), tooltipPosition: "top", disabled: !value?.length || value === null || disabled, children: _jsx(Icon, { icon: reusableBlock }) })] })), _jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: onAccept, variant: "primary", label: acceptLabel, children: showButtonLabels ? acceptLabel : _jsx(Icon, { icon: check }) })] }))] }), showGuideLine && !loading && !editRequest && (customFooter || _jsx(GuidelineMessage, {}))] })] }));
}
export default forwardRef(AIControl);
