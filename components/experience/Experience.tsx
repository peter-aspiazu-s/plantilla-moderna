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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore mollitia quisquam soluta cum consequatur odio perferendis, 
                    error incidunt eos praesentium nulla tempora optio consequuntur quia quos sint sit nisi et.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore mollitia quisquam soluta cum consequatur odio perferendis, 
                    error incidunt eos praesentium nulla tempora optio consequuntur quia quos sint sit nisi et.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore mollitia quisquam soluta cum consequatur odio perferendis, 
                    error incidunt eos praesentium nulla tempora optio consequuntur quia quos sint sit nisi et.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore mollitia quisquam soluta cum consequatur odio perferendis, 
                    error incidunt eos praesentium nulla tempora optio consequuntur quia quos sint sit nisi et.
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
