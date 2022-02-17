import { DefaultTheme } from 'styled-components';

export enum Colors {
  lightGreen = '#c8e3c8',
  green = '#b7ceb7',
  darkGreen = '#9cb59c',
  beige ='#eff0df',
  lightGray = '#575757',
  fontPrimary = '#404040',
}

const theme: DefaultTheme = {
  colors: Colors,
}

export default theme;