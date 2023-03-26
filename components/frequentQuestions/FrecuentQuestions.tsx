import { FC, useState } from 'react';
import { navigationForm } from '../../helpers';
import { Accordion } from './Accordion';

export const FrecuentQuestions: FC = () => {

    const [active, setActive] = useState('');

    const handleClickScrollForm = (e:any) => {
        e.preventDefault();

        navigationForm();
    }

  return (
    <div className='frecuent-questions'>

        <div className='frecuent-questions-container-image-button'>

            <div className='frecuent-questions-image'>
                <img src="/image/paciente-mujer-dentista.webp" alt="paciente mujer" />
            </div>

            <a
                href='#formulario'
                onClick={handleClickScrollForm}
            >
                Reservar una cita
            </a>
        </div>

        <div className='frecuent-questions-container-accordion'>

            <div className='frecuent-questions-container-accordion-title'>Preguntas Frecuentes</div>
            <div className='frecuent-questions-container-accordion-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum quasi magnam temporibus aut.</div>

            <Accordion 
                title='Title 1'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione dicta est aperiam, ad corrupti provident nam atque corporis sapiente in harum dolore perspiciatis dolor vitae esse. Consequuntur, sed architecto.'
                active={active} 
                setActive={setActive}
            />
            <Accordion 
                title='Title 2'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione dicta est aperiam, ad corrupti provident nam atque corporis sapiente in harum dolore perspiciatis dolor vitae esse. Consequuntur, sed architecto.'
                active={active} 
                setActive={setActive}
            />
            <Accordion 
                title='Title 3'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione dicta est aperiam, ad corrupti provident nam atque corporis sapiente in harum dolore perspiciatis dolor vitae esse. Consequuntur, sed architecto.'
                active={active} 
                setActive={setActive}
            />
            <Accordion 
                title='Title 4'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione dicta est aperiam, ad corrupti provident nam atque corporis sapiente in harum dolore perspiciatis dolor vitae esse. Consequuntur, sed architecto.'
                active={active} 
                setActive={setActive}
            />
        </div>


    </div>
  )
}
