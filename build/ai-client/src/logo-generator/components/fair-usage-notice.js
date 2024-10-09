import { jsx as _jsx } from "react/jsx-runtime";
import { Notice } from '@wordpress/components';
import useFairUsageNoticeMessage from '../hooks/use-fair-usage-notice-message.js';
/**
 * The fair usage notice component.
 * @param {FairUsageNoticeProps}         props         - Fair usage notice component props.
 * @param {FairUsageNoticeProps.variant} props.variant - The variant of the notice to render.
 * @return {ReactElement} the Notice component with the fair usage message.
 */
export const FairUsageNotice = ({ variant = 'error' }) => {
    const useFairUsageNoticeMessageElement = useFairUsageNoticeMessage();
    if (variant === 'muted') {
        return (_jsx("span", { className: "jetpack-ai-fair-usage-notice-muted-variant", children: useFairUsageNoticeMessageElement }));
    }
    if (variant === 'error') {
        return (_jsx(Notice, { status: "error", isDismissible: false, className: "jetpack-ai-fair-usage-notice", children: useFairUsageNoticeMessageElement }));
    }
    return null;
};
