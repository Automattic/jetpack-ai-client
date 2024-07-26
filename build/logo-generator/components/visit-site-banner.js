import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { external } from '@wordpress/icons';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import jetpackLogo from '../assets/images/jetpack-logo.svg';
import './visit-site-banner.scss';
export const VisitSiteBanner = ({ className = null, onVisitBlankTarget }) => {
    return (_jsxs("div", { className: clsx('jetpack-ai-logo-generator-modal-visit-site-banner', className), children: [_jsx("div", { className: "jetpack-ai-logo-generator-modal-visit-site-banner__jetpack-logo", children: _jsx("img", { src: jetpackLogo, alt: "Jetpack" }) }), _jsxs("div", { className: "jetpack-ai-logo-generator-modal-visit-site-banner__content", children: [_jsx("strong", { children: __('Do you want to know all the amazing things you can do with Jetpack AI?', 'jetpack-ai-client') }), _jsx("span", { children: __('Generate and tweak content, create forms, get feedback and much more.', 'jetpack-ai-client') }), _jsx("div", { children: _jsxs(Button, { variant: "link", href: "https://jetpack.com/redirect/?source=logo_generator_learn_more_about_jetpack_ai", target: "_blank", onClick: onVisitBlankTarget, children: [__('Learn more about Jetpack AI', 'jetpack-ai-client'), _jsx(Icon, { icon: external, size: 20 })] }) })] })] }));
};
