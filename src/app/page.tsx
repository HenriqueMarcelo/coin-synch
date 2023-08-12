'use client'

import { Header } from '@/components/Header'
import Image from 'next/image'
import WavesPng from '@/assets/waves.png'
import './page.scss'
import { HomeInfos } from '@/components/HomeInfos'
import { TopCryptos } from '@/components/TopCryptos'
import { Subscribe } from '@/components/Subscribe'
import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { ModalProvider } from '@/contexts/ModalContext'
import { MenuContextProvider } from '@/contexts/MenuContext'
import { MenuHomeMobile } from '@/components/MenuHomeMobile'

export default function Home() {
  return (
    <ModalProvider>
      <MenuContextProvider>
        <main>
          <Header />
          <Banner />
          <Image src={WavesPng} alt="" className="waves__image" />
          <HomeInfos />
          <TopCryptos />
          <Subscribe />
          <Footer />
          <MenuHomeMobile />
        </main>
      </MenuContextProvider>
    </ModalProvider>
  )
}
