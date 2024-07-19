/**
 * Types
 */
import { Logo } from '../store/types.js';
import { RemoveFromStorageProps, SaveToStorageProps, UpdateInStorageProps } from '../types.js';
/**
 * Add an entry to the site's logo history.
 *
 * @param {SaveToStorageProps} saveToStorageProps - The properties to save to storage
 * @param {SaveToStorageProps.siteId} saveToStorageProps.siteId - The site ID
 * @param {SaveToStorageProps.url} saveToStorageProps.url - The URL of the logo
 * @param {SaveToStorageProps.description} saveToStorageProps.description - The description of the logo, based on the prompt used to generate it
 * @param {SaveToStorageProps.mediaId} saveToStorageProps.mediaId - The media ID of the logo on the backend
 *
 * @returns {Logo} The logo that was saved
 */
export declare function stashLogo({ siteId, url, description, mediaId }: SaveToStorageProps): Logo;
/**
 * Update an entry in the site's logo history.
 *
 * @param {UpdateInStorageProps} updateInStorageProps - The properties to update in storage
 * @param {UpdateInStorageProps.siteId} updateInStorageProps.siteId - The site ID
 * @param {UpdateInStorageProps.url} updateInStorageProps.url - The URL of the logo to update
 * @param {UpdateInStorageProps.newUrl} updateInStorageProps.newUrl - The new URL of the logo
 * @param {UpdateInStorageProps.mediaId} updateInStorageProps.mediaId - The new media ID of the logo
 * @returns {Logo} The logo that was updated
 */
export declare function updateLogo({ siteId, url, newUrl, mediaId }: UpdateInStorageProps): Logo;
/**
 * Get the logo history for a site.
 *
 * @param {string} siteId - The site ID to get the logo history for
 * @returns {Logo[]} The logo history for the site
 */
export declare function getSiteLogoHistory(siteId: string): Logo[];
/**
 * Check if the logo history for a site is empty.
 *
 * @param {string }siteId - The site ID to check the logo history for
 * @returns {boolean} Whether the logo history for the site is empty
 */
export declare function isLogoHistoryEmpty(siteId: string): boolean;
/**
 * Remove an entry from the site's logo history.
 *
 * @param {RemoveFromStorageProps} removeFromStorageProps - The properties to remove from storage
 * @param {RemoveFromStorageProps.siteId} removeFromStorageProps.siteId - The site ID
 * @param {RemoveFromStorageProps.mediaId} removeFromStorageProps.mediaId - The media ID of the logo to remove
 * @returns {void}
 */
export declare function removeLogo({ siteId, mediaId }: RemoveFromStorageProps): void;
/**
 * Clear deleted media from the site's logo history, checking if the media still exists on the backend.
 *
 * @param {string} siteId - The site ID to clear deleted media for
 * @returns {Promise<void>}
 */
export declare function clearDeletedMedia(siteId: string): Promise<void>;
