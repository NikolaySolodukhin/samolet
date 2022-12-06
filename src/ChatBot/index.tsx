import React, { FC } from 'react'
import {
  ChatBotDecoration,
  ChatBotTitle,
  ChatBotWrapper,
  ChatBotMessageAnswer,
  ChatBotMessageQuestion,
  ChatBotMessageAnswerContainer,
  ChatBotMessageQuestionContainer,
} from './ChatBot.styled'

export const MESSAGE_LIST = [
  {
    text: 'Что еще за Финтех?',
    answer: false,
  },
  {
    text:
      'Строим новое финтех-направление \n' + 'внутри девелопера №2 в России.',
    answer: true,
  },
  {
    text: 'А зачем Самолету свой банк?',
    answer: false,
  },
  {
    text:
      'Все просто. Мы хотим сделать жизнь \n' +
      'наших жильцов проще во всех \n' +
      'ее аспектах. Именно поэтому мы \n' +
      'запускаем собственные финансовые \n' +
      'сервисы, которые помогут людям \n' +
      'быстрее и легче покупать и продавать недвижимость, копить на крупные покупки, сохранять накопления и даже больше зарабатывать.',
    answer: true,
  },
  {
    text: 'Куда писать?',
    answer: false,
  },
  {
    text: 'Пиши нам в телеграм',
    answer: true,
  },
]

export const ChatBot: FC = () => {
  return (
    <ChatBotWrapper>
      <ChatBotDecoration>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2852 2.73975C6.8807 2.73975 3.31042 6.31003 3.31042 10.7145L3.31042 10.7162C3.30845 12.0254 3.63043 13.3147 4.24766 14.4692L4.44419 14.8368L3.66722 18.3325L7.16292 17.5555L7.53051 17.752C8.68503 18.3693 9.97433 18.6913 11.2835 18.6893L11.2852 18.6893C15.6897 18.6893 19.2599 15.119 19.2599 10.7145C19.2599 6.31003 15.6897 2.73975 11.2852 2.73975ZM1.06042 10.7128C1.06134 5.06648 5.63863 0.489746 11.2852 0.489746C16.9323 0.489746 21.5099 5.06739 21.5099 10.7145C21.5099 16.3614 16.9328 20.9388 11.286 20.9393C9.74858 20.9415 8.23248 20.5956 6.85072 19.9298L0.703613 21.2961L2.0699 15.149C1.40401 13.767 1.0581 12.2506 1.06042 10.7128ZM1.06042 10.7128L2.18542 10.7145H1.06042C1.06042 10.714 1.06042 10.7134 1.06042 10.7128ZM7.61724 14.6266C6.64447 13.6538 6.09798 12.3344 6.09798 10.9587H8.34798C8.34798 11.7377 8.65742 12.4848 9.20823 13.0356C9.75904 13.5864 10.5061 13.8958 11.2851 13.8958C12.064 13.8958 12.8111 13.5864 13.3619 13.0356C13.9127 12.4848 14.2221 11.7377 14.2221 10.9587H16.4721C16.4721 12.3344 15.9256 13.6538 14.9529 14.6266C13.9801 15.5993 12.6608 16.1458 11.2851 16.1458C9.90936 16.1458 8.59 15.5993 7.61724 14.6266Z"
            fill="white"
          />
        </svg>
      </ChatBotDecoration>
      <ChatBotTitle>Написать и&nbsp;спросить</ChatBotTitle>

      <div>
        {MESSAGE_LIST.map((message) => {
          if (message.answer) {
            return (
              <ChatBotMessageAnswerContainer key={message.text}>
                <ChatBotMessageAnswer>{message.text}</ChatBotMessageAnswer>
              </ChatBotMessageAnswerContainer>
            )
          }

          return (
            <ChatBotMessageQuestionContainer key={message.text}>
              <ChatBotMessageQuestion>{message.text}</ChatBotMessageQuestion>
            </ChatBotMessageQuestionContainer>
          )
        })}
      </div>
    </ChatBotWrapper>
  )
}
