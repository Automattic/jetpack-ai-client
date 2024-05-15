/**
 * Internal dependencies
 */
import HTMLToMarkdown from './html-to-markdown.js';
import MarkdownToHTML from './markdown-to-html.js';
/**
 * Types
 */
import type { Fix as HTMLFix } from './markdown-to-html.js';
export type RenderHTMLRules = 'all' | Array<HTMLFix>;
declare const renderHTMLFromMarkdown: ({ content, rules, }: {
    content: string;
    rules?: RenderHTMLRules;
}) => string;
declare const renderMarkdownFromHTML: ({ content }: {
    content: string;
}) => string;
export { MarkdownToHTML, HTMLToMarkdown, renderHTMLFromMarkdown, renderMarkdownFromHTML };
