
document.getElementById('perfil').addEventListener('click', function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      const isMenuOpen = document.body.classList.contains('mobile-menu');
      if (isMenuOpen && window.innerWidth < 1200) {
            mobileNavToogle();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
        if (document.body.classList.contains('mobile-menu')) {
            document.body.classList.remove('mobile-menu');
            mobileNav.classList.remove('fechar');
            mobileNav.classList.add('listar');
            mobileNav.setAttribute('aria-expanded', 'false');
        }
    }
});

// Menu mobile
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

// Slider dos projetos e certificações
const swiperProjetos = new Swiper('.testimonials-slider', {
  autoHeight: true,
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

const swiperCertificados = new Swiper('.certificados-slider', {
  autoHeight: true,
  loop: true,
  speed: 800,
  autoplay: { 
      delay: 5000,
      disableOnInteraction: false 
  },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination-cert',
      clickable: true,
  },
});

const links = document.querySelectorAll('#menu ul.ancoras a');
const secoes = document.querySelectorAll('section[id], div[id]'); 

function scrollSpy() {
    const topoJanela = window.pageYOffset + 100;

    secoes.forEach(secao => {
        const secaoTopo = secao.offsetTop;
        const secaoAltura = secao.offsetHeight;
        const id = secao.getAttribute('id');

        if (topoJanela >= secaoTopo && topoJanela < secaoTopo + secaoAltura) {
            links.forEach(link => {
                link.classList.remove('ativo');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('ativo');
                }
            });
        }
    });
}

window.addEventListener('scroll', scrollSpy);
window.addEventListener('load', scrollSpy);

// Os scripts contidos neste arquivo foram estudados e praticados com base em curso e documentações dedicadas ao Javascript, DOM, Swiper.js e boas práticas de desenvolvimento web.
// Usei nomenclaturas em inglês e algumas em português para identificação de pontos onde preciso praticar e entender mais sobre cada tópico abordado.
