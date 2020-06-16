
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');//togge va a agregar la clase show cuando no la tenga (cunado se de el click) y va a quitarla cuando la tenga (cuando se de click)
});


//SCROLLREVEAL

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });