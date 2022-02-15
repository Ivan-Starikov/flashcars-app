import styled, { css } from "styled-components";

export const FolderWrapper = styled.div(
  ({theme: { colors } }) => css`
    width: 8rem;
    height: 8rem;
    border-radius: 0.5rem;
    background-color: ${colors.green}
  `
)