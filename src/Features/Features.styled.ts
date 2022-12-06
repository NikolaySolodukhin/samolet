import { styled } from '@linaria/react'
import { BlackTextColor, GrayTextColor } from '../global/constants'

export const FeatureButtonWrapper = styled.div`
  text-align: center;
`

export const FeatureListWrapper = styled.section`
  background-color: white;
  padding-bottom: 64px;
  padding-top: 64px;
  font-family: 'CoFoSansBlack';
`

export const FeatureSubTitle = styled.h3`
  color: ${GrayTextColor};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 0;
  font-family: 'CoFoSansMedium';
`

export const FeatureTitle = styled.h2`
  margin-bottom: 40px;
  margin-top: 0;
  color: ${BlackTextColor};
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  font-weight: normal;
  font-family: 'CoFoSansBlack';
`
