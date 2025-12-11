
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

  /* Mudar o tema da página */
  
const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaClaro(temasalvo === 'claro');

// Função para alternar entre tema claro e escuro
function temaClaro(ativar) {
  if (ativar === true) {
    body.classList.add('claro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    body.classList.remove('claro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

botao.addEventListener('click', () => {
  const isClaro = body.classList.toggle('claro');
  temaClaro(isClaro);
  localStorage.setItem('tema', isClaro ? 'claro' : 'escuro');
});
// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
