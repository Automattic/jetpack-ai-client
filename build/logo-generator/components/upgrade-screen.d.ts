/**
 * Types
 */
import type React from 'react';
export declare const UpgradeScreen: React.FC<{
    onCancel: () => void;
    upgradeURL: string;
    reason: 'feature' | 'requests';
}>;
