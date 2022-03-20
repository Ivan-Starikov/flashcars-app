import React from 'react';

import Arrow from '../Arrow/Arrow';
import TextField from '../TextField/TextField';

import { CardWrapper, ArrowWrapper } from './styled';

const Card = () => {
  return (
    <CardWrapper>
      <ArrowWrapper>
        <TextField width="80%">Text</TextField>
        <Arrow side="left" />
        <Arrow side="right" />
      </ArrowWrapper>
    </CardWrapper>

  )
}

export default Card;