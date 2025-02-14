import { PromptProp } from '../types.js';
import ChromeAISuggestionsEventSource from './suggestions.js';
/**
 * This will return an instance of ChromeAISuggestionsEventSource or false.
 *
 * @param promptArg - The messages array of the prompt.
 * @return ChromeAISuggestionsEventSource | bool
 */
export default function ChromeAIFactory(promptArg: PromptProp): Promise<false | ChromeAISuggestionsEventSource>;
