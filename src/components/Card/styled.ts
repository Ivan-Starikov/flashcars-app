import styled, { css } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';



export const SlideWrapper = styled.div(
  ({ theme: { colors } }) => css`
    width: 20rem;
    height: 24rem;
    margin: 0 auto;
    background-color: ${colors.green};
    border-radius: 0.5rem;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12); 
`)

export const SliderItem = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`
