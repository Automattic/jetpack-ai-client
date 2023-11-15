type RecordingStateProp = 'inactive' | 'recording' | 'paused';
type UseMediaRecordingProps = {
    onDone?: (blob: Blob) => void;
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
};
/**
 * react custom hook to handle media recording.
 *
 * @param {UseMediaRecordingProps} props - The props
 * @returns {UseMediaRecordingReturn} The media recorder instance
 */
export default function useMediaRecording({ onDone, }?: UseMediaRecordingProps): UseMediaRecordingReturn;
export {};
