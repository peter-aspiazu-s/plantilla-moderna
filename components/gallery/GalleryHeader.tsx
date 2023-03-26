import {FC} from 'react';
import { navigationForm } from '../../helpers';

export const GalleryHeader: FC = () => {
  return (
    <div className='gallery-header'>
        <div className='gallery-header-gradient'></div>
        
        <div className='service-one-main-title'>Galería</div>
        <button 
          className='service-one-main-button'
          onClick={() => navigationForm()}
        >
          Contactar
        </button>

        <div
          className='service-one-main-box-radius'
        >
            <svg 
              viewBox="0 0 500 150" 
              preserveAspectRatio="none" 
              height="100%" 
              width="100%"
            >
              <path 
                d="M-5.98,94.97 C150.00,149.60 319.64,144.18 503.61,92.02 L500.00,149.60 L-0.00,149.60 Z" 
                style={{stroke: "none", fill: "white"}}></path>
            </svg>
        </div>
    </div>
  )
}
