/**
 * Types
 */
import type { CheckMediaProps } from '../types.js';
/**
 * Uses the media information to confirm it exists or not on the server.
 *
 * @param {CheckMediaProps} checkMediaProps - the media details to check
 * @param {CheckMediaProps.mediaId} checkMediaProps.mediaId - the id of the media to check
 * @returns {Promise<boolean>} - true if the media exists, false otherwise
 */
export declare function mediaExists({ mediaId }: CheckMediaProps): Promise<boolean>;
