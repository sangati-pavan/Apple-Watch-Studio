import type { WatchBand, WatchSize, WatchCase, Collection } from '../types/watch';

export const filterBandsBySize = (bands: WatchBand[], size: WatchSize | null): WatchBand[] => {
  if (!size) return bands;
  return bands.filter(band => band.compatibleSizes.includes(size));
};

export const filterCasesByCollection = (cases: WatchCase[], collection: Collection): WatchCase[] => {
  switch (collection) {
    case 'ultra-2':
      return cases.filter(c => c.material === 'titanium');
    case 'se':
      return cases.filter(c => c.material === 'aluminum');
    default:
      return cases;
  }
};