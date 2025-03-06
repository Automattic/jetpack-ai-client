declare const usePostContent: () => {
    getPostContent: (preprocess?: (serialized: string) => string) => string;
    isEditedPostEmpty: () => boolean;
};
export default usePostContent;
