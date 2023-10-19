import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper/modules';
import Image from 'next/image'

const width=window.innerWidth;
const height=window.innerHeight;


export const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg'
        }
    ])

  return (
    <Swiper 
    navigation={true} 
    pagination={true}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation,Pagination,Mousewheel,Keyboard]} 
    className="mySwiper"
    >
        {
        banners.map((banner,index)=> {
            return (
                <SwiperSlide key={index}>
                    <div className="swiper-slide">
                        <Image src={banner.imgUrl} alt="banner" width={width} height={height/2}
                        style={{
                            objectFit: "cover"
                        }}/>
                    </div>
                </SwiperSlide>
            )
        })
    }
    </Swiper>
  )
}
