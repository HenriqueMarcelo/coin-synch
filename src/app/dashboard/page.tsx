import Image from 'next/image'
import J1Svg from '@/assets/j1.svg'
import J2Svg from '@/assets/j2.svg'
import './page.scss'

export default function Dashboard() {
  return (
    <div className="container">
      <section className="dashboard__card">
        <header className="dashboard__header">
          <span className="dashboard__title">
            <Image src={J1Svg} alt="" />
            My Wallet
          </span>
          <button className="dashboard__button">+ Add crypto</button>
        </header>
        <div className="empty__container">
          <Image src={J2Svg} alt="" />
          <h2 className="empty__title">Nothing here yet...</h2>
          <h3 className="empty__text">Add a crypto and start earning</h3>
        </div>
      </section>
    </div>
  )
}
