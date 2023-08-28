import './ArrivalCarusel.scss'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import CaruselImgOne from '../../../public/carusel1.svg'
import CaruselImgTwo from '../../../public/carusel2.svg'
import CaruselImgThree from '../../../public/carusel3.svg'
import CaruselImgFour from '../../../public/carusel4.svg'

const ArrivalCarusel = () => {
  return (
    <div className='arrival_carusel-div'>
        <Swiper

      slidesPerView={4}
      spaceBetween={100}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgOne} alt="img" /> Knitted Joggers</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgTwo} alt="img" /> Full Sleeve</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgThree} alt="img" /> Active T-Shirts</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgFour} alt="img" /> Urban Shirts</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgOne} alt="img" /> Knitted Joggers</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgTwo} alt="img" /> Full Sleeve</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgThree} alt="img" /> Active T-Shirts</SwiperSlide>
        <SwiperSlide className='arrival_carusel'><img className='arrival_carusel-img' src={CaruselImgFour} alt="img" /> Urban Shirts</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ArrivalCarusel