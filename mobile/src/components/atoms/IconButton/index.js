import React from "react";
import { IconButtonContainer } from "./styles"

import Icon from "react-native-vector-icons/Ionicons"

export const IconButton = ({ iconName, onPress}) => {
  return (
    <IconButtonContainer onPress={onPress}>
      <Icon 
        name={iconName} 
        color="white" 
        size={30} 
      />
    </IconButtonContainer>
  )
}
