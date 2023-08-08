import { Aside } from '@/components/Aside'
import { DashboardHeader } from '@/components/DashboardHeader'
import { ReactNode } from 'react'
import './layout.scss'
import { DashboardFooter } from '@/components/DashboardFooter'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <DashboardHeader />
      <section className="dashboard__container">
        <Aside />
        <main className="dashboard__main">{children}</main>
      </section>
      <DashboardFooter />
    </>
  )
}
