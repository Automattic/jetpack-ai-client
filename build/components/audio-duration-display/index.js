import { jsx as _jsx } from "react/jsx-runtime";
/*
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';
/*
 * Internal dependencies
 */
import { formatTime, getDuration } from './lib/media';
/**
 * AudioDurationDisplay component.
 *
 * @param {AudioDurationDisplayProps} props - Component props.
 * @returns {React.ReactElement}              Rendered component.
 */
export default function AudioDurationDisplay({ url, }) {
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        if (!url) {
            return;
        }
        getDuration(url).then(setDuration);
    }, [url]);
    return _jsx("span", { children: formatTime(duration, { addDecimalPart: false }) });
}
