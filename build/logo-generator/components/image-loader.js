import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import loader from '../assets/images/loader.gif';
export const ImageLoader = ({ className = null }) => {
    return (_jsx("img", { src: loader, alt: "Loading", className: clsx('jetpack-ai-logo-generator-modal__loader', className) }));
};
