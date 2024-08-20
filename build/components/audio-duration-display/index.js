import { jsx as _jsx } from "react/jsx-runtime";
/*
 * Internal dependencies
 */
import { formatTime } from './lib/media.js';
/**
 * AudioDurationDisplay component.
 *
 * @param {AudioDurationDisplayProps} props - Component props.
 * @return {React.ReactElement}              Rendered component.
 */
export default function AudioDurationDisplay({ duration, className, }) {
    return _jsx("span", { className: className, children: formatTime(duration, { addDecimalPart: false }) });
}
