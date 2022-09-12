import React from 'react';
import Swiper from 'react-id-swiper';
import ImageSwiper1 from '../../../Images/swiper-img1.png';
import ImageSwiper2 from '../../../Images/swiper-img2.png';
import ImageSwiper3 from '../../../Images/swiper-img3.png';




export default function SwiperEmpreendimento() {
  const params ={
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 10,
      slideShadows: true,
    },
    pagination: false, 
    spaceBetween: 40
  };

  return (
    <Swiper {...params}>
      <img src={ImageSwiper1} alt=''/>
      <img src={ImageSwiper2} alt=''/>
      <img src={ImageSwiper3} alt=''/>
      <img src={ImageSwiper1} alt=''/>
      <img src={ImageSwiper2} alt=''/>
    </Swiper>
  );
}



