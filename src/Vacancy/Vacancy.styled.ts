import { styled } from '@linaria/react'
import {
  BlackTextColor,
  GrayBackgroundColor,
  GrayTextColor,
  MainBlueColor,
} from '../global/constants'

export const VacancyWrapper = styled.section`
  background-color: ${GrayBackgroundColor};
  font-family: 'CoFoSansBlack';
`

export const VacancyInner = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
`

export const VacancySubTitle = styled.h3`
  color: ${GrayTextColor};
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
`

export const VacancyTitle = styled.h2`
  font-size: 40px;
  color: ${BlackTextColor};
  text-align: center;
  line-height: 48px;
  margin-bottom: 32px;
  margin-top: 0;
  font-weight: normal;
`

export const VacancyItem = styled.a`
  border-radius: 24px;
  background-color: white;
  padding: 24px 32px;
  margin-bottom: 20px;
  display: block;
  text-decoration: none;
  color: ${MainBlueColor};
  font-size: 24px;
  line-height: 28px;
  font-family: 'CoFoSansMedium';

  &:last-child {
    margin-bottom: 0;
  }
`

export const VacancyList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 32px;
`

export const VacancyReturnAddress = styled.p`
  font-size: 32px;
  line-height: 44px;
  color: ${BlackTextColor};

  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: 'CoFoSansBlack';
`

export const VacancyLink = styled.a`
  color: ${MainBlueColor};
  text-decoration: none;
`

export const VacancyParagraph = styled.p`
  margin-top: 0;
  color: ${BlackTextColor};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
  text-align: center;
  font-family: 'CoFoSansRegular';
`

export const VacancyButtonWrapper = styled.div`
  text-align: center;
`
