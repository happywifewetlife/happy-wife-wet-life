const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
