/**
 * Hook to save data to media library
 *
 * @return {UseSaveToMediaLibraryReturn} - Object containing properties to save data to media library.
 */
export default function useSaveToMediaLibrary(): {
    isLoading: boolean;
    saveToMediaLibrary: (url: string, name?: string) => Promise<{
        id: string;
        url: string;
    }>;
};
