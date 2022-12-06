import { styled } from '@linaria/react'
import { BlackTextColor, GrayTextColor } from '../global/constants'
// @ts-ignore
import backgroundImageUrl from './background.jpg'

console.log(backgroundImageUrl)

export const OurPlanWrapper = styled.section`
  background-color: white;
  padding-top: 64px;
  padding-bottom: 64px;
  font-family: 'CoFoSansBlack';
`

export const OurPlanInner = styled.div``

export const OurPlanSubTitle = styled.h3`
  color: ${GrayTextColor};
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
`

export const OurPlanTitle = styled.h2`
  font-size: 40px;
  color: ${BlackTextColor};
  text-align: center;
  line-height: 48px;
  margin-bottom: 40px;
  margin-top: 0;
  font-weight: normal;
`

export const OurPlanBanner = styled.div`
  background-color: ${BlackTextColor};
  padding: 60px;
  border-radius: 24px;
  height: 304px;

  background-image: url(${backgroundImageUrl});
  background-repeat: no-repeat;
`

export const OurPlanDescription = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-top: 0;
  color: white;
  margin-bottom: 24px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const OurPlanSubscription = styled.div`
  color: white;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  font-family: 'CoFoSansRegular';
`
