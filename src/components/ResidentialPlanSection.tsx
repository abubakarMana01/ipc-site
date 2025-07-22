import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const ResidentialPlanSection = () => {
	return (
		<section
			id="residential-plan"
			className="max-w-[1800px] mx-auto px-4 pt-10"
		>
			<header>
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					viewport={{ once: false }}
					className="text-3xl lg:text-4xl font-bold text-ipc-navy mb-4 text-center"
				>
					RESIDENTIAL PLAN
				</motion.h2>
				<div className="w-20 h-1 bg-ipc-magenta mx-auto"></div>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto py-16 px-4">
				<PricingCard
					title="V-FIBER-HOME-PLUS"
					price="₦18,600"
					description="Perfect for individuals just getting started."
					features={[
						'Up to 12Mbps',
						'No data cap',
						'Unlimited Downloads',
						'Unlimited Streaming',
						'Unlimited Gaming',
					]}
					buttonLabel="Get Started"
				/>
				<PricingCard
					title="V-FIBER-HOME-MAX"
					price="₦23,500"
					description="Ideal for small teams and growing businesses."
					features={[
						'Up to 13Mbps',
						'No data cap',
						'Unlimited Downloads',
						'Unlimited Streaming',
						'Unlimited Uploads',
					]}
					buttonLabel="Get Started"
				/>
				<PricingCard
					title="V-FIBER-ULTMATE-Prepaid"
					price="₦32,500"
					description="Tailored solutions for larger organizations."
					features={[
						'Up to 20Mbps',
						'No data cap',
						'Unlimited Downloads',
						'Unlimited Uploads',
						'Unlimited Streaming',
					]}
					buttonLabel="Get Started"
				/>
				<PricingCard
					title="V-FIBER-HOME-GRAND-Prepaid"
					price="₦45,500"
					description="Tailored solutions for larger organizations."
					features={[
						'Up to 40Mbps',
						'No data cap',
						'Unlimited Downloads',
						'Unlimited Uploads',
						'Unlimited Steaming',
					]}
					buttonLabel="Get Started"
				/>
			</div>
		</section>
	);
};

export default ResidentialPlanSection;
