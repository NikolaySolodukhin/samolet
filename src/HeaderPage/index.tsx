import React, { FC } from 'react'
import { Header, HeaderWrapper } from './Header.styled'
import { Container } from '../Container'
import { Logo } from './Logo'

export const HeaderPage: FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Header>
          <a href="/">
            <Logo />
          </a>
        </Header>
      </Container>
    </HeaderWrapper>
  )
}
