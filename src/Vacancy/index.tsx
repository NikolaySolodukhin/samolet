import React from 'react'
import {
  VacancyInner,
  VacancySubTitle,
  VacancyTitle,
  VacancyWrapper,
  VacancyList,
  VacancyItem,
  VacancyReturnAddress,
  VacancyLink,
  VacancyParagraph,
  VacancyButtonWrapper,
} from './Vacancy.styled'
import { Container } from '../Container'
import { ButtonPrimary } from '../global/Button'

const VACANCY_LIST = [
  { text: 'Финансовый аналитик', link: '#' },
  { text: 'Ведущий юрист', link: '#' },
  { text: 'Менеджер продукта', link: '#' },
]

export const Vacancy = () => {
  return (
    <VacancyWrapper>
      <Container>
        <VacancyInner>
          <VacancySubTitle>Кто нам нужен</VacancySubTitle>
          <VacancyTitle id="news">Вакансии</VacancyTitle>

          <VacancyList>
            {VACANCY_LIST.map((vacancyItem) => (
              <VacancyItem href={vacancyItem.link} key={vacancyItem.text}>
                {vacancyItem.text}
              </VacancyItem>
            ))}
          </VacancyList>

          <VacancyReturnAddress>
            Пиши скорее нам на&nbsp;почту{' '}
            <VacancyLink href="mailto:hellobank@samolet.ru">
              hellobank@samolet.ru
            </VacancyLink>
          </VacancyReturnAddress>

          <VacancyParagraph>
            И&nbsp;подписывайтесь на&nbsp;наш Телеграм-канал, чтобы следить
            за&nbsp;новостями!
          </VacancyParagraph>

          <VacancyButtonWrapper>
            <ButtonPrimary target="_blank" href="https://t.me/gk_samolet">
              Подписаться
            </ButtonPrimary>
          </VacancyButtonWrapper>
        </VacancyInner>
      </Container>
    </VacancyWrapper>
  )
}
