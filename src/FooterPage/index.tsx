import React, { FC } from 'react'
import { Footer, FooterContent, FooterLink, Paragraph } from './Footer.styled'
import { Container } from '../Container'

export const FooterPage: FC = () => {
  return (
    <Footer>
      <Container>
        <FooterContent>
          <Paragraph>
            В&nbsp;Группу &laquo;Самолет&raquo; входит ряд ведущих российских
            девелоперских компаний полного цикла, реализующих масштабные объекты
            недвижимости.
          </Paragraph>
          <FooterLink href="#">
            Любая информация, представленная на&nbsp;данном сайте, носит
            исключительно информационный характер и&nbsp;ни&nbsp;при каких
            условиях не&nbsp;является публичной офертой, определяемой
            положениями статьи 437&nbsp;ГК РФ. Информация ПАО
            &laquo;ГК&nbsp;&laquo;Самолет&raquo;, раскрываемая
            в&nbsp;соответствии с&nbsp;Положением о&nbsp;раскрытии информации
            эмитентами эмиссионных ценных бумаг (утв. Банком
            России&nbsp;30.12.2014&nbsp;N 454-П), размещена на&nbsp;странице
            Центра раскрытия корпоративной информации Интерфакс в&nbsp;сети
            Интернет&nbsp;&mdash; ссылка.
          </FooterLink>
        </FooterContent>
      </Container>
    </Footer>
  )
}
