import styled, { css } from 'styled-components/native'

export const LogonContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: ${theme.metrics.px(68)}px ${theme.metrics.px(25)}px ${theme.metrics.px(58)}px;
  `}
`
