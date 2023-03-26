import { useState } from 'react';
import { NextPage } from 'next';
import { Main } from '../../components/main';
import { AboutUs } from '../../components/about';
import { PlantillaLayout } from '../../components/layout';
import { SatisfiedCustomers } from '../../components/satisfiedCustomers';
import { SectionContact } from '../../components/sectionContact';

const AboutPage: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
    <PlantillaLayout
        title='Nosotros'
        contentPage='Página con información de la empresa'
    >
        <Main 
          title='Sobre nosotros'
          textBotton='Contactar'
          backgroundImage='/image/comunidad-jovenes-posando.webp'
          setScrollAnimation={setScrollAnimation}
        />

        <AboutUs />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}

export default AboutPage;