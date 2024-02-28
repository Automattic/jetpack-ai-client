export type RecordingState = 'inactive' | 'recording' | 'paused' | 'error';
type UseMediaRecordingProps = {
    onDone?: (blob: Blob) => void;
};
type UseMediaRecordingReturn = {
    /**
     * The current recording state
     */
    state: RecordingState;
    /**
     * The recorded blob
     */
    blob: Blob | null;
    /**
     * The error message
     */
    error: string | null;
    /**
     * The duration of the recorded audio
     */
    duration: number;
    /**
     * The audio analyser node
     */
    analyser?: AnalyserNode;
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
