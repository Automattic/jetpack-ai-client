import type { RequestingStateProp } from '../../types.js';
export type AiStatusIndicatorIconSize = 24 | 32 | 48 | 64;
import type React from 'react';
import './style.scss';
export type AiStatusIndicatorProps = {
    state?: RequestingStateProp;
    size?: AiStatusIndicatorIconSize;
};
/**
 * AiStatusIndicator component.
 *
 * @param {AiStatusIndicatorProps} props - component props.
 * @returns {React.ReactElement} - rendered component.
 */
export default function AiStatusIndicator({ state }: AiStatusIndicatorProps): React.ReactElement;
