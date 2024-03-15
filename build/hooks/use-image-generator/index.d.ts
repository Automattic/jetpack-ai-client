declare const useImageGenerator: () => {
    generateImage: ({ feature, }: {
        feature: string;
    }) => Promise<{
        data: Array<{
            url: string;
        }>;
    }>;
};
export default useImageGenerator;
