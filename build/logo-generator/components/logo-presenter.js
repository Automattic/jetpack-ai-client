import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { useAnalytics } from '@automattic/jetpack-shared-extension-utils';
import { Button, Icon } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import debugFactory from 'debug';
/**
 * Internal dependencies
 */
import CheckIcon from '../assets/icons/check.js';
import LogoIcon from '../assets/icons/logo.js';
import MediaIcon from '../assets/icons/media.js';
import { EVENT_SAVE, EVENT_USE } from '../constants.js';
import useLogoGenerator from '../hooks/use-logo-generator.js';
import useRequestErrors from '../hooks/use-request-errors.js';
import { updateLogo } from '../lib/logo-storage.js';
import { STORE_NAME } from '../store/index.js';
import { ImageLoader } from './image-loader.js';
import './logo-presenter.scss';
const debug = debugFactory('jetpack-ai-calypso:logo-presenter');
const SaveInLibraryButton = ({ siteId }) => {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const { saveLogo, selectedLogo, isSavingLogoToLibrary: saving, logos, selectedLogoIndex, context, } = useLogoGenerator();
    const saved = !!selectedLogo?.mediaId;
    const { loadLogoHistory } = useDispatch(STORE_NAME);
    const handleClick = async () => {
        if (!saved && !saving) {
            recordTracksEvent(EVENT_SAVE, {
                context,
                logos_count: logos.length,
                selected_logo: selectedLogoIndex ? selectedLogoIndex + 1 : 0,
            });
            try {
                const savedLogo = await saveLogo(selectedLogo);
                // Update localStorage
                updateLogo({
                    siteId,
                    url: selectedLogo.url,
                    newUrl: savedLogo.mediaURL,
                    mediaId: savedLogo.mediaId,
                });
                // Update state
                loadLogoHistory(siteId);
            }
            catch (error) {
                debug('Error saving logo', error);
            }
        }
    };
    const savingLabel = __('Saving…', 'jetpack-ai-client');
    const savedLabel = __('Saved', 'jetpack-ai-client');
    return !saving && !saved ? (_jsxs(Button, { className: "jetpack-ai-logo-generator-modal-presenter__action", onClick: handleClick, children: [_jsx(Icon, { icon: _jsx(MediaIcon, {}) }), _jsx("span", { className: "action-text", children: __('Save in Library', 'jetpack-ai-client') })] })) : (_jsxs("button", { className: "jetpack-ai-logo-generator-modal-presenter__action", children: [_jsx(Icon, { icon: saving ? _jsx(MediaIcon, {}) : _jsx(CheckIcon, {}) }), _jsx("span", { className: "action-text", children: saving ? savingLabel : savedLabel })] }));
};
const UseOnSiteButton = ({ onApplyLogo }) => {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const { applyLogo, isSavingLogoToLibrary, isApplyingLogo, selectedLogo, logos, selectedLogoIndex, context, } = useLogoGenerator();
    const handleClick = async () => {
        if (!isApplyingLogo && !isSavingLogoToLibrary) {
            recordTracksEvent(EVENT_USE, {
                context,
                logos_count: logos.length,
                selected_logo: selectedLogoIndex != null ? selectedLogoIndex + 1 : 0,
            });
            try {
                await applyLogo();
                onApplyLogo();
            }
            catch (error) {
                debug('Error applying logo', error);
            }
        }
    };
    return isApplyingLogo && !isSavingLogoToLibrary ? (_jsxs("button", { className: "jetpack-ai-logo-generator-modal-presenter__action", children: [_jsx(Icon, { icon: _jsx(LogoIcon, {}) }), _jsx("span", { className: "action-text", children: __('Applying logo…', 'jetpack-ai-client') })] })) : (_jsxs(Button, { className: "jetpack-ai-logo-generator-modal-presenter__action", onClick: handleClick, disabled: isSavingLogoToLibrary || !selectedLogo?.mediaId, children: [_jsx(Icon, { icon: _jsx(LogoIcon, {}) }), _jsx("span", { className: "action-text", children: __('Use on Site', 'jetpack-ai-client') })] }));
};
const LogoLoading = () => {
    return (_jsxs(_Fragment, { children: [_jsx(ImageLoader, { className: "jetpack-ai-logo-generator-modal-presenter__logo" }), _jsx("span", { className: "jetpack-ai-logo-generator-modal-presenter__loading-text", children: __('Generating new logo…', 'jetpack-ai-client') })] }));
};
const LogoReady = ({ siteId, logo, onApplyLogo, }) => {
    return (_jsxs(_Fragment, { children: [_jsx("img", { src: logo.url, alt: logo.description, className: "jetpack-ai-logo-generator-modal-presenter__logo" }), _jsxs("div", { className: "jetpack-ai-logo-generator-modal-presenter__action-wrapper", children: [_jsx("span", { className: "jetpack-ai-logo-generator-modal-presenter__description", children: logo.description }), _jsxs("div", { className: "jetpack-ai-logo-generator-modal-presenter__actions", children: [_jsx(SaveInLibraryButton, { siteId: siteId }), _jsx(UseOnSiteButton, { onApplyLogo: onApplyLogo })] })] })] }));
};
const LogoUpdated = ({ logo }) => {
    return (_jsxs(_Fragment, { children: [_jsx("img", { src: logo.url, alt: logo.description, className: "jetpack-ai-logo-generator-modal-presenter__logo" }), _jsxs("div", { className: "jetpack-ai-logo-generator-modal-presenter__success-wrapper", children: [_jsx(Icon, { icon: _jsx(CheckIcon, {}) }), _jsx("span", { children: __('Your logo has been successfully updated!', 'jetpack-ai-client') })] })] }));
};
export const LogoPresenter = ({ logo = null, loading = false, onApplyLogo, logoAccepted = false, siteId, }) => {
    const { isRequestingImage } = useLogoGenerator();
    const { saveToLibraryError, logoUpdateError } = useRequestErrors();
    if (!logo) {
        return null;
    }
    let logoContent;
    if (loading || isRequestingImage) {
        logoContent = _jsx(LogoLoading, {});
    }
    else if (logoAccepted) {
        logoContent = _jsx(LogoUpdated, { logo: logo });
    }
    else {
        logoContent = (_jsx(LogoReady, { siteId: String(siteId), logo: logo, onApplyLogo: onApplyLogo }));
    }
    return (_jsxs("div", { className: "jetpack-ai-logo-generator-modal-presenter__wrapper", children: [_jsxs("div", { className: "jetpack-ai-logo-generator-modal-presenter", children: [_jsx("div", { className: "jetpack-ai-logo-generator-modal-presenter__content", children: logoContent }), !logoAccepted && (_jsx("div", { className: "jetpack-ai-logo-generator-modal-presenter__rectangle" }))] }), saveToLibraryError && (_jsx("div", { className: "jetpack-ai-logo-generator__prompt-error", children: __('Error saving the logo to your library. Please try again.', 'jetpack-ai-client') })), logoUpdateError && (_jsx("div", { className: "jetpack-ai-logo-generator__prompt-error", children: __('Error applying the logo to your site. Please try again.', 'jetpack-ai-client') }))] }));
};
