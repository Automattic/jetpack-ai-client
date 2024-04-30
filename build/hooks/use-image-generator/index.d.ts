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
};
export default useImageGenerator;
