import styled, { css } from 'styled-components/native'

export const HomeContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
  `}
`

export const LogoImage = styled.Image`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.metrics.px(-10)}px;
    left: ${theme.metrics.px(145)}px;
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(100)}px;
  `}
`
