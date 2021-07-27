import React, { useState }  from 'react'
import { saveCity } from '../../services/storage'
import { Title, Button, Input } from '../../components'
import { LogonContainer } from './styles'

import { useNavigation } from '@react-navigation/core'
import { Alert } from 'react-native'


export const Logon = () => {
  const navigation = useNavigation()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [city, setCity] = useState()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!city)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value) {
    setIsFilled(!!value)
    setCity(value)
  }

  async function handleSubmit() {
    if (!city) {
      return Alert.alert('Me informe sua cidade 😥')
    }

    try {
      console.log(city)
      await saveCity(city)

      navigation.navigate('Home')
    } catch {
      return Alert.alert('Não foi possível salvar sua cidade! 😥')
    }
  }

  return (
    <LogonContainer>
      <Title>Qual a sua cidade?</Title>

      <Input
        placeholder="Digite sua Cidade"
        selected={isFocused || isFilled}
        value={setCity}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChangeText={handleInputChange}
      />
      {/* <Description>
        Insira para que possamos te mostrar o seu arredor
      </Description> */}

      <Button text="Confirmar" onPress={handleSubmit} />
    </LogonContainer>
  )
}
