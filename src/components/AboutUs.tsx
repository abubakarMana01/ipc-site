import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import tradingImage from '@/assets/trading-systems.jpg';
import gradientBg from '@/assets/gradient-bg.jpg';

const AboutUs = () => {
	const contentRef = useRef(null);
	const isInView = useInView(contentRef, { once: false, margin: '-100px' });

	return (
		<section className="relative bg-[#2e125c] overflow-hidden">
			{/* Decorative curves */}
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `url(${gradientBg})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			></div>

			<div className="relative max-w-7xl mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div className="text-white" ref={contentRef}>
						<motion.h2
							className="text-4xl font-light mb-6 text-[#e60091]"
							initial={{ y: 70, opacity: 0 }}
							animate={isInView ? { y: 0, opacity: 1 } : {}}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							About Us
						</motion.h2>

						{/* Subtext + Button motion wrapper */}
						<motion.div
							initial={{ y: 70, opacity: 0 }}
							animate={isInView ? { y: 0, opacity: 1 } : {}}
							transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
						>
							<p className="text-white/90 text-lg mb-8 leading-[180%]">
								The Internet Service Provision section of the business offers
								unlimited internet with no data cap through fiber Broadband or
								fixed wireless. Serving businesses of all types and residential
								users, we provide you with a more affordable and secure
								broadband connection. We are currently deploying
								Fiber-to-the-Home Internet to several homes, estates, and
								residential buildings along our catchment areas.
							</p>
						</motion.div>
						<motion.div
							initial={{ y: 70, opacity: 0 }}
							animate={isInView ? { y: 0, opacity: 1 } : {}}
							transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
						>
							<Button
								variant="ipc"
								className="text-sm bg-gradient-to-r from-[#e60091] to-[#082452] text-white rounded-full px-6 py-3 hover:bg-gradient-to-l"
							>
								EXPLORE NOW
							</Button>
						</motion.div>
					</div>

					{/* Image */}
					<motion.div
						className="relative"
						initial={{ x: 150, opacity: 0 }}
						animate={isInView ? { x: 0, opacity: 1 } : {}}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						<img
							src={tradingImage}
							alt="Trading Communication Systems"
							className="w-full h-80 object-cover rounded-lg shadow-2xl"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
