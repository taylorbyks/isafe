import React from "react"
import { ButtonText } from "../Text"
import { ButtonContainer } from "./styles"

export const Button = ({ text, medium, onPress }) => {
  return (
    <ButtonContainer medium={medium} onPress={onPress}>
      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
}
