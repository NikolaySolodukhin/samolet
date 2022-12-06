import { styled } from '@linaria/react'

export const Svg = styled.svg`
  display: ${(props) => (props.display ? props.display : 'block')};
`
