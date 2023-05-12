export const burger = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__nav-link');

  const toggleBurger = () => {
    burger.classList.toggle('burger-rotate');
    nav.classList.toggle('mobile-nav_open');
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => burger.click());
  });

  burger.addEventListener('click', toggleBurger);
};
