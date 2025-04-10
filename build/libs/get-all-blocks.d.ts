/**
 * Internal dependencies
 */
import type { Block } from '../types.ts';
/**
 * Recursively get all blocks from the post, including nested innerBlocks
 * @return {Array} Array of all blocks in the post
 */
export declare const getAllBlocks: () => Array<Block>;
