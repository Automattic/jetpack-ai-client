type SavedMediaItem = {
    id: string;
    url: string;
    mime?: string;
};
/**
 * Hook to save data to media library
 *
 * @return {UseSaveToMediaLibraryReturn} - Object containing properties to save data to media library.
 */
export default function useSaveToMediaLibrary(): {
    isLoading: boolean;
    saveToMediaLibrary: (url: string, name?: string) => Promise<SavedMediaItem>;
};
export {};
