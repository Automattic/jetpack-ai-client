/**
 * External dependencies
 */
import TurndownService from 'turndown';
const fixesList = {
    paragraph: (content) => {
        // Keep <br> tags to prevent paragraphs from being split
        return content.replaceAll('\n', '<br />');
    },
};
const defaultTurndownOptions = { emDelimiter: '_', headingStyle: 'atx' };
const defaultTurndownRules = {
    strikethrough: {
        filter: ['del', 's'],
        replacement: function (content) {
            return '~~' + content + '~~';
        },
    },
};
export default class HTMLToMarkdown {
    turndownService;
    fixes;
    constructor({ options = {}, rules = {}, keep = [], remove = [], fixes = [], } = {}) {
        this.fixes = fixes;
        this.turndownService = new TurndownService({ ...defaultTurndownOptions, ...options });
        this.turndownService.keep(keep);
        this.turndownService.remove(remove);
        const allRules = { ...defaultTurndownRules, ...rules };
        for (const rule in allRules) {
            this.turndownService.addRule(rule, allRules[rule]);
        }
    }
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options         - The options to use when rendering the Markdown content
     * @param {string} options.content - The HTML content to render
     * @returns {string}                 The rendered Markdown content
     */
    render({ content }) {
        const rendered = this.turndownService.turndown(content);
        return this.fixes.reduce((renderedContent, fix) => {
            return fixesList[fix](renderedContent);
        }, rendered);
    }
}
