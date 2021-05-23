import React from 'react'

import virus from '../../assets/virus.png'

import { Title, Description, Button } from '../../components'
import { LogonContainer } from './styles'

import { useNavigation } from '@react-navigation/core'

export const Logon = () => {
  const navigation = useNavigation()

  function handleNext() {
    navigation.navigate('Home')
  }

  return (
    <LogonContainer>
      <Title>Qual a sua cidade?</Title>

      <Description>
        O !Safe vai te mostrar lugares que nao sao seguros, onde a contaminaçao esta alta para você evitar
      </Description>

      <Button text="Confirmar" onPress={handleNext} />
    </LogonContainer>
  )
}
