'use client'

import Image from 'next/image'
import './page.scss'

import TopBtcPng from '@/assets/top-btc.png'
// import TopAdaPng from '@/assets/top-ada.png'
// import TopEthPng from '@/assets/top-eth.png'
// import TopSolPng from '@/assets/top-sol.png'
import BalanceIconSvg from '@/assets/BalanceIcon.svg'
import GraphySvg from '@/assets/graphy.svg'
import Eduphants from '@/assets/Eduphants.png'

import { useUser } from '@/hooks/use-user'
import { WalletCard } from '@/components/WalletCard'

type Params = {
  params: { user_id: string }
}

export default function Dashboard({ params: { user_id } }: Params) {
  const { user } = useUser(user_id)

  if (!user) {
    return null
  }

  return (
    <>
      <div className="container dashboard__row">
        <div className="dashboard__card dashboard__card--mini">
          <div className="dashboard__balance">
            <Image src={BalanceIconSvg} alt="" />
            <div>
              <h4 className="regular__h4">Balance in US$</h4>
              <span className="regular__body">(approximately)</span>
            </div>
          </div>
          <div className="dashboard__price">$32,256.56</div>
        </div>

        <div className="dashboard__card dashboard__card--mini">
          <div className="dashboard__variation">
            <small className="regular__small">Daily Variation</small>
            <div className="dashboard__acronym">
              <Image src={TopBtcPng} alt="" />
              ETH
            </div>
            <span className="regular__body regular__body--green">+5,65%</span>
          </div>
          <Image src={GraphySvg} alt="" />
        </div>

        <div className="dashboard__card dashboard__card--mini">
          <div className="dashboard__news">
            <div>
              <small className="bold__label">NFT&apos;s NEWS</small>
              <p className="regular__small-label">
                New ElephantX NFT <br />
                to be lauched!
              </p>
            </div>
            <a
              href=""
              className="regular__small-label regular__small-label--yellow"
            >
              Read more +
            </a>
          </div>
          <Image src={Eduphants} alt="" height={143} width={143} />
        </div>
      </div>
      <div className="container">
        <WalletCard />
      </div>
    </>
  )
}
