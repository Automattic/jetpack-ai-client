/**
 * Hook to get properties for AiFeature
 * @return {object} - Object containing properties for AiFeature.
 */
export default function useAiFeature(): {
    hasFeature: boolean;
    isOverLimit: boolean;
    requireUpgrade: boolean;
    errorMessage?: string;
    errorCode?: string;
    upgradeType: import("@automattic/jetpack-shared-extension-utils/store/wordpress-com/types").UpgradeTypeProp;
    currentTier?: import("@automattic/jetpack-shared-extension-utils/store/wordpress-com/types").TierProp;
    usagePeriod?: {
        currentStart: string;
        nextStart: string;
        requestsCount: number;
    };
    nextTier?: import("@automattic/jetpack-shared-extension-utils/store/wordpress-com/types").TierProp;
    tierPlansEnabled?: boolean;
    costs?: {
        [key: string]: {
            [key: string]: number;
        };
    };
    featuresControl?: import("@automattic/jetpack-shared-extension-utils/store/wordpress-com/types").FeaturesControl;
    requestsCount: number;
    requestsLimit: number;
    loading: boolean;
    error: any;
    refresh: any;
    increaseRequestsCount: any;
    dequeueAsyncRequest: any;
};
