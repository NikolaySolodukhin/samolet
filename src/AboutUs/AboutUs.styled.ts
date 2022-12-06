import { styled } from '@linaria/react'
import {
  BlackTextColor,
  GrayTextColor,
  MainBlueColor,
} from '../global/constants'

// @ts-ignore
import backgroundSecondImageUrl from './slider-2.png'
// @ts-ignore
import backgroundFirstImageUrl from './slider-1.png'
// @ts-ignore
import backgroundThirdImageUrl from './slider-3.png'
import { css } from '@linaria/core'

console.log(
  backgroundSecondImageUrl,
  backgroundFirstImageUrl,
  backgroundThirdImageUrl
)

export const AboutUsWrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  font-family: 'CoFoSansBlack';
`

export const AboutUsSubTitle = styled.h3`
  color: ${GrayTextColor};
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 20px;
`

export const AboutUsTitle = styled.h2`
  font-size: 40px;
  color: ${BlackTextColor};
  text-align: center;
  line-height: 48px;
  margin-bottom: 40px;
  margin-top: 0; ;
`

export const SliderList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SliderItemTitle = styled.h4`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-family: 'Roboto';
  font-weight: normal;
`

export const SliderItem = styled.div`
  position: relative;
  background-color: white;
  border-radius: 24px;
  padding: 32px;
  height: 304px;
  width: 304px;
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`

export const SliderBigItem = styled(SliderItem)`
  min-height: 324px;
  width: 640px;

  background-image: url(${backgroundSecondImageUrl});
  background-repeat: no-repeat;
  background-position: bottom right;
`

export const SliderFirst = styled(SliderItem)`
  background-image: url(${backgroundFirstImageUrl});
  background-repeat: no-repeat;
  background-position: bottom center;
`

export const SliderThird = styled(SliderItem)`
  background-image: url(${backgroundThirdImageUrl});
  background-repeat: no-repeat;
  background-position: bottom right;
`

export const SliderThirdDecorationElement = css`
  position: absolute;
  right: 58px;
  bottom: 74px;
`

export const SliderFirstDecorationElement = css`
  position: absolute;
  left: 32px;
  bottom: 22px;
`

export const SliderFirstDecorationSvg = css`
  position: absolute;
  right: 14px;
  top: 8px;
`

export const SliderFirstButton = styled.a`
  background-color: ${MainBlueColor};
  padding: 11px 12px;
  padding-right: 30px
  color: white;
  font-size: 10px;
  line-height: 5px;
  border-radius: 24px;
  text-decoration: none;
  position: absolute;
  bottom: 56px;
  right: 16px;
`

export const SliderSecondButton = styled.a`
  background-color: ${BlackTextColor};
  border-radius: 16px;
  text-decoration: none;
  color: white;
  font-size: 11px;
  line-height: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  bottom: 107px;
  left: 234px;
  padding-right: 17px;
  padding-left: 45px;
`

export const SliderSecondDecorationSvg = css`
  position: absolute;
  left: 18px
  top: 8px;
`
