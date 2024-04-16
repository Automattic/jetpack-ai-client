/**
 * External dependencies
 */
import TurndownService from 'turndown';
/**
 * Types
 */
import type { Options, Rule } from 'turndown';
export default class HTMLToMarkdown {
    turndownService: TurndownService;
    constructor(options?: Options, rules?: {
        [key: string]: Rule;
    });
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options         - The options to use when rendering the Markdown content
     * @param {string} options.content - The HTML content to render
     * @returns {string}                 The rendered Markdown content
     */
    render({ content }: {
        content: string;
    }): string;
}
