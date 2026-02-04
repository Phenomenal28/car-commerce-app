import './globals.css';
import { Navbar } from '../src/components/layout/Navbar';
import { HeroSection } from '../src/components/home/HeroSection';
//import { FeaturedCars } from '../src/components/home/FeaturedCars';
import {Marquee} from '../src/components/home/Marquee';
import Features from '../src/components/home/Features';
import AboutUs from '../src/components/home/AboutUs';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Marquee />
      <Features />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />

    </main>
  );
}
