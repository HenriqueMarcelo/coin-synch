'use client'

import { Lock } from '@phosphor-icons/react'
import './styles.scss'

export function Input() {
  return (
    <label className="input__container">
      <Lock />
      <input type="text" placeholder="Email" className="input__input" />
    </label>
  )
}
