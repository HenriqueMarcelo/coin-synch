import Image from 'next/image'
import J1Svg from '@/assets/j1.svg'
import J2Svg from '@/assets/j2.svg'
import './page.scss'

import TradeButtonSvg from '@/assets/TradeButton.svg'
import TopBtcPng from '@/assets/top-btc.png'
// import TopAdaPng from '@/assets/top-ada.png'
// import TopEthPng from '@/assets/top-eth.png'
// import TopSolPng from '@/assets/top-sol.png'
import BalanceIconSvg from '@/assets/BalanceIcon.svg'
import GraphySvg from '@/assets/graphy.svg'
import Eduphants from '@/assets/Eduphants.png'

export default function Dashboard() {
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
        <section className="dashboard__card">
          <header className="dashboard__header">
            <span className="dashboard__title">
              <Image src={J1Svg} alt="" />
              My Wallet
            </span>
            <button className="dashboard__button">+ Add crypto</button>
          </header>
          <table className="wallet-table__container">
            <thead>
              <tr>
                <th className="wallet-table__th">#</th>
                <th className="wallet-table__th">Crypto</th>
                <th className="wallet-table__th">Holdings</th>
                <th className="wallet-table__th">Change</th>
                <th className="wallet-table__th">Trade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="wallet-table__tr">
                <td className="wallet-table__small">01</td>
                <td className="wallet-table__td">
                  <Image
                    src={TopBtcPng}
                    alt=""
                    className="wallet-table__image"
                  />
                  Bitcoin <span className="wallet-table__acronym">BTC</span>
                </td>
                <td className="wallet-table__td">
                  US$ 25.499,52 <br />
                  <span className="wallet-table__down">434 BTC</span>
                </td>
                <td className="wallet-table__td wallet-table__td--red">
                  +5,65%
                </td>
                <td className="wallet-table__td">
                  <button>
                    <Image src={TradeButtonSvg} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div className="container">
        <section className="dashboard__card">
          <header className="dashboard__header">
            <span className="dashboard__title">
              <Image src={J1Svg} alt="" />
              My Wallet
            </span>
            <button className="dashboard__button">+ Add crypto</button>
          </header>
          <div className="empty__container">
            <Image src={J2Svg} alt="" />
            <h2 className="empty__title">Nothing here yet...</h2>
            <h3 className="empty__text">Add a crypto and start earning</h3>
          </div>
        </section>
      </div>
    </>
  )
}
