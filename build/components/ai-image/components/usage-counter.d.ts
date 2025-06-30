import './usage-counter.scss';
type UsageCounterProps = {
    currentLimit: number;
    currentUsage: number;
    cost: number;
};
/**
 * UsageCounter component
 * @param {UsageCounterProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function UsageCounter({ currentLimit, currentUsage, cost }: UsageCounterProps): import("react/jsx-runtime").JSX.Element;
export {};
