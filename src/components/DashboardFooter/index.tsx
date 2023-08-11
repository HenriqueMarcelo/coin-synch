import './styles.scss'
import HeaderLogoSvg from '../../assets/header-logo.svg'
import Image from 'next/image'

export function DashboardFooter() {
  return (
    <footer className="dashboard-footer__container">
      <span>Copyright © 2022 - All rights reserved</span>
      <Image className="dashboard-footer__image" src={HeaderLogoSvg} alt="" />
    </footer>
  )
}
