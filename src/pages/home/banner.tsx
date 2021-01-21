import './styles/banner.scss'

import React from 'react';
import { Swiper, SwiperItem } from "@tarojs/components";


function Banner() {

  const data = [1,2,3]

  return (
    <Swiper className="swiper-container">
      { data.map( (item, index) => (
          <SwiperItem key={index} className="swiper-item">{item}</SwiperItem>
        ))
      }      
    </Swiper>
  )
}

export { Banner }