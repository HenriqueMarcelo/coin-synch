'use client'

import Image from 'next/image'
import './styles.scss'
import HeaderLogoSvg from '@/assets/header-logo.svg'
import { Marquee } from '../Marquee'
import { useEffect, useState } from 'react'
import { CryptoInfo } from '@/@types/crypto-info'
import { getCryptos } from '@/api/cryptos'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import { Change } from '../Change'
import { SignUpModal } from '../SignUpModal'
import { SignInModal } from '../SignInModal'

export function Header() {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([])

  useEffect(() => {
    async function aux() {
      setCryptos(await getCryptos())
    }
    aux()
  }, [])

  return (
    <header className="header__container container">
      <div className="header__left">
        <Image src={HeaderLogoSvg} alt="" />
        <div className="header__links">
          <a href="" className="header__link">
            About us
          </a>
          <a href="" className="header__link">
            Top Cryptos
          </a>
        </div>
      </div>
      <div className="header__right">
        <div className="header__links">
          <Marquee>
            {cryptos.map((crypto) => (
              <div className="header__tag" key={crypto.code}>
                <span className="header__text header__text--dark">
                  {crypto.code}
                </span>
                <span className="header__text">
                  {convertNumberToUsd(crypto.priceUsd)}{' '}
                </span>
                <span className="header__text">
                  <Change value={crypto.change} />
                </span>
              </div>
            ))}
          </Marquee>
          <SignInModal>
            <button className="header__link">Sign In</button>
          </SignInModal>
          <SignUpModal>
            <button className="header__button">Sign Up</button>
          </SignUpModal>
        </div>
      </div>
    </header>
  )
}
