import { styled } from '@linaria/react'
import {
  BlackMessageTextColor,
  BlackTextColor,
  BlueBackgroundColor,
  GrayBackgroundColor,
  MainBlueColor,
} from '../global/constants'
import { CoFoSansMediumFamily } from '../assets/fonts'

export const ChatBotWrapper = styled.div`
  width: 416px;
  border-radius: 24px;
  background-color: white;
  padding: 32px;
  position: relative;
  font-family: ${CoFoSansMediumFamily};
`

export const ChatBotTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: ${BlackTextColor};
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 16px;
`

export const ChatBotDecoration = styled.span`
  width: 64px;
  height: 64px;
  border: 4px solid white;
  border-radius: 50%;
  position: absolute;
  top: -32px;
  right: 32px;
  background-color: ${MainBlueColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #5cc867;
    position: absolute;
    border-radius: 50%;
    top: -15px;
    right: 0;
  }
`

export const ChatBotMessageCommon = styled.p`
  padding: 12px;
  color: ${BlackMessageTextColor};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-width: 70%;
  font-size: 13px;
  line-height: 18px;
  margin: 0;
`

export const ChatBotMessageQuestion = styled(ChatBotMessageCommon)`
  background-color: ${GrayBackgroundColor};
  border-bottom-right-radius: 16px;
`

export const ChatBotMessageQuestionContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ChatBotMessageAnswerContainer = styled(
  ChatBotMessageQuestionContainer
)`
  justify-content: flex-end;
`

export const ChatBotMessageAnswer = styled(ChatBotMessageCommon)`
  border-bottom-left-radius: 16px;
  background-color: ${BlueBackgroundColor};
`
