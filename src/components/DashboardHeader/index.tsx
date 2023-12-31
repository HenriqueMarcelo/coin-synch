'use client'

import Image from 'next/image'
import HeaderLogoSvg from '@/assets/header-logo.svg'
import './styles.scss'
import { CaretDown, List } from '@phosphor-icons/react'
import { MyPopover } from '../MyPopover'
import { UserInfo } from '@/@types/user-info'
import { useWidth } from '@/hooks/use-width'
import { useMenu } from '@/hooks/use-menu'
import { LoaderLine } from '../LoaderLine'
import { useLoader } from '@/hooks/use-loader'
import { getFirstAndLastWords } from '@/utils/get-first-and-last-words'

type Props = {
  user: UserInfo
}

export function DashboardHeader({ user }: Props) {
  const { shown } = useLoader()
  const { toggle } = useMenu()
  const { size } = useWidth()
  const containerClass = size !== 'xl' ? 'container' : ''

  return (
    <>
      {shown && <LoaderLine />}

      <header className={`dashboard-header__container ${containerClass}`}>
        <button className="dashboard-header__button" onClick={toggle}>
          <List size={14} />
        </button>
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
            <span>{getFirstAndLastWords(user.name)}</span>
            <CaretDown className="dashboard-header__icon" size={16} />
          </button>
        </MyPopover>
      </header>
    </>
  )
}
