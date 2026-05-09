/* ============================================================
   WZ Schädlingsbekämpfung — Shared site behavior
   ============================================================ */

(function () {
  const SITE = {
    pests: [
      { slug: 'ratten',  name: 'Ratten',  latin: 'Rattus norvegicus', icon: 'rat' },
      { slug: 'maeuse',  name: 'Mäuse',   latin: 'Mus musculus',      icon: 'mouse' },
      { slug: 'ameisen', name: 'Ameisen', latin: 'Formicidae',        icon: 'ant' },
      { slug: 'wespen',  name: 'Wespen',  latin: 'Vespula vulgaris',  icon: 'wasp' },
      { slug: 'schaben', name: 'Schaben', latin: 'Blattodea',         icon: 'roach' },
    ],
    services: [
      { slug: 'privat',      name: 'Privat',      sub: 'Haus & Wohnung' },
      { slug: 'gewerblich',  name: 'Gewerblich',  sub: 'Betriebe & Industrie' },
      { slug: 'ueberwachung',name: 'Überwachung', sub: 'Monitoring & Audit' },
    ],
    phone: '0155 — 6339 5364',
    phoneHref: 'tel:+4915563395364',
    address: 'Rüppurrer Straße 12 · 76137 Karlsruhe',
  };

  // ---- Tiny pest SVGs (abstract, dezent) ----
  const PEST_SVG = {
    rat: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16c0-3 3-5 6-5s6 2 6 5-3 4-6 4-6-1-6-4Z"/><path d="M14 13c1-2 3-3 5-3"/><circle cx="6" cy="15" r=".7" fill="currentColor"/><path d="M3 16c-1 .5-1.5 1.5-1.5 3"/></svg>`,
    mouse: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="14" r="6"/><circle cx="7" cy="9" r="2.2"/><circle cx="15" cy="9" r="2.2"/><circle cx="9" cy="14" r=".7" fill="currentColor"/><path d="M17 16c1.5.4 3 1.5 3.5 3"/></svg>`,
    ant: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2.4"/><circle cx="12" cy="18" r="2.6"/><path d="M5 9l4 2M19 9l-4 2M4 14l4 1M20 14l-4 1M5 19l4-2M19 19l-4-2"/></svg>`,
    wasp: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="14" rx="4" ry="6"/><path d="M8 14h8M8 17h8"/><path d="M6 9C4 7 4 5 6 4M18 9c2-2 2-4 0-5"/><path d="M12 20l-1 2M12 20l1 2"/></svg>`,
    roach: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="6" ry="8"/><path d="M12 5v16"/><path d="M5 9l-3-1M19 9l3-1M5 13l-3 0M19 13l3 0M6 17l-3 2M18 17l3 2"/><path d="M9 4l-1-2M15 4l1-2"/></svg>`,
    arrow: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`,
  };
  window.PEST_SVG = PEST_SVG;
  window.SITE = SITE;

  // ---- Header ----
  function buildHeader(active) {
    const pestLinks = SITE.pests.map(p => `
      <a href="schaedlinge/${p.slug}.html"><span>${p.name}</span><small>${p.latin}</small></a>
    `).join('');
    const serviceLinks = SITE.services.map(s => `
      <a href="${s.slug}.html"><span>${s.name}</span><small>${s.sub}</small></a>
    `).join('');

    return `
    <header class="site-header" id="siteHeader">
      <div class="wrap nav">
        <a href="${active === 'home' ? '#' : '../index.html'.replace('../','')}" class="nav-logo" data-home>
          <span class="mark">W</span>
          <span class="stack">
            <span>WZ Schädlingsbekämpfung</span>
            <small>Karlsruhe · Lokal & Kompetent</small>
          </span>
        </a>

        <nav>
          <ul class="nav-links">
            <li><a href="" data-link="home" ${active==='home'?'class="active"':''}>Start</a></li>
            <li class="has-menu">
              <button>Schädlinge ${PEST_SVG.arrow}</button>
              <div class="submenu">${pestLinks}</div>
            </li>
            <li class="has-menu">
              <button>Leistungen ${PEST_SVG.arrow}</button>
              <div class="submenu">${serviceLinks}</div>
            </li>
            <li><a href="" data-link="ueber" ${active==='ueber'?'class="active"':''}>Über uns</a></li>
            <li><a href="" data-link="kontakt" ${active==='kontakt'?'class="active"':''}>Kontakt</a></li>
          </ul>
        </nav>

        <div class="nav-cta">
          <a class="nav-phone" href="${SITE.phoneHref}" aria-label="Telefon">${SITE.phone}</a>
          <a class="btn btn--primary" href="" data-link="kontakt">Anfrage stellen ${PEST_SVG.arrow}</a>
          <button class="nav-burger" aria-label="Menü öffnen" id="navBurger"><span></span><span></span><span></span></button>
        </div>
      </div>

      <div class="mobile-menu" id="mobileMenu">
        <div class="group">
          <h4>Navigation</h4>
          <a href="" data-link="home">Start</a>
          <a href="" data-link="ueber">Über uns</a>
          <a href="" data-link="kontakt">Kontakt</a>
        </div>
        <div class="group">
          <h4>Schädlinge</h4>
          ${SITE.pests.map(p => `<a href="schaedlinge/${p.slug}.html">${p.name}</a>`).join('')}
        </div>
        <div class="group">
          <h4>Leistungen</h4>
          ${SITE.services.map(s => `<a href="${s.slug}.html">${s.name}</a>`).join('')}
        </div>
        <div class="group">
          <a class="btn btn--primary" href="" data-link="kontakt" style="margin-top:16px">Jetzt Anfrage stellen</a>
          <a class="nav-phone" href="${SITE.phoneHref}" style="display:block;margin-top:24px">${SITE.phone}</a>
        </div>
      </div>
    </header>`;
  }

  function buildFooter() {
    return `
    <footer class="site-footer">
      <div class="wrap top">
        <div class="brand">
          <div class="h serif"><em style="color:var(--gold);font-style:italic">Wir,</em> zusammen.<br/>Lokal &amp; kompetent.</div>
          <p>Professionelle Schädlingsbekämpfung in Karlsruhe und Umgebung. Diskret, gründlich, dauerhaft.</p>
          <div style="margin-top:24px">
            <div class="eyebrow" style="color:var(--sage);margin-bottom:6px"><span class="dot"></span>24 / 7 Notdienst</div>
            <a href="${SITE.phoneHref}" style="font-family:'Newsreader',serif;font-size:30px;letter-spacing:-.01em;color:var(--cream)">${SITE.phone}</a>
          </div>
        </div>
        <div>
          <h4>Schädlinge</h4>
          <ul>${SITE.pests.map(p => `<li><a href="schaedlinge/${p.slug}.html">${p.name}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Leistungen</h4>
          <ul>${SITE.services.map(s => `<li><a href="${s.slug}.html">${s.name}</a></li>`).join('')}
          <li><a href="" data-link="kontakt">Kontaktformular</a></li></ul>
        </div>
        <div>
          <h4>Einsatzgebiet</h4>
          <div class="regions">
            <span>Karlsruhe</span><span>Ettlingen</span><span>Bruchsal</span><span>Pforzheim</span>
            <span>Heidelberg</span><span>Baden-Baden</span><span>Sinsheim</span><span>Bretten</span>
            <span>Landau</span><span>Hockenheim</span>
          </div>
        </div>
      </div>
      <div class="wrap bottom">
        <div class="copyright">© 2025 WZ Schädlingsbekämpfung · ${SITE.address}</div>
        <div class="legal">
          <a href="" data-link="impressum">Impressum</a>
          <a href="" data-link="datenschutz">Datenschutz</a>
          <a href="" data-link="kontakt">Kontakt</a>
        </div>
      </div>
    </footer>`;
  }

  // Build a route map for relative links from any depth
  function rewriteLinks(depth) {
    const prefix = depth === 0 ? '' : '../';
    document.querySelectorAll('[data-link]').forEach(a => {
      const k = a.dataset.link;
      const map = {
        home: prefix + 'index.html',
        kontakt: prefix + 'kontakt.html',
        ueber: prefix + 'ueber-uns.html',
        impressum: prefix + 'impressum.html',
        datenschutz: prefix + 'datenschutz.html',
      };
      if (map[k]) a.setAttribute('href', map[k]);
    });
    document.querySelectorAll('.nav-logo[data-home]').forEach(a => a.setAttribute('href', prefix + 'index.html'));
    // pest sub-links
    document.querySelectorAll('a[href^="schaedlinge/"]').forEach(a => {
      a.setAttribute('href', prefix + a.getAttribute('href'));
    });
    document.querySelectorAll('a[href$=".html"]:not([href*="/"])').forEach(a => {
      const h = a.getAttribute('href');
      if (h.startsWith('http')) return;
      // relative same-folder links — only rewrite if depth>0 AND not already rewritten
      if (depth > 0 && !h.startsWith(prefix) && !h.startsWith('/')) {
        // check if it's a service or top-level page
        const top = ['index.html','kontakt.html','ueber-uns.html','impressum.html','datenschutz.html','privat.html','gewerblich.html','ueberwachung.html'];
        if (top.includes(h)) a.setAttribute('href', prefix + h);
      }
    });
  }

  // Public: mount header+footer with active key + depth
  window.WZ_mount = function ({ active = '', depth = 0 } = {}) {
    const run = () => {
      document.body.insertAdjacentHTML('afterbegin', buildHeader(active));
      document.body.insertAdjacentHTML('beforeend', buildFooter());
      rewriteLinks(depth);
      initHeader();
      initReveal();
      initSmoothScroll();
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run, { once: true });
    } else {
      run();
    }
  };

  function initHeader() {
    const h = document.getElementById('siteHeader');
    const onScroll = () => h.classList.toggle('is-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const burger = document.getElementById('navBurger');
    const mm = document.getElementById('mobileMenu');
    if (burger) {
      burger.addEventListener('click', () => mm.classList.toggle('is-open'));
      mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('is-open')));
    }
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '-40px 0px -40px 0px' });
    els.forEach(e => io.observe(e));
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ---- Toast ----
  window.WZ_toast = function (msg) {
    let t = document.getElementById('wzToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'wzToast'; t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 2400);
  };
})();
