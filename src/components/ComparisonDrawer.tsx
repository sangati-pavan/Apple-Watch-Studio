import React from 'react';
import { X } from 'lucide-react';
import type { WatchConfiguration } from '../types/watch';

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
            <div key={index} className="relative bg-gray-50 p-4 rounded-lg">
              <button
                onClick={() => onRemove(index)}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="aspect-square mb-4">
                <img
                  src={config.case?.image}
                  alt={`${config.case?.material} ${config.case?.color}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">
                  {config.case?.material.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')} - {config.case?.color}
                </p>
                <p className="text-sm text-gray-600">
                  Size: {config.size}
                </p>
                <p className="text-sm text-gray-600">
                  Band: {config.band?.type.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </p>
                <p className="text-lg font-medium">
                  ${(config.case?.price || 0) + (config.band?.price || 0)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}