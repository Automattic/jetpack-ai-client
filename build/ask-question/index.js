/**
 * External dependencies
 */
import debugFactory from 'debug';
import SuggestionsEventSource from '../suggestions-event-source/index.js';
const debug = debugFactory('jetpack-ai-client:ask-question');
/**
 * An asynchronous function that asks a question
 * and returns an event source with suggestions.
 *
 * @param {PromptProp} question - The question to ask. It can be a simple string or an array of PromptMessageItemProps objects.
 * @param {AskQuestionOptionsArgProps} options - An optional object for additional configuration:
 * @returns {Promise<SuggestionsEventSource>}    A promise that resolves to an instance of the SuggestionsEventSource
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
export default async function askQuestion(question, { postId = null, fromCache = false, feature, functions, model } = {}) {
    debug('Asking question: %o. options: %o', question, {
        postId,
        fromCache,
        feature,
        functions,
        model,
    });
    return new SuggestionsEventSource({
        question,
        options: { postId, feature, fromCache, functions, model },
    });
}
