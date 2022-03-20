import React from 'react';

import TextField from '../../components/TextField/TextField';

import { ManageWrapper, TextFieldWrapper } from './styled';

const Manage = () => {  
  return (
    <ManageWrapper>
      <TextFieldWrapper>
        <TextField width="30%">Eee</TextField>
        <TextField width="50%">Eee</TextField>
      </TextFieldWrapper>
    </ManageWrapper>
  )
};

export default Manage;