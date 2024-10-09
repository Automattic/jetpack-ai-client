import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { ImageLoader } from './image-loader.js';
import './first-load-screen.scss';
export const FirstLoadScreen = ({ state = 'loadingFeature' }) => {
    const loadingLabel = __('Loading…', 'jetpack-ai-client');
    const analyzingLabel = __('Analyzing your site to create the perfect logo…', 'jetpack-ai-client');
    const generatingLabel = __('Generating logo…', 'jetpack-ai-client');
    return (_jsxs("div", { className: "jetpack-ai-logo-generator-modal__loading-wrapper", children: [_jsx(ImageLoader, {}), _jsxs("span", { className: "jetpack-ai-logo-generator-modal__loading-message", children: [state === 'loadingFeature' && loadingLabel, state === 'analyzing' && analyzingLabel, state === 'generating' && generatingLabel] })] }));
};
