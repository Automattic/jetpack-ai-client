declare const useImageGenerator: () => {
    generateImage: ({ feature, postContent, responseFormat, }: {
        feature: string;
        postContent: string;
        responseFormat?: 'url' | 'b64_json';
    }) => Promise<{
        data: {
            [key: string]: string;
        }[];
    }>;
};
export default useImageGenerator;
