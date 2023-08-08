import { Aside } from '@/components/Aside'
import { DashboardHeader } from '@/components/DashboardHeader'
import { ReactNode } from 'react'
import './layout.scss'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <DashboardHeader />
      <section className="dashboard__container">
        <Aside />
        <main>{children}</main>
      </section>
    </>
  )
}
