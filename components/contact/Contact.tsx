import {FC} from 'react';

export const Contact: FC = () => {
  return (
    <div className='contact'>
        <div className='contact-information'>
            <div className='contact-title'>Contactar</div>
            <div className='contact-description'>Llama, envía un mensaje o llena el formulario para obtener más información de nuestros servicios</div>
        </div>

        <div className='contact-container'>
            <div className='contact-card'>
                <div className='contact-card-name'>Nombre y Apellido</div>
                <div className='contact-card-position'>Cargo</div>
                <a href='#' className='contact-number'>+593 912345678</a>
                <a href='#' className='contact-button'>Contactar</a>
            </div>
        </div>
    </div>
  )
}
