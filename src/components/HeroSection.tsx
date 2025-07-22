import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import hero2 from '@/assets/hero/2.jpeg';
import hero3 from '@/assets/hero/3.jpeg';
import hero4 from '@/assets/hero/4.jpeg';
import hero5 from '@/assets/hero/5.jpeg';
import hero6 from '@/assets/hero/6.jpeg';

const slides = [
	{
		bgImg: hero2,
	},
	{
		bgImg: hero3,
	},
	{
		bgImg: hero4,
	},
	{
		bgImg: hero5,
	},
	{
		bgImg: hero6,
	},
];

const HeroSlider = () => {
	const swiperRef = useRef(null);

	return (
		<Swiper
			modules={[Autoplay, Pagination, Navigation]}
			onSwiper={(swiper) => (swiperRef.current = swiper)}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			pagination={{ clickable: true }}
			navigation
			loop
			className="relative w-full h-[20vh] md:h-[40vh] lg:h-[65vh]"
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div
						className="w-full h-full bg-cover bg-center flex items-center justify-start"
						style={{
							backgroundImage: `url(${slide.bgImg})`,
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
						}}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSlider;
