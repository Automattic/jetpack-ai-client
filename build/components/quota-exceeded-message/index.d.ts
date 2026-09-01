import './style.scss';
type FairUsageNoticeProps = {
    variant?: 'error' | 'muted';
};
/**
 * The fair usage notice component.
 * @param {FairUsageNoticeProps}         props         - Fair usage notice component props.
 * @param {FairUsageNoticeProps.variant} props.variant - The variant of the notice to render.
 * @return {ReactElement} the Notice component with the fair usage message.
 */
export declare const FairUsageNotice: ({ variant }: FairUsageNoticeProps) => import("react").JSX.Element;
declare const QuotaExceededMessage: (props: any) => import("react").JSX.Element;
export default QuotaExceededMessage;
