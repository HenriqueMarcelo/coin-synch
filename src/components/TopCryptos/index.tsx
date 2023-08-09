'use client'

import Image from 'next/image'
import './styles.scss'

import { useEffect, useState } from 'react'
import { CryptoInfo } from '@/@types/crypto-info'
import { getCryptos } from '@/api/cryptos'
import { Change } from '../Change'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'

import Image404Png from '@/assets/404.png'

export function TopCryptos() {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([])
  const [showAll, setShowAll] = useState(false)

  const cryptosList = showAll ? cryptos : cryptos.slice(0, 5)

  useEffect(() => {
    async function aux() {
      setCryptos(await getCryptos())
    }
    aux()
  }, [])

  function handleTogleShowAll() {
    setShowAll((state) => !state)
  }

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
          {cryptosList.map((crypto, index) => (
            <tr className="home-table__tr" key={crypto.code}>
              <td className="home-table__small">{index + 1}</td>
              <td className="home-table__td">
                <Image
                  src={crypto.imageUrl || Image404Png}
                  alt={crypto.code}
                  width={32}
                  height={32}
                  className="home-table__image"
                />
                {crypto.name}{' '}
                <span className="home-table__acronym">{crypto.code}</span>
              </td>
              <td className="home-table__td">
                {convertNumberToUsd(crypto.priceUsd)}
              </td>
              <td className="home-table__td">
                <Change value={crypto.change} percentage />
              </td>
              <td className="home-table__td">
                <button className="home-table__button">Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="top__center">
        <button className="top__link" onClick={handleTogleShowAll}>
          View {showAll ? 'less -' : 'more +'}
        </button>
      </div>
    </section>
  )
}
