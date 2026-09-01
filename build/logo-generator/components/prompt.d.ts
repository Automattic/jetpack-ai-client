import { Dispatch, SetStateAction } from 'react';
import './prompt.scss';
type PromptProps = {
    initialPrompt?: string;
};
export declare const AiModalPromptInput: ({ prompt, setPrompt, disabled, actionDisabled, generateHandler, placeholder, buttonLabel, }: {
    prompt: string;
    setPrompt: Dispatch<SetStateAction<string>>;
    disabled: boolean;
    actionDisabled: boolean;
    generateHandler: () => void;
    placeholder?: string;
    buttonLabel?: string;
}) => import("react").JSX.Element;
export declare const Prompt: ({ initialPrompt }: PromptProps) => import("react").JSX.Element;
export {};
