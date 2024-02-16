type RecordingStateProp = 'inactive' | 'recording' | 'paused' | 'processing' | 'error';
type UseMediaRecordingProps = {
    onDone?: (blob: Blob, url: string) => void;
};
type UseMediaRecordingReturn = {
    /**
     * The current recording state
     */
    state: RecordingStateProp;
    /**
     * The recorded blob
     */
    blob: Blob | null;
    /**
     * The recorded blob url
     */
    url: string | null;
    /**
     * The error message
     */
    error: string | null;
    /**
     * The duration of the recorded audio
     */
    duration: number;
    /**
     * The error handler
     */
    onError: (err: string | Error) => void;
    controls: {
        /**
         * `start` recording handler
         */
        start: (timeslice?: number) => void;
        /**
         * `pause` recording handler
         */
        pause: () => void;
        /**
         * `resume` recording handler
         */
        resume: () => void;
        /**
         * `stop` recording handler
         */
        stop: () => void;
        /**
         * `reset` recording handler
         */
        reset: () => void;
    };
};
/**
 * react custom hook to handle media recording.
 *
 * @param {UseMediaRecordingProps} props - The props
 * @returns {UseMediaRecordingReturn} The media recorder instance
 */
export default function useMediaRecording({ onDone, }?: UseMediaRecordingProps): UseMediaRecordingReturn;
export {};
