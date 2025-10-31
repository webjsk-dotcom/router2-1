import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slide.css'

function SwiperSlideComponent() {
  const images = [
    {
      id: 1,
      src: './images/c1-1.jpg',
      alt: 'Swiper Image 1'
    },
    {
      id: 2,
      src: './images/c2-1.jpg',
      alt: 'Swiper Image 2'
    },
    {
      id: 3,
      src: './images/c3-1.jpg',
      alt: 'Swiper Image 3'
    },
    {
      id: 4,
      src: './images/c4-1.jpg',
      alt: 'Swiper Image 4'
    },
    {
      id: 5,
      src: './images/c5-1.jpg',
      alt: 'Swiper Image 5'
    },
    {
      id: 6,
      src: './images/c6-1.jpg',
      alt: 'Swiper Image 6'
    }
  ]

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          {/* <h2 className="text-center mb-4">Swiper 슬라이더</h2> */}
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}  //한화면 몇장표시
              slidesPerGroup={1}  //한번이동시 갯수
              navigation  //좌우화살표
              pagination={{ clickable: true }}  //하단 점(pager) 점클릭가능
              autoplay={{  //자동슬라이드
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,  //320일때 1장보이고 10간격
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 15
                },
                992: {
                  slidesPerView: 1,
                  spaceBetween: 20
                }
              }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="swiper-slide-item">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="img-fluid w-100"
                      style={{ width:"1200", height: '400px', objectFit: 'cover' }}
                    />
                    <div className="swiper-caption mt-2">
                      <h6>{image.alt}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwiperSlideComponent
