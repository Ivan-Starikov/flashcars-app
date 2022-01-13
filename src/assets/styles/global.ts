import { createGlobalStyle } from "styled-components";

import Montserrat from '../fonts/Montserrat-Regular.ttf'

export default createGlobalStyle`
    @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* font-family: 'Montserrat', sans-serif; */
    color: #454545;
  }
`