import type { WatchCase, WatchBand } from '../types/watch';

export const cases: WatchCase[] = [
  {
    id: 'aluminum-midnight',
    material: 'aluminum',
    color: 'midnight',
    price: 399,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400'
  },
  {
    id: 'aluminum-starlight',
    material: 'aluminum',
    color: 'starlight',
    price: 399,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400'
  },
  {
    id: 'stainless-steel-silver',
    material: 'stainless-steel',
    color: 'silver',
    price: 699,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400'
  },
  {
    id: 'titanium-natural',
    material: 'titanium',
    color: 'natural',
    price: 799,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400'
  }
];

export const bands: WatchBand[] = [
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
    id: 'solo-loop-blue',
    type: 'solo-loop',
    color: 'blue',
    price: 49,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1617043786394-ae546fb6c495?w=400'
  },
  {
    id: 'braided-loop-green',
    type: 'braided-solo-loop',
    color: 'green',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?w=400'
  },
  {
    id: 'leather-link-brown',
    type: 'leather-link',
    color: 'brown',
    price: 99,
    compatibleSizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=400'
  }
];