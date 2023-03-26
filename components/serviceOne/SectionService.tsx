import {FC} from 'react';
import { SliderService } from '../slider-service';

interface Props {
  subtitle: string;
  description: string;
  image: string[];
}

export const SectionService: FC<Props> = ({
  subtitle,
  description,
  image
}) => {
  return (
    <div className='section-service-one'>
        <div className='section-service-one-container-info'>
            <div className='section-service-one-subtitle'>{subtitle}</div>
            <div className='section-service-one-description'>
                {description}
            </div>
        </div>

        <div className='section-service-one-slide-img'>
          <SliderService 
            image={image}
          />
        </div>
    </div>
  )
}
