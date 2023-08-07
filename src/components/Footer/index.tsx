import Image from 'next/image'
import HeaderLogoSvg from '../../assets/header-logo.svg'
import './styles.scss'

export function Footer() {
  return (
    <footer className="footer__container container">
      <span className="footer__text">
        Copyright © 2022 - All rights reserved
      </span>
      <Image className="footer__image" src={HeaderLogoSvg} alt="" />
    </footer>
  )
}
