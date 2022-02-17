import React from 'react';

import Folder from '../../components/shared/Folder/Folder';

import { HomeWrapper, Header, FolderWrapper } from './styled';

const Cards = () => {
  return (
    <HomeWrapper>
      <Header />
      <FolderWrapper>
        <Folder />
      </FolderWrapper>
    </HomeWrapper>
  )
}

export default Cards;