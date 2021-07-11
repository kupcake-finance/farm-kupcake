import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { farmsConfig } from 'config/constants'
import useRefresh from './useRefresh'

const useAllNextHarvest = () => {
  const [harvestIntervals, setHarvestInterval] = useState([])
  const { account }: { account: string } = useWallet()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'userInfo',
        params: [farm.pid, account],
      }))

      const res = await multicall(masterChefABI, calls)

      setHarvestInterval(res)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, slowRefresh])

  return harvestIntervals
}

export default useAllNextHarvest
