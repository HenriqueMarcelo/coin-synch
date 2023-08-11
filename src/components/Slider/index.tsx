// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import Image from 'next/image'
import Carousel1Png from '@/assets/carousel-1.png'
import Carousel2Png from '@/assets/carousel-2.png'
import Carousel3Png from '@/assets/carousel-3.png'

type Props = {
  imageWidth?: number
}
export function Slider({ imageWidth }: Props) {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image src={Carousel1Png} width={imageWidth} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Carousel2Png} width={imageWidth} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Carousel3Png} width={imageWidth} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}
