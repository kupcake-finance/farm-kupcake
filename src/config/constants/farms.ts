import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KUPCAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '',
      321: '',
      322: '0x01A98483eB0BC29D3F563cD6DBe52506Ee5e7547',
    },
    tokenSymbol: 'KUPCAKE',
    tokenAddresses: {
      97: '',
      56: '',
      321: '',
      322: '0xaD323D0595Fc635f49499E62637E0aCe460B4067',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'KUPCAKE-KCS LP',
    lpAddresses: {
      97: '',
      56: '',
      321: '',
      322: '0xC66429D5AEa67966BeE4d5F569A327C83419E4Ed',
    },
    tokenSymbol: 'KUPCAKE',
    tokenAddresses: {
      97: '',
      56: '',
      321: '',
      322: '0xaD323D0595Fc635f49499E62637E0aCe460B4067',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'KCS-USDT LP',
    lpAddresses: {
      97: '',
      56: '',
      321: '',
      322: '0x91222628B17166Feb530B0c2c3Db448d6CBc7761',
    },
    tokenSymbol: 'KCS',
    tokenAddresses: {
      97: '',
      56: '',
      321: '',
      322: '0x5512Ae5E7eE55869dA7dc2a5D2F74a5Df65683B8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
