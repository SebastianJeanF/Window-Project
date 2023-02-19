// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
	const id = rand(1, 200);
	return `https://picsum.photos/id/${id}/1600/400`;
}

function createSlide() {
	const name = imgUrl();
	return (
		<SwiperSlide>
			<div
				className='w-full p-40 md:p-60 bg-cover bg-center'
				style={{ backgroundImage: `url(${name})` }}></div>
		</SwiperSlide>
	);
}

export default () => {
	return (
		<Swiper
			modules={[Autoplay, Navigation, EffectFade]}
			autoplay={true}
			navigation
			pagination={{ clickable: true }}
			effect={'fade'}
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}>
			{createSlide()}
			{createSlide()}
			{createSlide()}
			{/* <SwiperSlide>
        <img src={img1}/>
        Slide 1
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2}/>
        Slide 1
      </SwiperSlide>      <SwiperSlide>
        <img src={img3}/>
        Slide 1
      </SwiperSlide> */}
		</Swiper>
	);
};
