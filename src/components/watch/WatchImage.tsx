import React from 'react';
import type { WatchConfiguration } from '../../types/watch';

interface WatchImageProps {
  config: WatchConfiguration;
  className?: string;
}

export function WatchImage({ config, className = '' }: WatchImageProps) {
  if (!config.case) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={config.case.image}
        alt="Watch case"
        className="absolute inset-0 w-full h-full object-contain"
      />
      {config.band && (
        <img
          src={config.band.image}
          alt="Watch band"
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}
    </div>
  );
}