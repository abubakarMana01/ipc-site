import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Import the arrow up icon
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import AboutUs from '@/components/AboutUs';
import ManagedServicesSection from '@/components/ManagedServicesSection';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';
import ResidentialPlanSection from '@/components/ResidentialPlanSection';
import BusinessPlanSection from '@/components/BusinessPlanSection';

const Home = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="min-h-screen relative">
			<Header />
			<HeroSection />
			<SolutionsSection />
			<div id="about">
				<AboutUs />
				<ManagedServicesSection />
			</div>
			<ResidentialPlanSection />
			<BusinessPlanSection />
			<FAQs />
			<FooterCTA />
			<Footer />

			{/* Scroll to Top Button */}
			{showScrollButton && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 bg-ipc-magenta text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-40"
					aria-label="Scroll to top"
				>
					<ArrowUp size={24} />
				</button>
			)}
		</div>
	);
};

export default Home;
