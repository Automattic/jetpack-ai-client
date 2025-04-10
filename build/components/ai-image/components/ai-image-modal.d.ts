/**
 * Internal dependencies
 */
import { ImageStyleObject, ImageStyle } from '../../../hooks/use-image-generator/constants.ts';
import { CarrouselImages } from './carrousel.tsx';
import './ai-image-modal.scss';
type AiImageModalProps = {
    title: string;
    cost: number;
    open: boolean;
    placement: string;
    images: CarrouselImages;
    currentIndex: number;
    onClose: () => void;
    onTryAgain: ({ userPrompt, style }: {
        userPrompt?: string;
        style?: string;
    }) => void;
    onGenerate: ({ userPrompt, style }: {
        userPrompt?: string;
        style?: string;
    }) => void;
    generating: boolean;
    notEnoughRequests: boolean;
    requireUpgrade: boolean;
    currentLimit: number;
    currentUsage: number;
    isUnlimited: boolean;
    upgradeDescription: string;
    hasError: boolean;
    handlePreviousImage: () => void;
    handleNextImage: () => void;
    acceptButton: React.JSX.Element;
    autoStart?: boolean;
    autoStartAction?: ({ userPrompt, style }: {
        userPrompt?: string;
        style?: string;
    }) => void;
    generateButtonLabel: string;
    instructionsPlaceholder: string;
    imageStyles?: Array<ImageStyleObject>;
    onGuessStyle?: (userPrompt: string) => Promise<ImageStyle>;
    prompt?: string;
    setPrompt?: (userPrompt: string) => void;
    initialStyle?: ImageStyle;
    inputDisabled?: boolean;
    actionDisabled?: boolean;
};
/**
 * AiImageModal component
 * @param {AiImageModalProps} props - The component properties.
 * @return {React.ReactElement} - rendered component.
 */
export default function AiImageModal({ title, cost, open, images, currentIndex, onClose, onTryAgain, onGenerate, generating, notEnoughRequests, requireUpgrade, currentLimit, currentUsage, isUnlimited, upgradeDescription, hasError, handlePreviousImage, handleNextImage, acceptButton, autoStart, autoStartAction, instructionsPlaceholder, imageStyles, onGuessStyle, prompt, setPrompt, initialStyle, inputDisabled, actionDisabled, }: AiImageModalProps): import("react/jsx-runtime").JSX.Element;
export {};
