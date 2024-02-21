/**
 * Types
 */
import { CancelablePromise } from '../types.js';
/**
 * A function that takes an audio blob and transcribes it.
 *
 * @param {Blob} audio - The audio to be transcribed, from a recording or from a file.
 * @param {string} feature - The feature name that is calling the transcription.
 * @returns {Promise<string>} - The promise of a string containing the transcribed audio.
 */
export default function transcribeAudio(audio: Blob, feature?: string): CancelablePromise<string>;
