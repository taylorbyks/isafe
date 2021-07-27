import styled, { css } from 'styled-components/native'

export const CreateContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const LogoImage = styled.Image`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.metrics.px(-10)}px;
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(100)}px;
  `}
`

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.metrics.px(20)}px;
    background-color: ${theme.colors.white};
    top: ${theme.metrics.px(-10)}px;
    width: 100%;
    height: ${theme.metrics.px(180)}px;
    border-radius: ${theme.metrics.px(15)}px;
  `}
`

export const FooterContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.metrics.px(15)}px;
    align-items: center;
    justify-content: flex-start;
    padding: ${theme.metrics.px(15)}px;
    position: absolute;
    bottom: ${theme.metrics.px(-5)}px;
    width: 100%;
    height: ${theme.metrics.px(150)}px;
  `}
`
