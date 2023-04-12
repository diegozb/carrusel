// Array de las imagenes
const slides = document.querySelectorAll('#carouse1 img')

// Variable contadora
let currentSlide = 0;
slides[currentSlide].style.opacity = 1;

// func para avanzar a la siguiente slide
function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1
}

function prevSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

const prevButton = document.querySelector('#carousel-prev');
const nextButton = document.querySelector('#carousel-next');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
