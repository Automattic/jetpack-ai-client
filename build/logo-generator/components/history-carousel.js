import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { useAnalytics } from '@automattic/jetpack-shared-extension-utils';
import { Button } from '@wordpress/components';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import { EVENT_NAVIGATE } from '../constants.js';
import useLogoGenerator from '../hooks/use-logo-generator.js';
import './history-carousel.scss';
export const HistoryCarousel = () => {
    const { tracks } = useAnalytics();
    const { recordEvent: recordTracksEvent } = tracks;
    const { logos, selectedLogo, setSelectedLogoIndex, context } = useLogoGenerator();
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
    return (_jsx("div", { className: "jetpack-ai-logo-generator__carousel", children: logos.map((logo, index) => (_jsx(Button, { className: clsx('jetpack-ai-logo-generator__carousel-logo', {
                'is-selected': logo.url === selectedLogo.url,
            }), onClick: () => handleClick(index), children: _jsx("img", { src: thumbnailFrom(logo.url), alt: logo.description }) }, logo.url))) }));
};
