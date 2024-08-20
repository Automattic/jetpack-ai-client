import type { AiFeatureProps, AiAssistantFeatureEndpointResponseProps, Logo, RequestError } from './types.js';
import type { SiteDetails } from '../types.js';
/**
 * Map the response from the `sites/$site/ai-assistant-feature`
 * endpoint to the AI Assistant feature props.
 * @param { AiAssistantFeatureEndpointResponseProps } response - The response from the endpoint.
 * @return { AiFeatureProps }                                       The AI Assistant feature props.
 */
export declare function mapAiFeatureResponseToAiFeatureProps(response: AiAssistantFeatureEndpointResponseProps): AiFeatureProps;
declare const actions: {
    storeAiAssistantFeature(feature: AiFeatureProps): {
        type: string;
        feature: AiFeatureProps;
    };
    /**
     * Thunk action to fetch the AI Assistant feature from the API.
     * @return {Function} The thunk action.
     */
    fetchAiAssistantFeature(): ({ dispatch }: {
        dispatch: any;
    }) => Promise<void>;
    /**
     * This thunk action is used to increase
     * the requests count for the current usage period.
     * @param {number} count - The number of requests to increase. Default is 1.
     * @return {Function}     The thunk action.
     */
    increaseAiAssistantRequestsCount(count?: number): ({ dispatch }: {
        dispatch: any;
    }) => void;
    setAiAssistantFeatureRequireUpgrade(requireUpgrade?: boolean): {
        type: string;
        requireUpgrade: boolean;
    };
    setTierPlansEnabled(tierPlansEnabled?: boolean): {
        type: string;
        tierPlansEnabled: boolean;
    };
    setSiteDetails(siteDetails: SiteDetails): {
        type: string;
        siteDetails: SiteDetails;
    };
    setSelectedLogoIndex(selectedLogoIndex: number): {
        type: string;
        selectedLogoIndex: number;
    };
    addLogoToHistory(logo: Logo): {
        type: string;
        logo: Logo;
    };
    setIsSavingLogoToLibrary(isSavingLogoToLibrary: boolean): {
        type: string;
        isSavingLogoToLibrary: boolean;
    };
    setIsApplyingLogo(isApplyingLogo: boolean): {
        type: string;
        isApplyingLogo: boolean;
    };
    updateSelectedLogo(mediaId: string, url: string): {
        type: string;
        mediaId: string;
        url: string;
    };
    setIsRequestingImage(isRequestingImage: boolean): {
        type: string;
        isRequestingImage: boolean;
    };
    setIsEnhancingPrompt(isEnhancingPrompt: boolean): {
        type: string;
        isEnhancingPrompt: boolean;
    };
    loadLogoHistory(siteId: string): {
        type: string;
        history: Logo[];
    };
    setFeatureFetchError(error: RequestError): {
        type: string;
        error: RequestError;
    };
    setFirstLogoPromptFetchError(error: RequestError): {
        type: string;
        error: RequestError;
    };
    setEnhancePromptFetchError(error: RequestError): {
        type: string;
        error: RequestError;
    };
    setLogoFetchError(error: RequestError): {
        type: string;
        error: RequestError;
    };
    setSaveToLibraryError(error: RequestError): {
        type: string;
        error: RequestError;
    };
    setLogoUpdateError(error: RequestError): {
        type: string;
        error: RequestError;
    };
    setContext(context: string): {
        type: string;
        context: string;
    };
};
export default actions;
