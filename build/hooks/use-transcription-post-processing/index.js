/**
 * External dependencies
 */
import { useCallback, useState } from '@wordpress/element';
import debugFactory from 'debug';
/**
 * Internal dependencies
 */
import useAiSuggestions from '../use-ai-suggestions/index.js';
const debug = debugFactory('jetpack-ai-client:use-transcription-post-processing');
/**
 * Post-processing types.
 */
export const TRANSCRIPTION_POST_PROCESSING_ACTION_SIMPLE_DRAFT = 'voice-to-content-simple-draft';
/**
 * A hook to handle transcription post-processing.
 *
 * @param {string} feature - The feature name that is calling the post-processing actions.
 * @returns {UseTranscriptionPostProcessingReturn} - Object with properties to get the post-processing results.
 */
export default function useTranscriptionPostProcessing({ feature, onReady, onError, onUpdate, }) {
    const [postProcessingResult, setPostProcessingResult] = useState('');
    const [postProcessingError, setPostProcessingError] = useState('');
    const [isProcessingTranscription, setIsProcessingTranscription] = useState(false);
    /**
     * Set-up the useAiSuggestions hook.
     */
    const handleOnSuggestion = useCallback((suggestion) => {
        setPostProcessingResult(suggestion);
        onUpdate?.(suggestion);
    }, [setPostProcessingResult, onUpdate]);
    const handleOnDone = useCallback((result) => {
        setPostProcessingResult(result);
        onUpdate?.(result);
        onReady?.(result);
    }, [setPostProcessingResult, onUpdate, onReady]);
    const handleOnError = useCallback((errorData) => {
        setPostProcessingError(errorData.message);
        onError?.(errorData.message);
    }, [setPostProcessingError, onError]);
    const { request, stopSuggestion } = useAiSuggestions({
        onSuggestion: handleOnSuggestion,
        onDone: handleOnDone,
        onError: handleOnError,
    });
    const handleTranscriptionPostProcessing = useCallback((action, transcription) => {
        debug('Post-processing transcription');
        /**
         * Reset the transcription result and error.
         */
        setPostProcessingResult('');
        setPostProcessingError('');
        setIsProcessingTranscription(true);
        /**
         * Build the prompt to call the suggestion hook.
         */
        const messages = [
            {
                role: 'jetpack-ai',
                context: {
                    type: action,
                    content: transcription,
                },
            },
        ];
        /**
         * Call the suggestion hook using the message.
         */
        request(messages, { feature });
    }, [
        setPostProcessingResult,
        setPostProcessingError,
        setIsProcessingTranscription,
        request,
        feature,
    ]);
    const handleTranscriptionPostProcessingCancel = useCallback(() => {
        /*
         * Stop the suggestion streaming.
         */
        stopSuggestion();
        setIsProcessingTranscription(false);
    }, [stopSuggestion, setIsProcessingTranscription]);
    return {
        postProcessingResult,
        isProcessingTranscription,
        postProcessingError,
        processTranscription: handleTranscriptionPostProcessing,
        cancelTranscriptionProcessing: handleTranscriptionPostProcessingCancel,
    };
}
