import './style.scss'
import Icon1Svg from '@/assets/i1.svg'
import Icon2Svg from '@/assets/i2.svg'
import Icon3Svg from '@/assets/i3.svg'
import Icon4Svg from '@/assets/i4.svg'
import Image from 'next/image'

export function Aside() {
  return (
    <aside className="aside__container">
      <nav className="aside__list">
        <a href="">
          <Image src={Icon1Svg} alt="" />
        </a>
        <a href="">
          <Image src={Icon2Svg} alt="" />
        </a>
        <a href="">
          <Image src={Icon3Svg} alt="" />
        </a>
        <a href="">
          <Image src={Icon4Svg} alt="" />
        </a>
      </nav>
    </aside>
  )
}
