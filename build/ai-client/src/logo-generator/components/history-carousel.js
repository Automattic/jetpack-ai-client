import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { useAnalytics } from '@automattic/jetpack-shared-extension-utils';
import { Button } from '@wordpress/components';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import loader from '../assets/images/loader.gif';
import { EVENT_NAVIGATE } from '../constants.js';
import useLogoGenerator from '../hooks/use-logo-generator.js';
import './history-carousel.scss';
export const HistoryCarousel = () => {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const { logos, selectedLogo, setSelectedLogoIndex, context, isLoadingHistory } = useLogoGenerator();
    const handleClick = (index) => {
        recordTracksEvent(EVENT_NAVIGATE, {
            context,
            logos_count: logos.length,
            selected_logo: index + 1,
        });
        setSelectedLogoIndex(index);
    };
    const thumbnailFrom = (url) => {
        const thumbnailURL = new URL(url);
        if (!thumbnailURL.searchParams.has('resize')) {
            thumbnailURL.searchParams.append('resize', '48,48');
        }
        return thumbnailURL.toString();
    };
    return (_jsxs("div", { className: "jetpack-ai-logo-generator__carousel", children: [!logos.length && isLoadingHistory && (_jsx(Button, { disabled: true, className: clsx('jetpack-ai-logo-generator__carousel-logo'), children: _jsx("img", { height: "48", width: "48", src: loader, alt: 'loading' }) })), logos.map((logo, index) => (_jsx(Button, { className: clsx('jetpack-ai-logo-generator__carousel-logo', {
                    'is-selected': logo.url === selectedLogo.url,
                }), onClick: () => handleClick(index), children: _jsx("img", { src: thumbnailFrom(logo.url), alt: logo.description }) }, logo.url)))] }));
};
