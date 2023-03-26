import { useState } from 'react';
import { NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import { PlantillaLayout } from '../components/layout';
import { Main } from '../components/main';
import { SocialMedia } from '../components/socialMedia';
import { Experience } from '../components/experience';
import { ServiceSection } from '../components/serviceSection';
import { SectionAbout } from '../components/sectionAbout';
import { SectionContact } from '../components/sectionContact';
import { SatisfiedCustomers } from '../components/satisfiedCustomers';
import { FrecuentQuestions } from '../components/frequentQuestions';

const Home: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
  <PlantillaLayout
    title='Home | Dentista'
    contentPage='Consultorio dentista en guayaquil'
    keywords='dentista, dientes'
    scrollAnimation={scrollAnimation}
  >
    <Main 
      title='Protegemos tu sonrisa'
      slogan='Una sonrisa crea un cambio positivo, buena impresión y es nuestra carta de presentación.'
      textBotton='Reserva una cita'
      backgroundImage='/image/background-home-xl.webp'
      setScrollAnimation={setScrollAnimation} 
    />

    <SocialMedia />

    <Experience />

    <ServiceSection />

    <SectionAbout />

    <SectionContact />

    <SatisfiedCustomers />

    <FrecuentQuestions />

  </PlantillaLayout>
  )
}


export default Home;