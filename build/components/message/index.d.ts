/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Types
 */
import type React from 'react';
export declare const MESSAGE_SEVERITY_WARNING = "warning";
export declare const MESSAGE_SEVERITY_ERROR = "error";
export declare const MESSAGE_SEVERITY_SUCCESS = "success";
export declare const MESSAGE_SEVERITY_INFO = "info";
declare const messageSeverityTypes: readonly ["warning", "error", "success", "info"];
export type MessageSeverityProp = (typeof messageSeverityTypes)[number] | null;
export type MessageProps = {
    icon?: React.ReactNode;
    severity?: MessageSeverityProp;
    showSidebarIcon?: boolean;
    onSidebarIconClick?: () => void;
    children: React.ReactNode;
};
export type UpgradeMessageProps = {
    requestsRemaining: number;
    onUpgradeClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};
export type ErrorMessageProps = {
    error?: string;
    onTryAgainClick: () => void;
};
/**
 * React component to render a block message.
 *
 * @param {MessageProps} props - Component props.
 * @returns {React.ReactElement }    Banner component.
 */
export default function Message({ severity, icon, showSidebarIcon, onSidebarIconClick, children, }: MessageProps): React.ReactElement;
/**
 * React component to render a guideline message.
 *
 * @returns {React.ReactElement } - Message component.
 */
export declare function GuidelineMessage(): React.ReactElement;
/**
 * React component to render an upgrade message for free tier users
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @returns {React.ReactElement } - Message component.
 */
export declare function UpgradeMessage({ requestsRemaining, onUpgradeClick, }: UpgradeMessageProps): React.ReactElement;
/**
 * React component to render an error message
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @returns {React.ReactElement } - Message component.
 */
export declare function ErrorMessage({ error, onTryAgainClick }: ErrorMessageProps): React.ReactElement;
export {};
