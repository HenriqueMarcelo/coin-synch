'use client'

import { Icon as IconType } from '@phosphor-icons/react'
import './styles.scss'
import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  Icon?: IconType
  error?: boolean
}

/*
 * todo: criar um select customizado
 * mais parecido com o Figma
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ Icon, error = false, children, ...rest }, ref) => {
    return (
      <label
        className={`select__container ${error && 'select__container--error'}`}
      >
        {Icon && <Icon />}
        <select className="select__select" ref={ref} {...rest}>
          {children}
        </select>
      </label>
    )
  },
)

Select.displayName = 'Select'
