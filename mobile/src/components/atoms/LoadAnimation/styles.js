import styled, { css } from "styled-components/native"

export const LoadAnimationContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AnimationView = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.transparent};
    width: ${theme.metrics.px(200)}px;
    height: ${theme.metrics.px(200)}px;
  `}
`
