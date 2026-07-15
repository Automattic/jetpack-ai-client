/**
 * Types
 */
import type { FC } from 'react';
export declare const UpgradeScreen: FC<{
    onCancel: () => void;
    upgradeURL: string;
    reason: 'feature' | 'requests';
}>;
