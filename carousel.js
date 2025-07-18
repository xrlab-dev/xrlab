const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function updateCarousel() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'left', 'right', 'hide');

    if (i === currentIndex) {
      slide.classList.add('active');
    } else if (i === currentIndex - 1 || (currentIndex === 0 && i === slides.length -1)) {
      slide.classList.add('left');
    } else if (i === currentIndex + 1 || (currentIndex === slides.length -1 && i === 0)) {
      slide.classList.add('right');
    } else {
      slide.classList.add('hide');
    }
  });
}

// Inicializa el carrusel
updateCarousel();

// Cambia de slide cada 4 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 4000);

// Permite clic en las imágenes izquierda y derecha para navegar
slides.forEach((slide, i) => {
  slide.addEventListener('click', () => {
    if (i === currentIndex - 1 || (currentIndex === 0 && i === slides.length -1)) {
      currentIndex = i;
      updateCarousel();
    } else if (i === currentIndex + 1 || (currentIndex === slides.length -1 && i === 0)) {
      currentIndex = i;
      updateCarousel();
    }
  });
});