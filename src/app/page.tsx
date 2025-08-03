
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
