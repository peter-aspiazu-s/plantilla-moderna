import React, { FC, useState } from 'react';
import Image from 'next/image';
import { navigationForm } from '../../helpers';
import Link from 'next/link';

interface Props{
  scrollAnimation: number;
}

export const Navbar: FC<Props> = ({scrollAnimation}) => {

  const [btnSubMenu, setBtnSubMenu] = useState(false);

  const logo = "/image/logo-ejemplo.webp";

  const handleClickScrollForm = (e: any) => {
    e.preventDefault();
    navigationForm();
  }

  return (
    <div
      id='menu-top'
      className={`menu-desktop ${ scrollAnimation !== 0 ? 'animation-scroll' : 'remove-animation-scroll' }`}
    >
      <div className='container-logo-desktop hover-icon-logo'>
        <Link href="/">
          <Image src={logo} alt="logo" width={230} height={90} />
        </Link>
      </div>

      <div className='container-list-menu-desktop'>
        <Link href="/">
          <div className='hover-menu-list'>Inicio</div>
        </Link>
        <div className='submenu-desktop hover-menu-list'>
          <div
            onClick={ () => setBtnSubMenu(!btnSubMenu) }
          >
            Servicios
          </div>
          
          <div
            className='navbar-icon-item-menu'
            onClick={ () => setBtnSubMenu(!btnSubMenu) }
          >
              {
                btnSubMenu ?
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    // fill: 'white',
                    transform: 'scale(0.5)',
                    width: '40px',
                    height:'40px',
                  }}  
                >
                  <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/>
                </svg>
                :
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    // fill: 'white',
                    transform: 'scale(0.5)',
                    width: '40px',
                    height:'40px',
                  }}  
                >
                  <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                </svg>
              }
            </div>  

            {
              btnSubMenu &&
              <div
                className='container-submenu-desktop animate__animated animate__backInDown'
              >
                <Link href="/services/service-one">
                  <div className='hover-submenu-list'>
                    Service One
                  </div>
                </Link>
                <Link href="/services/service-two">
                  <div className='hover-submenu-list'>
                    Service Two
                  </div>
                </Link>
                <Link href="/services/service-three">
                  <div className='hover-submenu-list'>
                    Service Three
                  </div>
                </Link>
                <Link href="/services/service-four">
                  <div className='hover-submenu-list'>
                    Service Four
                  </div>
                </Link>
              </div>
            }

        </div>

        <Link href="/gallery">
          <div className='hover-menu-list'>Galería</div>
        </Link>
        <Link href="/information-company/about">
          <div className='hover-menu-list'>Nosotros</div>
        </Link>
        <Link href="/information-company/contact">
          <div className='hover-menu-list'>Contactos</div>
        </Link>
      </div>

      <a
        onClick={handleClickScrollForm}
        href='#formulario' 
        className='container-calendar-desktop hover-icon-logo'
      >
        <svg
          style={{
            fill: "white"
          }}
          xmlns="http://www.w3.org/2000/svg" 
          height="48" 
          viewBox="0 96 960 960" 
          width="48">
            <path 
              d="M319 806h322v-60H319v60Zm0-170h322v-60H319v60Zm-99 340q-24 0-42-18t-18-42V236q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554V236H220v680h520V422H551ZM220 236v186-186 680-680Z"/>
          </svg>
      </a>
    </div>
  )
}
