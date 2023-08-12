'use client'

import Image from 'next/image'
import './styles.scss'
import HeaderLogoSvg from '@/assets/header-logo.svg'
import { Marquee } from '../Marquee'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import { Change } from '../Change'
import { useModal } from '@/hooks/use-modal'
import { useCryptos } from '@/hooks/use-cryptos'
import { List } from '@phosphor-icons/react'
import { useMenu } from '@/hooks/use-menu'

export function Header() {
  const { openSignUpModal, openSignInModal } = useModal()
  const { toggle } = useMenu()
  const { cryptos } = useCryptos()

  function handleToggleMenu() {
    toggle()
  }

  return (
    <>
      <header className="header__container container">
        <div className="header__left">
          <Image src={HeaderLogoSvg} alt="" />
          <div className="header__links">
            <a href="#about-us" className="header__link">
              About us
            </a>
            <a href="#top-cryptos" className="header__link">
              Top Cryptos
            </a>
          </div>
        </div>
        <div className="header__right">
          <button className="header__button-menu" onClick={handleToggleMenu}>
            <List size={14} />
          </button>
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
      <div className="header__marquee">
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
      </div>
    </>
  )
}
