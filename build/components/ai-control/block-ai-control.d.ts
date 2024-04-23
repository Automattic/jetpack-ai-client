import React from 'react';
import './style.scss';
/**
 * Types
 */
import type { RequestingStateProp } from '../../types.js';
import type { ReactElement } from 'react';
type BlockAIControlProps = {
    disabled?: boolean;
    value: string;
    placeholder?: string;
    showAccept?: boolean;
    acceptLabel?: string;
    showButtonLabels?: boolean;
    isTransparent?: boolean;
    state?: RequestingStateProp;
    showGuideLine?: boolean;
    customFooter?: ReactElement;
    onChange?: (newValue: string) => void;
    onSend?: (currentValue: string) => void;
    onStop?: () => void;
    onAccept?: () => void;
    onDiscard?: () => void;
    showRemove?: boolean;
    banner?: ReactElement;
    error?: ReactElement;
};
/**
 * BlockAIControl component. Used by the AI Assistant block, adding logic and components to the base AIControl component.
 *
 * @param {BlockAIControlProps} props  - Component props
 * @param {React.MutableRefObject} ref - Ref to the component
 * @returns {ReactElement}             Rendered component
 */
export declare function BlockAIControl({ disabled, value, placeholder, showAccept, acceptLabel, showButtonLabels, isTransparent, state, showGuideLine, customFooter, onChange, onSend, onStop, onAccept, onDiscard, showRemove, banner, error, }: BlockAIControlProps, ref: React.MutableRefObject<HTMLInputElement>): ReactElement;
declare const _default: React.ForwardRefExoticComponent<BlockAIControlProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
