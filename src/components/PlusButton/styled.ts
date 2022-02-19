import styled, { css } from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

export const PlusIcon = styled(Plus)(
  ({theme: { colors } }) => css`
    width: 3rem;
    height: 3rem;
    svg,
    path {
      stroke: ${colors.lightGray};
    };
  `
)