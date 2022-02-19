import React from 'react';

import { LeftArrowIcon, RightArrowIcon } from './styled';

type ArrowProps = {
  side: string;
}

const Arrow = ({ side }:ArrowProps) => {
  return (
    <>
      {side === "left" ? (
        <LeftArrowIcon />
      ) : (
        <RightArrowIcon />
      )}
    </>
  )
}

export default Arrow;