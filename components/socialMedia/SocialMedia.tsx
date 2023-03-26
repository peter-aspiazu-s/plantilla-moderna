import {FC} from 'react';

export const SocialMedia: FC = () => {


  return (
    <div className='social-media'>
        <div className='container-social-media-image'>
            <img src='/image/Diseno-sin-titulo-2023-01-05T164239-683.webp' alt="facebook" className='social-media-image' />
        </div>
        <div className='container-social-media-image'>
            <img src='/image/Diseno-sin-titulo-2023-01-05T164431-183.webp' alt="tiktok" className='social-media-image' />
        </div>
        <div className='container-social-media-image'>
            <img src='/image/Diseno-sin-titulo-2023-01-05T164451-396.webp' alt="instagram" className='social-media-image' />
        </div>
        <div className='container-social-media-image'>
            <img src='/image/Diseno-sin-titulo-2023-01-05T164524-690.webp' alt="youtube" className='social-media-image' />
        </div>
        <div className='container-social-media-image hidden'>
            <img src='/image/Diseno-sin-titulo-2023-01-05T164101-007.webp' alt="youtube" className='social-media-image' />
        </div>
    </div>
  )
}
