import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FooterCTA = () => {
  return (
    <section className="relative bg-gradient-footer overflow-hidden">
      {/* Decorative curves */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-0 left-0 w-full h-32"
          viewBox="0 0 1200 120"
          fill="none"
        >
          <path
            d="M0,0V120H1200V0C1000,80 600,40 0,0Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-1/2 h-full"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M400 0C350 50 250 100 150 50C50 0 0 50 0 0H400Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(233,30,99,0.3)" />
              <stop offset="100%" stopColor="rgba(233,30,99,0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-light text-white mb-8">
          Take your trading experience to the{" "}
          <span className="text-ipc-magenta font-medium">next level</span>
        </h2>
        <Link
          to="https://www.google.com"
          target="_blank"
          className="bg-gradient-to-r from-[#ff45834d] to-[#e91e631a] hover:opacity-70 transition duration-300"
        >
          <Button variant="ipc" className="text-sm rounded-full text-white ">
            CONTACT US TODAY
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FooterCTA;
