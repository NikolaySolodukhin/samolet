import { styled } from '@linaria/react'
// @ts-ignore
import backgroundImageUrl from './banner-image.png'
import { BlackTextColor, MainBlueColor } from '../global/constants'

console.log(backgroundImageUrl)

export const PromoWrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  font-family: 'CoFoSansMedium';
`

export const PromoInner = styled.div`
  display: flex;
`

export const PromoBanner = styled.div`
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-color: ${BlackTextColor};
  background-repeat: no-repeat;
  border-radius: 24px;
  width: 860px;
  padding-left: 100px;
  padding-top: 170px;
  padding-bottom: 128px;
  margin-right: 32px;
`

export const PromoSubTitle = styled.h3`
  color: ${MainBlueColor};

  margin-top: 0;
  margin-bottom: 76px;
  font-size: 24px;
  line-height: 24px;
  font-weight: normal;
`

export const PromoTitle = styled.h1`
  font-weight: bold;
  margin-top: 0;
  font-size: 80px;
  line-height: 90px;
  color: white;
  margin-bottom: 40px;
  font-family: 'CoFoSansBold';
  font-weight: normal;
`
