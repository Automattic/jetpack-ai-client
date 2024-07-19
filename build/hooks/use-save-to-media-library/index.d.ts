/**
 * Hook to save an image to the media library.
 *
 * @returns {object} Object with the loading state and the function to save the image to the media library.
 */
export default function useSaveToMediaLibrary(): {
    isLoading: boolean;
    saveToMediaLibrary: (url: string, name?: string) => Promise<{
        id: string;
        url: string;
    }>;
};
