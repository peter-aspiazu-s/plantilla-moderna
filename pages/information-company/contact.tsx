import { useState } from 'react';
import { NextPage } from 'next';
import { Main } from '../../components/main';
import { PlantillaLayout } from '../../components/layout';
import { Contact } from '../../components/contact';
import { SatisfiedCustomers } from '../../components/satisfiedCustomers';
import { SectionContact } from '../../components/sectionContact';

const ContactPage: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
    <PlantillaLayout
        title='Contacto'
        contentPage='Página de contactos'
        scrollAnimation={scrollAnimation}
    >
        <Main 
          title='Contacto'
          textBotton='Contactar'
          backgroundImage='/image/hombre-que-usa-telefono-inteligente-sonriendo.webp'
          setScrollAnimation={setScrollAnimation}
        />

        <Contact />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}

export default ContactPage;