import type { AiFeatureStateProps, RequestError } from './types.ts';
import type { SiteDetails } from '../types.ts';
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
 * @param {boolean}                                                         action.isLoadingHistory      - Whether the history is being loaded
 * @return {LogoGeneratorStateProp} The new state
 */
export default function reducer(state: import("./types.ts").LogoGeneratorStateProp, action: {
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
    isLoadingHistory?: boolean;
}): {
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
        isLoadingHistory: boolean;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    features: {
        aiAssistantFeature: {
            hasFeature: boolean;
            requestsLimit: number;
            errorMessage?: string;
            errorCode?: string;
            upgradeType: import("./types.ts").UpgradeTypeProp;
            currentTier?: import("./types.ts").TierProp;
            nextTier?: import("./types.ts").TierProp | null;
            tierPlansEnabled?: boolean;
            costs?: {
                'jetpack-ai-logo-generator': {
                    logo: number;
                };
            };
            featuresControl?: import("./types.ts").FeaturesControl;
            _meta?: {
                isRequesting: boolean;
                asyncRequestCountdown: number;
                asyncRequestTimerId: number;
                isRequestingImage: boolean;
            };
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
        };
    };
} | {
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
        isLoadingHistory: boolean;
    };
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: {
        url: string;
        description: string;
    }[];
    selectedLogoIndex: number;
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        isSavingLogoToLibrary: boolean;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        isApplyingLogo: boolean;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        isRequestingImage: boolean;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        isEnhancingPrompt: boolean;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    features: {
        aiAssistantFeature: {
            hasFeature: boolean;
            isOverLimit: boolean;
            requestsCount: number;
            requestsLimit: number;
            requireUpgrade: boolean;
            errorMessage?: string;
            errorCode?: string;
            upgradeType: import("./types.ts").UpgradeTypeProp;
            currentTier?: import("./types.ts").TierProp;
            usagePeriod?: {
                currentStart: string;
                nextStart: string;
                requestsCount: number;
            };
            nextTier?: import("./types.ts").TierProp | null;
            tierPlansEnabled?: boolean;
            costs?: {
                'jetpack-ai-logo-generator': {
                    logo: number;
                };
            };
            featuresControl?: import("./types.ts").FeaturesControl;
            _meta: {
                asyncRequestCountdown: number;
                asyncRequestTimerId: number;
                isRequestingImage: boolean;
                isRequesting: boolean;
            };
        };
    };
    _meta: {
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
        isLoadingHistory?: boolean;
        featureFetchError: RequestError;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        firstLogoPromptFetchError: RequestError;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        enhancePromptFetchError: RequestError;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        logoFetchError: RequestError;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        saveToLibraryError: RequestError;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        logoUpdateError: RequestError;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        isLoadingHistory?: boolean;
        context: string;
    };
} | {
    siteDetails?: SiteDetails | Record<string, never>;
    features: {
        aiAssistantFeature?: AiFeatureStateProps;
    };
    history: Array<import("./types.ts").Logo>;
    selectedLogoIndex: number;
    _meta: {
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
        context?: string;
        isLoadingHistory: boolean;
    };
};
