import type { ReactElement } from 'react';
type AudioDurationDisplayProps = {
    duration: number;
    className?: string | null;
};
/**
 * AudioDurationDisplay component.
 *
 * @param {AudioDurationDisplayProps} props - Component props.
 * @return {ReactElement}              Rendered component.
 */
export default function AudioDurationDisplay({ duration, className }: AudioDurationDisplayProps): ReactElement;
export {};
