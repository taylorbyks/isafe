import { StatusBar } from "expo-status-bar"
import React from "react";
import { ThemeProvider } from "styled-components"
import { theme } from "./src/styles/themes"
import AppLoading from "expo-app-loading"
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold } from "@expo-google-fonts/josefin-sans"
import Routes from "./src/routes";


export default function App() {
  const [ FontsLoaded ] = useFonts({ JosefinSans_400Regular, JosefinSans_600SemiBold })
  
  if(!FontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  )
}