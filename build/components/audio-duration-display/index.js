import { jsx as _jsx } from "react/jsx-runtime";
/*
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';
/*
 * Internal dependencies
 */
import { formatTime, getDuration } from './lib/media.js';
/**
 * AudioDurationDisplay component.
 *
 * @param {AudioDurationDisplayProps} props - Component props.
 * @returns {React.ReactElement}              Rendered component.
 */
export default function AudioDurationDisplay({ url, className, }) {
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        if (!url) {
            return;
        }
        getDuration(url).then(setDuration);
    }, [url]);
    return _jsx("span", { className: className, children: formatTime(duration, { addDecimalPart: false }) });
}
