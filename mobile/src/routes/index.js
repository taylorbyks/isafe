import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes, AppRoutesAuth } from './stack.routes'

export const Routes = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
)

export const AuthRoutes = () => (
  <NavigationContainer>
    <AppRoutesAuth />
  </NavigationContainer>
)
