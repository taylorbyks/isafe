import React from 'react'

import virus from '../../assets/virus.png'

import { Title, Description, IconButton } from '../../components'
import { WelcomeContainer, MainImage } from './styles'

import { useNavigation } from '@react-navigation/core'

export const Welcome = () => {
  const navigation = useNavigation()

  function handleNext() {
    navigation.navigate('Logon')
  }

  return (
    <WelcomeContainer>
      <Title>
        Se proteja do {'\n'}
        Covid-19
      </Title>

      <MainImage source={virus} />

      <Description>
        O !Safe vai te mostrar lugares que não são seguros, onde a contaminaçao esta alta para você evitar
      </Description>

      <IconButton iconName="chevron-forward-outline" onPress={handleNext} />
    </WelcomeContainer>
  )
}
