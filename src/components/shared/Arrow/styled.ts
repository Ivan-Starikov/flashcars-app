import styled from 'styled-components';

import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';

const arrowCommon = `
  width: 2.7rem;
  height: 2.7rem;
  position: absolute;
  cursor: pointer;
`

export const LeftArrowIcon = styled(LeftArrow)`
  ${arrowCommon};
  left: -3.5rem;
`
export const RightArrowIcon = styled(RightArrow)`
  ${arrowCommon};
  right: -3.5rem;
`


