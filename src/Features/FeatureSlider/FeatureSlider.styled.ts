import { styled } from '@linaria/react'
import { GrayBackgroundColor, MainBlueColor } from '../../global/constants'

export const FeatureSliderContainer = styled.div`
  margin-bottom: 40px;
`

export const FeatureSliderList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
  list-style-type: none;
`

export const FeatureSliderItem = styled.li`
  border-radius: 24px;
  background-color: ${GrayBackgroundColor};
  padding: 32px;
  width: 305px;
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`

export const FeatureSliderItemHashTag = styled.p`
  color: ${MainBlueColor};
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 28px;
  margin-top: 0;
`

export const FeatureSliderItemTitle = styled.h4`
  font-size: 34px;
  line-height: 38px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 0;
  font-weight: normal;
`

export const FeatureSliderItemContent = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 0;
  margin-top: 0;
  font-family: 'CoFoSansRegular';
`
