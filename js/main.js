/**
 * AR Perfume — Subtle interactions and animations
 */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menu-btn');
  const navMobile = document.getElementById('nav-mobile');
  const fadeElements = document.querySelectorAll('.fade-in');

  /**
   * Mobile menu: open/close with smooth transition
   */
  function openMenu() {
    if (!menuBtn || !navMobile) return;
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
    navMobile.classList.add('is-open');
    navMobile.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!menuBtn || !navMobile) return;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    navMobile.classList.remove('is-open');
    navMobile.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    var open = menuBtn.getAttribute('aria-expanded') === 'true';
    if (open) closeMenu(); else openMenu();
  }

  if (menuBtn && navMobile) {
    menuBtn.addEventListener('click', toggleMenu);
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 1024px)').matches) closeMenu();
    });
  }

  /**
   * Header: add scrolled class when user scrolls
   */
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  /**
   * Fade-in on scroll: reveal elements when they enter viewport
   */
  function revealOnScroll() {
    const top = window.scrollY;
    const vh = window.innerHeight;
    const threshold = 0.15;

    fadeElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < vh * (1 - threshold);
      if (inView) {
        el.classList.add('visible');
      }
    });
  }

  /**
   * Smooth throttle for scroll handlers
   */
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateHeader();
        revealOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Initial state
  updateHeader();
  revealOnScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Reveal hero and above-fold elements immediately
  requestAnimationFrame(function () {
    fadeElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  });

  /**
   * Contact form: prevent default and show feedback (no backend)
   */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var text = btn.textContent;
      btn.textContent = 'Thank you';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = text;
        btn.disabled = false;
        form.reset();
      }, 2000);
    });
  }

  /**
   * Product page buttons: placeholder (no cart)
   */
  var productActions = document.querySelector('.product-info__actions');
  if (productActions) {
    productActions.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (this.textContent.includes('Cart')) {
          this.textContent = 'Added';
          var t = this;
          setTimeout(function () { t.textContent = 'Add to Cart'; }, 1500);
        }
      });
    });
  }
})();
