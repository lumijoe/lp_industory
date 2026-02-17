import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { ProductsSection } from './components/ProductsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CampaignSection } from './components/CampaignSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ProductsSection />
      <FeaturesSection />
      <CampaignSection />
      <CTASection />
      <Footer />
    </div>
  );
}
