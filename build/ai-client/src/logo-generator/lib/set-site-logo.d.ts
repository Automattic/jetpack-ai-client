/**
 * Types
 */
import type { SetSiteLogoProps, SetSiteLogoResponseProps } from '../types.js';
/**
 * Set the site logo using a backend request.
 *
 * @param {SetSiteLogoProps}         setSiteLogoProps         - The properties to set the site logo
 * @param {SetSiteLogoProps.siteId}  setSiteLogoProps.siteId  - The site ID
 * @param {SetSiteLogoProps.imageId} setSiteLogoProps.imageId - The image ID to set as the site logo
 * @return {Promise<SetSiteLogoResponseProps>} The response from the request
 */
export declare function setSiteLogo({ siteId, imageId }: SetSiteLogoProps): Promise<SetSiteLogoResponseProps>;
