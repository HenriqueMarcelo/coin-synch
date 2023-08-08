import { ReactNode } from 'react'
import './styles.scss'

type Props = {
  children: ReactNode
}

export function Button({ children, ...rest }: Props) {
  return (
    <button className="button__container" {...rest}>
      {children}
    </button>
  )
}
