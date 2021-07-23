import styled, { css } from "styled-components/native"

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(32)}px;
    color: ${theme.colors.primary};
    text-align: center;
    font-family: ${theme.fonts.heading};
    line-height: ${theme.metrics.px(40)}px;
  `}
`

export const TitleRegular = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(32)}px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.text};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: ${theme.colors.primary};
    text-align: center;
    margin-bottom: ${theme.metrics.px(32)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.secundary};
    padding-left: ${theme.metrics.px(20)}px;
    text-align: center;
    padding-right: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.text};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.primary};
    padding-left: ${theme.metrics.px(20)}px;
    padding-right: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.text};
  `}
`

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.primary};
    padding-left: ${theme.metrics.px(20)}px;
    padding-right: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.text};
  `}
`
export const ItemButtonText = styled.Text`
  ${({ active, theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${active ? theme.colors.secundary: theme.colors.primary};
    text-align: center;
    line-height: ${theme.metrics.px(40)}px;
    justify-content: center;
    font-family: ${active ? theme.fonts.heading : theme.fonts.text};
  `}
`

export const PlantCardText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.primary};
    line-height: ${theme.metrics.px(40)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Emoji = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(48)}px;
    margin-bottom: ${theme.metrics.px(8)}px;
    `}
`
