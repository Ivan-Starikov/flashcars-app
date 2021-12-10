import React from 'react';

import Arrow from '../Arrow/Arrow';

import { CardWrapper, ArrowWrapper } from './styled';

const Card = () => {
  return (
    <CardWrapper>
      <ArrowWrapper>
        <Arrow side="left" />
        <Arrow side="right" />
      </ArrowWrapper>
    </CardWrapper>

  )
}

export default Card;