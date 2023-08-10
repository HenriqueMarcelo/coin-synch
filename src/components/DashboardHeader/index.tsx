'use client'

import Image from 'next/image'
import HeaderLogoSvg from '@/assets/header-logo.svg'
import './styles.scss'
import { CaretDown } from '@phosphor-icons/react'
import { MyPopover } from '../MyPopover'
import { UserInfo } from '@/@types/user-info'

type Props = {
  user: UserInfo
}

export function DashboardHeader({ user }: Props) {
  return (
    <header className="dashboard-header__container">
      <div className="dashboard-header__left">
        <Image src={HeaderLogoSvg} alt="" />
      </div>
      <MyPopover>
        <button className="dashboard-header__right">
          <Image
            src={`https://ui-avatars.com/api/?color=AD721A&name=${user.name}`}
            width={32}
            height={32}
            alt=""
            className="dashboard-header__image"
          />
          {user.name}
          <CaretDown className="dashboard-header__icon" size={16} />
        </button>
      </MyPopover>
    </header>
  )
}
