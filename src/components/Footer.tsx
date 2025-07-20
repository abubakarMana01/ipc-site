import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ipc-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12">
                <img src="/linkora-logo.png" alt="Linkora" className="h-full" />
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  Global Services Operations Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  Linkora Ethics Hotline
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  ISO/IEC 27001:2013 Certified
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  IPC Restructuring Form 8937
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  Disclosure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  Anti-Money Canada Act
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-ipc-magenta transition-colors"
                >
                  Portal Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-ipc-magenta transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-ipc-magenta transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>©2025 Copyright IPC Systems, Inc. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-ipc-magenta transition-colors">
                Site Map
              </a>
              <a href="#" className="hover:text-ipc-magenta transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-ipc-magenta transition-colors">
                Patents
              </a>
              <a href="#" className="hover:text-ipc-magenta transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-ipc-magenta transition-colors">
                Terms & Service Levels
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
