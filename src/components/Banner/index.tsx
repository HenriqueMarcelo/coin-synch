import Image from 'next/image'
import './styles.scss'
import Carousel1Png from '@/assets/carousel-1.png'
import { Modal } from '../Modal'

export function Banner() {
  return (
    <section className="container banner__container">
      <div>
        <h2 className="banner__title">Lorem ipsum</h2>
        <p className="banner__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <Modal
          trigger={<button className="banner__button">Sign up now →</button>}
        >
          lorem
        </Modal>

        <div className="banner__tags">
          <span className="banner__tag">Cryptos</span>
          <span className="banner__tag">NFTs</span>
          <span className="banner__tag">Games</span>
        </div>
      </div>
      <div>
        <Image src={Carousel1Png} alt="" />
      </div>
    </section>
  )
}