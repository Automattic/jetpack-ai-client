import type { RequestingStateProp } from '../../types.js';
import './style.scss';
type AiAssistantModalProps = {
    children: React.ReactNode;
    handleClose: () => void;
    hideHeader?: boolean;
    requestingState?: RequestingStateProp;
    title?: string;
    maxWidth?: number;
};
/**
 * AiAssistantModal component
 * @param {AiAssistantModalProps} props - The component properties.
 * @return {React.ReactElement} - rendered component.
 */
export default function AiAssistantModal({ children, handleClose, hideHeader, requestingState, title, maxWidth, }: AiAssistantModalProps): import("react/jsx-runtime").JSX.Element;
export {};
