declare const usePostContent: () => {
    getPostContent: (preprocess?: (serialized: string) => string) => string;
    isEditedPostEmpty: () => boolean;
    getSerializedPostContent: () => string;
};
export default usePostContent;
