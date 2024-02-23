import React from 'react';
/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Types
 */
import type { RequestingStateProp } from '../../types.js';
import type { ReactElement } from 'react';
type AiControlProps = {
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
    bannerComponent?: ReactElement;
    errorComponent?: ReactElement;
};
/**
 * AI Control component.
 *
 * @param {AiControlProps} props       - Component props.
 * @param {React.MutableRefObject} ref - Ref to the component.
 * @returns {ReactElement}         Rendered component.
 */
export declare function AIControl({ disabled, value, placeholder, showAccept, acceptLabel, showButtonLabels, isTransparent, state, showGuideLine, customFooter, onChange, onSend, onStop, onAccept, onDiscard, showRemove, bannerComponent, errorComponent, }: AiControlProps, ref: React.MutableRefObject<null>): ReactElement;
declare const _default: React.ForwardRefExoticComponent<AiControlProps & React.RefAttributes<null>>;
export default _default;
