export declare const FEATURED_IMAGE_FEATURE_NAME: "featured-post-image";
export declare const GENERAL_IMAGE_FEATURE_NAME: "general-image";
export declare const IMAGE_GENERATION_MODEL_STABLE_DIFFUSION: "stable-diffusion";
export declare const IMAGE_GENERATION_MODEL_DALL_E_3: "dall-e-3";
export declare const PLACEMENT_MEDIA_SOURCE_DROPDOWN: "media-source-dropdown";
export declare const PLACEMENT_BLOCK_PLACEHOLDER_BUTTON: "block-placeholder-button";
export interface EditorSelectors {
    getEditedPostAttribute: (attribute: string) => number;
    isEditorPanelOpened: (panel: string) => boolean;
}
export interface CoreSelectors {
    getMedia: (mediaId: number) => {
        id: number;
        source_url: string;
    } | null;
}
