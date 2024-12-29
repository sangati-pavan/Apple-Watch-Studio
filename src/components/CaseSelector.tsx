import React from 'react';
import type { WatchCase } from '../types/watch';

interface CaseSelectorProps {
  cases: WatchCase[];
  selected: WatchCase | null;
  onSelect: (watchCase: WatchCase) => void;
}

export function CaseSelector({ cases, selected, onSelect }: CaseSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cases.map((watchCase) => (
        <button
          key={watchCase.id}
          onClick={() => onSelect(watchCase)}
          className={`group relative aspect-square rounded-2xl overflow-hidden
            ${selected?.id === watchCase.id
              ? 'ring-2 ring-blue-500'
              : 'hover:ring-2 hover:ring-gray-300'
            }`}
        >
          <img
            src={watchCase.image}
            alt={`${watchCase.material} ${watchCase.color}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm font-medium">
              {watchCase.material} - {watchCase.color}
            </p>
            <p className="text-white/80 text-xs">
              From ${watchCase.price}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}