declare const useRequestErrors: () => {
    setFeatureFetchError: any;
    setFirstLogoPromptFetchError: any;
    setEnhancePromptFetchError: any;
    setLogoFetchError: any;
    setSaveToLibraryError: any;
    setLogoUpdateError: any;
    clearErrors: () => void;
    featureFetchError: import("../store/types.js").RequestError;
    firstLogoPromptFetchError: import("../store/types.js").RequestError;
    enhancePromptFetchError: import("../store/types.js").RequestError;
    logoFetchError: import("../store/types.js").RequestError;
    saveToLibraryError: import("../store/types.js").RequestError;
    logoUpdateError: import("../store/types.js").RequestError;
};
export default useRequestErrors;
