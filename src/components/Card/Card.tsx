import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import { Navigation } from 'swiper';

import TextField from '../TextField/TextField';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'

import { SlideWrapper, SliderItem } from './styled';

const cards = [
  {
    term: 'Hi',
    definition: 'Greating word'
  }, 
  {
    term: 'Bye',
    definition: 'A word we say in the end of the meeting'
  }, 
]

const Card = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        >
        <SwiperSlide>
          <SlideWrapper>
            <SliderItem>
              <TextField width='80%'>1</TextField>
            </SliderItem>
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <SliderItem>
              <TextField width='80%'>2</TextField>
            </SliderItem>
          </SlideWrapper>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Card;