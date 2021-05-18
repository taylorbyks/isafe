import styled, { css } from "styled-components/native"

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme, medium}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.green};
    border-radius: ${theme.metrics.px(16)}px;
    width: ${medium ? "75%" : "95%"};
    height: ${theme.metrics.px(56)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    margin-top: ${theme.metrics.px(30)}px;
  `}
`
