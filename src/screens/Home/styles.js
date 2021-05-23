import styled, { css } from 'styled-components/native'

export const HomeContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
  `}
`

export const LogoImage = styled.Image`
  ${({ theme }) => css`
    position: absolute;
    top: -10;
    left: 160;
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(100)}px;
  `}
`
