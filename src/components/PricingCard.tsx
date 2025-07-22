import React from 'react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
	title: string;
	price: string;
	description: string;
	features: string[];
	buttonLabel: string;
	highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
	title,
	price,
	description,
	features,
	buttonLabel,
	highlighted = false,
}) => {
	return (
		<div
			className={`flex flex-col justify-between rounded-2xl p-8 shadow-lg shadow-[rgba(0,0,0,0.05)] border border-neutral-50 transition-transform duration-300 hover:-translate-y-2 bg-white ${
				highlighted ? 'border-primary bg-primary text-white' : 'border-gray-200'
			}`}
		>
			<div>
				<h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
				<p className="text-4xl font-extrabold mb-4">
					{price}
					<span className="text-base font-medium ml-1">/month</span>
				</p>
				<p className="mb-6 text-sm opacity-80">{description}</p>

				<ul className="space-y-3 mb-6">
					{features.map((feature, idx) => (
						<li
							key={idx}
							className={`flex items-center space-x-2 ${
								highlighted ? 'text-white' : 'text-gray-700'
							}`}
						>
							<span className="text-green-500">✔</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>

			<Link to={'https://wa.me/+2348100033164'} target="_blank">
				<button
					className={`mt-auto w-full py-3 rounded-xl font-semibold text-center transition-colors ${
						highlighted
							? 'bg-white text-primary hover:bg-gray-100'
							: 'bg-primary text-white hover:bg-primary/90'
					}`}
				>
					{buttonLabel}
				</button>
			</Link>
		</div>
	);
};

export default PricingCard;
