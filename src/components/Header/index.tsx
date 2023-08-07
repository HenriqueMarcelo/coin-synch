import Image from 'next/image'
import './styles.scss'
import HeaderLogoSvg from '../../assets/header-logo.svg'
import { Marquee } from '../Marquee'

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
          <Marquee>
            <div className="header__tag">
              <span className="header__text header__text--dark">BIT</span>
              <span className="header__text">R$ 23,62 </span>
              <span className="header__text header__text--green">+7,082</span>
            </div>
            <div className="header__tag">
              <span className="header__text header__text--dark">DOG</span>
              <span className="header__text">R$ 23,62 </span>
              <span className="header__text header__text--red">-5,230</span>
            </div>
            <div className="header__tag">
              <span className="header__text header__text--dark">ETH</span>
              <span className="header__text">R$ 1,08 </span>
              <span className="header__text header__text--red">-10,457</span>
            </div>
          </Marquee>
          <a href="" className="header__link">
            Sign In
          </a>
          <button className="header__button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
