import React from 'react';
import type { WatchConfiguration } from '../types/watch';
import { WatchImage } from './watch/WatchImage';

interface WatchPreviewProps {
  config: WatchConfiguration;
}

export function WatchPreview({ config }: WatchPreviewProps) {
  if (!config.case) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-gray-50 rounded-lg">
        <p className="text-gray-400">Select a case to preview your Watch</p>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] bg-gray-50 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
          <WatchImage config={config} />
        </div>
      </div>
    </div>
  );
}