/**
 * External dependencies
 */
import TurndownService from 'turndown';
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
    constructor(options = defaultTurndownOptions, rules = defaultTurndownRules) {
        this.turndownService = new TurndownService(options);
        for (const rule in rules) {
            this.turndownService.addRule(rule, rules[rule]);
        }
    }
    /**
     * Renders HTML from Markdown content with specified processing rules.
     * @param {object} options         - The options to use when rendering the Markdown content
     * @param {string} options.content - The HTML content to render
     * @returns {string}                 The rendered Markdown content
     */
    render({ content }) {
        return this.turndownService.turndown(content);
    }
}
