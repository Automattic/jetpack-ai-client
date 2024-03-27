declare const useImageGenerator: () => {
    generateImage: ({ feature, postContent, }: {
        feature: string;
        postContent: string;
    }) => Promise<{
        data: Array<{
            url: string;
        }>;
    }>;
};
export default useImageGenerator;
