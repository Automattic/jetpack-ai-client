import './style.scss';
/**
 * Types
 */
import type React from 'react';
type AiFeedbackThumbsProps = {
    disabled?: boolean;
    iconSize?: number;
    ratedItem?: string;
    feature?: string;
    savedRatings?: Record<string, string>;
    options?: {
        mediaLibraryId?: number;
        prompt?: string;
        revisedPrompt?: string;
    };
    onRate?: (rating: string) => void;
};
/**
 * AiFeedbackThumbs component.
 *
 * @param {AiFeedbackThumbsProps} props - component props.
 * @return {React.ReactElement} - rendered component.
 */
export default function AiFeedbackThumbs({ disabled, iconSize, ratedItem, feature, savedRatings, options, onRate, }: AiFeedbackThumbsProps): React.ReactElement;
export {};
