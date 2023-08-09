'use client'

import './styles.scss'
import { Slider } from '../Slider'
import { SignUpModal } from '../SignUpModal'
import { ArrowRight } from '@phosphor-icons/react'

export function Banner() {
  return (
    <section className="container banner__container">
      <div className="banner__left">
        <h2 className="banner__title">Lorem ipsum</h2>
        <p className="banner__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>

        <SignUpModal>
          <button className="banner__button">
            Sign up now <ArrowRight size={16} />
          </button>
        </SignUpModal>

        <div className="banner__tags">
          <span className="banner__tag">Cryptos</span>
          <span className="banner__tag">NFTs</span>
          <span className="banner__tag">Games</span>
        </div>
      </div>
      <Slider />
    </section>
  )
}
