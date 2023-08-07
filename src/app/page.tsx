import { Header } from '@/components/Header'
import Image from 'next/image'
import WavesPng from '@/assets/waves.png'
import './page.scss'
import { HomeInfos } from '@/components/HomeInfos'
import { TopCryptos } from '@/components/TopCryptos'
import { Subscribe } from '@/components/Subscribe'

export default function Home() {
  return (
    <main>
      <Header />
      <Image src={WavesPng} alt="" className="waves__image" />
      <HomeInfos />
      <TopCryptos />
      <Subscribe />
    </main>
  )
}
