type FormatTimeOptions = {
    /**
     * Whether to add the decimal part to the formatted time.
     */
    addDecimalPart?: boolean;
    /**
     * Whether to show the minutes part of the formatted time even when it's 0.
     */
    showMinutes?: boolean;
    /**
     * Whether to show the hours part of the formatted time even when it's 0.
     */
    showHours?: boolean;
};
/**
 * Formats the given time in milliseconds into a string with the format HH:MM:SS.DD,
 * adding hours and minutes only when needed.
 *
 * @param {number} time               - The time in milliseconds to format.
 * @param {FormatTimeOptions} options - The arguments.
 * @returns {string}                    The formatted time string.
 * @example
 * const formattedTime1 = formatTime( 1234567, { addDecimalPart: true } ); // Returns "20:34.56"
 * const formattedTime2 = formatTime( 45123 );                             // Returns "00.45"
 * const formattedTime3 = formatTime( 1200, { showHours: true } );         // Returns "00:00:01"
 */
export declare function formatTime(time: number, { addDecimalPart, showMinutes, showHours }?: FormatTimeOptions): string;
export {};
