import { Search, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
	return (
		<header className="bg-white">
			{/* Main Header */}
			<div className="max-w-7xl mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div className="h-16">
							<img src="/logo.jpg" alt="Linkora" className="h-16" />
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
