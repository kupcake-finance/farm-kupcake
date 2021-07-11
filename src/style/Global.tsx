import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    src: url('/fonts/ProximaSoft-Medium.eot');
    src: url('/fonts/ProximaSoft-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/ProximaSoft-Medium.woff') format('woff'),
      url('/fonts/ProximaSoft-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
  font-family: 'Roboto', sans-serif;
  }
  body {
    background: #fff;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
