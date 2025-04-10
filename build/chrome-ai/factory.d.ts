import { PromptProp } from '../types.ts';
import ChromeAISuggestionsEventSource from './suggestions.ts';
/**
 * This will return an instance of ChromeAISuggestionsEventSource or false.
 *
 * @param promptArg - The messages array of the prompt.
 * @return ChromeAISuggestionsEventSource | bool
 */
export default function ChromeAIFactory(promptArg: PromptProp): Promise<false | ChromeAISuggestionsEventSource>;
