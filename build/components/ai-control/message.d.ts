/**
 * Types
 */
import type React from 'react';
import './style.scss';
export declare const MESSAGE_SEVERITY_WARNING = "warning";
export declare const MESSAGE_SEVERITY_ERROR = "error";
export declare const MESSAGE_SEVERITY_SUCCESS = "success";
export declare const MESSAGE_SEVERITY_INFO = "info";
declare const messageSeverityTypes: readonly ["warning", "error", "success", "info"];
export type MessageSeverityProp = (typeof messageSeverityTypes)[number] | null;
export type MessageProps = {
    icon?: React.ReactNode;
    children: React.ReactNode;
    severity: MessageSeverityProp;
};
/**
 * React component to render a block message.
 *
 * @param {MessageProps} props - Component props.
 * @returns {React.ReactElement }    Banner component.
 */
export default function Message({ severity, icon, children, }: MessageProps): React.ReactElement;
/**
 * React component to render a guideline message.
 *
 * @returns {React.ReactElement } - Message component.
 */
export declare function GuidelineMessage(): React.ReactElement;
export {};
