export const scrollButtonUp = ( evento: any, scrollAnimation: number ) => {
    
    const element = evento.target;
    const id = element.getAttribute('href');

    window.scroll({
        top: scrollAnimation -100,
        behavior: "smooth"
    });

}