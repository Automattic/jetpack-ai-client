/**
 * External dependencies
 */
import { serialize } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
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
    const getPostContent = useCallback(() => {
        return blocks?.length ? renderMarkdownFromHTML({ content: serialize(blocks) }) : '';
    }, [blocks]);
    // TODO: Check all the places that use this hook and optimize them for performance
    return { getPostContent };
};
export default usePostContent;
