import { ButtonHTMLAttributes } from 'react'
import './styles.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: Props) {
  return (
    <button className="button__container" {...rest}>
      {children}
    </button>
  )
}
