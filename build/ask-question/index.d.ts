import SuggestionsEventSource from '../suggestions-event-source/index.js';
import type { AiModelTypeProp, PromptProp } from '../types.js';
export type AskQuestionOptionsArgProps = {
    postId?: number;
    fromCache?: boolean;
    feature?: 'ai-assistant-experimental' | string | undefined;
    model?: AiModelTypeProp;
    functions?: Array<{
        name?: string;
        arguments?: string;
        implementation?: Function;
    }>;
};
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
export default function askQuestion(question: PromptProp, { postId, fromCache, feature, functions, model }?: AskQuestionOptionsArgProps): Promise<SuggestionsEventSource>;
