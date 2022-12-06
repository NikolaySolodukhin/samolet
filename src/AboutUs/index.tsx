import React, { FC } from 'react'
import { Container } from '../Container'
import {
  AboutUsSubTitle,
  AboutUsTitle,
  AboutUsWrapper,
  SliderList,
  SliderItemTitle,
  SliderBigItem,
  SliderFirst,
  SliderThird,
  SliderThirdDecorationElement,
  SliderFirstDecorationElement,
  SliderFirstButton,
  SliderFirstDecorationSvg,
  SliderSecondButton,
  SliderSecondDecorationSvg,
} from './AboutUs.styled'

export const AboutUs: FC = () => {
  return (
    <AboutUsWrapper>
      <Container>
        <AboutUsSubTitle>#ПодробнееПроНас</AboutUsSubTitle>
        <AboutUsTitle>
          Создаем финансовые сервисы вместе
          <br /> с&nbsp;ГК&nbsp;&laquo;Самолет&raquo;
        </AboutUsTitle>
        <SliderList>
          <SliderFirst>
            <SliderItemTitle>
              Самая быстрорастущая компания в&nbsp;России
            </SliderItemTitle>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              className={SliderFirstDecorationElement}
            >
              <rect width="44" height="44" rx="22" fill="#282D3C" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.0627 21.9129L19.8566 28.119L18.7455 27.0078L23.8332 21.9201L18.7491 16.9018L19.853 15.7834L26.0627 21.9129Z"
                fill="white"
              />
            </svg>

            <SliderFirstButton href="#">
              Присоединиться{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                className={SliderFirstDecorationSvg}
              >
                <rect width="10.5" height="10.5" rx="5.25" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.21954 5.22918L4.73854 6.71019L4.47338 6.44502L5.68748 5.23092L4.47424 4.03336L4.73767 3.76648L6.21954 5.22918Z"
                  fill="#007BFB"
                />
              </svg>
            </SliderFirstButton>
          </SliderFirst>
          <SliderBigItem>
            <SliderItemTitle>
              Самолет&nbsp;&mdash; девелопер &#8470;&nbsp;2 <br />
              в&nbsp;стране
            </SliderItemTitle>
            <SliderSecondButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={SliderSecondDecorationSvg}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25336 0.244507H7.92923L7.69979 0.473456L1.717 6.44343L1.16219 6.99705L1.71586 7.55181L2.79969 8.63777L0.628765 10.7985L1.73449 11.9094L3.90693 9.74718L4.4228 10.2641L0.627869 14.0534L1.73538 15.1626L5.53005 11.3735L6.06243 11.9069L3.89703 14.0511L4.99989 15.1649L7.16968 13.0163L8.23672 14.0855L8.79088 14.6407L9.34559 14.086L15.3284 8.10323L15.5579 7.87369V7.54907V1.02821V0.244507H14.7742H8.25336ZM3.37895 6.99933L8.57749 1.81192H13.9905V7.22444L8.79197 12.423L3.37895 6.99933ZM12.0587 3.74471C12.584 4.26996 12.584 5.11549 12.0587 5.64075C11.5335 6.16601 10.6751 6.16601 10.1627 5.64075C9.63742 5.11549 9.63742 4.26996 10.1627 3.74471C10.6879 3.21945 11.5335 3.21945 12.0587 3.74471Z"
                  fill="white"
                />
              </svg>
              Самолет
            </SliderSecondButton>
          </SliderBigItem>

          <SliderThird>
            <SliderItemTitle>
              Входим в число системообразующих организаций&nbsp;России
            </SliderItemTitle>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className={SliderThirdDecorationElement}
            >
              <rect width="48" height="48" rx="24" fill="#282D3C" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 18.3135C23.0998 18.3135 22.2192 18.5829 21.4696 19.0885C20.7198 19.5942 20.1344 20.3136 19.7885 21.1567C19.4425 21.9999 19.3518 22.9281 19.5283 23.8236C19.7048 24.7191 20.1402 25.5407 20.7784 26.185L20.7796 26.1862L24.0001 29.4527L27.2204 26.1863L27.2217 26.185C27.8599 25.5407 28.2953 24.7191 28.4718 23.8236C28.6482 22.9281 28.5576 21.9999 28.2116 21.1567C27.8656 20.3136 27.2802 19.5942 26.5305 19.0885C25.7809 18.5829 24.9003 18.3135 24 18.3135ZM20.6308 17.8449C21.6275 17.1727 22.8 16.8135 24 16.8135C25.2001 16.8135 26.3726 17.1727 27.3693 17.8449C28.3658 18.5171 29.1415 19.4717 29.5993 20.5873C30.0571 21.7028 30.1767 22.9299 29.9435 24.1136C29.7102 25.2971 29.1345 26.3852 28.288 27.24C28.2877 27.2402 28.2882 27.2398 28.288 27.24L24.0001 31.5893L19.7127 27.2406C19.7125 27.2404 19.7123 27.2402 19.712 27.2399C18.8655 26.3851 18.2898 25.2971 18.0566 24.1136C17.8233 22.9299 17.943 21.7028 18.4008 20.5873C18.8585 19.4717 19.6342 18.5171 20.6308 17.8449ZM24.0001 21.4593C23.2022 21.4593 22.5434 22.1141 22.5434 22.9367C22.5434 23.7593 23.2022 24.4141 24.0001 24.4141C24.798 24.4141 25.4568 23.7593 25.4568 22.9367C25.4568 22.1141 24.798 21.4593 24.0001 21.4593ZM21.0434 22.9367C21.0434 21.2989 22.3606 19.9593 24.0001 19.9593C25.6396 19.9593 26.9568 21.2989 26.9568 22.9367C26.9568 24.5745 25.6396 25.9141 24.0001 25.9141C22.3606 25.9141 21.0434 24.5745 21.0434 22.9367Z"
                fill="white"
              />
            </svg>
          </SliderThird>
        </SliderList>
      </Container>
    </AboutUsWrapper>
  )
}
