import './styles.scss'
import { MenuAside } from '../MenuAside'

import Icon1Svg from '@/assets/i1.svg'
import Icon2Svg from '@/assets/i2.svg'
import Icon3Svg from '@/assets/i3.svg'
import Icon4Svg from '@/assets/i4.svg'
import Icon5Svg from '@/assets/i5.svg'
import Image from 'next/image'
import { useMenu } from '@/hooks/use-menu'

export function MenuDashboardMobile() {
  const { close } = useMenu()
  return (
    <MenuAside side="left">
      <nav className="menu-dashboard__container">
        <a href="" className="menu-dashboard__link">
          <Image src={Icon1Svg} alt="" /> Lorem Ipsum
        </a>

        <a href="" className="menu-dashboard__link">
          <Image src={Icon2Svg} alt="" /> Lorem Ipsum
        </a>

        <a href="" className="menu-dashboard__link">
          <Image src={Icon3Svg} alt="" /> Lorem Ipsum
        </a>

        <a href="" className="menu-dashboard__link">
          <Image src={Icon4Svg} alt="" /> Lorem Ipsum
        </a>

        <button className="menu-dashboard__button" onClick={close}>
          <Image src={Icon5Svg} alt="" />
        </button>
      </nav>
    </MenuAside>
  )
}
