/**
 * Internal dependencies
 */
import HTMLToMarkdown from './html-to-markdown.js';
import MarkdownToHTML from './markdown-to-html.js';
const defaultMarkdownConverter = new MarkdownToHTML();
const defaultHTMLConverter = new HTMLToMarkdown();
const renderHTMLFromMarkdown = ({ content, rules, extension, }) => {
    return defaultMarkdownConverter.render({ content, rules, extension });
};
const renderMarkdownFromHTML = ({ content }) => {
    return defaultHTMLConverter.render({ content });
};
export { MarkdownToHTML, HTMLToMarkdown, renderHTMLFromMarkdown, renderMarkdownFromHTML };
