import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/NewMenu/Menu'
import PageLoader from './components/PageLoader'
// import FarmDetails from 'views/FarmDetails'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const FarmsDetails = lazy(() => import('./views/FarmDetails'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
const Swap = lazy(() => import('./views/Swap/Swap'))
const Chart = lazy(() => import('./views/Chart/Chart'))
const NotFound = lazy(() => import('./views/NotFound'))
const Landing = lazy(() => import('./views/Landing/Landing'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />

      {/* <Menu> */}
      <Suspense fallback={<PageLoader />}>
        <Menu />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          {/* <Route path="/pools">
            <Farms tokenMode />
          </Route> */}
          {/* <Route path="/referrals">
            <Referral />
          </Route> */}
          {/* <Route path="/swap">
            <Swap />
          </Route> */}
          {/* <Route path="/liquidity">
            <Swap isLiquidity />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route> */}
          {/* <Route path="/landing">
            <Landing />
          </Route> */}
          {/* <Route path="/details">
            <FarmsDetails />
          </Route> */}
          {/* <Route path="/pools">
             <Pools />
            </Route> */}
          {/* <Route path="/lottery">
             <Lottery />
            </Route>  */}
          {/* <Route path="/ifo"> */}
          {/*  <Ifos /> */}
          {/* </Route> */}
          {/* <Route path="/nft"> */}
          {/*  <Nft /> */}
          {/* </Route> */}
          {/* Redirect */}
          {/* <Route path="/staking"> */}
          {/*  <Redirect to="/pools" /> */}
          {/* </Route> */}
          {/* <Route path="/syrup"> */}
          {/*  <Redirect to="/pools" /> */}
          {/* </Route> */}
          {/* 404 */}
          <Route component={Landing} />
        </Switch>
      </Suspense>
      {/* </Menu> */}
    </Router>
  )
}

export default React.memo(App)
