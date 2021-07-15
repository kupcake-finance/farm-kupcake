import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUP',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KUP',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KCS',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KCS',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CANDY',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'CANDY',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KOFFEE',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KOFFEE',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUBEANS',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KUBEANS',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUD',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KUD',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUDO',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KUDO',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUDOS',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KUDOS',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUS',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'KUS',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LAMBO',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'LAMBO',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WKCS',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'WKCS',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e', // KUP-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KUP-BUSD',
    lpAddresses: {
      97: '',
      56: '0xac1A7385092Be5211985C9f4682F381d378D118e',
    },
    tokenSymbol: 'KUP',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'KUP-KCS',
    lpAddresses: {
      97: '',
      56: '0xD8904c2F1f414cCEc01C53Be61e811B34567Af5a',
    },
    tokenSymbol: 'KUP',
    tokenAddresses: {
      97: '',
      56: '0x98899133e0dBc6797925391B8125bC9001c261A4',
    },
    quoteTokenSymbol: QuoteToken.KCS,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'KCS-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'KCS',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'CAKE-KCS',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.KCS,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
