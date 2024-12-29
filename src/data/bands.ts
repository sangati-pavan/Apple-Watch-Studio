import type { WatchBand } from '../types/watch';

export const sportBands: WatchBand[] = [
  {
    id: 'sport-midnight',
    type: 'sport-band',
    color: 'midnight',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=400'
  },
  {
    id: 'sport-starlight',
    type: 'sport-band',
    color: 'starlight',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400'
  },
  {
    id: 'sport-pink',
    type: 'sport-band',
    color: 'pink',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=400'
  },
  {
    id: 'sport-blue',
    type: 'sport-band',
    color: 'blue',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400'
  }
];

export const soloLoops: WatchBand[] = [
  {
    id: 'solo-loop-blue',
    type: 'solo-loop',
    color: 'blue',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400'
  },
  {
    id: 'solo-loop-green',
    type: 'solo-loop',
    color: 'green',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400'
  },
  {
    id: 'solo-loop-orange',
    type: 'solo-loop',
    color: 'orange',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400'
  }
];

export const braidedLoops: WatchBand[] = [
  {
    id: 'braided-loop-green',
    type: 'braided-solo-loop',
    color: 'green',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?w=400'
  },
  {
    id: 'braided-loop-blue',
    type: 'braided-solo-loop',
    color: 'blue',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400'
  },
  {
    id: 'braided-loop-red',
    type: 'braided-solo-loop',
    color: 'red',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400'
  }
];

export const leatherBands: WatchBand[] = [
  {
    id: 'leather-link-brown',
    type: 'leather-link',
    color: 'brown',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=400'
  },
  {
    id: 'leather-link-black',
    type: 'leather-link',
    color: 'black',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400'
  },
  {
    id: 'leather-link-midnight',
    type: 'leather-link',
    color: 'midnight',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400'
  }
];

export const allBands = [...sportBands, ...soloLoops, ...braidedLoops, ...leatherBands];