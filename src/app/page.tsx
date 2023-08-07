import { Header } from '@/components/Header'
import Image from 'next/image'
import WavesPng from '@/assets/waves.png'
import './page.scss'
import { HomeInfos } from '@/components/HomeInfos'

export default function Home() {
  return (
    <main>
      <Header />
      <Image src={WavesPng} alt="" className="waves__image" />
      <HomeInfos />
    </main>
  )
}
