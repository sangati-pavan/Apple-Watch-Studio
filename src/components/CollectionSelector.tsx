import React from 'react';
import type { Collection } from '../types/watch';

interface CollectionSelectorProps {
  selected: Collection;
  onChange: (collection: Collection) => void;
}

export function CollectionSelector({ selected, onChange }: CollectionSelectorProps) {
  const collections: { id: Collection; name: string }[] = [
    { id: 'series-9', name: 'Apple Watch Series 9' },
    { id: 'ultra-2', name: 'Apple Watch Ultra 2' },
    { id: 'se', name: 'Apple Watch SE' },
  ];

  return (
    <div className="flex space-x-6 mb-8">
      {collections.map((collection) => (
        <button
          key={collection.id}
          onClick={() => onChange(collection.id)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-colors
            ${selected === collection.id
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
        >
          {collection.name}
        </button>
      ))}
    </div>
  );
}