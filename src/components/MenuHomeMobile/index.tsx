import './styles.scss'
import { MenuAside } from '../MenuAside'

export function MenuHomeMobile() {
  return (
    <MenuAside>
      <div className="menu-home__container">
        <a href="" className="header__link">
          About us
        </a>
        <a href="" className="header__link">
          Top Cryptos
        </a>
        <button className="header__link">Sign In</button>
        <button className="header__button">Sign Up</button>
      </div>
    </MenuAside>
  )
}
