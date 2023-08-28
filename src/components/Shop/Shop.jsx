import './shop.scss'

import React from 'react'
import ShopCaruselImg from '../../../public/shop_carusel1.png'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation } from 'swiper/modules';
import ArrivalCarusel from '../NewArrivalCarusel/ArrivalCarusel';
import ShopCards from '../ShopCards/ShopCards';
import Cards from '../Cards/Cards';
import Brands from '../Brands/Brands';
const Shop = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='shop_carusel-div'>
                        <img className='carousel_img' src={ShopCaruselImg} alt="..." />
                        <div className='shop_carusel-text'>
                            <h2 className='text_h2-one'>T-shirt / Tops</h2>
                            <h1 className='text_h1'>Summer <br/> Value Pack</h1>
                            <h2 className='text_h2-two'>cool / colorful / comfy</h2>
                            <button className='text_btn'><h4>Shop Now</h4></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='shop_carusel-div'>
                    <img className='carousel_img' src={ShopCaruselImg} alt="..." />
                    <div className='shop_carusel-text'>
                        <h2 className='text_h2-one'>T-shirt / Tops</h2>
                        <h1 className='text_h1'>Summer <br/> Value Pack</h1>
                        <h2 className='text_h2-two'>cool / colorful / comfy</h2>
                        <button className='text_btn'><h4>Shop Now</h4></button>
                    </div>
                </div>
                    
                    
                </SwiperSlide>

            </Swiper>

            <div className='newarrival-div' >
                <div className='a'></div>
                <p className='newarrival'> New Arrival</p>
            </div>

            <ArrivalCarusel/>

            <div className='newarrival-div' >
                <div className='a'></div>
                <p className='newarrival'> Big Saving Zone</p>
            </div>


            <ShopCards/>

            <div className='newarrivala-div' >
                <div className='b'></div>
                <p className='newarrivals'> Categories For Best Person</p>
            </div>

            <Cards/>

            <Brands/>
    </div>
  )
}

export default Shop