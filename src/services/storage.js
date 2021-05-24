import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveCity(city) {
  await AsyncStorage.setItem('@isafe:location', city)
}