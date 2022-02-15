import styled, { css } from "styled-components";

 export const FieldWrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.beige};
    width: 75%;
    height: auto;
    border-radius: 0.5rem;
  `)

  export const TextField = styled.div`
    padding: 1.5rem 0.5rem;
  `