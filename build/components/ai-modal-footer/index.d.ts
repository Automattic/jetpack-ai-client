/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Types
 */
import type React from 'react';
type AiModalFooterProps = {
    onGuidelinesClick?: () => void;
    onFeedbackClick?: () => void;
};
/**
 * AiModalFooter component.
 *
 * @param {AiModalFooterProps} props - component props.
 * @return {React.ReactElement} - rendered component.
 */
export default function AiModalFooter({ onGuidelinesClick, onFeedbackClick, }: AiModalFooterProps): React.ReactElement;
export {};
