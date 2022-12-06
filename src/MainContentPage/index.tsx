import React, { FC } from 'react'
import { Vacancy } from '../Vacancy'
import { FeaturesList } from '../Features'
import { OurTeam } from '../OurTeam'
import { OurPlan } from '../OurPlan'
import { Promo } from '../Promo'
import { AboutUs } from '../AboutUs'

export const MainContentPage: FC = () => {
  return (
    <main>
      <Promo />
      <AboutUs />
      <OurPlan />
      <OurTeam />
      <FeaturesList />
      <Vacancy />
    </main>
  )
}
