import React from 'react'
import { HeaderPage } from './HeaderPage'
import { globals } from './global/Global.styled'
import { MainContentPage } from './MainContentPage'
import { FooterPage } from './FooterPage'
import {
  CoFoSansBlackFont,
  CoFoSansBoldFont,
  CoFoSansMediumFont,
  CoFoSansRegularFont,
  RobotoRegularFont,
} from './assets/fonts'

const App = () => {
  // let userName = prompt('Введите логин', '')
  //
  // if (userName === 'samolet_fin-tech_2022') {
  //   let pass = prompt('Введите пароль', '')
  //
  //   if (pass === '#GchF|Ha6%9r#nW') {
  return (
    <div className={globals}>
      <CoFoSansBlackFont />
      <CoFoSansBoldFont />
      <CoFoSansMediumFont />
      <CoFoSansRegularFont />
      <RobotoRegularFont />
      <HeaderPage />
      <MainContentPage />
      <FooterPage />
    </div>
  )
  //   } else if (pass === '' || pass === null) {
  //     alert('Отменено')
  //     return null
  //   } else {
  //     alert('Неверный пароль')
  //     return null
  //   }
  // } else if (userName === '' || userName === null) {
  //   alert('Отменено')
  //   return null
  // } else {
  //   alert('Я вас не знаю')
  //   return null
  // }
}
export default App
