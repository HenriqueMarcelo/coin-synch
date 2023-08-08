import Image from 'next/image'
import J1Svg from '@/assets/j1.svg'
import J2Svg from '@/assets/j2.svg'
import './page.scss'

import TradeButtonSvg from '@/assets/TradeButton.svg'
import TopBtcPng from '@/assets/top-btc.png'
import TopAdaPng from '@/assets/top-ada.png'
import TopEthPng from '@/assets/top-eth.png'
import TopSolPng from '@/assets/top-sol.png'

export default function Dashboard() {
  return (
    <>
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
