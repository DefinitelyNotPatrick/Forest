const burgerBtn = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

const closeMenu = () => {
  nav.classList.remove('is-active');
  burgerBtn.classList.remove('is-active');
  overlay.classList.remove('is-active');
  burgerBtn.setAttribute('aria-expanded', 'false');
  burgerBtn.setAttribute('aria-label', 'Otwórz menu');
  document.body.classList.remove('no-scroll');
};

const openMenu = () => {
  nav.classList.add('is-active');
  burgerBtn.classList.add('is-active');
  overlay.classList.add('is-active');
  burgerBtn.setAttribute('aria-expanded', 'true');
  burgerBtn.setAttribute('aria-label', 'Zamknij menu');
  document.body.classList.add('no-scroll');
};

if (burgerBtn && nav && overlay) {
  burgerBtn.addEventListener('click', () => {
    nav.classList.contains('is-active') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-active')) {
      closeMenu();
    }
  });

  document.querySelectorAll('.nav__list-item a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}