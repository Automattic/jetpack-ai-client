type RequestTokenOptions = {
    apiNonce?: string;
    siteId?: string;
    isJetpackSite?: boolean;
    expirationTime?: number;
};
type TokenDataProps = {
    token: string;
    blogId: string;
    expire: number;
};
/**
 * Request a token from the Jetpack site.
 *
 * @param {RequestTokenOptions} options - Options
 * @return {Promise<TokenDataProps>}     The token and the blogId
 */
export default function requestJwt({ apiNonce, siteId, expirationTime, }?: RequestTokenOptions): Promise<TokenDataProps>;
export {};
