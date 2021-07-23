import styled, { css } from 'styled-components/native'

export const WelcomeContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.metrics.px(68)}px ${theme.metrics.px(15)}px ${theme.metrics.px(58)}px;
  `}
`

export const MainImage = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(350)}px;
    height: ${theme.metrics.px(284)}px;
  `}
`
