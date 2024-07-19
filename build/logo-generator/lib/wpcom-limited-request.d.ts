/**
 * Concurrency-limited request to wpcom-proxy-request.
 * @param { object } params - The request params, as expected by apiFetch.
 * @returns { Promise }                   The response.
 * @throws { Error }                      If there are too many concurrent requests.
 */
export default function wpcomLimitedRequest<T>(params: object): Promise<T>;
