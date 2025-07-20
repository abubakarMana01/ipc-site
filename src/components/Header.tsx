const Header = () => {
	return (
		<header className="bg-white">
			{/* Main Header */}
			<div className="max-w-7xl mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div className="h-16">
							<img src="/logo.jpg" alt="LINKORA" className="h-16" />
						</div>
					</div>

					{/* Navigation */}
					<nav>
						<div className="max-w-7xl mx-auto px-4">
							<div className="flex items-center space-x-8 py-4">
								<a
									href="#solutions"
									className="hover:text-ipc-magenta  focus:text-ipc-magenta transition-colors font-medium"
								>
									Solutions
								</a>
								<a
									href="#insights"
									className="hover:text-ipc-magenta focus:text-ipc-magenta transition-colors font-medium"
								>
									IPC Insights
								</a>
								<a
									href="#about"
									className="hover:text-ipc-magenta focus:text-ipc-magenta transition-colors font-medium"
								>
									About Us
								</a>
								<a
									href="#contact-us"
									className="text-ipc-magenta focus:text-ipc-magenta  transition-colors font-medium"
								>
									Contact Us
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
