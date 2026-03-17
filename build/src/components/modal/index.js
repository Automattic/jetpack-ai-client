import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { close } from '@wordpress/icons';
import AiStatusIndicator from '../ai-status-indicator/index.js';
import './style.scss';
const ModalHeader = ({ requestingState, onClose, title, }) => {
    return (_jsxs("div", { className: "ai-assistant-modal__header", children: [
            _jsxs("div", { className: "ai-assistant-modal__title-wrapper", children: [
                    _jsx(AiStatusIndicator, { state: requestingState }), _jsx("h1", { className: "ai-assistant-modal__title", children: title })
                ] }), _jsx(Button, { icon: close, label: __('Close', 'jetpack-ai-client'), onClick: onClose })
        ] }));
};
/**
 * AiAssistantModal component
 * @param {AiAssistantModalProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function AiAssistantModal({ children, handleClose, hideHeader = true, requestingState = 'init', title = __('AI Assistant', 'jetpack-ai-client'), maxWidth = 720, }) {
    return (_jsx(Modal, { __experimentalHideHeader: hideHeader, className: "ai-assistant-modal", shouldCloseOnClickOutside: false, onRequestClose: handleClose, children: _jsxs("div", { className: "ai-assistant-modal__content", style: { maxWidth }, children: [
                _jsx(ModalHeader, { requestingState: requestingState, onClose: handleClose, title: title }), children] }) }));
}
