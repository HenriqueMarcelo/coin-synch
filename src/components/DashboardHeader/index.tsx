'use client'

import Image from 'next/image'
import HeaderLogoSvg from '@/assets/header-logo.svg'
import './styles.scss'
import { CaretDown } from '@phosphor-icons/react'
import { MyPopover } from '../MyPopover'

export function DashboardHeader() {
  return (
    <header className="dashboard-header__container">
      <div className="dashboard-header__left">
        <Image src={HeaderLogoSvg} alt="" />
      </div>
      <MyPopover>
        <button className="dashboard-header__right">
          <Image
            src={'http://via.placeholder.com/640x640'}
            width={32}
            height={32}
            alt=""
            className="dashboard-header__image"
          />
          Marcelo
          <CaretDown className="dashboard-header__icon" size={16} />
        </button>
      </MyPopover>
    </header>
  )
}
