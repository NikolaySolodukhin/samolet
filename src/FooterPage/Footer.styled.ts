import { styled } from '@linaria/react'
import { BluePrimaryColor, GrayTextColor } from '../global/constants'

export const Footer = styled.footer`
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-color: blue;
  font-family: 'CoFoSansRegular';
`

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${GrayTextColor};
  width: 300px;
`

export const FooterLink = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: ${BluePrimaryColor};
  display: block;
  max-width: 860px;
  margin-left: auto;
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  min-height: 200px;
  padding: 16px 24px;
`
