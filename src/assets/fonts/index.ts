import { styled } from '@linaria/react'
// @ts-ignore
import CoFoSansBlackWoff2 from './CoFo-Sans-Black.woff2'
// @ts-ignore
import CoFoSansBlackWoff from './CoFo-Sans-Black.woff'
// @ts-ignore
import CoFoSansBoldWoff2 from './CoFo-Sans-Bold.woff2'
// @ts-ignore
import CoFoSansBoldWoff from './CoFo-Sans-Bold.woff'
// @ts-ignore
import CoFoSansMediumWoff2 from './CoFo-Sans-Medium.woff2'
// @ts-ignore
import CoFoSansMediumWoff from './CoFo-Sans-Medium.woff'
// @ts-ignore
import CoFoSansRegularWoff2 from './CoFo-Sans-Regular.woff2'
// @ts-ignore
import CoFoSansRegularWoff from './CoFo-Sans-Regular.woff'

// @ts-ignore
import RobotoRegularWoff2 from './Roboto-Medium.woff2'
// @ts-ignore
import RobotoRegularWoff from './Roboto-Medium.woff'

console.log(
  RobotoRegularWoff2,
  RobotoRegularWoff,
  CoFoSansBlackWoff2,
  CoFoSansBlackWoff,
  CoFoSansBoldWoff2,
  CoFoSansBoldWoff,
  CoFoSansMediumWoff2,
  CoFoSansMediumWoff,
  CoFoSansRegularWoff2,
  CoFoSansRegularWoff
)
export const CoFoSansBlackFamily = 'CoFoSansBlack'
export const CoFoSansBoldFamily = 'CoFoSansBold'
export const CoFoSansMediumFamily = 'CoFoSansMedium'
export const CoFoSansRegularFamily = 'CoFoSansRegular'
export const RobotoMediumFamily = 'Roboto'

export const CoFoSansBlackFont = styled.style`
  @font-face {
    font-family: ${CoFoSansBlackFamily};
    src: url(${CoFoSansBlackWoff2}) format('woff2'),
      url(${CoFoSansBlackWoff}) format('woff');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
`

export const CoFoSansBoldFont = styled.style`
  @font-face {
    font-family: ${CoFoSansBoldFamily};
    src: url(${CoFoSansBoldWoff2}) format('woff2'),
      url(${CoFoSansBoldWoff}) format('woff');
    font-display: swap;
    font-weight: 900;
    font-style: normal;
  }
`

export const CoFoSansMediumFont = styled.style`
  @font-face {
    font-family: ${CoFoSansMediumFamily};
    src: url(${CoFoSansMediumWoff2}) format('woff2'),
      url(${CoFoSansMediumWoff}) format('woff');
    font-display: swap;
    font-weight: 500;
    font-style: normal;
  }
`

export const CoFoSansRegularFont = styled.style`
  @font-face {
    font-family: ${CoFoSansRegularFamily};
    src: url(${CoFoSansRegularWoff2}) format('woff2'),
      url(${CoFoSansRegularWoff}) format('woff');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }
`
export const RobotoRegularFont = styled.style`
  @font-face {
    font-weight: 600;
    font-family: ${RobotoMediumFamily};
    font-style: normal;

    src: local('Roboto Medium'), local('Roboto-Medium'),
      url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
    font-display: swap;
  }
`
