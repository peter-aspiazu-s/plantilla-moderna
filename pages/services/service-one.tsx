import { useState } from 'react';
import { NextPage } from 'next';
import { Main } from '../../components/main';
import { PlantillaLayout } from '../../components/layout';
import { SectionService } from '../../components/serviceOne';
import { SatisfiedCustomers } from '../../components/satisfiedCustomers';
import { SectionContact } from '../../components/sectionContact';

const ServiceTwo: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
    <PlantillaLayout
        title='Service One'
        contentPage='No hay contenido real aún'
        scrollAnimation={scrollAnimation}
    >
        <Main 
          backgroundImage='/image/grupo-personas-telefonos-inteligentes-tabletas.webp'
          title='Título del servicio'
          textBotton='Contactar'
          setScrollAnimation={setScrollAnimation}
        />

        <SectionService 
          subtitle='Subtítulo'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus amet facilis, animi quos inventore accusamus, non perspiciatis dolorum reiciendis corrupti qui. Ad reiciendis voluptatem perferendis! Assumenda laudantium nam itaque.'
          image={[
            "/image/diseno-sonrisa.webp",
            "/image/mujer-morena-atractiva-joven-femenina-promover-servicios-dentales-apuntando-boca-sonrisa-blanca-perfecta-sonriendo-encantado.webp",
            "/image/mujer-sosteniendo-tableta.webp"
          ]}
        />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}


export default ServiceTwo;