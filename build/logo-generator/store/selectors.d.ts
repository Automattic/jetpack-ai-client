import type { AiFeatureProps, LogoGeneratorStateProp, Logo, RequestError } from './types.js';
import type { SiteDetails } from '../types.js';
declare const selectors: {
    /**
     * Return the AI Assistant feature.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {Partial<AiFeatureProps>}      The AI Assistant feature data.
     */
    getAiAssistantFeature(state: LogoGeneratorStateProp): Partial<AiFeatureProps>;
    /**
     * Return the site details.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {Partial<SiteDetails> | undefined}   The site details.
     */
    getSiteDetails(state: LogoGeneratorStateProp): Partial<SiteDetails> | undefined;
    /**
     * Get the isRequesting flag for the AI Assistant feature.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The isRequesting flag.
     */
    getIsRequestingAiAssistantFeature(state: LogoGeneratorStateProp): boolean;
    /**
     * Get the logos history.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {Array<Logo>}                  The logos history array.
     */
    getLogos(state: LogoGeneratorStateProp): Array<Logo>;
    /**
     * Get the selected logo index.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {number | null}                The selected logo index.
     */
    getSelectedLogoIndex(state: LogoGeneratorStateProp): number | null;
    /**
     * Get the selected logo.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {Logo}                         The selected logo.
     */
    getSelectedLogo(state: LogoGeneratorStateProp): Logo;
    /**
     * Get the isSavingToLibrary flag.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The isSavingToLibrary flag.
     */
    getIsSavingLogoToLibrary(state: LogoGeneratorStateProp): boolean;
    /**
     * Get the isApplyingLogo flag.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The isApplyingLogo flag.
     */
    getIsApplyingLogo(state: LogoGeneratorStateProp): boolean;
    /**
     * Get the isEnhancingPrompt flag.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The isEnhancingPrompt flag.
     */
    getIsEnhancingPrompt(state: LogoGeneratorStateProp): boolean;
    /**
     * Get the isRequestingImage flag.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The isRequestingImage flag.
     */
    getIsRequestingImage(state: LogoGeneratorStateProp): boolean;
    /**
     * Get an aggregated isBusy flag, based on the loading states of the app.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The isBusy flag.
     */
    getIsBusy(state: LogoGeneratorStateProp): boolean;
    /**
     * Get the requireUpgrade value from aiAssistantFeature
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {boolean}                      The requireUpgrade flag.
     */
    getRequireUpgrade(state: LogoGeneratorStateProp): boolean;
    /**
     * Get the featureFetchError value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {RequestError}                 The featureFetchError value.
     */
    getFeatureFetchError(state: LogoGeneratorStateProp): RequestError;
    /**
     * Get the firstLogoPromptFetchError value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {RequestError}                 The firstLogoPromptFetchError value.
     */
    getFirstLogoPromptFetchError(state: LogoGeneratorStateProp): RequestError;
    /**
     * Get the enhancePromptFetchError value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {RequestError}                 The enhancePromptFetchError value.
     */
    getEnhancePromptFetchError(state: LogoGeneratorStateProp): RequestError;
    /**
     * Get the logoFetchError value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {RequestError}                 The logoFetchError value.
     */
    getLogoFetchError(state: LogoGeneratorStateProp): RequestError;
    /**
     * Get the saveToLibraryError value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {RequestError}                 The saveToLibraryError value.
     */
    getSaveToLibraryError(state: LogoGeneratorStateProp): RequestError;
    /**
     * Get the logoUpdateError value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {RequestError}                 The logoUpdateError value.
     */
    getLogoUpdateError(state: LogoGeneratorStateProp): RequestError;
    /**
     * Get the context value.
     * @param {LogoGeneratorStateProp} state - The app state tree.
     * @return {string}                       The context value.
     */
    getContext(state: LogoGeneratorStateProp): string;
};
export default selectors;
