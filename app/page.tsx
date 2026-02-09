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
import Reveal from "@/components/animations/Reveal";
import { GridLayout } from "@/components/layout/GridLayout";
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <main>
      <GridLayout showGrid={false}>
      <Navbar />
      <HeroSection />
      <Marquee />
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </GridLayout>

    </main>
  );
}
