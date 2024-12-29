import React from 'react';
import { Plus } from 'lucide-react';
import type { WatchConfiguration } from '../types/watch';

interface CompareButtonProps {
  config: WatchConfiguration;
  onCompare: () => void;
  disabled: boolean;
}

export function CompareButton({ config, onCompare, disabled }: CompareButtonProps) {
  if (!config.case || !config.band) return null;

  return (
    <button
      onClick={onCompare}
      disabled={disabled}
      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-colors
        ${disabled 
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
    >
      <Plus className="w-4 h-4" />
      <span>Compare</span>
    </button>
  );
}