import React, { FC } from 'react'
import { Container } from '../Container'
import {
  OurTeamInner,
  OurTeamSubTitle,
  OurTeamTitle,
  OurTeamWrapper,
  OurTeamGallery,
  OurTeamGalleryContent,
  OurTeamGalleryPhotoColumn,
  OurTeamGalleryTitle,
  OurTeamGalleryTitleDecoration,
  OurTeamGalleryDescription,
  OurTeamGalleryFigure,
  OurTeamGalleryImg,
  OurTeamGalleryFigureAnother,
} from './OurTeam.styled'

// @ts-ignore
import firstImageUrl from './first-image.jpg'
// @ts-ignore
import secondImageUrl from './second-image.jpg'
// @ts-ignore
import thirdImageUrl from './third-image.jpg'
// @ts-ignore
import fourthImageUrl from './fourth-image.jpg'

export const OurTeam: FC = () => {
  return (
    <OurTeamWrapper>
      <Container>
        <OurTeamInner>
          <OurTeamSubTitle>#Кто мы</OurTeamSubTitle>
          <OurTeamTitle>Наша команда</OurTeamTitle>
          <OurTeamGallery>
            <OurTeamGalleryContent>
              <OurTeamGalleryTitle>
                <OurTeamGalleryTitleDecoration>
                  Приглашаем
                </OurTeamGalleryTitleDecoration>{' '}
                вместе с&nbsp;нами создавать продукт, аналогов которому которому
                нет на&nbsp;рынке
              </OurTeamGalleryTitle>
              <OurTeamGalleryDescription>
                Мы&nbsp;только в&nbsp;начале большого пути и&nbsp;предлагаем
                тебе присоединиться к&nbsp;нашей команде!
              </OurTeamGalleryDescription>
            </OurTeamGalleryContent>
            <OurTeamGalleryPhotoColumn>
              <OurTeamGalleryFigure>
                <OurTeamGalleryImg
                  decoding="async"
                  loading="lazy"
                  alt="Photo our team"
                  src={firstImageUrl}
                />
              </OurTeamGalleryFigure>
              <OurTeamGalleryFigureAnother>
                <OurTeamGalleryImg
                  decoding="async"
                  loading="lazy"
                  alt="Photo our team"
                  src={secondImageUrl}
                />
              </OurTeamGalleryFigureAnother>
            </OurTeamGalleryPhotoColumn>
            <OurTeamGalleryPhotoColumn>
              <OurTeamGalleryFigure>
                <OurTeamGalleryImg
                  decoding="async"
                  loading="lazy"
                  alt="Photo our team"
                  src={thirdImageUrl}
                />
              </OurTeamGalleryFigure>
              <OurTeamGalleryFigureAnother>
                <OurTeamGalleryImg
                  decoding="async"
                  loading="lazy"
                  alt="Photo our team"
                  src={fourthImageUrl}
                />
              </OurTeamGalleryFigureAnother>
            </OurTeamGalleryPhotoColumn>
          </OurTeamGallery>
        </OurTeamInner>
      </Container>
    </OurTeamWrapper>
  )
}
