/**
 * Internal dependencies
 */
import HTMLToMarkdown from './html-to-markdown.js';
import MarkdownToHTML from './markdown-to-html.js';
const defaultMarkdownConverter = new MarkdownToHTML();
const defaultHTMLConverter = new HTMLToMarkdown();
const renderHTMLFromMarkdown = ({ content, rules = 'all', }) => {
    return defaultMarkdownConverter.render({ content, rules });
};
const renderMarkdownFromHTML = ({ content }) => {
    return defaultHTMLConverter.render({ content });
};
export { MarkdownToHTML, HTMLToMarkdown, renderHTMLFromMarkdown, renderMarkdownFromHTML };
