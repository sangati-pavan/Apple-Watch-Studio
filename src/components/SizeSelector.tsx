import React from 'react';
import type { WatchSize } from '../types/watch';

interface SizeSelectorProps {
  sizes: WatchSize[];
  selected: WatchSize | null;
  onChange: (size: WatchSize) => void;
}

export function SizeSelector({ sizes, selected, onChange }: SizeSelectorProps) {
  return (
    <div className="flex space-x-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={`px-6 py-3 rounded-lg text-sm font-medium transition-all
            ${selected === size
              ? 'bg-black text-white scale-105'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}