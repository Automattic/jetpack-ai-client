import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAnalytics } from '@automattic/jetpack-shared-extension-utils';
import { SelectControl } from '@wordpress/components';
import { useCallback, useRef, useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import debugFactory from 'debug';
import { IMAGE_STYLE_NONE, IMAGE_STYLE_AUTO, } from '../../../hooks/use-image-generator/constants.js';
import { AiModalPromptInput } from '../../../logo-generator/index.js';
import AiModalFooter from '../../ai-modal-footer/index.js';
import AiAssistantModal from '../../modal/index.js';
import QuotaExceededMessage from '../../quota-exceeded-message/index.js';
import Carrousel from './carrousel.js';
import UsageCounter from './usage-counter.js';
import './ai-image-modal.scss';
const FEATURED_IMAGE_UPGRADE_PROMPT_PLACEMENT = 'ai-image-generator';
const debug = debugFactory('jetpack-ai-client:ai-image-modal');
/**
 * AiImageModal component
 * @param {AiImageModalProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function AiImageModal({ title, cost, open, images, currentIndex = 0, onClose = null, onTryAgain = null, onGenerate = null, generating = false, notEnoughRequests = false, requireUpgrade = false, currentLimit = null, currentUsage = null, isUnlimited = false, upgradeDescription = null, hasError = false, handlePreviousImage = () => { }, handleNextImage = () => { }, acceptButton = null, autoStart = false, autoStartAction = null, instructionsPlaceholder = null, imageStyles = [], onGuessStyle = null, prompt = '', setPrompt = () => { }, initialStyle = null, inputDisabled = false, actionDisabled = false, }) {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const triggeredAutoGeneration = useRef(false);
    const [showStyleSelector, setShowStyleSelector] = useState(false);
    const [style, setStyle] = useState(null);
    const [styles, setStyles] = useState(imageStyles || []);
    const handleTryAgain = useCallback(() => {
        onTryAgain?.({ userPrompt: prompt, style });
    }, [onTryAgain, prompt, style]);
    const handleGenerate = useCallback(async () => {
        if (style === IMAGE_STYLE_AUTO && onGuessStyle) {
            recordTracksEvent('jetpack_ai_general_image_guess_style', {
                context: 'block-editor',
                tool: 'image',
            });
            const guessedStyle = (await onGuessStyle(prompt)) || IMAGE_STYLE_NONE;
            setStyle(guessedStyle);
            debug('guessed style', guessedStyle);
            onGenerate?.({ userPrompt: prompt, style: guessedStyle });
        }
        else {
            onGenerate?.({ userPrompt: prompt, style });
        }
    }, [onGenerate, prompt, style, onGuessStyle, recordTracksEvent]);
    const updateStyle = useCallback((imageStyle) => {
        debug('change style', imageStyle);
        setStyle(imageStyle);
        recordTracksEvent('jetpack_ai_image_generator_switch_style', {
            context: 'block-editor',
            style: imageStyle,
        });
    }, [setStyle, recordTracksEvent]);
    // Controllers
    const upgradePromptVisible = (requireUpgrade || notEnoughRequests) && !generating;
    const counterVisible = Boolean(!isUnlimited && cost && currentLimit);
    const generateLabel = __('Generate', 'jetpack-ai-client');
    const tryAgainLabel = __('Try again', 'jetpack-ai-client');
    /**
     * Trigger image generation automatically.
     */
    useEffect(() => {
        if (autoStart && open) {
            if (!triggeredAutoGeneration.current) {
                triggeredAutoGeneration.current = true;
                autoStartAction?.({});
            }
        }
    }, [autoStart, autoStartAction, open]);
    // initialize styles dropdown
    useEffect(() => {
        if (imageStyles && imageStyles.length > 0) {
            // Sort styles to have "None" and "Auto" first
            setStyles([
                imageStyles.find(({ value }) => value === IMAGE_STYLE_NONE),
                imageStyles.find(({ value }) => value === IMAGE_STYLE_AUTO),
                ...imageStyles.filter(({ value }) => ![IMAGE_STYLE_NONE, IMAGE_STYLE_AUTO].includes(value)),
            ].filter(v => v) // simplest way to get rid of empty values
            );
            setShowStyleSelector(true);
            setStyle(initialStyle || IMAGE_STYLE_NONE);
        }
    }, [imageStyles, initialStyle]);
    return (_jsx(_Fragment, { children: open && (_jsxs(AiAssistantModal, { handleClose: onClose, title: title, children: [_jsxs("div", { className: "ai-image-modal__content", children: [showStyleSelector && (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 16 }, children: [_jsx("div", { style: { fontWeight: 500, flexGrow: 1 }, children: __('Generate image', 'jetpack-ai-client') }), _jsx("div", { children: _jsx(SelectControl, { __nextHasNoMarginBottom: true, __next40pxDefaultSize: true, value: style, options: styles, onChange: updateStyle }) })] })), _jsx(AiModalPromptInput, { prompt: prompt, setPrompt: setPrompt, disabled: inputDisabled, actionDisabled: actionDisabled, generateHandler: hasError ? handleTryAgain : handleGenerate, placeholder: instructionsPlaceholder, buttonLabel: hasError ? tryAgainLabel : generateLabel }), upgradePromptVisible && (_jsx(QuotaExceededMessage, { description: upgradeDescription, placement: FEATURED_IMAGE_UPGRADE_PROMPT_PLACEMENT, useLightNudge: true })), _jsx("div", { className: "ai-image-modal__actions", children: _jsx("div", { className: "ai-image-modal__actions-left", children: counterVisible && (_jsx(UsageCounter, { cost: cost, currentLimit: currentLimit, currentUsage: currentUsage })) }) }), _jsx("div", { className: "ai-image-modal__image-canvas", children: _jsx(Carrousel, { images: images, current: currentIndex, handlePreviousImage: handlePreviousImage, handleNextImage: handleNextImage, actions: acceptButton }) })] }), _jsx("div", { className: "ai-image-modal__footer", children: _jsx(AiModalFooter, {}) })] })) }));
}
