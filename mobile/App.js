import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles/themes'
import AppLoading from 'expo-app-loading'
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold } from '@expo-google-fonts/josefin-sans'
import { Routes, AuthRoutes } from './src/routes'
import { loadCity } from './src/services/storage'

export default function App() {
  const [FontsLoaded] = useFonts({ JosefinSans_400Regular, JosefinSans_600SemiBold })
  const [city, setCity] = useState()

  async function getCity() {
    try {
      const data = await loadCity()
      setCity(data)
    } catch (error) {}
  }

  useEffect(() => {
    getCity()
  }, [])

  if (!FontsLoaded) {
    return <AppLoading />
  }

  if (city) {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <AuthRoutes />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  )
}
