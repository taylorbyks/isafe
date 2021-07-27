import React, { useState, useEffect } from 'react'

import { CreateContainer, LogoImage, FooterContainer, HeaderContainer } from './styles'
import { Button, Text } from '../../components'

import { Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import api from '../../services/api'

import covidMarker from '../../assets/covidMarker.png'
import Logo from '../../assets/logo.png'
import mapStyle from '../../utils/mapStyle.json'

export const Create = () => {
  const navigation = useNavigation()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleSelectMapPosition(event) {
    setPosition(event.nativeEvent.coordinate)
  }

  async function handleCreate() {
    const { latitude, longitude } = position

    const data = new FormData()

    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))

    console.log(data)

    await api.post('points', data)
    navigation.navigate('Home')
  }

  return (
    <CreateContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        customMapStyle={mapStyle}
        onPress={handleSelectMapPosition}
        initialRegion={{
          latitude: -24.95,
          longitude: -53.4547,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
      >
        {position.latitude !== 0 && (
          <Marker icon={covidMarker} coordinate={{ latitude: position.latitude, longitude: position.longitude }} />
        )}
      </MapView>
      <HeaderContainer>
        <LogoImage source={Logo} />
        <Text>Selecione no mapa:</Text>
      </HeaderContainer>

      {position.latitude !== 0 && (
        <FooterContainer>
          <Button text="Adicionar" onPress={handleCreate} />
        </FooterContainer>
      )}
    </CreateContainer>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
