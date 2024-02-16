/**
 * Post-processing types.
 */
export declare const TRANSCRIPTION_POST_PROCESSING_ACTION_SIMPLE_DRAFT = "voice-to-content-simple-draft";
export type PostProcessingAction = typeof TRANSCRIPTION_POST_PROCESSING_ACTION_SIMPLE_DRAFT;
/**
 * The return value for the transcription post-processing hook.
 */
export type UseTranscriptionPostProcessingReturn = {
    postProcessingResult: string;
    isProcessingTranscription: boolean;
    postProcessingError: string;
    processTranscription: (action: PostProcessingAction, transcription: string) => void;
};
/**
 * The props for the transcription post-processing hook.
 */
export type UseTranscriptionPostProcessingProps = {
    feature: string;
    onReady?: (postProcessingResult: string) => void;
    onError?: (error: string) => void;
    onUpdate?: (currentPostProcessingResult: string) => void;
};
/**
 * A hook to handle transcription post-processing.
 *
 * @param {string} feature - The feature name that is calling the post-processing actions.
 * @returns {UseTranscriptionPostProcessingReturn} - Object with properties to get the post-processing results.
 */
export default function useTranscriptionPostProcessing({ feature, onReady, onError, onUpdate, }: UseTranscriptionPostProcessingProps): UseTranscriptionPostProcessingReturn;
