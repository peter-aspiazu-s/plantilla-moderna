import {FC} from 'react'

export const SectionAbout:FC = () => {
  return (
    <div className='section-about'>
        <div className='section-about-gradient'></div>
        <div className='section-about-container'>
            <div className='section-about-title'>¿Quienes somos?</div>
            <div className='section-about-subtitle'>Saber más sobre nosotros</div>
            <div className='section-about-container-info'>
                <div className='section-about-card box1'>
                    <div className='section-about-ico'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="48" 
                            width="48"
                            style={{
                                fill:"#ff571c",
                                transform: "scale(1.5)"
                            }}    
                        >
                                <path 
                                    d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/>
                        </svg>
                    </div>

                    <div className='section-about-card-title'>Misión</div>
                    <div className='section-about-card-description'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque mollitia...
                    </div>
                </div>

                <div className='section-about-card box2'>
                    <div className='section-about-ico'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="48" 
                            width="48"
                            style={{
                                fill:"#ff571c",
                                transform: "scale(1.5)"
                            }}    
                        >
                                <path 
                                    d="M6.15 36 4 33.85 18.6 19.3l8.35 8.35L39 15.6h-6.35v-3H44v11.35h-2.95V17.8L26.9 31.95l-8.35-8.35Z"/>
                        </svg>
                    </div>

                    <div className='section-about-card-title'>Visión</div>
                    <div className='section-about-card-description'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque mollitia...
                    </div>
                </div>

                <div className='section-about-card box3'>
                    <div className='section-about-ico'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="48" 
                            width="48"
                            style={{
                                fill:"#ff571c",
                                transform: "scale(1.5)"
                            }}
                        >
                                <path 
                                    d="M1.9 40v-4.7q0-1.75.9-3.175Q3.7 30.7 5.3 30q3.65-1.6 6.575-2.3Q14.8 27 17.9 27q3.1 0 6 .7t6.55 2.3q1.6.7 2.525 2.125.925 1.425.925 3.175V40Zm35 0v-4.7q0-3.15-1.6-5.175t-4.2-3.275q3.45.4 6.5 1.175t4.95 1.775q1.65.95 2.6 2.35.95 1.4.95 3.15V40Zm-19-16.05q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1Zm18-7.5q0 3.3-2.1 5.4-2.1 2.1-5.4 2.1-.55 0-1.225-.075T25.95 23.6q1.2-1.25 1.825-3.075.625-1.825.625-4.075t-.625-3.975Q27.15 10.75 25.95 9.3q.55-.15 1.225-.25t1.225-.1q3.3 0 5.4 2.1 2.1 2.1 2.1 5.4ZM4.9 37h26v-1.7q0-.8-.475-1.55T29.25 32.7q-3.6-1.6-6.05-2.15-2.45-.55-5.3-.55-2.85 0-5.325.55T6.5 32.7q-.7.3-1.15 1.05-.45.75-.45 1.55Zm13-16.05q1.95 0 3.225-1.275Q22.4 18.4 22.4 16.45q0-1.95-1.275-3.225Q19.85 11.95 17.9 11.95q-1.95 0-3.225 1.275Q13.4 14.5 13.4 16.45q0 1.95 1.275 3.225Q15.95 20.95 17.9 20.95Zm0 16.05Zm0-20.55Z"/>
                        </svg>
                    </div>

                    <div className='section-about-card-title'>Nosotros</div>
                    <div className='section-about-card-description'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque mollitia...
                    </div>
                </div>
            </div>
        </div>


        <div
          className='section-about-box-radius-top'
        >
            <svg 
              viewBox="0 0 500 150" 
              preserveAspectRatio="none" 
              height="100%" 
              width="100%"
            >
              <path 
                d="M-5.98,94.97 C150.00,149.60 319.64,144.18 503.61,92.02 L500.00,149.60 L-0.00,149.60 Z" 
                style={{stroke: "none", fill: "white"}}></path>
            </svg>
        </div>

        <div
          className='section-about-box-radius-bottom'
        >
            <svg 
              viewBox="0 0 500 150" 
              preserveAspectRatio="none" 
              height="100%" 
              width="100%"
            >
              <path 
                d="M-5.98,94.97 C150.00,149.60 319.64,144.18 503.61,92.02 L500.00,149.60 L-0.00,149.60 Z" 
                style={{stroke: "none", fill: "white"}}></path>
            </svg>
        </div>
    </div>
  )
}
