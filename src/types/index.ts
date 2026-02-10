export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  category: 'Sedan' | 'SUV' | 'Coupe' | 'Convertible' | 'Luxury';
  description: string;
  badge?: 'NEW ARRIVAL' | 'LIMITED EDITION' | 'FEATURED'; // Optional badge
  specs: {
    engine: string;
    horsepower: number;
    acceleration: string; // 0-60 mph
    topSpeed: string;
    transmission?: string; // Optional transmission type
  };
}

export interface CartItem extends Car {
  quantity: number;
}
