import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome, Home, Logon, Create } from "../screens";

import { theme } from "../styles/themes"

const stackRoutes = createStackNavigator();

export const AppRoutesAuth = () => (
   <stackRoutes.Navigator headerMode='none' screenOptions={{ cardStyle: {backgroundColor: theme.colors.white}  }}>
      <stackRoutes.Screen name="Home" component={Home}/>
      <stackRoutes.Screen name="Create" component={Create}/>
   </stackRoutes.Navigator>
)

export const AppRoutes = () => (
   <stackRoutes.Navigator headerMode='none' screenOptions={{ cardStyle: {backgroundColor: theme.colors.white}  }}>
      <stackRoutes.Screen name="Welcome" component={Welcome}/>
      <stackRoutes.Screen name="Logon" component={Logon}/>
      <stackRoutes.Screen name="Home" component={Home}/>
      <stackRoutes.Screen name="Create" component={Create}/>
   </stackRoutes.Navigator>
)