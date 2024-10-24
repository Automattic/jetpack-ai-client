/**
 * External dependencies
 */
import { useCallback, useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import debugFactory from 'debug';
/**
 * Internal dependencies
 */
import transcribeAudio from '../../audio-transcription/index.js';
const debug = debugFactory('jetpack-ai-client:use-audio-transcription');
/**
 * Map error response to a string.
 * @param {Error | string | AudioTranscriptionErrorResponse} error - The error response from the audio transcription service.
 * @return {string} the translated error message
 */
const mapErrorResponse = (error) => {
    if (typeof error === 'string') {
        return error;
    }
    if ('code' in error) {
        switch (error.code) {
            case 'error_quota_exceeded':
                return __('You exceeded your current quota, please check your plan details.', 'jetpack-ai-client');
            case 'jetpack_ai_missing_audio_param':
                return __('The audio_file is required to perform a transcription.', 'jetpack-ai-client');
            case 'jetpack_ai_service_unavailable':
                return __('The Jetpack AI service is temporarily unavailable.', 'jetpack-ai-client');
            case 'file_size_not_supported':
                return __('The provided audio file is too big.', 'jetpack-ai-client');
            case 'file_type_not_supported':
                return __('The provided audio file type is not supported.', 'jetpack-ai-client');
            case 'jetpack_ai_error':
                return __('There was an error processing the transcription request.', 'jetpack-ai-client');
            default:
                return error.message;
        }
    }
    if ('message' in error) {
        return error.message;
    }
    return __('There was an error processing the transcription request.', 'jetpack-ai-client');
};
/**
 * A hook to handle audio transcription.
 *
 * @param {string} feature - The feature name that is calling the transcription.
 * @return {UseAudioTranscriptionReturn} - Object with properties to get the transcription data.
 */
export default function useAudioTranscription({ feature, onReady, onError, }) {
    const [transcriptionResult, setTranscriptionResult] = useState('');
    const [transcriptionError, setTranscriptionError] = useState('');
    const [isTranscribingAudio, setIsTranscribingAudio] = useState(false);
    const abortController = useRef(null);
    const handleAudioTranscription = useCallback((audio) => {
        debug('Transcribing audio');
        /**
         * Reset the transcription result and error.
         */
        setTranscriptionResult('');
        setTranscriptionError('');
        setIsTranscribingAudio(true);
        /*
         * Create an AbortController to cancel the transcription.
         */
        const controller = new AbortController();
        abortController.current = controller;
        /**
         * Call the audio transcription library.
         */
        transcribeAudio(audio, feature, controller.signal)
            .then(transcriptionText => {
            setTranscriptionResult(transcriptionText);
            onReady?.(transcriptionText);
        })
            .catch(error => {
            if (!controller.signal.aborted) {
                setTranscriptionError(error.message);
                onError?.(mapErrorResponse(error));
            }
        })
            .finally(() => setIsTranscribingAudio(false));
    }, [transcribeAudio, setTranscriptionResult, setTranscriptionError, setIsTranscribingAudio]);
    const handleAudioTranscriptionCancel = useCallback(() => {
        /*
         * Cancel the transcription.
         */
        abortController.current?.abort();
        /*
         * Reset the transcription result and error.
         */
        setTranscriptionResult('');
        setTranscriptionError('');
        setIsTranscribingAudio(false);
    }, [abortController, setTranscriptionResult, setTranscriptionError, setIsTranscribingAudio]);
    return {
        transcriptionResult,
        isTranscribingAudio,
        transcriptionError,
        transcribeAudio: handleAudioTranscription,
        cancelTranscription: handleAudioTranscriptionCancel,
    };
}
