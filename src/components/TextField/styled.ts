import styled, { css } from "styled-components";
import { Props } from './TextField';

 export const FieldWrapper = styled.div<Props>(
  ({ theme: { colors }, width }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.beige};
    width: ${width ? width : 'auto'};
    min-height: auto;
    border-radius: 0.5rem;
  `)

  export const Text = styled.div`
    padding: 1.5rem 0.5rem;
  `