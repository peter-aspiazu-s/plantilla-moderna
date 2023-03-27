import {FC} from 'react';
import { scrollButtonUp } from '../../helpers';

interface Props{
    scrollAnimation: number;
  }

export const ButtonUp: FC<Props> = ({scrollAnimation}) => {
    
    const handleClickButtonUp = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        scrollButtonUp(target, scrollAnimation);
    };


  return (
    <>
        {
            (scrollAnimation <= -350) &&     
            <a 
                className='button-up animate__animated animate__fadeIn'
                onClick={handleClickButtonUp}
                href='#animationScroll'
            >
                <svg 
                    style={{
                        fill: 'white'
                    }}
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    width="48">
                        <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/>
                </svg>
            </a>
        }
    </>
  )
}
