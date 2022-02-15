import React from 'react';

import Arrow from '../Arrow/Arrow';
import CardTextField from '../CardTextField/CardTextField';

import { CardWrapper, ArrowWrapper } from './styled';

const Card = () => {
  return (
    <CardWrapper>
      <ArrowWrapper>
        <CardTextField />
        <Arrow side="left" />
        <Arrow side="right" />
      </ArrowWrapper>
    </CardWrapper>

  )
}

export default Card;