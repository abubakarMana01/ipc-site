import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import broadbandImg from '@/assets/solutions/broadband.png';
import wifiSignal from '@/assets/solutions/wifi-signal.png';

const SolutionsSection = () => {
	return (
		<section className="bg-white py-10" id="solutions">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					viewport={{ once: false }}
					className="text-3xl lg:text-4xl font-bold text-ipc-navy mb-4 text-center"
				>
					Experience the Linkora Unlimited possibilities
				</motion.h2>
				<div className="w-20 h-1 bg-ipc-magenta mx-auto"></div>

				<div className="flex flex-wrap gap-10 mt-10 justify-center">
					{SOLUTIONS.map((solution, index) => (
						<SolutionCard key={solution.title} data={solution} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SolutionsSection;

const SOLUTIONS = [
	{
		title: 'Internet',
		description:
			'We have the high speed internet you need to keep you well connected throughout your home',
		imageUrl: wifiSignal,
	},
	{
		title: 'Broadband',
		description:
			'Access internet service around your home with our routers all over the world',
		imageUrl: broadbandImg,
	},
	{
		title: 'WiFi Internet',
		description: 'High-speed Internet access that is always on & fast.',
		imageUrl: broadbandImg,
	},
];
