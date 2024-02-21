/**
 * External dependencies
 */
import { useCallback, useState } from '@wordpress/element';
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
    const handleAudioTranscription = useCallback((audio) => {
        debug('Transcribing audio');
        /**
         * Reset the transcription result and error.
         */
        setTranscriptionResult('');
        setTranscriptionError('');
        setIsTranscribingAudio(true);
        /**
         * Call the audio transcription library.
         */
        const promise = transcribeAudio(audio, feature)
            .then(transcriptionText => {
            if (promise.canceled) {
                return;
            }
            setTranscriptionResult(transcriptionText);
            onReady?.(transcriptionText);
        })
            .catch(error => {
            if (promise.canceled) {
                return;
            }
            setTranscriptionError(error.message);
            onError?.(error.message);
        })
            .finally(() => setIsTranscribingAudio(false));
        return promise;
    }, [transcribeAudio, setTranscriptionResult, setTranscriptionError, setIsTranscribingAudio]);
    return {
        transcriptionResult,
        isTranscribingAudio,
        transcriptionError,
        transcribeAudio: handleAudioTranscription,
    };
}
