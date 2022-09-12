import React from "react";
import {
  HeaderEmpreendimentoContent,
  HeaderTitleEmpreendimento,
  HeaderParagraphEmpreendimento,
  HeaderCarouselEmpreendimento,
} from "./styled";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ImageSwiper1 from "../../../images/swiper-img1.png";
import ImageSwiper2 from "../../../images/swiper-img2.png";
import ImageSwiper3 from "../../../images/swiper-img3.png";


export default function HeaderEmpreendimento() {
  SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <HeaderEmpreendimentoContent>
        <HeaderCarouselEmpreendimento>
        <HeaderTitleEmpreendimento>O empreendimento</HeaderTitleEmpreendimento>
        <HeaderParagraphEmpreendimento>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          viverra nisl, id nullam et morbi. Ornare ut est faucibus nec ut
          curabitur sagittis. Dui risus amet, sit morbi aliquet. In consectetur
          hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla
          cursus urna habitant integer in orci, amet. Elementum habitasse sem
          amet sit mi est. Aenean dui, odio malesuada ullamcorper est sed.
          Aliquet lacus, platea nibh ultricies turpis diam leo duis. Amet massa,
          sit rhoncus leo laoreet habitant. Aliquam nullam risus duis curabitur.
        </HeaderParagraphEmpreendimento>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 2,
              stretch: 0,
              depth: 100,
              modifier: 0,
              slideShadows: false,
            }}
            pagination={false}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={ImageSwiper1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImageSwiper2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImageSwiper3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImageSwiper1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImageSwiper2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImageSwiper3} alt="" />
            </SwiperSlide>
          </Swiper>
        </HeaderCarouselEmpreendimento>
      
    </HeaderEmpreendimentoContent>
  );
}
