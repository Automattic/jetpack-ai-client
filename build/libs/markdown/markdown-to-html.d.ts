/**
 * External dependencies
 */
import MarkdownIt from 'markdown-it';
/**
 * Types
 */
import type { Options } from 'markdown-it';
export type Fix = 'list' | 'paragraph';
export default class MarkdownToHTML {
    markdownConverter: MarkdownIt;
    constructor(options?: Options);
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options         - The options to use when rendering the HTML content
     * @param {string} options.content - The Markdown content to render
     * @param {string} options.rules   - The rules to apply to the rendered content
     * @returns {string}                 The rendered HTML content
     */
    render({ content, rules }: {
        content: string;
        rules: Array<Fix> | 'all';
    }): string;
}
