import { AskQuestionOptionsArgProps } from './index.js';
import type { PromptProp } from '../types.js';
/**
 * The response data from the AI assistant when doing a sync, not-streamed question.
 */
export type ResponseData = string;
/**
 * A function that asks a question without streaming.
 *
 * @param {PromptProp} question - The question to ask. It can be a simple string or an array of PromptMessageItemProps objects.
 * @param {AskQuestionOptionsArgProps} options - An optional object for additional configuration: postId, feature, model.
 * @returns {Promise<ResponseData>} - A promise that resolves to an instance of the ResponseData
 * @example
 * const question = "What is the meaning of life?";
 * const options = {
 *   feature: 'ai-featured-image',
 *   model: 'gpt-4-turbo'
 * }
 * askQuestionSync( question, options ).then( responseData => {
 *    // access the choices array on the response data
 *    const content = responseData.choices[ 0 ].message.content;
 * } );
 */
export default function askQuestionSync(question: PromptProp, options?: AskQuestionOptionsArgProps): Promise<ResponseData>;
