import Image from 'next/image'
import './styles.scss'
import HeaderLogoSvg from '../../assets/header-logo.svg'

export function Header() {
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
          <a href="" className="header__link">
            Sign In
          </a>
          <button className="header__button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
