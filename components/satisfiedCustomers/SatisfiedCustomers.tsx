import {FC} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper";

export const SatisfiedCustomers: FC = () => {
  return (
    <div className='satisfied-customers'>
        <div className='satisfied-customers-container-text'>
            <div className='satisfied-customers-title'>Clientes satisfechos</div>
            <div className='satisfied-customers-subtitle'>Nuestros Pacientes Opinan....</div>
            <div className='satisfied-customers-stars'>⭐⭐⭐⭐⭐ total de las reseñas</div>
        </div>
        <div className='satisfied-customers-gradient'></div>
        <div className='satisfied-customers-container-slide'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    900: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1350: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='satisfied-customers-slide-content'>
                        <img src="/image/cotizar-1.webp" alt="imagen de comillas" className='satisfied-customers-comillas' />
                        <div className='satisfied-customers-img-container'>
                            <img 
                                src={'/image/Diseno-sin-titulo-2023-01-16T134016-389.webp'} 
                                alt="imagen de cliente satisfecho" 
                                className="satisfied-customers-img" 
                            />
                        </div>
                        <div className='satisfied-customers-slide-title'>Nombre Apellido</div>
                        <div className='satisfied-customers-slide-lugar'>Lugar</div>
                        <div className='satisfied-customers-slide-starts'>⭐⭐⭐⭐⭐</div>
                        <div className='satisfied-customers-slide-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta. Quis accusantium repellat maiores dolor doloribus repellendus voluptatem.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='satisfied-customers-slide-content'>
                    <img src="/image/cotizar-1.webp" alt="imagen de comillas" className='satisfied-customers-comillas' />
                    <div className='satisfied-customers-img-container'>
                        <img 
                            src={'/image/Diseno-sin-titulo-2023-01-16T134026-068.webp'} 
                            alt="imagen de cliente satisfecho" 
                            className="satisfied-customers-img" 
                        />
                    </div>
                    <div className='satisfied-customers-slide-title'>Nombre Apellido</div>
                    <div className='satisfied-customers-slide-lugar'>Lugar</div>
                    <div className='satisfied-customers-slide-starts'>⭐⭐⭐⭐⭐</div>
                    <div className='satisfied-customers-slide-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta. Quis accusantium repellat maiores dolor doloribus repellendus voluptatem.</div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='satisfied-customers-slide-content'>
                    <img src="/image/cotizar-1.webp" alt="imagen de comillas" className='satisfied-customers-comillas' />
                    <div className='satisfied-customers-img-container'>
                        <img 
                            src={'/image/Diseno-sin-titulo-2023-01-16T134034-580.webp'} 
                            alt="imagen de cliente satisfecho" 
                            className="satisfied-customers-img" 
                        />
                    </div>
                    <div className='satisfied-customers-slide-title'>Nombre Apellido</div>
                    <div className='satisfied-customers-slide-lugar'>Lugar</div>
                    <div className='satisfied-customers-slide-starts'>⭐⭐⭐⭐⭐</div>
                    <div className='satisfied-customers-slide-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta. Quis accusantium repellat maiores dolor doloribus repellendus voluptatem.</div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='satisfied-customers-slide-content'>
                    <img src="/image/cotizar-1.webp" alt="imagen de comillas" className='satisfied-customers-comillas' />
                    <div className='satisfied-customers-img-container'>
                        <img 
                            src={'/image/Diseno-sin-titulo-2023-01-16T134046-451.webp'} 
                            alt="imagen de cliente satisfecho" 
                            className="satisfied-customers-img" 
                        />
                    </div>
                    <div className='satisfied-customers-slide-title'>Nombre Apellido</div>
                    <div className='satisfied-customers-slide-lugar'>Lugar</div>
                    <div className='satisfied-customers-slide-starts'>⭐⭐⭐⭐⭐</div>
                    <div className='satisfied-customers-slide-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta. Quis accusantium repellat maiores dolor doloribus repellendus voluptatem.</div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
