import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import TradingSystemsSection from '@/components/TradingSystemsSection';
import NetworkServicesSection from '@/components/NetworkServicesSection';
import InsightsSection from '@/components/InsightsSection';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <TradingSystemsSection />
      <NetworkServicesSection />
      <InsightsSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
