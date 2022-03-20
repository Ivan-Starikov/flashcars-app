import React from 'react';

import { FieldWrapper, Text } from './styled';

export type Props = {
  children: React.ReactNode;
  width?: string;
}

const TextField = ({ width, children }:Props) => {
  return (
    <FieldWrapper width={width}>
      <Text>{children}</Text>
    </FieldWrapper>

  )
}

export default TextField;