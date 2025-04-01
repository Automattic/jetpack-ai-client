/**
 * External dependencies
 */
import apiFetchMod from '@wordpress/api-fetch';
declare const apiFetch: typeof apiFetchMod.default;
type ApiFetchType = typeof apiFetch extends Function ? typeof apiFetch : typeof apiFetchMod;
declare const _default: ApiFetchType;
export default _default;
