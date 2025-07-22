import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-[#101a2d] text-white shadow-md w-full z-50">
			<div className="flex items-center justify-between max-w-7xl mx-auto pt-4 pr-4">
				<ul className="w-fit ml-auto flex items-center space-x-10 text-sm font-medium">
					<li>
						<a href="#">Linkora Portal</a>
					</li>
					<li>
						<a
							href="#contact-us"
							className="text-ipc-magenta font-medium transition-colors"
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>

			<div className="max-w-7xl mx-auto px-4 pb-6 pt-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<img src="/linkora.svg" alt="LINKORA" className="h-20" />
					</div>

					<nav className="hidden md:flex space-x-10">
						<a
							href="/"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Home
						</a>
						<a
							href="#solutions"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Solutions
						</a>
						<a
							href="#about"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							About Us
						</a>
						<a
							href="#residential-plan"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Residential Plan
						</a>
						<a
							href="#business-plan"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Business Plan
						</a>
						<a
							href="#why-linkora"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Why Linkora
						</a>
					</nav>

					<button
						className="md:hidden text-ipc-magenta focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{isOpen && (
					<div className="md:hidden mt-4 flex flex-col space-y-4">
						<a
							href="/"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Home
						</a>
						<a
							href="#solutions"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Solutions
						</a>
						<a
							href="#about"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							About Us
						</a>
						<a
							href="#residential-plan"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Residential Plan
						</a>
						<a
							href="#business-plan"
							className="hover:text-ipc-magenta font-medium transition-colors"
						>
							Business Plan
						</a>
						<a
							href="#why-linkora"
							className="text-ipc-magenta font-medium transition-colors"
						>
							Why Linkora
						</a>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
