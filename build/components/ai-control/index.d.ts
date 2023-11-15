import React from 'react';
/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Types
 */
import type { RequestingStateProp } from '../../types';
/**
 * AI Control component.
 *
 * @param {AIControlProps} props       - Component props.
 * @param {React.MutableRefObject} ref - Ref to the component.
 * @returns {React.ReactElement}         Rendered component.
 */
export declare function AIControl({ disabled, value, placeholder, showAccept, acceptLabel, showButtonLabels, isTransparent, state, showClearButton, showGuideLine, onChange, onSend, onStop, onAccept, }: {
    disabled?: boolean;
    value: string;
    placeholder?: string;
    showAccept?: boolean;
    acceptLabel?: string;
    showButtonLabels?: boolean;
    isTransparent?: boolean;
    state?: RequestingStateProp;
    showClearButton?: boolean;
    showGuideLine?: boolean;
    onChange?: (newValue: string) => void;
    onSend?: (currentValue: string) => void;
    onStop?: () => void;
    onAccept?: () => void;
}, ref: React.MutableRefObject<null>): React.ReactElement;
declare const _default: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    value: string;
    placeholder?: string;
    showAccept?: boolean;
    acceptLabel?: string;
    showButtonLabels?: boolean;
    isTransparent?: boolean;
    state?: "init" | "requesting" | "suggesting" | "done" | "error";
    showClearButton?: boolean;
    showGuideLine?: boolean;
    onChange?: (newValue: string) => void;
    onSend?: (currentValue: string) => void;
    onStop?: () => void;
    onAccept?: () => void;
} & React.RefAttributes<null>>;
export default _default;
