/**
 * External dependencies
 */
import MarkdownIt from 'markdown-it';
const addListComments = (content) => {
    return (content
        // First remove any existing Gutenberg comments to avoid duplicates
        .replaceAll('<!-- wp:list-item -->', '')
        .replaceAll('<!-- /wp:list-item -->', '')
        .replaceAll('<!-- wp:list -->', '')
        .replaceAll('<!-- /wp:list -->', '')
        // Add Gutenberg comments to <li> tags
        .replaceAll('<li>', '<!-- wp:list-item --><li>')
        .replaceAll('</li>', '</li><!-- /wp:list-item -->')
        // Add Gutenberg comments to <ol> tags
        .replaceAll('<ol>', '<!-- wp:list {"ordered":true} --><ol>')
        .replaceAll('</ol>', '</ol><!-- /wp:list -->')
        // Add Gutenberg comments to <ul> tags
        .replaceAll('<ul>', '<!-- wp:list --><ul>')
        .replaceAll('</ul>', '</ul><!-- /wp:list -->'));
};
export const fixes = {
    list: (content, extension = false) => {
        // Fix list indentation
        const fixedIndentation = content
            .replace(/<li>\s+<p>/g, '<li>')
            .replace(/<\/p>\s+<\/li>/g, '</li>');
        return extension ? addListComments(fixedIndentation) : fixedIndentation;
    },
    listItem: (content, extension = false) => {
        if (!extension) {
            return content;
        }
        return addListComments(content
            // Remove wrapping <ul> or <ol> tag
            .replace(/^<[ou]l>\s*/g, '')
            .replace(/\s*<\/[ou]l>\s*$/g, ''));
    },
    paragraph: (content, extension = false) => {
        if (!extension) {
            return content;
        }
        // Fix encoding of <br /> tags
        return content.replaceAll(/\s*&lt;br \/&gt;\s*/g, '<br />');
    },
    table: (content, extension = false, { hasFixedLayout = false }) => {
        if (!extension) {
            return content;
        }
        if (content.startsWith('<!-- wp:table')) {
            return content;
        }
        return `<!-- wp:table { "hasFixedLayout":${hasFixedLayout ? 'true' : 'false'} } -->${content}<!-- /wp:table -->`;
    },
};
const defaultMarkdownItOptions = {
    breaks: true,
};
// The rules used by the AI Assistant block
const assistantBlockRules = ['list'];
export default class MarkdownToHTML {
    markdownConverter;
    constructor(options = defaultMarkdownItOptions) {
        this.markdownConverter = new MarkdownIt(options);
    }
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object}  options           - The options to use when rendering the HTML content
     * @param {string}  options.content   - The Markdown content to render
     * @param {string}  options.rules     - The rules to apply to the rendered content
     * @param {boolean} options.extension - Whether to apply the extension-specific rules
     * @return {string}                    The rendered HTML content
     */
    render({ content, rules = assistantBlockRules, extension = false, }) {
        const rendered = this.markdownConverter.render(content);
        return rules.reduce((renderedContent, rule) => {
            return fixes[rule](renderedContent, extension);
        }, rendered);
    }
}
