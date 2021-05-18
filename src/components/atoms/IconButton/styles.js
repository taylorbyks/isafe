import styled, { css } from "styled-components/native"

export const IconButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${theme.metrics.px(56)}px;
    height: ${theme.metrics.px(56)}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(16)}px;
    background-color: ${theme.colors.primary};
  `}
`
