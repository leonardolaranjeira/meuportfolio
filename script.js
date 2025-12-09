
// Menu escondido para celular


/*
 - Contar os slides (.slide).

 - Criar as bolinhas (indicadores) e marcar a bolinha active.

 - Mudar o transform: translateX() do .slider-track quando as setas ou bolinhas forem clicadas.
 */

document.getElementById('perfil').addEventListener('click', function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});

 /**
   * Mobile nav toggle
   */
  const mobileNav = document.querySelector('#bars_menu');

  function mobileNavToogle() {
    const isExpanded = document.querySelector('body').classList.toggle('mobile-menu');
    mobileNav.classList.toggle('listar');
    mobileNav.classList.toggle('fechar');

    mobileNav.setAttribute('aria-expanded', isExpanded);
  }
  if (mobileNav) {
    mobileNav.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#menu a').forEach(menu => {
    menu.addEventListener('click', () => {
      if (document.querySelector('#bars_menu')) {
        mobileNavToogle();
      }
    });

  });


  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevButton = document.querySelector('.anterior');
    const nextButton = document.querySelector('.proximo');

    let currentSlide = 0;

    function updateSlider() {
      const slideWidth = slides[0] ? slides[0].offsetWidth : 0;
      if (slideWidth === 0) return; 
        const offset = -currentSlide * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
        updateIndicators();
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; 
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1; 
        }
        updateSlider();
    }
    
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    
    const indicators = document.querySelectorAll('.opcoes span');
    
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentSlide) {
                indicator.classList.add('active');
            }
        });
    }

    window.addEventListener('resize', updateSlider);

    updateSlider();
});
