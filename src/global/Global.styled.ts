import { css } from '@linaria/core'
import { GrayBackgroundColor } from './constants'

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

      background-color: ${GrayBackgroundColor};
    }
  }
`
