import Image from 'next/image'
import './styles.scss'
import Info1Png from '@/assets/info-1.png'
import Info2Png from '@/assets/info-2.png'
import Info3Png from '@/assets/info-3.png'
import Info4Png from '@/assets/info-4.png'

export function HomeInfos() {
  return (
    <section className="infos__full">
      <div className="infos__container container">
        <div className="infos_box">
          <div className="infos__row infos__row--top">
            <div className="info__container">
              <Image src={Info1Png} alt="" className="info__image" />
              <h3 className="info__small">For your company</h3>
              <h2 className="info__title">Crypto Solutions</h2>
              <p className="info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
            <div className="info__container">
              <Image src={Info2Png} alt="" className="info__image" />
              <h3 className="info__small">For your company</h3>
              <h2 className="info__title">Crypto Solutions</h2>
              <p className="info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
          <div className="infos__row infos__row--bottom">
            <div className="info__container">
              <Image src={Info3Png} alt="" className="info__image" />
              <h3 className="info__small">For your company</h3>
              <h2 className="info__title">Crypto Solutions</h2>
              <p className="info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
            <div className="info__container">
              <Image src={Info4Png} alt="" className="info__image" />
              <h3 className="info__small">For your company</h3>
              <h2 className="info__title">Crypto Solutions</h2>
              <p className="info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="infos__small">Lorem ipsum</h3>
          <h2 className="infos__title">Lorem ipsum</h2>
          <p className="infos__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <button className="infos__button">Sign up now</button>
        </div>
      </div>
    </section>
  )
}
