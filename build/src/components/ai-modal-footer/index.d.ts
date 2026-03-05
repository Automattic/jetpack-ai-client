/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Types
 */
import type { ReactElement } from 'react';
type AiModalFooterProps = {
    onGuidelinesClick?: () => void;
    onFeedbackClick?: () => void;
};
/**
 * AiModalFooter component.
 *
 * @param {AiModalFooterProps} props - component props.
 * @return {ReactElement} - rendered component.
 */
export default function AiModalFooter({ onGuidelinesClick, onFeedbackClick }: AiModalFooterProps): ReactElement;
export {};
