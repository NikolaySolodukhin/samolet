import React, { FC } from 'react'
import { Container } from '../Container'
import {
  OurPlanWrapper,
  OurPlanInner,
  OurPlanSubTitle,
  OurPlanTitle,
  OurPlanBanner,
  OurPlanDescription,
  OurPlanSubscription,
} from './OurPlan.styled'
import { ButtonPrimary } from '../global/Button'

export const OurPlan: FC = () => {
  return (
    <OurPlanWrapper>
      <Container>
        <OurPlanInner>
          <OurPlanSubTitle>#СтартУжеСовсемСкоро</OurPlanSubTitle>
          <OurPlanTitle>Наши планы</OurPlanTitle>
          <OurPlanBanner>
            <OurPlanDescription>
              Мы&nbsp;сообщим
              <br />
              о&nbsp;первых проектах Самолет Финтеха
            </OurPlanDescription>
            <OurPlanSubscription>
              Подписывайтесь на&nbsp;наш телеграмм-канал и&nbsp;следите
              за&nbsp;новостями
            </OurPlanSubscription>

            <ButtonPrimary targe="_blank" href="https://t.me/gk_samolet">
              Подписаться
            </ButtonPrimary>
          </OurPlanBanner>
        </OurPlanInner>
      </Container>
    </OurPlanWrapper>
  )
}
