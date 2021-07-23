import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome, Home, Logon } from "../screens";

import { theme } from "../styles/themes"

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
   <stackRoutes.Navigator headerMode='none' screenOptions={{ cardStyle: {backgroundColor: theme.colors.white}  }}>
      <stackRoutes.Screen name="Welcome" component={Welcome}/>
      <stackRoutes.Screen name="Logon" component={Logon}/>
      <stackRoutes.Screen name="Home" component={Home}/>
   </stackRoutes.Navigator>
)

export default AppRoutes;