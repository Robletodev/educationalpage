document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentSlide = 0;
    let slideInterval;
    
    // Función para mostrar una slide específica
    function showSlide(n) {
        // Oculta todas las slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Ajusta el índice si es necesario
        if (n >= slides.length) currentSlide = 0;
        else if (n < 0) currentSlide = slides.length - 1;
        else currentSlide = n;
        
        // Muestra la slide actual
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Función para avanzar a la siguiente slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Inicia el carrusel automático
    function startCarousel() {
        slideInterval = setInterval(nextSlide, 4000); // Cambia cada 5 segundos
    }
    
    // Detiene el carrusel automático
    function stopCarousel() {
        clearInterval(slideInterval);
    }
    
    // Event listeners para los controles
    nextBtn.addEventListener('click', () => {
        stopCarousel();
        nextSlide();
        startCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        stopCarousel();
        showSlide(currentSlide - 1);
        startCarousel();
    });
    
    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });
    
    // Pausar el carrusel cuando el mouse está sobre él
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    
    // Iniciar el carrusel
    startCarousel();
});