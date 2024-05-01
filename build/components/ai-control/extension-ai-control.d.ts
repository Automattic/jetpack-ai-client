import React from 'react';
import './style.scss';
/**
 * Types
 */
import type { RequestingStateProp } from '../../types.js';
import type { ReactElement } from 'react';
type ExtensionAIControlProps = {
    disabled?: boolean;
    value: string;
    placeholder?: string;
    showButtonLabels?: boolean;
    isTransparent?: boolean;
    state?: RequestingStateProp;
    showGuideLine?: boolean;
    error?: string;
    requestsRemaining?: number;
    showUpgradeMessage?: boolean;
    wrapperRef?: React.MutableRefObject<HTMLDivElement | null>;
    onChange?: (newValue: string) => void;
    onSend?: (currentValue: string) => void;
    onStop?: () => void;
    onClose?: () => void;
    onUndo?: () => void;
    onUpgrade?: () => void;
};
/**
 * ExtensionAIControl component. Used by the AI Assistant inline extensions, adding logic and components to the base AIControl component.
 *
 * @param {ExtensionAIControlProps} props  - Component props
 * @param {React.MutableRefObject} ref     - Ref to the component
 * @returns {ReactElement}                 Rendered component
 */
export declare function ExtensionAIControl({ disabled, value, placeholder, showButtonLabels, isTransparent, state, showGuideLine, error, requestsRemaining, showUpgradeMessage, wrapperRef, onChange, onSend, onStop, onClose, onUndo, onUpgrade, }: ExtensionAIControlProps, ref: React.MutableRefObject<HTMLInputElement>): ReactElement;
declare const _default: React.ForwardRefExoticComponent<ExtensionAIControlProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
