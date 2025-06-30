import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { useAnalytics, getJetpackExtensionAvailability, } from '@automattic/jetpack-shared-extension-utils';
import { Button, Tooltip } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { thumbsUp, thumbsDown } from '@wordpress/icons';
import clsx from 'clsx';
/*
 * Internal dependencies
 */
import './style.scss';
/**
 * Get the availability of a feature.
 *
 * @param {string} feature - The feature to check availability for.
 * @return {boolean}       - Whether the feature is available.
 */
function getFeatureAvailability(feature) {
    return getJetpackExtensionAvailability(feature).available === true;
}
/**
 * AiFeedbackThumbs component.
 *
 * @param {AiFeedbackThumbsProps} props - component props.
 * @return {ReactElement} - rendered component.
 */
export default function AiFeedbackThumbs({ disabled = false, iconSize = 24, ratedItem = '', feature = '', savedRatings = {}, options = {}, onRate, }) {
    if (!getFeatureAvailability('ai-response-feedback')) {
        return null;
    }
    const [itemsRated, setItemsRated] = useState({});
    const { tracks } = useAnalytics();
    useEffect(() => {
        const newItemsRated = { ...savedRatings, ...itemsRated };
        if (JSON.stringify(newItemsRated) !== JSON.stringify(itemsRated)) {
            setItemsRated(newItemsRated);
        }
    }, [savedRatings]);
    const checkThumb = (thumbValue) => {
        if (!itemsRated[ratedItem]) {
            return false;
        }
        return itemsRated[ratedItem] === thumbValue;
    };
    const rateAI = (isThumbsUp) => {
        const aiRating = isThumbsUp ? 'thumbs-up' : 'thumbs-down';
        if (!checkThumb(aiRating)) {
            setItemsRated({
                ...itemsRated,
                [ratedItem]: aiRating,
            });
            onRate?.(aiRating);
            tracks.recordEvent('jetpack_ai_feedback', {
                type: feature,
                rating: aiRating,
                media_library_id: options.mediaLibraryId || null,
                prompt: options.prompt || null,
                revised_prompt: options.revisedPrompt || null,
                block: options.block || null,
            });
        }
    };
    return (_jsxs("div", { className: "ai-assistant-feedback__selection", children: [_jsx(Tooltip, { text: __('I like this', 'jetpack-ai-client'), children: _jsx(Button, { disabled: disabled, icon: thumbsUp, onClick: () => rateAI(true), iconSize: iconSize, showTooltip: false, className: clsx({
                        'ai-assistant-feedback__thumb-selected': checkThumb('thumbs-up'),
                    }) }) }), _jsx(Tooltip, { text: __("I don't find this useful", 'jetpack-ai-client'), children: _jsx(Button, { disabled: disabled, icon: thumbsDown, onClick: () => rateAI(false), iconSize: iconSize, showTooltip: false, className: clsx({
                        'ai-assistant-feedback__thumb-selected': checkThumb('thumbs-down'),
                    }) }) })] }));
}
