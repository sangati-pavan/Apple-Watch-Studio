export type WatchSize = '41mm' | '45mm';
export type WatchMaterial = 'aluminum' | 'stainless-steel' | 'titanium';
export type WatchColor = 'midnight' | 'starlight' | 'silver' | 'space-black' | 'natural';
export type BandType = 'sport-band' | 'solo-loop' | 'braided-solo-loop' | 'leather-link';
export type Collection = 'series-9' | 'ultra-2' | 'se';

export interface WatchCase {
  id: string;
  material: WatchMaterial;
  color: WatchColor;
  price: number;
  sizes: WatchSize[];
  image: string;
}

export interface WatchBand {
  id: string;
  type: BandType;
  color: string;
  price: number;
  compatibleSizes: WatchSize[];
  image: string;
}

export interface WatchConfiguration {
  case: WatchCase | null;
  size: WatchSize | null;
  band: WatchBand | null;
  collection: Collection;
}