/**
 * External dependencies
 */
import { select } from '@wordpress/data';
import debugFactory from 'debug';
/**
 * Internal dependencies
 */
import SuggestionsEventSource from "../suggestions-event-source/index.js";
const debug = debugFactory('jetpack-ai-client:ask-question');
/**
 * An asynchronous function that asks a question
 * and returns an event source with suggestions.
 *
 * @param {PromptProp}                 question - The question to ask. It can be a simple string or an array of PromptMessageItemProps objects.
 * @param {AskQuestionOptionsArgProps} options  - An optional object for additional configuration:
 * @return {Promise<SuggestionsEventSource>}    A promise that resolves to an instance of the SuggestionsEventSource
 * @example
 *  const question = "What is the meaning of life?";
 *  const options = {
 *      postId: 1,
 *      fromCache: true,
 *      feature: 'ai-assistant-experimental'
 *  }
 *  askQuestion( question, options ).then( suggestionsEventSource => {
 *      // handle suggestionsEventSource
 *  } );
 */
export default async function askQuestion(question, { postId = null, fromCache = false, feature, functions, model, languageCode, } = {}) {
    const code = languageCode || select('core').getEntityRecord('root', 'site')?.language || 'en_US';
    debug('Asking question: %o. options: %o', question, {
        postId,
        fromCache,
        feature,
        functions,
        model,
        languageCode: code,
    });
    return new SuggestionsEventSource({
        question,
        options: {
            postId,
            feature,
            fromCache,
            functions,
            model,
            languageCode: code,
        },
    });
}
