import React, { useState } from 'react';

import Folder from '../../components/Folder/Folder';

import { HomeWrapper, Header, FolderWrapper } from './styled';

const Cards = () => {
  const [folderList, setFolderList] = useState([]);

  // const addFolder = () => {
  //   setFolderList(folderList.unshift(<Folder key={folderList.length} />))
  // }

  return (
    <HomeWrapper>
      <Header />
      <FolderWrapper>
        <Folder newFolder />
        <Folder newFolder/>
        {folderList}
      </FolderWrapper>
    </HomeWrapper>
  )
}

export default Cards;