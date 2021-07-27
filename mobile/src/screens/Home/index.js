import React, { useState, useEffect } from 'react'

import { HomeContainer, LogoImage, FooterContainer } from './styles'
import { LoadAnimation, IconButton } from '../../components'

import { Dimensions, StyleSheet } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/core'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import covidMarker from '../../assets/covidMarker.png'
import Logo from '../../assets/logo.png'
import mapStyle from '../../utils/mapStyle.json'
import { getPoints } from '../../services/calls'

export const Home = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const [covid, setCovid] = useState()
  const isFocused = useIsFocused()

  async function getPointsFromApi() {
    const response = await getPoints()
    setCovid(response)
    setLoading(false)
  }

  async function handleAdd() {
    navigation.navigate('Create')
  }

  useEffect(() => {
    getPointsFromApi()
  }, [isFocused])

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
              key={virus.uuid}
              icon={covidMarker}
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
