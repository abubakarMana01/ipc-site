import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const BusinessPlanSection = () => {
	return (
		<div className="bg-gray-50">
			<section id="business-plan" className="max-w-[1800px] mx-auto px-4 pt-10">
				<header>
					<motion.h2
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut' }}
						viewport={{ once: false }}
						className="text-3xl lg:text-4xl font-bold text-ipc-navy mb-4 text-center"
					>
						BUSINESS PLAN
					</motion.h2>
					<div className="w-20 h-1 bg-ipc-magenta mx-auto"></div>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto py-16 px-4">
					<PricingCard
						title="V-FIBER-BIZ-PLUS"
						price="₦30,500"
						description=""
						features={[
							'Up to 15mbps',
							'No data cap',
							'Unlimited Downloads',
							'Unlimited Streaming',
							'Unlimited Gaming',
						]}
						buttonLabel="Get Started"
					/>
					<PricingCard
						title="V-BIZ-MAX"
						price="₦49,500"
						description=""
						features={[
							'Up to 27Mbps',
							'No data cap',
							'Unlimited Downloads',
							'Unlimited Streaming',
							'Unlimited Uploads',
						]}
						buttonLabel="Get Started"
					/>
					<PricingCard
						title="V-BIZ-CHEETAH"
						price="₦75,500"
						description=""
						features={[
							'Up to 45mbps',
							'No data cap',
							'Unlimited Downloads​',
							'Unlimited Uploads',
							'Unlimited Streaming',
						]}
						buttonLabel="Get Started"
					/>
					<PricingCard
						title="V-BIZ-ULTIMATE"
						price="₦96,650"
						description=""
						features={[
							'Up to 53Mbps',
							'No data cap',
							'Unlimited Downloads',
							'Unlimited Streaming',
							'Unlimited Gaming',
						]}
						buttonLabel="Get Started"
					/>
					<PricingCard
						title="V-BIZ-BOLT"
						price="₦125,550"
						description=""
						features={[
							'Up to 70Mbps',
							'No data cap',
							'Unlimited Downloads',
							'Unlimited Streaming',
							'Unlimited Gaming',
						]}
						buttonLabel="Get Started"
					/>
				</div>
			</section>
		</div>
	);
};

export default BusinessPlanSection;
