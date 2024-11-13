import { Dispatch, SetStateAction } from 'react';
import './prompt.scss';
type PromptProps = {
    initialPrompt?: string;
};
export declare const AiModalPromptInput: ({ prompt, setPrompt, disabled, generateHandler, placeholder, buttonLabel, minPromptLength, }: {
    prompt: string;
    setPrompt: Dispatch<SetStateAction<string>>;
    disabled: boolean;
    generateHandler: () => void;
    placeholder?: string;
    buttonLabel?: string;
    minPromptLength?: number;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Prompt: ({ initialPrompt }: PromptProps) => import("react/jsx-runtime").JSX.Element;
export {};
