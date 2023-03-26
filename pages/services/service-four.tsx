import {useState} from 'react';
import { NextPage } from 'next';
import { Main } from '../../components/main';
import { PlantillaLayout } from '../../components/layout';
import { SectionService } from '../../components/serviceOne';
import { SatisfiedCustomers } from '../../components/satisfiedCustomers';
import { SectionContact } from '../../components/sectionContact';

const ServiceFour: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
    <PlantillaLayout
        title='Service Four'
        contentPage='No hay contenido real aún'
        scrollAnimation={scrollAnimation}
    >
        <Main 
          backgroundImage='/image/primer-plano-ejecutivos-negocios-oficina.webp'
          title='Título del servicio'
          textBotton='Contactar'
          setScrollAnimation={setScrollAnimation}
        />

        <SectionService 
          subtitle='Subtítulo'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus amet facilis, animi quos inventore accusamus, non perspiciatis dolorum reiciendis corrupti qui. Ad reiciendis voluptatem perferendis! Assumenda laudantium nam itaque.'
          image={[
            "/image/ortopedia-ortodoncia.webp",
            "/image/dentista-masculino-calificado-que-muestra-imagen-rayos-x-dientes-mujer.webp",
            "/image/hermosa-nina-sentada-consultorio-dentista.webp"
          ]}
        />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}


export default ServiceFour;