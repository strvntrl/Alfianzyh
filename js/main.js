/* Alfianzyh — Portfolio | main.js (vanilla, no dependencies) */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var root = document.documentElement;

  /* ---------- Loader ---------- */
  var loader = $('.loader');
  function hideLoader() { if (loader) loader.classList.add('done'); root.classList.add('ready'); }
  window.addEventListener('load', function () { setTimeout(hideLoader, 250); });
  setTimeout(hideLoader, 2500); // safety net

  /* ---------- Theme ---------- */
  var themeBtn = $('.theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme-v2', next); } catch (e) {}
  });

  /* ---------- Nav: mobile menu, scroll state, progress, back-to-top ---------- */
  var nav = $('.nav'), burger = $('.burger'), progress = $('.progress'), toTop = $('.to-top');
  if (burger) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  var lastY = 0, ticking = false;
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle('scrolled', y > 20);
    if (!nav.classList.contains('open')) nav.classList.toggle('hide', y > lastY && y > 500);
    if (progress) progress.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
    if (toTop) toTop.classList.toggle('show', y > 700);
    lastY = y; ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ---------- Scroll reveal ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Typing effect ---------- */
  var typed = $('.typed');
  if (typed) {
    var words = (typed.getAttribute('data-words') || '').split('|');
    if (reduce) { typed.textContent = words[0]; }
    else {
      var wi = 0, ci = 0, del = false;
      (function tick() {
        var w = words[wi];
        ci += del ? -1 : 1;
        typed.textContent = w.slice(0, ci);
        var wait = del ? 38 : 75;
        if (!del && ci === w.length) { del = true; wait = 1700; }
        else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; wait = 350; }
        setTimeout(tick, wait);
      })();
    }
  }

  /* ---------- Counters ---------- */
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target, end = +el.getAttribute('data-count'), t0 = null;
        if (reduce) { el.textContent = end; return; }
        requestAnimationFrame(function step(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1400, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        });
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- Pointer effects (desktop only) ---------- */
  if (fine && !reduce) {
    // cursor glow
    var glow = $('.cursor-glow');
    if (glow) {
      var gx = 0, gy = 0, tx = 0, ty = 0, started = false;
      window.addEventListener('pointermove', function (e) {
        tx = e.clientX; ty = e.clientY;
        if (!started) { started = true; gx = tx; gy = ty; glow.classList.add('on'); loop(); }
      }, { passive: true });
      var loop = function () {
        gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
        glow.style.transform = 'translate3d(' + gx + 'px,' + gy + 'px,0)';
        requestAnimationFrame(loop);
      };
    }
    // spotlight on cards
    $$('.card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
    // 3D tilt
    $$('[data-tilt]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = 'transform .1s linear, border-color .4s, box-shadow .5s';
        el.style.transform = 'perspective(900px) rotateX(' + (-py * 7) + 'deg) rotateY(' + (px * 9) + 'deg) translateY(-6px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transition = ''; el.style.transform = ''; });
    });
    // magnetic buttons
    $$('.btn, .socials a').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.22) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.3) + 'px)';
      });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
    // portrait parallax
    var portrait = $('.portrait');
    if (portrait) window.addEventListener('pointermove', function (e) {
      var x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
      portrait.style.transform = 'translate3d(' + (x * -18) + 'px,' + (y * -14) + 'px,0)';
    }, { passive: true });
  }

  /* ---------- Project filter ---------- */
  var filterBtns = $$('.filters button'), projects = $$('.project[data-cat]');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');
      var f = btn.getAttribute('data-filter'), i = 0;
      projects.forEach(function (p) {
        var show = f === 'all' || p.getAttribute('data-cat') === f;
        p.classList.toggle('gone', !show);
        if (show && !reduce && p.animate) {
          p.animate([{ opacity: 0, transform: 'translateY(24px) scale(.96)' }, { opacity: 1, transform: 'none' }],
            { duration: 550, delay: i++ * 60, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
        }
      });
    });
  });

  /* ---------- FAQ accordion ---------- */
  $$('.faq-item button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement, open = item.classList.contains('open');
      $$('.faq-item.open').forEach(function (o) { o.classList.remove('open'); $('button', o).setAttribute('aria-expanded', 'false'); });
      if (!open) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  });

  /* ---------- Contact form (Formspree, AJAX with normal-submit fallback) ---------- */
  var form = $('.form');
  if (form && window.fetch) {
    var status = $('.form-status', form), submit = $('button[type=submit]', form), label = $('span', submit);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var original = label.textContent;
      label.textContent = 'Sending…'; submit.disabled = true; status.className = 'form-status';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad response');
          form.reset();
          status.textContent = 'Your message has been submitted. I will get back to you within 24–48 hours.';
          status.className = 'form-status ok';
        })
        .catch(function () {
          status.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
          status.className = 'form-status err';
        })
        .then(function () { label.textContent = original; submit.disabled = false; });
    });
  }

  /* ---------- Footer year ---------- */
  $$('.year').forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
