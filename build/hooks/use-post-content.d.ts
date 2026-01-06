declare const usePostContent: () => {
    getPostContent: (preprocess?: (serialized: string) => string) => string;
    isEditedPostEmpty: () => boolean;
    getSerializedPostContent: () => any;
};
export default usePostContent;
