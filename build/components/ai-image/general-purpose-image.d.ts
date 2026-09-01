import './style.scss';
/**
 * The type for the callback function that is called when the user selects an image.
 */
type SetImageCallbackProps = {
    id: number;
    url: string;
    mime?: string;
};
type GeneralPurposeImageProps = {
    placement: string;
    onClose?: () => void;
    onSetImage?: (image: SetImageCallbackProps) => void;
};
/**
 * GeneralPurposeImage component
 * @param {GeneralPurposeImageProps} props - The component properties.
 * @return {ReactElement} - rendered component.
 */
export default function GeneralPurposeImage({ placement, onClose, onSetImage, }: GeneralPurposeImageProps): import("react").JSX.Element;
export {};
