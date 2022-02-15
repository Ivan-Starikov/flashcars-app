import styled from 'styled-components';

import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';

const arrow =`
  width: 2.7rem;
  height: 2.7rem;
  position: absolute;
  cursor: pointer;
`

export const LeftArrowIcon = styled(LeftArrow)`
  ${arrow};
  left: -3.5rem;
`
export const RightArrowIcon = styled(RightArrow)`
  ${arrow};
  right: -3.5rem;
`


