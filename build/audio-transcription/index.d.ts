/**
 * A function that takes an audio blob and transcribes it.
 *
 * @param {Blob} audio - The audio to be transcribed, from a recording or from a file.
 * @param {string} feature - The feature name that is calling the transcription.
 * @param {AbortSignal} requestAbortSignal - The signal to abort the request.
 * @returns {Promise<string>} - The promise of a string containing the transcribed audio.
 */
export default function transcribeAudio(audio: Blob, feature?: string, requestAbortSignal?: AbortSignal): Promise<string>;
