export const scrollButtonUp = ( target: HTMLAnchorElement, scrollAnimation: number ) => {
    
    const element = target;
    const id = element.getAttribute('href');

    window.scroll({
        top: scrollAnimation -100,
        behavior: "smooth"
    });

}