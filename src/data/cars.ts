import { Car } from '../types';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    brand: 'Mercedes-Benz',
    model: 'AMG GT 63',
    year: 2024,
    price: 180000,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    category: 'Coupe',
    description: 'A 4-door coupe that defies physics with its raw power and luxurious comfort.',
    specs: {
      engine: '4.0L V8 Biturbo',
      horsepower: 630,
      acceleration: '3.1s',
      topSpeed: '196 mph'
    }
  },
  {
    id: '2',
    brand: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    price: 240000,
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop',
    category: 'Coupe',
    description: 'Born on the track, built for the road. The ultimate driving machine.',
    specs: {
      engine: '4.0L Flat-6',
      horsepower: 518,
      acceleration: '3.0s',
      topSpeed: '184 mph'
    }
  },
  {
    id: '3',
    brand: 'Rolls-Royce',
    model: 'Spectre',
    year: 2024,
    price: 420000,
    image: 'https://images.unsplash.com/photo-1631295868223-63260951a348?q=80&w=2070&auto=format&fit=crop',
    category: 'Luxury',
    description: 'The world’s first ultra-luxury electric super coupe.',
    specs: {
      engine: 'Dual Electric Motors',
      horsepower: 577,
      acceleration: '4.4s',
      topSpeed: '155 mph'
    }
  },
  {
    id: '4',
    brand: 'Audi',
    model: 'RS e-tron GT',
    year: 2023,
    price: 150000,
    image: 'https://images.unsplash.com/photo-1603584173870-7b297f5e3876?q=80&w=2071&auto=format&fit=crop',
    category: 'Sedan',
    description: 'Electrifying performance meets stunning design in this grand tourer.',
    specs: {
      engine: 'Dual Electric Motors',
      horsepower: 637,
      acceleration: '3.1s',
      topSpeed: '155 mph'
    }
  },
  {
    id: '5',
    brand: 'Lamborghini',
    model: 'Urus Performante',
    year: 2024,
    price: 265000,
    image: 'https://images.unsplash.com/photo-1678801708761-12c823053d2c?q=80&w=2070&auto=format&fit=crop',
    category: 'SUV',
    description: 'The bar for Super SUVs has been raised.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      horsepower: 657,
      acceleration: '3.3s',
      topSpeed: '190 mph'
    }
  },
  {
    id: '6',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 85000,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop',
    category: 'Convertible',
    description: 'Open-air adrenaline with precise M engineering.',
    specs: {
      engine: '3.0L Inline-6 Twin-Turbo',
      horsepower: 503,
      acceleration: '3.6s',
      topSpeed: '180 mph'
    }
  }
];

export const BRANDS = ['All', ...Array.from(new Set(MOCK_CARS.map(car => car.brand)))];
export const CATEGORIES = ['All', ...Array.from(new Set(MOCK_CARS.map(car => car.category)))];
