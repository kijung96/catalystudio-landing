document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var close = document.querySelector('.nav-close');
  var nav = document.querySelector('.nav');
  var scrim = document.querySelector('.nav-scrim');

  function openNav() {
    nav.classList.add('is-open');
    scrim.classList.add('is-open');
  }
  function closeNav() {
    nav.classList.remove('is-open');
    scrim.classList.remove('is-open');
  }

  if (toggle) toggle.addEventListener('click', openNav);
  if (close) close.addEventListener('click', closeNav);
  if (scrim) scrim.addEventListener('click', closeNav);

  if (document.querySelector('#hero-splide') && window.Splide) {
    new Splide('#hero-splide', {
      type: 'fade',
      autoplay: true,
      perPage: 1,
      perMove: 1,
      arrows: false,
      pagination: true,
      rewind: true,
    }).mount();
  }
});
