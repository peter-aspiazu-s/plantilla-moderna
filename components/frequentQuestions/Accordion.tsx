import {FC} from 'react';

interface Props {
    title: string,
    description: string,
    active: string, 
    setActive: any
}

export const Accordion: FC<Props> = ({ title, description, active, setActive }) => {

    const handleClickAccordion = () => {
        if(active === ''){
            setActive(title)
        }else if(active === title){
            setActive('')
        }else if(active !== title){
            setActive(title)
        }
    }

  return (
    <div className='accordion'>
        <div 
            className={(active === title ? 'background-color-enable' : 'background-color-disable') + ' accordion-heading'}
            // onClick={() => setActive(title)}
            onClick={handleClickAccordion}
        >
            <div className='accordion-container-heading'>
                <div className='accordion-title'>{title}</div>
                <div className='accordion-icon-right'>   
                    {
                        active === title
                        ?
                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m14 28 10-10.05L34 28Z"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 34V14l10 10Z"/></svg>
                    }
                </div>
            </div>
        </div>

        <div className={(active === title ? 'show' : '') + ' accordion-container'}>
            <div className='accordion-container-accordion'>
                <div className='accordion-description'>
                    {description}
                </div>
            </div>
        </div>
    </div>
  )
}
