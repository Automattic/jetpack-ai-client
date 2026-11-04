import './style.scss';
/**
 * Types
 */
import type { RequestingStateProp } from '../../types.ts';
import type { MutableRefObject, ReactElement, Ref } from 'react';
type AIControlProps = {
    className?: string;
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
    promptUserInputRef?: Ref<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLDivElement | null>;
};
/**
 * Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.
 *
 * @param {AIControlProps} props - Component props
 * @return {ReactElement}       Rendered component
 */
export default function AIControl({ className, disabled, value, placeholder, isTransparent, state, onChange, banner, error, actions, message, promptUserInputRef, wrapperRef, }: AIControlProps): ReactElement;
export {};
