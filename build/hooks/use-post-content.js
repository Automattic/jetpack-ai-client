/**
 * External dependencies
 */
import { serialize } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
/**
 * Types
 */
import { renderMarkdownFromHTML } from '../libs/markdown/index.js';
/**
 * Internal dependencies
 */
/*
 * Simple helper to get the post content as markdown
 */
const usePostContent = () => {
    const blocks = useSelect(select => select('core/block-editor').getBlocks(), []);
    return blocks?.length ? renderMarkdownFromHTML({ content: serialize(blocks) }) : '';
};
export default usePostContent;
