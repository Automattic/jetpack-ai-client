import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, chevronLeft, chevronRight } from '@wordpress/icons';
import clsx from 'clsx';
import AiFeedbackThumbs from '../../ai-feedback/index.js';
import AiIcon from '../../ai-icon/index.js';
import './carrousel.scss';
/**
 * BlankImage component
 * @param {BlankImageProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
function BlankImage({ children, isDotted = false, contentClassName = '' }) {
    const blankImage = (_jsx("img", { className: "ai-assistant-image__carrousel-image", src: "data:image/svg+xml,<svg viewBox='0 0 1 1' width='1024' height='768' xmlns='http://www.w3.org/2000/svg'><path d='M0 0 L1 0 L1 1 L0 1 L0 0 Z' fill='none' /></svg>", alt: "" }));
    return (_jsxs("div", { className: "ai-assistant-image__blank", children: [blankImage, _jsx("div", { className: clsx('ai-assistant-image__blank-content', contentClassName, {
                    'is-dotted': isDotted,
                }), children: children })] }));
}
/**
 * Carrousel component
 * @param {CarrouselProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function Carrousel({ images, current, handlePreviousImage, handleNextImage, actions = null, }) {
    const [imageFeedbackDisabled, setImageFeedbackDisabled] = useState(false);
    const prevButton = (_jsx("button", { className: "ai-carrousel__prev", onClick: handlePreviousImage, children: _jsx(Icon, { icon: chevronLeft, className: clsx('ai-carrousel__prev-icon', {
                'is-disabled': current === 0,
            }) }) }));
    const nextButton = (_jsx("button", { className: "ai-carrousel__next", onClick: handleNextImage, children: _jsx(Icon, { icon: chevronRight, className: clsx('ai-carrousel__next-icon', {
                'is-disabled': current + 1 === images.length,
            }) }) }));
    const total = images?.filter?.(item => item?.generating || Object.hasOwn(item, 'image') || Object.hasOwn(item, 'libraryId'))?.length;
    const actual = current === 0 && total === 0 ? 0 : current + 1;
    useEffect(() => {
        const imageData = images[current];
        if (!imageData) {
            setImageFeedbackDisabled(true);
        }
        const { image, generating, error } = imageData || {};
        // disable if there's an empty modal
        if (!image && !generating && !error) {
            return setImageFeedbackDisabled(true);
        }
        // also disable if we're generating or have an error
        if (generating || error) {
            return setImageFeedbackDisabled(true);
        }
        setImageFeedbackDisabled(false);
    }, [current, images]);
    return (_jsxs("div", { className: "ai-assistant-image__carrousel", children: [_jsxs("div", { className: "ai-assistant-image__carrousel-images", children: [images.length > 1 && prevButton, images.map(({ image, generating, error, revisedPrompt, libraryUrl }, index) => (_jsx("div", { className: clsx('ai-assistant-image__carrousel-image-container', {
                            'is-current': current === index,
                            'is-prev': current > index,
                        }), children: generating ? (_jsxs(BlankImage, { contentClassName: "ai-assistant-image__loading", children: [__('Creating image…', 'jetpack-ai-client'), _jsx(Spinner, { style: {
                                        width: '50px',
                                        height: '50px',
                                    } })] })) : (_jsx(_Fragment, { children: error ? (_jsx(BlankImage, { isDotted: true, children: _jsxs("div", { className: "ai-assistant-image__error", children: [__('An error occurred while generating the image. Please, try again!', 'jetpack-ai-client'), error?.message && (_jsx("span", { className: "ai-assistant-image__error-message", children: error?.message }))] }) })) : (_jsx(_Fragment, { children: !generating && !image && !libraryUrl ? (_jsx(BlankImage, { children: _jsx(AiIcon, {}) })) : (_jsx("img", { className: "ai-assistant-image__carrousel-image", src: image || libraryUrl, alt: revisedPrompt })) })) })) }, `image:` + index))), images.length > 1 && nextButton] }), _jsxs("div", { className: "ai-assistant-image__carrousel-footer", children: [_jsxs("div", { className: "ai-assistant-image__carrousel-footer-left", children: [_jsxs("div", { className: "ai-assistant-image__carrousel-counter", children: [prevButton, actual, " / ", total, nextButton] }), _jsx(AiFeedbackThumbs, { disabled: imageFeedbackDisabled, ratedItem: images[current]?.libraryUrl || '', iconSize: 20, options: {
                                    mediaLibraryId: Number(images[current].libraryId),
                                    prompt: images[current].prompt,
                                    revisedPrompt: images[current].revisedPrompt,
                                }, feature: "image-generator" })] }), _jsx("div", { className: "ai-assistant-image__carrousel-actions", children: actions })] })] }));
}
