'use client'

import { Eye, Icon as IconType } from '@phosphor-icons/react'
import './styles.scss'
import { InputHTMLAttributes, forwardRef, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, Icon, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    function handleToggleShowPassword() {
      setShowPassword((state) => !state)
    }

    const isPassword = type === 'password'
    let customType = type
    if (isPassword) {
      if (showPassword) {
        customType = 'text'
      } else {
        customType = 'password'
      }
    }

    return (
      <label className="input__container">
        {Icon && <Icon />}
        <input className="input__input" type={customType} ref={ref} {...rest} />
        {isPassword && (
          <button
            className="input__button"
            type="button"
            onClick={handleToggleShowPassword}
          >
            <Eye />
          </button>
        )}
      </label>
    )
  },
)

Input.displayName = 'Input'
