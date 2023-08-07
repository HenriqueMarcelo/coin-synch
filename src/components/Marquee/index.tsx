import { ReactNode } from 'react'
import './styles.scss'
type Props = {
  children: ReactNode
}
export function Marquee({ children }: Props) {
  return (
    <div className="marquee">
      <div className="track">
        <div className="content">
          {/* Tem que ser duplicado para a animação ficar com efeito de loop */}
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}
