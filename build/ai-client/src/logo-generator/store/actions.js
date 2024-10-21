/**
 * Internal dependencies
 */
import { getSiteLogoHistory } from '../lib/logo-storage.js';
import wpcomLimitedRequest from '../lib/wpcom-limited-request.js';
/**
 * Types & Constants
 */
import { ACTION_INCREASE_AI_ASSISTANT_REQUESTS_COUNT, ACTION_REQUEST_AI_ASSISTANT_FEATURE, ACTION_SET_AI_ASSISTANT_FEATURE_REQUIRE_UPGRADE, ACTION_SET_SITE_DETAILS, ACTION_STORE_AI_ASSISTANT_FEATURE, ACTION_SET_TIER_PLANS_ENABLED, ACTION_SET_SELECTED_LOGO_INDEX, ACTION_ADD_LOGO_TO_HISTORY, ACTION_SET_IS_SAVING_LOGO_TO_LIBRARY, ACTION_SAVE_SELECTED_LOGO, ACTION_SET_IS_REQUESTING_IMAGE, ACTION_SET_IS_APPLYING_LOGO, ACTION_SET_IS_ENHANCING_PROMPT, ACTION_SET_SITE_HISTORY, ACTION_SET_FEATURE_FETCH_ERROR, ACTION_SET_FIRST_LOGO_PROMPT_FETCH_ERROR, ACTION_SET_ENHANCE_PROMPT_FETCH_ERROR, ACTION_SET_LOGO_FETCH_ERROR, ACTION_SET_LOGO_UPDATE_ERROR, ACTION_SET_SAVE_TO_LIBRARY_ERROR, ACTION_SET_CONTEXT, ACTION_SET_IS_LOADING_HISTORY, } from './constants.js';
/**
 * Map the response from the `sites/$site/ai-assistant-feature`
 * endpoint to the AI Assistant feature props.
 * @param { AiAssistantFeatureEndpointResponseProps } response - The response from the endpoint.
 * @return { AiFeatureProps }                                       The AI Assistant feature props.
 */
export function mapAiFeatureResponseToAiFeatureProps(response) {
    return {
        hasFeature: !!response['has-feature'],
        isOverLimit: !!response['is-over-limit'],
        requestsCount: response['requests-count'],
        requestsLimit: response['requests-limit'],
        requireUpgrade: !!response['site-require-upgrade'],
        errorMessage: response['error-message'],
        errorCode: response['error-code'],
        upgradeType: response['upgrade-type'],
        usagePeriod: {
            currentStart: response['usage-period']?.['current-start'],
            nextStart: response['usage-period']?.['next-start'],
            requestsCount: response['usage-period']?.['requests-count'] || 0,
        },
        currentTier: response['current-tier'],
        nextTier: response['next-tier'],
        tierPlansEnabled: !!response['tier-plans-enabled'],
        costs: response.costs,
        featuresControl: response['features-control'],
    };
}
const actions = {
    storeAiAssistantFeature(feature) {
        return {
            type: ACTION_STORE_AI_ASSISTANT_FEATURE,
            feature,
        };
    },
    /**
     * Thunk action to fetch the AI Assistant feature from the API.
     * @return {Function} The thunk action.
     */
    fetchAiAssistantFeature() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return async ({ dispatch }) => {
            // Dispatch isFetching action.
            dispatch({ type: ACTION_REQUEST_AI_ASSISTANT_FEATURE });
            try {
                const response = await wpcomLimitedRequest({
                    path: '/wpcom/v2/jetpack-ai/ai-assistant-feature',
                    query: 'force=wpcom',
                });
                if (response.data) {
                    throw new Error('Failed to fetch');
                }
                // Store the feature in the store.
                dispatch(actions.storeAiAssistantFeature(mapAiFeatureResponseToAiFeatureProps(response)));
            }
            catch (err) {
                // Mark the fetch as failed.
                dispatch({ type: ACTION_SET_FEATURE_FETCH_ERROR, error: err });
            }
        };
    },
    /**
     * This thunk action is used to increase
     * the requests count for the current usage period.
     * @param {number} count - The number of requests to increase. Default is 1.
     * @return {Function}     The thunk action.
     */
    increaseAiAssistantRequestsCount(count = 1) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ({ dispatch }) => {
            dispatch({
                type: ACTION_INCREASE_AI_ASSISTANT_REQUESTS_COUNT,
                count,
            });
        };
    },
    setAiAssistantFeatureRequireUpgrade(requireUpgrade = true) {
        return {
            type: ACTION_SET_AI_ASSISTANT_FEATURE_REQUIRE_UPGRADE,
            requireUpgrade,
        };
    },
    setTierPlansEnabled(tierPlansEnabled = true) {
        return {
            type: ACTION_SET_TIER_PLANS_ENABLED,
            tierPlansEnabled,
        };
    },
    setSiteDetails(siteDetails) {
        return {
            type: ACTION_SET_SITE_DETAILS,
            siteDetails,
        };
    },
    setSelectedLogoIndex(selectedLogoIndex) {
        return {
            type: ACTION_SET_SELECTED_LOGO_INDEX,
            selectedLogoIndex,
        };
    },
    addLogoToHistory(logo) {
        return {
            type: ACTION_ADD_LOGO_TO_HISTORY,
            logo,
        };
    },
    setIsSavingLogoToLibrary(isSavingLogoToLibrary) {
        return {
            type: ACTION_SET_IS_SAVING_LOGO_TO_LIBRARY,
            isSavingLogoToLibrary,
        };
    },
    setIsApplyingLogo(isApplyingLogo) {
        return {
            type: ACTION_SET_IS_APPLYING_LOGO,
            isApplyingLogo,
        };
    },
    updateSelectedLogo(mediaId, url) {
        return {
            type: ACTION_SAVE_SELECTED_LOGO,
            mediaId,
            url,
        };
    },
    setIsRequestingImage(isRequestingImage) {
        return {
            type: ACTION_SET_IS_REQUESTING_IMAGE,
            isRequestingImage,
        };
    },
    setIsEnhancingPrompt(isEnhancingPrompt) {
        return {
            type: ACTION_SET_IS_ENHANCING_PROMPT,
            isEnhancingPrompt,
        };
    },
    loadLogoHistory(siteId) {
        const history = getSiteLogoHistory(siteId);
        return {
            type: ACTION_SET_SITE_HISTORY,
            history,
        };
    },
    setFeatureFetchError(error) {
        return {
            type: ACTION_SET_FEATURE_FETCH_ERROR,
            error,
        };
    },
    setFirstLogoPromptFetchError(error) {
        return {
            type: ACTION_SET_FIRST_LOGO_PROMPT_FETCH_ERROR,
            error,
        };
    },
    setEnhancePromptFetchError(error) {
        return {
            type: ACTION_SET_ENHANCE_PROMPT_FETCH_ERROR,
            error,
        };
    },
    setLogoFetchError(error) {
        return {
            type: ACTION_SET_LOGO_FETCH_ERROR,
            error,
        };
    },
    setSaveToLibraryError(error) {
        return {
            type: ACTION_SET_SAVE_TO_LIBRARY_ERROR,
            error,
        };
    },
    setLogoUpdateError(error) {
        return {
            type: ACTION_SET_LOGO_UPDATE_ERROR,
            error,
        };
    },
    setContext(context) {
        return {
            type: ACTION_SET_CONTEXT,
            context,
        };
    },
    setIsLoadingHistory(isLoadingHistory) {
        return {
            type: ACTION_SET_IS_LOADING_HISTORY,
            isLoadingHistory,
        };
    },
};
export default actions;
