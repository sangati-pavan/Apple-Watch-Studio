import React from 'react';
import { X } from 'lucide-react';
import type { WatchConfiguration } from '../../types/watch';
import { ComparisonCard } from './ComparisonCard';

interface ComparisonDrawerProps {
  configurations: WatchConfiguration[];
  onRemove: (index: number) => void;
  onClose: () => void;
}

export function ComparisonDrawer({ configurations, onRemove, onClose }: ComparisonDrawerProps) {
  if (configurations.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 transform transition-transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Compare Watches</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {configurations.map((config, index) => (
            <ComparisonCard
              key={index}
              config={config}
              onRemove={() => onRemove(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}