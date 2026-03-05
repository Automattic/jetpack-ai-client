declare const useRequestErrors: () => {
    setFeatureFetchError: any;
    setFirstLogoPromptFetchError: any;
    setEnhancePromptFetchError: any;
    setLogoFetchError: any;
    setSaveToLibraryError: any;
    setLogoUpdateError: any;
    clearErrors: () => void;
    featureFetchError: import("../store/types.ts").RequestError;
    firstLogoPromptFetchError: import("../store/types.ts").RequestError;
    enhancePromptFetchError: import("../store/types.ts").RequestError;
    logoFetchError: import("../store/types.ts").RequestError;
    saveToLibraryError: import("../store/types.ts").RequestError;
    logoUpdateError: import("../store/types.ts").RequestError;
};
export default useRequestErrors;
