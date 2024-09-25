/**
 * The type of the response from the image generation API.
 */
type ImageGenerationResponse = {
    data: Array<{
        [key: string]: string;
    }>;
};
declare const useImageGenerator: () => {
    generateImage: ({ feature, postContent, responseFormat, userPrompt, }: {
        feature: string;
        postContent: string;
        responseFormat?: 'url' | 'b64_json';
        userPrompt?: string;
    }) => Promise<ImageGenerationResponse>;
    generateImageWithStableDiffusion: ({ feature, postContent, userPrompt, }: {
        feature: string;
        postContent: string;
        userPrompt?: string;
    }) => Promise<ImageGenerationResponse>;
    generateImageWithParameters: (parameters: object) => Promise<ImageGenerationResponse>;
    getImageStyles: () => object;
};
export default useImageGenerator;
export * from './constants.js';
