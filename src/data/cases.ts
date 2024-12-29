import type { WatchCase } from '../types/watch';

export const aluminumCases: WatchCase[] = [
  {
    id: 'aluminum-midnight',
    material: 'aluminum',
    color: 'midnight',
    price: 399,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400'
  },
  {
    id: 'aluminum-starlight',
    material: 'aluminum',
    color: 'starlight',
    price: 399,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1550029402-226115b7c579?w=400'
  },
  {
    id: 'aluminum-silver',
    material: 'aluminum',
    color: 'silver',
    price: 399,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400'
  },
  {
    id: 'aluminum-pink',
    material: 'aluminum',
    color: 'pink',
    price: 399,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400'
  }
];

export const stainlessSteelCases: WatchCase[] = [
  {
    id: 'stainless-steel-silver',
    material: 'stainless-steel',
    color: 'silver',
    price: 699,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400'
  },
  {
    id: 'stainless-steel-space-black',
    material: 'stainless-steel',
    color: 'space-black',
    price: 699,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400'
  },
  {
    id: 'stainless-steel-gold',
    material: 'stainless-steel',
    color: 'gold',
    price: 749,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400'
  }
];

export const titaniumCases: WatchCase[] = [
  {
    id: 'titanium-natural',
    material: 'titanium',
    color: 'natural',
    price: 799,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?w=400'
  },
  {
    id: 'titanium-black',
    material: 'titanium',
    color: 'space-black',
    price: 799,
    sizes: ['41mm', '45mm'],
    image: 'https://images.unsplash.com/photo-1617043786394-ae546fb6c495?w=400'
  }
];

export const allCases = [...aluminumCases, ...stainlessSteelCases, ...titaniumCases];