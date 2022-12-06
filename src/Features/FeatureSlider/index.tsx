import React, { FC } from 'react'
import {
  FeatureSliderContainer,
  FeatureSliderItem,
  FeatureSliderList,
  FeatureSliderItemHashTag,
  FeatureSliderItemTitle,
  FeatureSliderItemContent,
} from './FeatureSlider.styled'

export const FeatureSlider: FC = () => {
  return (
    <FeatureSliderContainer>
      <FeatureSliderList>
        <FeatureSliderItem>
          <FeatureSliderItemHashTag>#Атмосферу</FeatureSliderItemHashTag>
          <FeatureSliderItemTitle>СТАРТАП</FeatureSliderItemTitle>
          <FeatureSliderItemContent>
            внутри огромной технологичной компании
          </FeatureSliderItemContent>
        </FeatureSliderItem>
        <FeatureSliderItem>
          <FeatureSliderItemHashTag>
            #СтатьПервопроходцами
          </FeatureSliderItemHashTag>
          <FeatureSliderItemTitle>СОЧЕТАНИЕ</FeatureSliderItemTitle>
          <FeatureSliderItemContent>
            PropTech и&nbsp;FinTech только набирает обороты
          </FeatureSliderItemContent>
        </FeatureSliderItem>
        <FeatureSliderItem>
          <FeatureSliderItemHashTag>#Самовыражение</FeatureSliderItemHashTag>
          <FeatureSliderItemTitle>БЕЗ СТРОГИХ</FeatureSliderItemTitle>
          <FeatureSliderItemContent>
            корпоративных рамок
          </FeatureSliderItemContent>
        </FeatureSliderItem>
        <FeatureSliderItem>
          <FeatureSliderItemHashTag>#БезОграничений</FeatureSliderItemHashTag>
          <FeatureSliderItemTitle>СВОБОДА</FeatureSliderItemTitle>
          <FeatureSliderItemContent>
            Вы&nbsp;сами определяете свой график
          </FeatureSliderItemContent>
        </FeatureSliderItem>
      </FeatureSliderList>
    </FeatureSliderContainer>
  )
}
