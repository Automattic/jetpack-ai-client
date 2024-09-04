/**
 * Types
 */
import type { Logo, SaveLogo } from '../store/types.js';
declare const useLogoGenerator: () => {
    logos: Logo[];
    selectedLogoIndex: number;
    selectedLogo: Logo;
    setSelectedLogoIndex: any;
    site: {
        id: string;
        name: string;
        description: string;
    };
    generateFirstPrompt: () => Promise<string>;
    saveLogo: SaveLogo;
    applyLogo: () => Promise<void>;
    generateImage: ({ prompt, }: {
        prompt: string;
    }) => Promise<{
        data: Array<{
            url: string;
        }>;
    }>;
    enhancePrompt: ({ prompt }: {
        prompt: string;
    }) => Promise<string>;
    storeLogo: (logo: Logo) => void;
    generateLogo: ({ prompt }: {
        prompt: string;
    }) => Promise<void>;
    setIsEnhancingPrompt: any;
    setIsRequestingImage: any;
    setIsSavingLogoToLibrary: any;
    setIsApplyingLogo: any;
    setContext: any;
    isEnhancingPrompt: boolean;
    isRequestingImage: boolean;
    isSavingLogoToLibrary: boolean;
    isApplyingLogo: boolean;
    isBusy: boolean;
    getAiAssistantFeature: (siteId?: string) => Partial<import("../store/types.js").AiFeatureProps>;
    requireUpgrade: boolean;
    context: string;
    tierPlansEnabled: boolean;
    isLoadingHistory: boolean;
    setIsLoadingHistory: any;
};
export default useLogoGenerator;
