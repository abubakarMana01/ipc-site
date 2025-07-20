import { Search, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-ipc-light-gray py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-6 text-sm">
          <a
            href="#"
            className="text-ipc-navy hover:text-ipc-magenta transition-colors"
          >
            IPC Portal
          </a>
          <a
            href="#"
            className="text-ipc-navy hover:text-ipc-magenta transition-colors"
          >
            Xchange Portal Login
          </a>
          <a
            href="#"
            className="text-ipc-navy hover:text-ipc-magenta transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-ipc-navy hover:text-ipc-magenta transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-16">
              <img src="/logo.jpg" alt="IPC" className="h-full w-full" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search IPC.com"
                className="pl-4 pr-12 py-2 w-full border-2 border-ipc-light-gray focus:border-ipc-magenta rounded-none"
              />
              <Button
                variant="ipc"
                size="icon"
                className="absolute right-0 top-0 h-full w-12 rounded-none"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-ipc-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-4">
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              IPC Insights
            </a>
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              News & Events
            </a>
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              Partnerships
            </a>
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-white hover:text-ipc-magenta transition-colors font-medium"
            >
              ESG
            </a>
            <a
              href="#"
              className="text-ipc-magenta hover:text-white transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
