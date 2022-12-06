import React, { FC } from 'react'
import { Container } from '../Container'
import {
  PromoWrapper,
  PromoInner,
  PromoBanner,
  PromoSubTitle,
  PromoTitle,
} from './Promo.styled'
import { ButtonPrimary } from '../global/Button'
import { ChatBot } from '../ChatBot'

export const Promo: FC = () => {
  return (
    <PromoWrapper>
      <Container>
        <PromoInner>
          <PromoBanner>
            <PromoSubTitle>#CкороЗдесьБудет</PromoSubTitle>
            <PromoTitle>
              САМОЛЕТ
              <br />
              ФИНТЕХ
            </PromoTitle>
            <ButtonPrimary href="#news">Вакансии</ButtonPrimary>
          </PromoBanner>
          <ChatBot />
        </PromoInner>
      </Container>
    </PromoWrapper>
  )
}
