import React, { useState, useEffect } from 'react'

import { HomeContainer, LogoImage, FooterContainer, TopContainer } from './styles'
import { LoadAnimation, IconButton, Description } from '../../components'
import { loadCity, clearCity } from '../../services/storage'

import { Alert, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

import covidMarker from '../../assets/covidMarker.png'
import Logo from '../../assets/logo.png'
import mapStyle from '../../utils/mapStyle.json'
import { getPoints, removePoint } from '../../services/calls'

export const Home = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const [covid, setCovid] = useState([])
  const [location, setLocation] = useState('')

  async function loadStorageLocation() {
    const city = await loadCity()
    setLocation(city)
  }

  async function getPointsFromApi() {
    const response = await getPoints()
    setCovid(response)
  }

  async function handleAdd() {
    navigation.navigate('Create')
  }

  async function handleRemove(id) {
    Alert.alert('Remover', 'Deseja remover esse local?', [
      {
        text: 'Não',
      },
      { text: 'Sim', onPress: () => removePoint(id), style: 'destructive' },
    ])
  }

  useEffect(() => {
    getPointsFromApi()
    loadStorageLocation()
    setLoading(false)
  })

  if (loading) {
    return <LoadAnimation />
  }

  return (
    <HomeContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: -24.95,
          longitude: -53.4547,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
      >
        {covid.map((virus) => {
          return (
            <Marker
              key={virus.id}
              icon={covidMarker}
              onPress={() => handleRemove(virus.id)}
              calloutAnchor={{
                x: 2.5,
                y: 0.9,
              }}
              coordinate={{
                latitude: parseFloat(virus.latitude),
                longitude: parseFloat(virus.longitude),
              }}
            />
          )
        })}
      </MapView>
      <LogoImage source={Logo} />
      <TopContainer>
        <Description>{location}</Description>
      </TopContainer>
      <FooterContainer>
        <IconButton iconName="add" onPress={handleAdd} />
      </FooterContainer>
    </HomeContainer>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
