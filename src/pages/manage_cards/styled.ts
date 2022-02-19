import styled, { css } from 'styled-components';

export const ManageWrapper = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.lightGreen};
    width: 100%;
    height: 100vh;
  `
)