/**
 * The response from the audio transcription hook.
 */
export type UseAudioTranscriptionReturn = {
    transcriptionResult: string;
    isTranscribingAudio: boolean;
    transcriptionError: string;
    transcribeAudio: (audio: Blob) => void;
    cancelTranscription: () => void;
};
/**
 * The props for the audio transcription hook.
 */
export type UseAudioTranscriptionProps = {
    feature: string;
    onReady?: (transcription: string) => void;
    onError?: (error: string) => void;
};
/**
 * A hook to handle audio transcription.
 *
 * @param {string} feature - The feature name that is calling the transcription.
 * @return {UseAudioTranscriptionReturn} - Object with properties to get the transcription data.
 */
export default function useAudioTranscription({ feature, onReady, onError, }: UseAudioTranscriptionProps): UseAudioTranscriptionReturn;
