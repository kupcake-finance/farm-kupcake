import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 2600px;

  ${({ theme }) => theme.mediaQueries.xs} {
    padding-left: 0px;
    padding-right: 0px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 0px;
    padding-right: 0px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export default Container
