/**
 * Internal dependencies
 */
import HTMLToMarkdown from './html-to-markdown.js';
import MarkdownToHTML, { fixes } from './markdown-to-html.js';
/**
 * Types
 */
import type { Fix as HTMLFix } from './markdown-to-html.js';
export type RenderHTMLRules = Array<HTMLFix>;
declare const renderHTMLFromMarkdown: ({ content, rules, extension, }: {
    content: string;
    rules?: RenderHTMLRules;
    extension?: boolean;
}) => string;
declare const renderMarkdownFromHTML: ({ content }: {
    content: string;
}) => string;
export { MarkdownToHTML, HTMLToMarkdown, renderHTMLFromMarkdown, renderMarkdownFromHTML, fixes };
