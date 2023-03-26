import {FC} from 'react';
import Image from 'next/image';

export const AboutUs: FC = () => {
  return (
    <div className='about-us'>
        <div className='about-us-information'>
            <div className='about-us-title'>¿Quienes somos?</div>
            <div className='about-us-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam esse accusamus molestiae nesciunt aut sit, odit tempora maxime dolores eaque delectus ipsa, magnam optio, accusantium ipsam quia deserunt quos neque!</div>
        </div>

        <div className='about-us-container'>
            <div className='about-us-card'>
                <img src="/image/diseno-sonrisa.webp" alt="imagen de persona" />
                <div className='about-us-card-name'>Nombre y Apellido</div>
                <div className='about-us-card-position'>Cargo</div>
                <a href='#' className='about-us-number'>+593 912345678</a>
                <a href='#' className='about-us-button'>Contactar</a>
            </div>
        </div>
    </div>
  )
}
