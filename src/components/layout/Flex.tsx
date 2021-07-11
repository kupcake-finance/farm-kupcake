import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 32px;

    ${({ theme }) => theme.mediaQueries.xs} {
      max-width: 100%;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 48%;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      max-width: 31.5%;
    }
  }
`

export default FlexLayout
