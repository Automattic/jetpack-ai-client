/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Types
 */
import type { SuggestionErrorCode } from '../../types.ts';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
export declare const MESSAGE_SEVERITY_WARNING = "warning";
export declare const MESSAGE_SEVERITY_ERROR = "error";
export declare const MESSAGE_SEVERITY_SUCCESS = "success";
export declare const MESSAGE_SEVERITY_INFO = "info";
export type MessageSeverityProp = typeof MESSAGE_SEVERITY_WARNING | typeof MESSAGE_SEVERITY_ERROR | typeof MESSAGE_SEVERITY_SUCCESS | typeof MESSAGE_SEVERITY_INFO | null;
type AiFeedbackThumbsOptions = {
    showAIFeedbackThumbs?: boolean;
    ratedItem?: string;
    prompt?: string;
    block?: string | null;
    onRate?: (rating: string) => void;
};
export type MessageProps = {
    icon?: ReactNode;
    severity?: MessageSeverityProp;
    aiFeedbackThumbsOptions?: AiFeedbackThumbsOptions;
    children: ReactNode;
};
export type GuidelineMessageProps = {
    aiFeedbackThumbsOptions?: AiFeedbackThumbsOptions;
};
export type OnUpgradeClick = (event?: MouseEvent<HTMLButtonElement>) => void;
export type UpgradeMessageProps = {
    requestsRemaining: number;
    severity?: MessageSeverityProp;
    onUpgradeClick: OnUpgradeClick;
    upgradeUrl?: string;
};
export type ErrorMessageProps = {
    error?: string;
    code?: SuggestionErrorCode;
    onTryAgainClick: () => void;
    onUpgradeClick: OnUpgradeClick;
    upgradeUrl?: string;
};
/**
 * React component to render a block message.
 *
 * @param {MessageProps} props - Component props.
 * @return {ReactElement}    Banner component.
 */
export default function Message({ severity, icon, aiFeedbackThumbsOptions, children, }: MessageProps): ReactElement;
/**
 * React component to render a guideline message.
 *
 * @param {GuidelineMessageProps} props - Component props.
 * @return {ReactElement} - Message component.
 */
export declare function GuidelineMessage({ aiFeedbackThumbsOptions, }: GuidelineMessageProps): ReactElement;
/**
 * React component to render a fair usage limit message.
 *
 * @return {ReactElement} - Message component.
 */
export declare function FairUsageLimitMessage(): ReactElement;
/**
 * React component to render an upgrade message for free tier users
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @return {ReactElement} - Message component.
 */
export declare function UpgradeMessage({ requestsRemaining, severity, onUpgradeClick, upgradeUrl, }: UpgradeMessageProps): ReactElement;
/**
 * React component to render an error message
 *
 * @param {number} requestsRemaining - Number of requests remaining.
 * @return {ReactElement} - Message component.
 */
export declare function ErrorMessage({ error, code, onTryAgainClick, onUpgradeClick, upgradeUrl, }: ErrorMessageProps): ReactElement;
export {};
