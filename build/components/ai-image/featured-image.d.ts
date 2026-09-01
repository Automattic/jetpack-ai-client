import './style.scss';
type FeaturedImageProps = {
    busy: boolean;
    disabled: boolean;
    placement: string;
    onClose?: () => void;
};
/**
 * FeaturedImage component
 * @param {FeaturedImageProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function FeaturedImage({ busy, disabled, placement, onClose, }: FeaturedImageProps): import("react").JSX.Element;
export {};
