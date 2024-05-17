declare const useImageGenerator: () => {
    generateImage: ({ feature, postContent, responseFormat, userPrompt, }: {
        feature: string;
        postContent: string;
        responseFormat?: 'url' | 'b64_json';
        userPrompt?: string;
    }) => Promise<{
        data: {
            [key: string]: string;
        }[];
    }>;
    generateImageWithStableDiffusion: ({ feature, postContent, userPrompt, }: {
        feature: string;
        postContent: string;
        userPrompt?: string;
    }) => Promise<{
        data: {
            [key: string]: string;
        }[];
    }>;
};
export default useImageGenerator;
