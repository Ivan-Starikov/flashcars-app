import React from 'react';

import Arrow from '../Arrow/Arrow';
import TextField from '../TextField/TextField';

import { CardWrapper, ArrowWrapper } from './styled';

export type Props = {
  id: number;
  term: string;
  definition: string;
}

const cards = [
  {
    id: 1,
    term: 'Hi',
    definition: 'Greating word'
  }, 
  {
    id: 2,
    term: 'Bye',
    definition: 'A word we say in the end of the meeting'
  }, 
]

const Card = ({ id, term, definition }):Props => {
  return (
    <>
      <CardWrapper>
        <ArrowWrapper>
          {cards.map(card => {
            <TextField width="80%">{card.term}}</TextField>
          })}
          <Arrow side="left" />
          <Arrow side="right" />
        </ArrowWrapper>
    </CardWrapper>
    </>
  )
}

export default Card;