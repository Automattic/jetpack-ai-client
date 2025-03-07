/**
 * External dependencies
 */
import { select } from '@wordpress/data';
/**
 * Recursively get all blocks from the post, including nested innerBlocks
 * @return {Array} Array of all blocks in the post
 */
export const getAllBlocks = () => {
    const topLevelBlocks = select('core/block-editor').getBlocks();
    const allBlocks = [];
    const processBlock = (block) => {
        allBlocks.push(block);
        if (block.innerBlocks?.length) {
            block.innerBlocks.forEach(processBlock);
        }
    };
    topLevelBlocks.forEach(processBlock);
    return allBlocks;
};
