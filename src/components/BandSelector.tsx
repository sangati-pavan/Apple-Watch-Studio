import React from 'react';
import type { WatchBand } from '../types/watch';

interface BandSelectorProps {
  bands: WatchBand[];
  selected: WatchBand | null;
  onSelect: (band: WatchBand) => void;
}

export function BandSelector({ bands, selected, onSelect }: BandSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bands.map((band) => (
          <button
            key={band.id}
            onClick={() => onSelect(band)}
            className={`group relative aspect-video rounded-xl overflow-hidden
              ${selected?.id === band.id
                ? 'ring-2 ring-blue-500'
                : 'hover:ring-2 hover:ring-gray-300'
              }`}
          >
            <img
              src={band.image}
              alt={`${band.type} - ${band.color}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                {band.type.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </p>
              <p className="text-white/80 text-xs">
                ${band.price}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}