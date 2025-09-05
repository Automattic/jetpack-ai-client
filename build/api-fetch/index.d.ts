/**
 * External dependencies
 */
import apiFetchMod from '@wordpress/api-fetch';
/**
 * Types
 */
import type { APIFetchOptions } from '@wordpress/api-fetch';
declare const apiFetch: apiFetchMod.default;
type ApiFetchType = typeof apiFetch extends Function ? typeof apiFetch : typeof apiFetchMod;
type AugmentedAPIFetchOptions = APIFetchOptions & {
    global?: boolean;
};
type AugmentedApiFetchType = (options: AugmentedAPIFetchOptions) => ReturnType<ApiFetchType>;
declare const _default: AugmentedApiFetchType;
export default _default;
