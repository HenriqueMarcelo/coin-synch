'use client'

import './styles.scss'
import { Slider } from '../Slider'
import { ArrowRight } from '@phosphor-icons/react'
import { useModal } from '@/hooks/use-modal'

export function Banner() {
  const { openSignUpModal } = useModal()

  return (
    <section className="container banner__container">
      <article className="banner__left">
        <h2 className="banner__title">Lorem ipsum</h2>
        <p className="banner__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>

        <button className="banner__button" onClick={openSignUpModal}>
          Sign up now <ArrowRight size={16} />
        </button>

        <div className="banner__tags">
          <span className="banner__tag">Cryptos</span>
          <span className="banner__tag">NFTs</span>
          <span className="banner__tag">Games</span>
        </div>
      </article>
      <Slider />
      <Slider imageWidth={298} />
    </section>
  )
}
