import React, { useState } from 'react';

import Folder from '../../components/Folder/Folder';

import { HomeWrapper, Header, FolderWrapper } from './styled';

const Cards = () => {
  const [folderList, setFolderList] = useState([]);

  return (
    <HomeWrapper>
      <Header />
      <FolderWrapper>
        <Folder />
        <Folder newFolder />
        {folderList}
      </FolderWrapper>
    </HomeWrapper>
  )
}

export default Cards;