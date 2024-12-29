import React from 'react';
import { X } from 'lucide-react';
import type { WatchConfiguration } from '../../types/watch';
import { WatchImage } from '../watch/WatchImage';
import { WatchDetails } from '../watch/WatchDetails';
import { WatchPrice } from '../watch/WatchPrice';
import { calculateTotalPrice } from '../../utils/formatters';

interface ComparisonCardProps {
  config: WatchConfiguration;
  onRemove: () => void;
}

export function ComparisonCard({ config, onRemove }: ComparisonCardProps) {
  const totalPrice = calculateTotalPrice(config.case?.price, config.band?.price);

  return (
    <div className="relative bg-gray-50 p-4 rounded-lg">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="aspect-square mb-4">
        <WatchImage config={config} />
      </div>
      
      <WatchDetails config={config} />
      <div className="mt-4">
        <WatchPrice price={totalPrice} />
      </div>
    </div>
  );
}