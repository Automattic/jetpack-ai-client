import type { AiFeatureStateProps, LogoGeneratorStateProp, RequestError } from './types.js';
import type { SiteDetails } from '../types.js';
/**
 * Reducer for the Logo Generator store.
 *
 * @param {LogoGeneratorStateProp}                                          state                        - The current state
 * @param {object}                                                          action                       - The action to apply, as described by the properties below
 * @param {string}                                                          action.type                  - The action type
 * @param {AiFeatureStateProps}                                             action.feature               - The AI Assistant feature state
 * @param {number}                                                          action.count                 - The number of requests to increase the counter by
 * @param {boolean}                                                         action.requireUpgrade        - Whether an upgrade is required
 * @param {boolean}                                                         action.tierPlansEnabled      - Whether tier plans are enabled
 * @param {SiteDetails}                                                     action.siteDetails           - The site details
 * @param {number}                                                          action.selectedLogoIndex     - The selected logo index
 * @param {boolean}                                                         action.isSavingLogoToLibrary - Whether a logo is being saved to the library
 * @param {boolean}                                                         action.isApplyingLogo        - Whether a logo is being applied
 * @param {object}                                                          action.logo                  - The logo to save, as described by the properties below
 * @param {string}                                                          action.logo.url              - The logo URL
 * @param {string}                                                          action.logo.description      - The logo description
 * @param {number}                                                          action.mediaId               - The media ID from backend
 * @param {string}                                                          action.url                   - The URL to save
 * @param {boolean}                                                         action.isRequestingImage     - Whether an image is being requested
 * @param {boolean}                                                         action.isEnhancingPrompt     - Whether a prompt enhancement is being requested
 * @param {Array< { url: string; description: string; mediaId?: number } >} action.history               - The logo history
 * @param {RequestError}                                                    action.error                 - The error to set
 * @param {string}                                                          action.context               - The context where the tool is being used
 * @return {LogoGeneratorStateProp} The new state
 */
export default function reducer(state: LogoGeneratorStateProp, action: {
    type: string;
    feature?: AiFeatureStateProps;
    count?: number;
    requireUpgrade?: boolean;
    tierPlansEnabled?: boolean;
    siteDetails?: SiteDetails;
    selectedLogoIndex?: number;
    isSavingLogoToLibrary?: boolean;
    isApplyingLogo?: boolean;
    logo?: {
        url: string;
        description: string;
    };
    mediaId?: number;
    url?: string;
    isRequestingImage?: boolean;
    isEnhancingPrompt?: boolean;
    history?: Array<{
        url: string;
        description: string;
        mediaId?: number;
    }>;
    error?: RequestError;
    context?: string;
}): {
    features: {
        aiAssistantFeature: {
            isOverLimit: boolean;
            requestsCount: number;
            requireUpgrade: boolean;
            usagePeriod: {
                currentStart: string;
                nextStart: string;
                requestsCount: number;
            } | {
                requestsCount: number;
            };
            hasFeature: boolean;
            requestsLimit: number;
            errorMessage?: string;
            errorCode?: string;
            upgradeType: import("./types.js").UpgradeTypeProp;
            currentTier?: import("./types.js").TierProp;
            nextTier?: import("./types.js").TierProp;
            tierPlansEnabled?: boolean;
            costs?: {
                'jetpack-ai-logo-generator': {
                    logo: number;
                };
            };
            _meta?: {
                isRequesting: boolean;
                asyncRequestCountdown: number;
                asyncRequestTimerId: number;
                isRequestingImage: boolean;
            };
        };
    };
    _meta?: {
        isSavingLogoToLibrary: boolean;
        isApplyingLogo: boolean;
        isRequestingImage: boolean;
        isEnhancingPrompt: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    history: {
        url: string;
        description: string;
    }[];
    selectedLogoIndex: number;
    _meta?: {
        isSavingLogoToLibrary: boolean;
        isApplyingLogo: boolean;
        isRequestingImage: boolean;
        isEnhancingPrompt: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
} | {
    _meta: {
        isSavingLogoToLibrary: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        isApplyingLogo: boolean;
        isSavingLogoToLibrary?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        isRequestingImage: boolean;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        isEnhancingPrompt: boolean;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        featureFetchError: RequestError;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        firstLogoPromptFetchError: RequestError;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        enhancePromptFetchError: RequestError;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        logoFetchError: RequestError;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        saveToLibraryError: RequestError;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        logoUpdateError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        logoUpdateError: RequestError;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        context?: string;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
} | {
    _meta: {
        context: string;
        isSavingLogoToLibrary?: boolean;
        isApplyingLogo?: boolean;
        isRequestingImage?: boolean;
        isEnhancingPrompt?: boolean;
        featureFetchError?: RequestError;
        firstLogoPromptFetchError?: RequestError;
        enhancePromptFetchError?: RequestError;
        logoFetchError?: RequestError;
        saveToLibraryError?: RequestError;
        logoUpdateError?: RequestError;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: import("./types.js").Logo[];
    selectedLogoIndex: number;
};
