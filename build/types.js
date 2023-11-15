export const ERROR_SERVICE_UNAVAILABLE = 'error_service_unavailable';
export const ERROR_QUOTA_EXCEEDED = 'error_quota_exceeded';
export const ERROR_MODERATION = 'error_moderation';
export const ERROR_CONTEXT_TOO_LARGE = 'error_context_too_large';
export const ERROR_NETWORK = 'error_network';
export const ERROR_UNCLEAR_PROMPT = 'error_unclear_prompt';
export const ERROR_RESPONSE = 'error_response';
/*
 * Requests types
 */
const REQUESTING_STATE_INIT = 'init';
const REQUESTING_STATE_REQUESTING = 'requesting';
const REQUESTING_STATE_SUGGESTING = 'suggesting';
const REQUESTING_STATE_DONE = 'done';
const REQUESTING_STATE_ERROR = 'error';
export const REQUESTING_STATES = [
    REQUESTING_STATE_INIT,
    REQUESTING_STATE_REQUESTING,
    REQUESTING_STATE_SUGGESTING,
    REQUESTING_STATE_DONE,
    REQUESTING_STATE_ERROR,
];
/*
 * Model types and constants
 */
export const AI_MODEL_GPT_3_5_Turbo_16K = 'gpt-3.5-turbo-16k';
export const AI_MODEL_GPT_4 = 'gpt-4';
