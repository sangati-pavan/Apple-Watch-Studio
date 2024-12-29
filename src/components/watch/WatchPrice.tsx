import React from 'react';

interface WatchPriceProps {
  price: number;
}

export function WatchPrice({ price }: WatchPriceProps) {
  return (
    <p className="text-3xl font-medium">
      From ${price}
    </p>
  );
}