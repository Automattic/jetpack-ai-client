import { GetRedirectUrlArgs } from './types.js';
/**
 * Builds an URL using the jetpack.com/redirect/ service
 *
 * If source is a simple slug, it will be sent using the source query parameter. e.g. jetpack.com/redirect/?source=slug
 *
 * If source is a full URL, starting with https://, it will be sent using the url query parameter. e.g. jetpack.com/redirect/?url=https://wordpress.com
 *
 * Note: if using full URL, query parameters and anchor must be passed in args. Any querystring of url fragment in the URL will be discarded.
 *
 * @since 0.2.0
 * @param {string}             source - The URL handler registered in the server or the full destination URL (starting with https://).
 * @param {GetRedirectUrlArgs} args   - Additional arguments to build the url.
 *                                    This is not a complete list as any argument passed here
 *                                    will be sent to as a query parameter to the Redirect server.
 *                                    These parameters will not necessarily be passed over to the final destination URL.
 *                                    If you want to add a parameter to the final destination URL, use the `query` argument.
 * @return {string} The redirect URL
 */
export default function getRedirectUrl(source: string, args?: GetRedirectUrlArgs): string;
