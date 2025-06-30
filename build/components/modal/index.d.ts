import type { RequestingStateProp } from '../../types.ts';
import './style.scss';
import type { ReactNode } from 'react';
type AiAssistantModalProps = {
    children: ReactNode;
    handleClose: () => void;
    hideHeader?: boolean;
    requestingState?: RequestingStateProp;
    title?: string;
    maxWidth?: number;
};
/**
 * AiAssistantModal component
 * @param {AiAssistantModalProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function AiAssistantModal({ children, handleClose, hideHeader, requestingState, title, maxWidth, }: AiAssistantModalProps): import("react/jsx-runtime").JSX.Element;
export {};
