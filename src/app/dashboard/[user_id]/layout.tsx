'use client'

import { Aside } from '@/components/Aside'
import { DashboardHeader } from '@/components/DashboardHeader'
import { ReactNode } from 'react'
import './layout.scss'
import { DashboardFooter } from '@/components/DashboardFooter'
import { useUser } from '@/hooks/use-user'
import { ModalProvider } from '@/contexts/ModalContext'
import { MenuContextProvider } from '@/contexts/MenuContext'
import { MenuDashboardMobile } from '@/components/MenuDashboardMobile'
import { LoaderContextProvider } from '@/contexts/LoaderContext'
import { WalletContextProvider } from '@/contexts/WalletContext'

type Props = {
  children: ReactNode
  params: { user_id: string }
}

export default function Layout({ children, params: { user_id } }: Props) {
  const { user } = useUser(user_id)

  if (!user) {
    return null
  }

  return (
    <LoaderContextProvider>
      <WalletContextProvider>
        <ModalProvider>
          <MenuContextProvider>
            <DashboardHeader user={user} />
            <section className="dashboard__container">
              <Aside />
              <main className="dashboard__main">{children}</main>
            </section>
            <DashboardFooter />
            <MenuDashboardMobile />
          </MenuContextProvider>
        </ModalProvider>
      </WalletContextProvider>
    </LoaderContextProvider>
  )
}
