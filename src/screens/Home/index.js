import React, { useState } from 'react'

import { HomeContainer, LogoImage } from './styles'
import { Title, LoadAnimation } from '../../components'

import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

// import mapMarker from '../../assets//marker.png'
import Logo from '../../assets/logo.png'
import mapStyle from '../../utils/mapStyle.json'
import api from '../../services/api'

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [covid, setCovid] = useState([])

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
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      >
        {/* {covid.map(virus => {
          return (
            <Marker 
            key={virus.id}  
            icon={mapMarker}
            calloutAnchor={{
              x: 2.5,
              y: 0.9,
            }}
            coordinate={{
              latitude: virus.latitude, 
              longitude: virus.longitude,
            }}
            >
                <Callout tooltip onPress={() => handleNavigationtoVirusDetails(virus.id)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{virus.name}</Text>
                  </View>
                </Callout>
            </Marker>
          )
        })} */}
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
