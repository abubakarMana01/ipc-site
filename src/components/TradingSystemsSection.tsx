import { Button } from '@/components/ui/button';
import tradingImage from '@/assets/trading-systems.jpg';

const TradingSystemsSection = () => {
  return (
    <section className="relative bg-gradient-purple overflow-hidden">
      {/* Decorative curves */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 right-0 w-1/2 h-full" viewBox="0 0 400 400" fill="none">
          <path d="M400 400C350 350 250 300 150 350C50 400 0 350 0 400H400Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl font-light mb-6">
              Trading Communication Systems
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Unlock your trading potential with secure, reliable, and efficient communication 
              systems that ensure flawless execution and real-time market access.
            </p>
            <Button variant="ipc" className="text-sm">
              EXPLORE NOW
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={tradingImage} 
              alt="Trading Communication Systems" 
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSystemsSection;