export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  category: 'Sedan' | 'SUV' | 'Coupe' | 'Convertible' | 'Luxury';
  description: string;
  specs: {
    engine: string;
    horsepower: number;
    acceleration: string; // 0-60 mph
    topSpeed: string;
    transmission?: 'Automatic' | 'Manual';
    fuelType?: 'Petrol' | 'Electric' | 'Hybrid';
  };
  featured?: boolean;
  badge?: 'New Arrival' | 'Limited Edition' | null;
}

export interface CartItem extends Car {
  quantity: number;
}
