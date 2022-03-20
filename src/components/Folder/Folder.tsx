import React from 'react';

import PlusButton from '../PlusButton/PlusButton';

import { FolderWrapper, FolderName, MenuIcon } from './styled';

type Props = {
  newFolder?: boolean;
}

const Folder = ({ newFolder }:Props) => {
  return (
    <FolderWrapper>
      {newFolder ? (
        <PlusButton />
      ) : (
        <>
          <FolderName>Description of the person</FolderName>
          <MenuIcon />
        </>
      )}
    </FolderWrapper>

  )
};

export default Folder;
