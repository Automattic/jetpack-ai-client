import React from 'react';
import './style.scss';
/**
 * Types
 */
import type { RequestingStateProp } from '../../types.js';
import type { ReactElement } from 'react';
type AIControlProps = {
    disabled?: boolean;
    value: string;
    placeholder?: string;
    isTransparent?: boolean;
    state?: RequestingStateProp;
    onChange?: (newValue: string) => void;
    banner?: ReactElement;
    error?: ReactElement;
    actions?: ReactElement;
    message?: ReactElement;
    promptUserInputRef?: React.MutableRefObject<HTMLInputElement>;
};
/**
 * Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.
 *
 * @param {AIControlProps} props - Component props
 * @returns {ReactElement}       Rendered component
 */
export default function AIControl({ disabled, value, placeholder, isTransparent, state, onChange, banner, error, actions, message, promptUserInputRef, }: AIControlProps): ReactElement;
export {};
