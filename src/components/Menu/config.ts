import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Referral',
  //   icon: 'HandshakeIcon',
  //   href: '/referrals',
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x98899133e0dBc6797925391B8125bC9001c261A4',
  },
  {
    label: 'Farm',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery (Soon...)',
  //   icon: 'TicketIcon',
  //   href: '/#',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    href: 'https://poocoin.app/tokens/0x98899133e0dBc6797925391B8125bC9001c261A4',
  },
  {
    label: 'Doc',
    icon: 'MoreIcon',
    href: 'https://kupcakeswap.gitbook.io/swap/',
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/kong-finance/',
  },
]

export default config
