import { createGlobalStyle } from 'styled-components'

import Montserrat from '../../fonts/Montserrat-SemiBold.ttf'

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat}) format('ttf'),
}

body {
  font-family: 'Montserrat', sans-serif;
}

  *,
  *::after,
  *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
