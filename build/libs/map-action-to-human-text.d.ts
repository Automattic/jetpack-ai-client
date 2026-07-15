type MapActionToHumanTextOptions = {
    language?: string;
    tone?: string;
};
/**
 * Maps an action to a human-readable text.
 *
 * @param  action  - The action to map.
 * @param  options - The options for the mapping.
 * @return {string} The human-readable text.
 */
export declare function mapActionToHumanText(action: string, options?: MapActionToHumanTextOptions): string | null;
export {};
