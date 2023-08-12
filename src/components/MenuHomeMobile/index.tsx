import './styles.scss'
import { MenuAside } from '../MenuAside'
import { useModal } from '@/hooks/use-modal'

export function MenuHomeMobile() {
  const { openSignUpModal, openSignInModal } = useModal()

  return (
    <MenuAside>
      <div className="menu-home__container">
        <a href="#about-us" className="header__link">
          About us
        </a>
        <a href="#top-cryptos" className="header__link">
          Top Cryptos
        </a>
        <button className="header__link" onClick={openSignInModal}>
          Sign In
        </button>
        <button className="header__button" onClick={openSignUpModal}>
          Sign Up
        </button>
      </div>
    </MenuAside>
  )
}
