import React from 'react';
import { motion } from 'framer-motion';

interface Props {
	index: number;
	data: {
		title: string;
		description: string;
		imageUrl: string;
	};
}

const SolutionCard = ({ data, index }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1,
				delay: index * 0.5,
				ease: 'easeIn',
			}}
			className="group bg-white min-h-[300px] shadow-[0px_25px_37.24px_0.76px_rgba(82,80,81,0.08)] rounded-lg py-[31px] px-[37px] w-full max-w-[270px] hover:bg-primary hover:-translate-y-2 transition-transform space-y-2"
		>
			<img
				src={data.imageUrl}
				alt="Residential Plan"
				className="w-[70px] h-[70px] rounded-full"
			/>
			<div className="space-y-2 mt-1 text-ipc-navy group-hover:text-white">
				<h3 className="text-xl lg:text-2xl font-semibold group-hover:text-white">
					{data.title}
				</h3>
				<p className="text-gray-600 mb-4 leading-[170%] opacity-80 group-hover:text-white">
					{data.description}
				</p>
			</div>
		</motion.div>
	);
};

export default SolutionCard;
