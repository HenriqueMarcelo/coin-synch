import { DashboardHeader } from '@/components/DashboardHeader'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <DashboardHeader />
    // <div>
    //   <nav>Lorem nav</nav>
    //   <main>{children}</main>
    // </div>
  )
}
