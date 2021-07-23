import React, { useState, useEffect } from 'react'

import { HomeContainer, LogoImage } from './styles'
import { Title, LoadAnimation } from '../../components'

import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import covidMarker from '../../assets/covidMarker.png'
import Logo from '../../assets/logo.png'
import mapStyle from '../../utils/mapStyle.json'
import api, { data } from '../../services/api'

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const [covid, setCovid] = useState(data)

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
     }, 600)
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
        {covid.map(virus => {
          return (
            <Marker
            icon={covidMarker}
            calloutAnchor={{
              x: 2.5,
              y: 0.9,
            }}
            coordinate={{
              latitude: virus.latitude, 
              longitude: virus.longitude,
            }}
            />
          )
        })}
      </MapView>
      <LogoImage source={Logo} />
    </HomeContainer>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
