import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
	{
		question: 'Blazing Fast Speed',
		answer:
			'Stream HD content, game online, and work remotely — all without buffering or lag.',
	},
	{
		question: 'Local & Responsive Support',
		answer:
			'Our support team is right here in Nigeria, always ready to help when you need us.',
	},
	{
		question: 'Transparent, Honest Pricing',
		answer:
			'No hidden fees. No data caps. Just straightforward, affordable internet packages.',
	},
	{
		question: 'Smart Deployment Options',
		answer:
			"Whether it's fiber or high-capacity wireless, we tailor the best solution for your location.",
	},
	{
		question: 'Built for Business & Home',
		answer:
			'From enterprise-grade uptime to smooth Netflix nights — we’ve got you covered.',
	},
];

const FAQAccordion = () => {
	return (
		<section className="py-16 px-4" id="why-linkora">
			<div className="max-w-3xl mx-auto text-center mb-10">
				<h2 className="text-3xl font-bold mb-2">Why Choose Linkora?</h2>
				<p className="text-gray-600">
					Discover how our solutions can transform your internet experience.
				</p>
			</div>

			<Accordion.Root
				type="single"
				collapsible
				className="max-w-3xl mx-auto space-y-4"
			>
				{faqs.map((faq, index) => (
					<Accordion.Item
						key={index}
						value={`item-${index}`}
						className="overflow-hidden border border-gray-200 rounded-lg"
					>
						<Accordion.Header>
							<Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium text-gray-800 bg-white hover:bg-gray-100 transition focus:outline-none">
								<span>{faq.question}</span>
								<ChevronDown
									className="h-5 w-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
									aria-hidden
								/>
							</Accordion.Trigger>
						</Accordion.Header>

						<Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-6 pb-4 text-sm text-gray-600 bg-white">
							<div>{faq.answer}</div>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</section>
	);
};

export default FAQAccordion;
