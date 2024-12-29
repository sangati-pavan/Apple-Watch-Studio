import React from 'react';
import type { WatchConfiguration } from '../../types/watch';
import { formatMaterial, formatBandType } from '../../utils/formatters';

interface WatchDetailsProps {
  config: WatchConfiguration;
}

export function WatchDetails({ config }: WatchDetailsProps) {
  if (!config.case) return null;

  return (
    <div className="space-y-2">
      <p className="font-medium">
        {formatMaterial(config.case.material)} - {config.case.color}
      </p>
      {config.size && (
        <p className="text-sm text-gray-600">
          Size: {config.size}
        </p>
      )}
      {config.band && (
        <p className="text-sm text-gray-600">
          Band: {formatBandType(config.band.type)}
        </p>
      )}
    </div>
  );
}