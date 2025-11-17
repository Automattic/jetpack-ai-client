declare const usePostContent: () => {
    getPostContent: (preprocess?: (serialized: string) => string) => string;
    isEditedPostEmpty: any;
    getSerializedPostContent: () => any;
};
export default usePostContent;
