import {FC} from 'react';

export const Experience: FC = () => {
  return (
    <div className='experience'>
        <div className='experience-container-img'>
            <img 
                src={'/image/dentista-examinando-dientes-paciente-femenino.webp'} 
                alt='imagen de dentista' 
                className='img-dentista-experience' 
            />
        </div>

        <div className='container-experience'>
            <div className='experience-container-subtitle'>
                <div>30 años con excelentes resultados</div>
            </div>
            <div className='experience-container-description'>
                <div>
                    Apasionado por la odontología, el Dr. Eduardo Cedeño Viteri, 
                    desde hace 30 años ejerce la profesión en el Centro de Especialidades Odontológicas, 
                    en Guayaquil, posicionándose en el medio, como una de las primeras opciones en los buscadores de internet. 
                    Asociándose para ello, con especialistas en cada área para ofrecer a la comunidad, odontología multidisciplinaria. 
                    Los especialistas estamos capacitados y calificados, con vasta experiencia de muchos años en odontología de avanzada. 
                    Acérquese a nosotros si necesita la ayuda de profesionales experimentados que haga de su visita al dentista una experiencia agradable
                    Somos sus socios para mantener una linda y saludable sonrisa. Estamos ubicados en una gran zona comercial de la ciudad, 
                    cerca del aeropuerto, hospitales, centros comerciales, banca, restaurantes, etc. El edificio cuenta con seguridad, 
                    cámaras de vigilancia y parqueaderos. Nuestras instalaciones cuenta además con WiFi, y cámaras de vigilancia.
                </div>
            </div>
            <div className='experience-container-clients'>
                <div>
                    <img src={'/image/dfggfdfdggfd.webp'} alt='imagen de clientes' className='img-clients-experience' />
                </div>
                <div>Más de 200 clientes confían en nosotros</div>
            </div>
        </div>
    </div>
  )
}
