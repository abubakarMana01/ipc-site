import { useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon set

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="IPC" className="h-16" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-ipc-magenta font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#insights"
              className="hover:text-ipc-magenta font-medium transition-colors"
            >
              IPC Insights
            </a>
            <a
              href="#about"
              className="hover:text-ipc-magenta font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact-us"
              className="text-ipc-magenta font-medium transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-ipc-magenta focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <a
              href="#"
              className="hover:text-ipc-magenta font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#insights"
              className="hover:text-ipc-magenta font-medium transition-colors"
            >
              IPC Insights
            </a>
            <a
              href="#about"
              className="hover:text-ipc-magenta font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact-us"
              className="text-ipc-magenta font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
