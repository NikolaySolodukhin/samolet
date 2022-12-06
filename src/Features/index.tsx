import React, { FC } from 'react'
import { Container } from '../Container'
import { ButtonPrimary } from '../global/Button'
import {
  FeatureButtonWrapper,
  FeatureListWrapper,
  FeatureSubTitle,
  FeatureTitle,
} from './Features.styled'
import { FeatureSlider } from './FeatureSlider'

export const FeaturesList: FC = () => {
  return (
    <FeatureListWrapper>
      <Container>
        <FeatureSubTitle>#ЗачемСнамиРаботать?</FeatureSubTitle>
        <FeatureTitle>Мы предлагаем</FeatureTitle>
        <FeatureSlider />
        <FeatureButtonWrapper>
          <ButtonPrimary targe="_blank" href="https://t.me/gk_samolet">
            Написать нам в телеграм
          </ButtonPrimary>
        </FeatureButtonWrapper>
      </Container>
    </FeatureListWrapper>
  )
}
