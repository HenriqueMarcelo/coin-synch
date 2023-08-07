import Image from 'next/image'
import './styles.scss'

import TopBtcPng from '@/assets/top-btc.png'
import TopAdaPng from '@/assets/top-ada.png'
import TopEthPng from '@/assets/top-eth.png'
import TopSolPng from '@/assets/top-sol.png'

export function TopCryptos() {
  return (
    <section className="top__container container">
      <h1 className="top__title">Top Cryptos</h1>
      <table className="home-table__container">
        <thead>
          <tr>
            <th className="home-table__th">#</th>
            <th className="home-table__th">Crypto</th>
            <th className="home-table__th">Price</th>
            <th className="home-table__th">Change</th>
            <th className="home-table__th">Trade</th>
          </tr>
        </thead>
        <tbody>
          <tr className="home-table__tr">
            <td className="home-table__small">01</td>
            <td className="home-table__td">
              <Image src={TopBtcPng} alt="" className="home-table__image" />
              Bitcoin <span className="home-table__acronym">BTC</span>
            </td>
            <td className="home-table__td">US$ 25.499,52</td>
            <td className="home-table__td home-table__td--red">+5,65%</td>
            <td className="home-table__td">
              <button className="home-table__button">Buy</button>
            </td>
          </tr>
          <tr className="home-table__tr">
            <td className="home-table__small">01</td>
            <td className="home-table__td">
              <Image src={TopBtcPng} alt="" className="home-table__image" />
              Bitcoin <span className="home-table__acronym">BTC</span>
            </td>
            <td className="home-table__td">US$ 25.499,52</td>
            <td className="home-table__td home-table__td--red">+5,65%</td>
            <td className="home-table__td">
              <button className="home-table__button">Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="top__center">
        <button className="top__link">View more +</button>
      </div>
    </section>
  )
}
