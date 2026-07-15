import { ImageStyleObject, ImageStyle } from '../../../hooks/use-image-generator/constants.ts';
/**
 * Types
 */
import { FEATURED_IMAGE_FEATURE_NAME, GENERAL_IMAGE_FEATURE_NAME } from '../types.ts';
import type { CarrouselImageData, CarrouselImages } from '../components/carrousel.tsx';
type AiImageType = 'featured-image-generation' | 'general-image-generation';
type AiImageFeature = typeof FEATURED_IMAGE_FEATURE_NAME | typeof GENERAL_IMAGE_FEATURE_NAME;
export type ImageResponse = {
    image?: string;
    libraryId?: string;
    libraryUrl?: string;
    revisedPrompt?: string;
};
type ProcessImageGenerationProps = {
    userPrompt?: string | null;
    postContent?: string | null;
    notEnoughRequests: boolean;
    style?: string;
};
type UseAiImageProps = {
    feature: AiImageFeature;
    type: AiImageType;
    cost: number;
    autoStart?: boolean;
    previousMediaId?: number;
};
/**
 * Hook to get properties for AiImage
 *
 * @param {UseAiImageProps} props - The component properties.
 * @return {UseAiImageReturn} - Object containing properties for AiImage.
 */
export default function useAiImage({ feature, type, cost, autoStart, previousMediaId, }: UseAiImageProps): {
    current: number;
    setCurrent: import("react").Dispatch<import("react").SetStateAction<number>>;
    processImageGeneration: ({ userPrompt, postContent, notEnoughRequests, style, }: ProcessImageGenerationProps) => Promise<ImageResponse>;
    handlePreviousImage: () => void;
    handleNextImage: () => void;
    currentImage: CarrouselImageData;
    currentPointer: CarrouselImageData;
    images: CarrouselImages;
    pointer: import("react").MutableRefObject<number>;
    imageStyles: ImageStyleObject[];
    guessStyle: (prompt: string, requestType?: string, content?: string) => Promise<ImageStyle | null>;
};
export {};
