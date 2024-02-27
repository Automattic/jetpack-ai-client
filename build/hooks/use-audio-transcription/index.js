/**
 * External dependencies
 */
import { useCallback, useState, useRef } from '@wordpress/element';
import debugFactory from 'debug';
/**
 * Internal dependencies
 */
import transcribeAudio from '../../audio-transcription/index.js';
const debug = debugFactory('jetpack-ai-client:use-audio-transcription');
/**
 * A hook to handle audio transcription.
 *
 * @param {string} feature - The feature name that is calling the transcription.
 * @returns {UseAudioTranscriptionReturn} - Object with properties to get the transcription data.
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
                onError?.(error.message);
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
