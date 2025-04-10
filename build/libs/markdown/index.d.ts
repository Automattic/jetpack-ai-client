/**
 * Internal dependencies
 */
import HTMLToMarkdown from './html-to-markdown.ts';
import MarkdownToHTML, { fixes } from './markdown-to-html.ts';
/**
 * Types
 */
import type { Fix as HTMLFix } from './markdown-to-html.ts';
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
