import {FC} from 'react';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const GalleryComponent: FC = () => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className='gallery-component'>
        <div className='gallery-component-subtitle'>Galería de casos</div>
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <a href="/image/diseno-sonrisa.webp">
                <img className='gallery-img' alt="img1" src="/image/diseno-sonrisa.webp" />
            </a>

            <a href="/image/endodoncia.webp">
                <img className='gallery-img' alt="img2" src="/image/endodoncia.webp" />
            </a>

            <a href="/image/paciente-mujer-dentista.webp">
                <img className='gallery-img' alt="img2" src="/image/paciente-mujer-dentista.webp" />
            </a>

            <a href="/image/ortopedia-ortodoncia.webp">
                <img className='gallery-img' alt="img2" src="/image/ortopedia-ortodoncia.webp" />
            </a>

            <a href="/image/odontologia-preventiva-restauradora.webp">
                <img className='gallery-img' alt="img2" src="/image/odontologia-preventiva-restauradora.webp" />
            </a>
            
            <a href="/image/hermosa-nina-sentada-consultorio-dentista.webp">
                <img className='gallery-img' alt="img2" src="/image/hermosa-nina-sentada-consultorio-dentista.webp" />
            </a>

            <a href="/image/hermosa-chica-sentada-oficina-dentista.webp">
                <img className='gallery-img' alt="img2" src="/image/hermosa-chica-sentada-oficina-dentista.webp" />
            </a>

            <a href="/image/dentistas-tratan-dientes-pacientes.webp">
                <img className='gallery-img' alt="img2" src="/image/dentistas-tratan-dientes-pacientes.webp" />
            </a>

            <a href="/image/dentista-masculino-calificado-que-muestra-imagen-rayos-x-dientes-mujer.webp">
                <img className='gallery-img' alt="img2" src="/image/dentista-masculino-calificado-que-muestra-imagen-rayos-x-dientes-mujer.webp" />
            </a>

            <a href="/image/dentista-examinando-dientes-paciente-femenino.webp">
                <img className='gallery-img' alt="img2" src="/image/dentista-examinando-dientes-paciente-femenino.webp" />
            </a>

            <a href="/image/dentista-binoculares-lupa-dental-que-tratan-paciente-femenino.webp">
                <img className='gallery-img' alt="img2" src="/image/dentista-binoculares-lupa-dental-que-tratan-paciente-femenino.webp" />
            </a>
        </LightGallery>
    </div>
  )
}
