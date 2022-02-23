import React from 'react';

import PlusButton from '../PlusButton/PlusButton';

import { FolderWrapper, MenuIcon } from './styled';

interface IProps {
  newFolder: boolean;
}

const Folder = ({ newFolder: boolean}:IProps) => {
  return (
    <FolderWrapper>
      {newFolder ? (
        <PlusButton />
      ) : (
        <MenuIcon />
      )}
      <MenuIcon />
    </FolderWrapper>

  )
};

export default Folder;
