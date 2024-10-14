document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carrusel-items');
    const carouselItems = document.querySelector('.carrusel-items');
    let currentIndex = 0;
    const intervalTime = 2000; // Cambia cada 3 segundos
    const itemWidth = 200; // Ancho de cada imagen igual al contenedor
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % (carouselItems.children.length / 2); // Dividido por 2 debido a los duplicados
      updateCarousel();
    }
  
    function updateCarousel() {
      const translateX = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
    }
  
    setInterval(nextSlide, intervalTime);
  
    // Clona las primeras imágenes y las agrega al final del carrusel
    const items = carouselItems.querySelectorAll('img');
    const cloneItems = [...items].map(item => item.cloneNode(true));
    cloneItems.forEach(clone => carouselItems.appendChild(clone));
  });


