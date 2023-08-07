import Image from 'next/image'
import './styles.scss'
import HeaderLogoSvg from '../../assets/header-logo.svg'

export function Header() {
  return (
    <header className="Header__container container">
      <div className="Header__left">
        <Image src={HeaderLogoSvg} alt="" />
        <div className="Header__links">
          <a href="" className="Header__link">
            About us
          </a>
          <a href="" className="Header__link">
            Top Cryptos
          </a>
        </div>
      </div>
      <div className="Header__right">
        <div className="Header__links">
          <a href="" className="Header__link">
            Sign In
          </a>
          <button className="Header__button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
