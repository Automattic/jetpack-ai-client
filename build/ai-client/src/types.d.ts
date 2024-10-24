import type * as BlockEditorSelectors from '@wordpress/block-editor/store/selectors.js';
export declare const ERROR_SERVICE_UNAVAILABLE: "error_service_unavailable";
export declare const ERROR_QUOTA_EXCEEDED: "error_quota_exceeded";
export declare const ERROR_MODERATION: "error_moderation";
export declare const ERROR_CONTEXT_TOO_LARGE: "error_context_too_large";
export declare const ERROR_NETWORK: "error_network";
export declare const ERROR_UNCLEAR_PROMPT: "error_unclear_prompt";
export declare const ERROR_RESPONSE: "error_response";
export type SuggestionErrorCode = typeof ERROR_SERVICE_UNAVAILABLE | typeof ERROR_QUOTA_EXCEEDED | typeof ERROR_MODERATION | typeof ERROR_CONTEXT_TOO_LARGE | typeof ERROR_NETWORK | typeof ERROR_UNCLEAR_PROMPT | typeof ERROR_RESPONSE;
export declare const ROLE_SYSTEM: "system";
export declare const ROLE_USER: "user";
export declare const ROLE_ASSISTANT: "assistant";
export declare const ROLE_JETPACK_AI: "jetpack-ai";
export type RoleType = typeof ROLE_SYSTEM | typeof ROLE_USER | typeof ROLE_ASSISTANT | typeof ROLE_JETPACK_AI;
export type PromptItemProps = {
    role: RoleType;
    content?: string;
    context?: object;
};
export type PromptMessagesProp = Array<PromptItemProps>;
export type PromptProp = PromptMessagesProp | string;
export type { UseAiContextOptions } from './data-flow/use-ai-context.js';
export type { RequestingErrorProps } from './hooks/use-ai-suggestions/index.js';
export type { UseAudioTranscriptionProps, UseAudioTranscriptionReturn, } from './hooks/use-audio-transcription/index.js';
export type { UseTranscriptionPostProcessingProps, UseTranscriptionPostProcessingReturn, PostProcessingAction, } from './hooks/use-transcription-post-processing/index.js';
export type { UseAudioValidationReturn, ValidatedAudioInformation, } from './hooks/use-audio-validation/index.js';
export { TRANSCRIPTION_POST_PROCESSING_ACTION_SIMPLE_DRAFT } from './hooks/use-transcription-post-processing/index.js';
export declare const REQUESTING_STATES: readonly ["init", "requesting", "suggesting", "done", "error"];
export type RequestingStateProp = (typeof REQUESTING_STATES)[number];
export declare const AI_MODEL_GPT_3_5_Turbo_16K: "gpt-3.5-turbo-16k";
export declare const AI_MODEL_GPT_4: "gpt-4";
export type AiModelTypeProp = typeof AI_MODEL_GPT_3_5_Turbo_16K | typeof AI_MODEL_GPT_4;
export type { RecordingState } from './hooks/use-media-recording/index.js';
export type CancelablePromise<T = void> = Promise<T> & {
    canceled?: boolean;
};
export type Block = {
    attributes?: {
        [key: string]: unknown;
    };
    clientId?: string;
    innerBlocks?: Block[];
    isValid?: boolean;
    name?: string;
    originalContent?: string;
};
export type TranscriptionState = RecordingState | 'validating' | 'processing' | 'error';
export type { RenderHTMLRules } from './libs/index.js';
export interface BlockEditorStore {
    selectors: {
        [key in keyof typeof BlockEditorSelectors]: (typeof BlockEditorSelectors)[key];
    };
}
