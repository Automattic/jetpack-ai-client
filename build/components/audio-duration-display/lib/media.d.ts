/**
 * Function to get duration of audio file
 *
 * @param {string} url - The url of the audio file
 * @returns {Promise<number>} The duration of the audio file
 * @see https://stackoverflow.com/questions/21522036/html-audio-tag-duration-always-infinity
 */
export declare function getDuration(url: string): Promise<number>;
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
 * @param {number} time               - The time in seconds to format.
 * @param {FormatTimeOptions} options - The arguments.
 * @returns {string}                    The formatted time string.
 * @example
 * const formattedTime1 = formatTime( 1234567 );                       // Returns "20:34.56"
 * const formattedTime2 = formatTime( 45123 );                         // Returns "45.12"
 * const formattedTime3 = formatTime( 64, { addDecimalPart: false } ); // Returns "01:04"
 */
export declare function formatTime(time: number, { addDecimalPart, showMinutes, showHours }?: FormatTimeOptions): string;
export {};
