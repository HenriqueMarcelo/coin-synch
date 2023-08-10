'use client'

import Image from 'next/image'
import './styles.scss'
import HeaderLogoSvg from '@/assets/header-logo.svg'
import { Marquee } from '../Marquee'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import { Change } from '../Change'
import { useModal } from '@/hooks/use-modal'
import { useCryptos } from '@/hooks/use-cryptos'

export function Header() {
  const { openSignUpModal, openSignInModal } = useModal()

  const { cryptos } = useCryptos()

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
          <button className="header__link" onClick={openSignInModal}>
            Sign In
          </button>
          <button className="header__button" onClick={openSignUpModal}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
