import './carrousel.scss';
export type CarrouselImageData = {
    image?: string;
    libraryId?: number | string;
    prompt?: string;
    revisedPrompt?: string;
    libraryUrl?: string;
    generating?: boolean;
    error?: {
        message: string;
    };
};
export type CarrouselImages = CarrouselImageData[];
type CarrouselProps = {
    images: CarrouselImages;
    current: number;
    handlePreviousImage: () => void;
    handleNextImage: () => void;
    actions?: React.JSX.Element;
};
/**
 * Carrousel component
 * @param {CarrouselProps} props - The component properties.
 * @return {React.ReactElement} - rendered component.
 */
export default function Carrousel({ images, current, handlePreviousImage, handleNextImage, actions, }: CarrouselProps): import("react/jsx-runtime").JSX.Element;
export {};
