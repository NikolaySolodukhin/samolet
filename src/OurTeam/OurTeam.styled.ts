import { styled } from '@linaria/react'
import {
  BlackTextColor,
  GrayTextColor,
  MainBlueColor,
} from '../global/constants'

export const OurTeamWrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  font-family: 'CoFoSansBlack';
`

export const OurTeamInner = styled.div`
  padding: 16px 24px;
`

export const OurTeamSubTitle = styled.h3`
  color: ${GrayTextColor};
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
`

export const OurTeamTitle = styled.h2`
  font-size: 40px;
  color: ${BlackTextColor};
  text-align: center;
  line-height: 48px;
  margin-bottom: 32px;
  margin-top: 0;
  font-weight: normal;
`

export const OurTeamGallery = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
export const OurTeamGalleryContent = styled.div`
  width: 430px;
  order: 2;
`

export const OurTeamGalleryTitle = styled.h2`
  font-size: 32px;
  line-height: 44px;
  margin-top: 0;
  margin-bottom: 0;
  color: ${BlackTextColor};
  font-weight: bold;
  margin-bottom: 24px;
`

export const OurTeamGalleryDescription = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${BlackTextColor};
  font-family: 'CoFoSansRegular';
`

export const OurTeamGalleryTitleDecoration = styled.span`
  color: ${MainBlueColor};
`

export const OurTeamGalleryPhotoColumn = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  max-width: 226px;
  margin-right: 2rem;
  margin-top: 0px;
  order: 1;
`

export const OurTeamGalleryFigure = styled.figure`
  margin: 0px;
  padding: 0px;
  display: flex;
  --rui-aspect-ratio: 0.807143;
  margin-bottom: 2rem;
  align-items: flex-end;
  background-color: rgb(223, 227, 231);
  border-radius: 24px;
  flex-flow: wrap;
  justify-content: flex-end;
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  transition: box-shadow 0.25s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  backface-visibility: hidden;

  &::before {
    content: '';
    float: left;
    padding-bottom: calc(1 / var(--rui-aspect-ratio) * 100%);
    width: 0;
  }

  & img {
    transition: transform 0.6s ease 0s;
  }
`

export const OurTeamGalleryFigureAnother = styled.figure`
  margin: 0px;
  padding: 0px;
  display: flex;
  --rui-aspect-ratio: 0.841667;
  margin-bottom: 2rem;
  align-items: flex-end;
  background-color: rgb(223, 227, 231);
  border-radius: 24px;
  flex-flow: wrap;
  justify-content: flex-end;
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  transition: box-shadow 0.25s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  backface-visibility: hidden;

  &::before {
    content: '';
    float: left;
    padding-bottom: calc(1 / var(--rui-aspect-ratio) * 100%);
    width: 0;
  }

  & img {
    transition: transform 0.6s ease 0s;
  }
`

export const OurTeamGalleryImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  color: transparent;
`
