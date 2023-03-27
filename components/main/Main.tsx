import {FC, useEffect} from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  title: string;
  slogan?: string;
  textBotton: string; 
  backgroundImage: string;
  ImageGenteSonriendo?: StaticImageData;
  setScrollAnimation: React.Dispatch<number>;
}


import { navigationForm } from '../../helpers';

export const Main: FC<Props> = ({ 
  title,
  slogan,
  textBotton,
  backgroundImage,
  ImageGenteSonriendo,
  setScrollAnimation 
}) => {

  useEffect(() => {

    const handleScroll = () => {
      let animation = document.getElementById('animationScroll');
      let position: any = animation?.getBoundingClientRect().top;

      setScrollAnimation(position);
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClickScrollForm = (e: any) => {
    e.preventDefault();

    navigationForm();
  } 

  return (
    <div 
      className='main' 
      id='animationScroll'
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
        <div className='container-main'>
            <div className='container-main-slogan'>{title}</div> 
            {
              slogan &&
              <div className='container-main-slogan2'>{slogan}</div>
            }
            <div className='container-main-button'>
                <a 
                  href='#formulario'
                  onClick={handleClickScrollForm}
                >
                  {textBotton}
                </a>
            </div>
        </div>

        <div className='main-capa-gradient'></div>

        {
          ImageGenteSonriendo &&
          <div className='container-gente-sonriendo'>
            <Image src={ImageGenteSonriendo} alt="imagen de personas sonriendo" className='image-gente-sonriendo' />
          </div>
        }


        <div
          className='main-box-radius'
        >
            <svg 
              viewBox="0 0 500 150" 
              preserveAspectRatio="none" 
              height="100%" 
              width="100%"
              className=''
            >
              <path 
                d="M-5.98,94.97 C150.00,149.60 319.64,144.18 503.61,92.02 L500.00,149.60 L-0.00,149.60 Z" 
                style={{stroke: "none", fill: "white"}}></path>
            </svg>
        </div>
    </div>
  )
}