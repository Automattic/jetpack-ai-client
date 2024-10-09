/**
 * External dependencies
 */
import TurndownService from 'turndown';
/**
 * Types
 */
import type { Options, Rule, Filter } from 'turndown';
export type Fix = 'paragraph';
export default class HTMLToMarkdown {
    turndownService: TurndownService;
    fixes: Fix[];
    constructor({ options, rules, keep, remove, fixes, }?: {
        options?: Options;
        rules?: {
            [key: string]: Rule;
        };
        keep?: Filter;
        remove?: Filter;
        fixes?: Fix[];
    });
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options         - The options to use when rendering the Markdown content
     * @param {string} options.content - The HTML content to render
     * @return {string}                 The rendered Markdown content
     */
    render({ content }: {
        content: string;
    }): string;
}
