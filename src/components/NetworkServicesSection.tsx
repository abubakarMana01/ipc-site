import { Button } from '@/components/ui/button';
import networkImage from '@/assets/network-services.jpg';

const NetworkServicesSection = () => {
  return (
    <section className="relative bg-gradient-blue overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-20 top-20 w-40 h-40">
          <div className="grid grid-cols-8 gap-1 w-full h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full opacity-60"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={networkImage} 
              alt="Network Services" 
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="text-white order-1 lg:order-2">
            <h2 className="text-4xl font-light mb-6 text-ipc-magenta">
              Network Services
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Optimize your trading performance with IPC's advanced network services, 
              designed to deliver seamless connectivity, ultra-low latency and uninterrupted 
              access to global financial markets.
            </p>
            <Button variant="ipc" className="text-sm">
              DISCOVER MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkServicesSection;