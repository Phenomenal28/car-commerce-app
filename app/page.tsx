import './globals.css';
import { Navbar } from '../src/components/layout/Navbar';
import { HeroSection } from '../src/components/home/HeroSection';
import { FeaturedCars } from '../src/components/home/FeaturedCars';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedCars />
    </main>
  );
}
