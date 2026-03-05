import type { MouseEvent } from 'react';
type UseAICheckoutReturn = {
    checkoutUrl: string;
    autosaveAndRedirect: (event: MouseEvent<HTMLButtonElement>) => void;
    isRedirecting: boolean;
};
/**
 * The hook to get properties for AICheckout
 *
 * @return {UseAICheckoutReturn} - Object containing properties for AICheckout.
 */
export default function useAICheckout(): UseAICheckoutReturn;
export {};
