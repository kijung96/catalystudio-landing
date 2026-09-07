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

  var zoneImages = Array.prototype.slice.call(document.querySelectorAll('.zone-card img'));
  if (zoneImages.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="닫기">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' +
      '</button>' +
      '<button type="button" class="lightbox-nav lightbox-prev" aria-label="이전 사진">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="다음 사진">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<img alt="">' +
      '<div class="lightbox-count"></div>';
    document.body.appendChild(lightbox);
    var lightboxImg = lightbox.querySelector('img');
    var lightboxClose = lightbox.querySelector('.lightbox-close');
    var lightboxPrev = lightbox.querySelector('.lightbox-prev');
    var lightboxNext = lightbox.querySelector('.lightbox-next');
    var lightboxCount = lightbox.querySelector('.lightbox-count');
    var currentIndex = 0;

    function showAt(index) {
      currentIndex = (index + zoneImages.length) % zoneImages.length;
      var img = zoneImages[currentIndex];
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      lightboxCount.textContent = (currentIndex + 1) + ' / ' + zoneImages.length;
    }
    function openLightbox(index) {
      showAt(index);
      lightbox.classList.add('is-open');
    }
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
    }

    zoneImages.forEach(function (img, index) {
      img.addEventListener('click', function () {
        openLightbox(index);
      });
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function () { showAt(currentIndex - 1); });
    lightboxNext.addEventListener('click', function () { showAt(currentIndex + 1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showAt(currentIndex - 1);
      if (e.key === 'ArrowRight') showAt(currentIndex + 1);
    });
  }
});
