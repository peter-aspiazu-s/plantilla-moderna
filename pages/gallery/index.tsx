import {useState} from 'react';
import { NextPage } from "next";
import { Main } from "../../components/main";
import { PlantillaLayout } from "../../components/layout";
import { GalleryComponent } from '../../components/gallery';
import { SatisfiedCustomers } from "../../components/satisfiedCustomers";
import { SectionContact } from "../../components/sectionContact";

const Gallery: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
    <PlantillaLayout
        title="Galería"
        contentPage="Esta página contiene la galería de imagenes"
        scrollAnimation={scrollAnimation}
    >
        <Main 
          title="Galería"
          textBotton="Contactar"
          backgroundImage="/image/multiracial-grupo-joven-gente-toma-selfie.webp"
          setScrollAnimation={setScrollAnimation}
        />

        <GalleryComponent />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}

export default Gallery;