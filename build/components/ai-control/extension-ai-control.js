import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { useKeyboardShortcut } from '@wordpress/compose';
import { useImperativeHandle, useRef, useEffect, useCallback, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, closeSmall, arrowUp, undo } from '@wordpress/icons';
import { forwardRef } from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../message/index.js';
import AIControl from './ai-control.js';
import './style.scss';
/**
 * ExtensionAIControl component. Used by the AI Assistant inline extensions, adding logic and components to the base AIControl component.
 *
 * @param {ExtensionAIControlProps} props  - Component props
 * @param {React.MutableRefObject} ref     - Ref to the component
 * @returns {ReactElement}                 Rendered component
 */
export function ExtensionAIControl({ className, disabled = false, value = '', placeholder = '', showButtonLabels = true, isTransparent = false, state = 'init', showGuideLine = false, error, requestsRemaining, showUpgradeMessage = false, wrapperRef, onChange, onSend, onStop, onClose, onUndo, onUpgrade, onTryAgain, }, ref) {
    const loading = state === 'requesting' || state === 'suggesting';
    const [editRequest, setEditRequest] = useState(false);
    const [lastValue, setLastValue] = useState(value || null);
    const promptUserInputRef = useRef(null);
    // Pass the ref to forwardRef.
    useImperativeHandle(ref, () => promptUserInputRef.current);
    useEffect(() => {
        if (editRequest) {
            promptUserInputRef?.current?.focus();
        }
    }, [editRequest]);
    const sendHandler = useCallback(() => {
        setLastValue(value);
        setEditRequest(false);
        onSend?.(value);
    }, [onSend, value]);
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
    }, [onChange, lastValue, state]);
    const stopHandler = useCallback(() => {
        onStop?.();
    }, [onStop]);
    const closeHandler = useCallback(() => {
        onClose?.();
    }, [onClose]);
    const undoHandler = useCallback(() => {
        onUndo?.();
    }, [onUndo]);
    const upgradeHandler = useCallback((event) => {
        onUpgrade?.(event);
    }, [onUpgrade]);
    const tryAgainHandler = useCallback(() => {
        onTryAgain?.();
    }, [onTryAgain]);
    useKeyboardShortcut('enter', e => {
        e.preventDefault();
        sendHandler();
    }, {
        target: promptUserInputRef,
    });
    const actions = (_jsx(_Fragment, { children: loading ? (_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: stopHandler, variant: "secondary", label: __('Stop request', 'jetpack-ai-client'), children: showButtonLabels ? __('Stop', 'jetpack-ai-client') : _jsx(Icon, { icon: closeSmall }) })) : (_jsxs(_Fragment, { children: [value?.length > 0 && (_jsx("div", { className: "jetpack-components-ai-control__controls-prompt_button_wrapper", children: _jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", onClick: sendHandler, variant: "primary", disabled: !value?.length || disabled, label: __('Send request', 'jetpack-ai-client'), children: showButtonLabels ? (__('Generate', 'jetpack-ai-client')) : (_jsx(Icon, { icon: arrowUp })) }) })), value?.length <= 0 && state === 'done' && (_jsx("div", { className: "jetpack-components-ai-control__controls-prompt_button_wrapper", children: _jsxs(ButtonGroup, { children: [_jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", label: __('Undo', 'jetpack-ai-client'), onClick: undoHandler, tooltipPosition: "top", children: _jsx(Icon, { icon: undo }) }), _jsx(Button, { className: "jetpack-components-ai-control__controls-prompt_button", label: __('Close', 'jetpack-ai-client'), onClick: closeHandler, variant: "tertiary", children: __('Close', 'jetpack-ai-client') })] }) }))] })) }));
    let message = null;
    if (error?.message) {
        message = (_jsx(ErrorMessage, { error: error.message, code: error.code, onTryAgainClick: tryAgainHandler, onUpgradeClick: upgradeHandler }));
    }
    else if (showUpgradeMessage) {
        message = (_jsx(UpgradeMessage, { requestsRemaining: requestsRemaining, onUpgradeClick: upgradeHandler }));
    }
    else if (showGuideLine) {
        message = _jsx(GuidelineMessage, {});
    }
    return (_jsx(AIControl, { className: className, disabled: disabled || loading, value: value, placeholder: placeholder, isTransparent: isTransparent, state: state, onChange: changeHandler, actions: actions, message: message, promptUserInputRef: promptUserInputRef, wrapperRef: wrapperRef }));
}
export default forwardRef(ExtensionAIControl);
