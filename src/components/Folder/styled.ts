import styled, { css } from "styled-components";

import { ReactComponent as Menu }  from '../../assets/icons/menu.svg';

export const FolderWrapper = styled.div(
  ({theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: ${colors.green};
    border-radius: 0.5rem;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${colors.darkGreen};
    }
  `
);

export const MenuIcon = styled(Menu)`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
`

export const FolderName = styled.div`
  padding: 0 0.5rem;
`