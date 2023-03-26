import {FC} from 'react'
import Link from 'next/link'

export const ServiceSection: FC = () => {
  return (
    <div className='service-section'>
        <div className='service-section-title'>Nuestros mejores servicios</div>
        <div className='service-section-description'>Nuestros Tratamientos y servicios se brindan en una zona cómoda y confortable.</div>

        <div className='service-section-container'>
            <div className='service-section-container-card'>
                <div className='service-section-image-gradient1'>
                    <div className='service-section-image-gradient-background animate__animated animate__fadeIn animate__faster'></div>
                </div>
                <div className='service-section-info'>
                    <div className='service-section-info-title'>Diseño De Sonrisa</div>
                    <div className='service-section-info-subtitle'>Aplica en pacientes con piezas dentarias defectuosas, decoloradas...</div>
                    <Link href="/services/service-one">
                        <button>Ver más</button>
                    </Link>
                </div>
            </div>
            <div className='service-section-container-card'>
                <div className='service-section-image-gradient2'>
                    <div className='service-section-image-gradient-background animate__animated animate__fadeIn animate__faster'></div>
                </div>
                <div className='service-section-info'>
                    <div className='service-section-info-title'>Endodoncia</div>
                    <div className='service-section-info-subtitle'>O tratamiento de conducto.  Esta Especialidad trata a las...</div>
                    <Link href="/services/service-two">
                        <button>Ver más</button>
                    </Link>
                </div>
            </div>
            <div className='service-section-container-card'>
                <div className='service-section-image-gradient3'>
                    <div className='service-section-image-gradient-background animate__animated animate__fadeIn animate__faster'></div>
                </div>
                <div className='service-section-info'>
                    <div className='service-section-info-title'>Odontología Preventiva Y Restauradora</div>
                    <div className='service-section-info-subtitle'>La Odontología preventiva es aquella que empieza por visitar...</div>
                    <Link href="/services/service-three">
                        <button>Ver más</button>
                    </Link>
                </div>
            </div>
            <div className='service-section-container-card'>
                 <div className='service-section-image-gradient4'>
                    <div className='service-section-image-gradient-background animate__animated animate__fadeIn animate__faster'></div>
                 </div>
                <div className='service-section-info'>
                    <div className='service-section-info-title'>Ortodoncia Y Ortopedia</div>
                    <div className='service-section-info-subtitle'>La Ortopedia es una sub especialidad de la Ortodoncia y trata...</div>
                    <Link href="/services/service-four">
                        <button>Ver más</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
