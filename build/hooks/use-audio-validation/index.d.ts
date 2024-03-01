/**
 * The return value for the audio validation hook.
 */
export type UseAudioValidationReturn = {
    isValidatingAudio: boolean;
    validateAudio: (audio: Blob, successCallback: (info?: ValidatedAudioInformation) => void, errorCallback: (error: string) => void) => void;
};
/**
 * The validated audio information.
 */
export type ValidatedAudioInformation = {
    duration: number;
    isFile: boolean;
    size: number;
};
/**
 * Hook to handle the validation of an audio file.
 *
 * @returns {UseAudioValidationReturn} - Object with the audio validation state and the function to validate the audio.
 */
export default function useAudioValidation(): UseAudioValidationReturn;
