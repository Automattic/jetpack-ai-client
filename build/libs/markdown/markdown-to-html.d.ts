/**
 * External dependencies
 */
import MarkdownIt from 'markdown-it';
/**
 * Types
 */
import type { Options } from 'markdown-it';
export type Fix = 'list' | 'paragraph' | 'listItem' | 'table';
type Fixes = {
    [key in Fix]: (content: string, extension?: boolean, options?: {
        [key: string]: unknown;
    }) => string;
};
export declare const fixes: Fixes;
export default class MarkdownToHTML {
    markdownConverter: MarkdownIt;
    constructor(options?: Options);
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options            - The options to use when rendering the HTML content
     * @param {string} options.content    - The Markdown content to render
     * @param {string} options.rules      - The rules to apply to the rendered content
     * @param {boolean} options.extension - Whether to apply the extension-specific rules
     * @returns {string}                    The rendered HTML content
     */
    render({ content, rules, extension, }: {
        content: string;
        rules: Array<Fix>;
        extension?: boolean;
    }): string;
}
export {};
