/**
 * External dependencies
 */
import MarkdownIt from 'markdown-it';
const fixes = {
    list: (content) => {
        // Fix list indentation
        return content.replace(/<li>\s+<p>/g, '<li>').replace(/<\/p>\s+<\/li>/g, '</li>');
    },
};
const defaultMarkdownItOptions = {
    breaks: true,
};
export default class MarkdownToHTML {
    markdownConverter;
    constructor(options = defaultMarkdownItOptions) {
        this.markdownConverter = new MarkdownIt(options);
    }
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options         - The options to use when rendering the HTML content
     * @param {string} options.content - The Markdown content to render
     * @param {string} options.rules   - The rules to apply to the rendered content
     * @returns {string}                 The rendered HTML content
     */
    render({ content, rules = 'all' }) {
        const rendered = this.markdownConverter.render(content);
        const rulesToApply = rules === 'all' ? Object.keys(fixes) : rules;
        return rulesToApply.reduce((renderedContent, rule) => {
            return fixes[rule](renderedContent);
        }, rendered);
    }
}
