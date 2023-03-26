export const navigationForm = () => {
    
    const to = document.getElementById('formulario')?.offsetTop;

    window.scroll({
        top: to! -70,
        behavior: "smooth"
    });
}