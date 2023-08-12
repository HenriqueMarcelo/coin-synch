import './styles.scss'
import { useMenu } from '@/hooks/use-menu'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  side?: 'right' | 'left'
}

export function MenuAside({ children, side = 'right' }: Props) {
  const { hidden, close } = useMenu()

  return (
    <div
      className={`menu-aside__overlay ${
        hidden && 'menu-aside__overlay--hidden'
      }  ${side === 'left' && 'menu-aside__overlay--left'}`}
      onClick={close}
    >
      <nav
        className={`menu-aside__nav ${hidden && 'menu-aside__nav--hidden'} `}
      >
        {children}
      </nav>
    </div>
  )
}
