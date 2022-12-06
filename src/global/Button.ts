import { styled } from '@linaria/react'
import {
  BluePrimaryColor,
  MainBlueColor,
  MainBlueHoverColor,
} from './constants'

export const ButtonPrimary = styled.a`
  background-color: ${MainBlueColor};
  color: white;
  padding: 17px 32px;
  display: inline-block;
  border-radius: 24px;
  text-decoration: none;
  vertical-align: middle;
  transition: background-color 0.3s;
  font-family: 'CoFoSansMedium';

  &:hover {
    background-color: ${MainBlueHoverColor};
  }

  &:active {
    background-color: ${BluePrimaryColor};
  }
`
