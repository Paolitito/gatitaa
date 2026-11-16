/* Canela – Lern-App.
   Inhalt (Wörter, Szenen) kommt aus datos/, der Fortschritt liegt getrennt im Gerät.
   Ein Update tauscht nur den Inhalt und diesen Code aus; der Fortschritt bleibt. */
(function () {
  'use strict';
  const app = document.getElementById('app');
  const TEST = /[?&]prueba\b/.test(location.search);
  const KEY = TEST ? 'canela-prueba-v1' : 'canela-progreso-v1';
  const DOOR = 'canela-puerta-v1';
  const STEPS = [1, 3, 7, 14];          // Tage bis zur nächsten Wiederholung
  const NEW_PER_DAY = 5, MAX_REVIEWS = 20, XP_LEVEL = 400;
  const TYPE_ES = { Nomen: 'sustantivo', Verb: 'verbo', Adjektiv: 'adjetivo' };
  const TYPE_COL = { Nomen: '#4f9dff', Verb: '#f2453d', Adjektiv: '#9b6bff' };
  const BY = {}; WORDS.forEach((w, i) => { w.i = i; BY[w.w] = w; });

  /* ---------- Fortschritt ---------- */
  const fresh = () => ({ v: 1, xp: 0, streak: 0, lastDone: null, words: {}, today: null, hat: '', off: 0 });
  let P = load();
  function load() {
    try { const p = JSON.parse(localStorage.getItem(KEY)); if (p && p.v === 1 && p.words) return Object.assign(fresh(), p); } catch (e) { }
    return fresh();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { } }
  const pad = n => String(n).padStart(2, '0');
  function dayStr(add) {
    const d = new Date(); d.setDate(d.getDate() + (P.off || 0) + (add || 0));
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  const level = () => 1 + Math.floor(P.xp / XP_LEVEL);
  const streakNow = () => (P.lastDone === dayStr() || P.lastDone === dayStr(-1)) ? P.streak : 0;
  const learned = () => Object.keys(P.words).filter(k => P.words[k].n > 0 && BY[k]);

  /* Legt fest, was heute dran ist: fällige Wiederholungen und fünf neue Wörter.
     Verpasste Tage stapeln sich nicht: neue Wörter gibt es nur für den heutigen Tag. */
  function planToday() {
    const t = dayStr();
    if (!P.today || P.today.date !== t) {
      const due = Object.keys(P.words).filter(k => BY[k] && P.words[k].due && P.words[k].due <= t)
        .sort((a, b) => P.words[a].due < P.words[b].due ? -1 : 1).slice(0, MAX_REVIEWS);
      const neu = WORDS.filter(w => !P.words[w.w] && S[w.w]).slice(0, NEW_PER_DAY).map(w => w.w);
      P.today = { date: t, rev: due, neu: neu, done: {}, fin: false };
      save();
    }
    return P.today;
  }
  const left = td => td.rev.concat(td.neu).filter(k => !td.done[k]);

  function grade(k, right, isNew) {
    const t = dayStr();
    const r = P.words[k] || (P.words[k] = { box: 0, due: null, n: 0, bad: 0 });
    r.n++;
    if (isNew) { r.box = 0; r.due = dayStr(STEPS[0]); if (!right) r.bad++; }
    else if (right) { r.box = Math.min(r.box + 1, STEPS.length); r.due = r.box >= STEPS.length ? null : dayStr(STEPS[r.box]); }
    else { r.box = 0; r.bad++; r.due = dayStr(1); }
    if (P.today && P.today.date === t) P.today.done[k] = true;
    save();
  }
  function finishDay() {
    const td = P.today; if (!td || td.fin) return false;
    td.fin = true;
    P.streak = (P.lastDone === dayStr(-1)) ? P.streak + 1 : (P.lastDone === dayStr() ? P.streak : 1);
    P.lastDone = dayStr(); save(); return true;
  }

  /* ---------- kleine Helfer ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => s.trim().toLowerCase().replace(/[’`´]/g, "'").replace(/\s+/g, ' ');
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const scene = (k, cls) => `<svg class="scene ${cls || ''}" viewBox="0 0 200 200" role="img" aria-label="">${S[k] || ''}</svg>`;
  const sentHtml = w => w.s ? w.s.replace(/\{(.+?)\}/, (m, a) => '<b>' + esc(a) + '</b>') : '';
  const sentPlain = w => w.s ? w.s.replace(/[{}]/g, '') : '';
  const gapForm = w => { const m = w.s && /\{(.+?)\}/.exec(w.s); return m ? m[1] : null; };
  const badge = w => `<span class="badge" style="--k:${TYPE_COL[w.t] || '#2fc7a8'}">${TYPE_ES[w.t] || 'palabra'}</span>`;
  const SPK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="#fff"/><path d="M16 8.500a5 5 0 0 1 0 7M18.500 6a8.500 8.500 0 0 1 0 12" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>';
  let voice = null;
  function pickVoice() { try { const vs = speechSynthesis.getVoices(); voice = vs.find(v => v.lang === 'en-US') || vs.find(v => /^en/i.test(v.lang)) || null; } catch (e) { } }
  if ('speechSynthesis' in window) { pickVoice(); try { speechSynthesis.onvoiceschanged = pickVoice; } catch (e) { } }
  function say(text) {
    if (!('speechSynthesis' in window)) return;
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; if (voice) u.voice = voice; u.rate = .85; speechSynthesis.speak(u); } catch (e) { }
  }
  function toast(t) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 1300); }
  function addXp(n) { const before = level(); P.xp += n; save(); toast('+' + n + ' XP'); return level() > before; }
  function show(html) { app.innerHTML = (TEST ? testBar() : '') + html; window.scrollTo(0, 0); if (TEST) bindTest(); }
  const on = (sel, fn, ev) => { const e = app.querySelector(sel); if (e) e.addEventListener(ev || 'click', fn); return e; };

  /* ---------- Sammlung: Freunde nach Level, Accessoires nach Serie ---------- */
  const HATS = [
    { id: 'gorra', name: 'Gorra', days: 3, v: () => (typeof cap === 'string' ? cap : ''), nobow: true },
    { id: 'lentes', name: 'Lentes', days: 5, v: () => (typeof glasses === 'string' ? glasses : '') },
    { id: 'sombrero', name: 'Sombrero', days: 7, v: () => (typeof sombrero === 'string' ? sombrero : ''), nobow: true },
    { id: 'flores', name: 'Corona de flores', days: 14, v: () => (typeof crown === 'string' ? crown : ''), nobow: true },
    { id: 'boina', name: 'Boina', days: 21, v: () => (typeof barett === 'string' ? barett : ''), nobow: true },
    { id: 'birrete', name: 'Birrete', days: 30, v: () => (typeof doktorhut === 'string' ? doktorhut : ''), nobow: true }
  ];
  const FRIENDS = [
    { id: 'orange', name: 'Mango', lvl: 2 }, { id: 'grey', name: 'Nube', lvl: 4 },
    { id: 'cream', name: 'Vainilla', lvl: 7 }, { id: 'white', name: 'Coco', lvl: 10 }
  ];
  const best = () => Math.max(P.best || 0, P.streak || 0);
  const hatOpen = h => best() >= h.days;
  function canela(extra) {
    const h = HATS.find(x => x.id === P.hat && hatOpen(x));
    return cat(Object.assign({ eyes: 'happy', mouth: 'open', armR: -125, armRcls: 'wave', armsFront: true, hat: h ? h.v() : '', bow: !(h && h.nobow) }, extra || {}));
  }
  function homeScene() {
    const fr = FRIENDS.filter(f => level() >= f.lvl);
    const xs = [34, 166, 58, 142];
    return `<svg class="scene" viewBox="0 0 200 200" role="img" aria-label="Canela">${bg('#ffe9d6')}<circle cx="100" cy="104" r="80" fill="#ffdcc0"/>${floor(184, '#ffd9bd')}`
      + fr.map((f, i) => at(xs[i], 186 - (i > 1 ? 4 : 0), .44, K(f.id, { eyes: 'happy' }))).join('')
      + sh(100, 192, 38) + at(100, 190, 1.02, canela()) + `</svg>`;
  }

  /* ---------- Tür: Code entschlüsselt den Namen ---------- */
  async function unlock(code) {
    const D = window.PUERTA, b = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const km = await crypto.subtle.importKey('raw', new TextEncoder().encode(norm(code)), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b(D.s), iterations: D.n, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b(D.i) }, key, b(D.c));
    return JSON.parse(new TextDecoder().decode(pt));
  }
  function door() {
    let d = null; try { d = JSON.parse(localStorage.getItem(DOOR)); } catch (e) { }
    if (d && d.id === window.PUERTA.c.slice(0, 12)) return d;
    return null;
  }
  function lockScreen(msg) {
    show(`<div class="grow"></div>
      <svg class="scene small" viewBox="0 0 200 200" role="img" aria-label="Canela">${bg('#ffe9d6')}<circle cx="100" cy="104" r="80" fill="#ffdcc0"/>${floor(184, '#ffd9bd')}${sh(100, 192, 38)}${at(100, 190, 1.02, cat({ eyes: 'open', headCls: 'tilt', armR: -125, armRcls: 'wave', armsFront: true }))}</svg>
      <h1 class="center">Canela</h1>
      <p class="center soft">Escribe el código para entrar.</p>
      <form id="f"><input id="code" class="field" type="password" autocomplete="off" autocapitalize="off" aria-label="Código"></form>
      ${msg ? `<p class="note bad center">${msg}</p>` : ''}
      <button class="btn" id="go">Entrar</button><div class="grow"></div>`);
    const go = async ev => {
      if (ev) ev.preventDefault();
      const c = app.querySelector('#code').value; if (!c.trim()) return;
      try { const r = await unlock(c); localStorage.setItem(DOOR, JSON.stringify({ id: window.PUERTA.c.slice(0, 12), n: r.n })); home(); }
      catch (e) { lockScreen('Ese no es el código. Prueba otra vez.'); }
    };
    on('#f', go, 'submit'); on('#go', go);
  }

  /* ---------- Start ---------- */
  function home() {
    const d = door(); if (!d) return lockScreen();
    const td = planToday(), rest = left(td), nNew = td.neu.filter(k => !td.done[k]).length, nRev = td.rev.filter(k => !td.done[k]).length;
    const total = WORDS.filter(w => S[w.w]).length, known = learned().length, allDone = known >= total && !rest.length;
    const lv = level(), inLv = P.xp % XP_LEVEL;
    let main;
    if (rest.length) main = `<button class="btn" id="start">${Object.keys(td.done).length ? 'Seguir' : 'Empezar'}<small>${nNew ? nNew + (nNew === 1 ? ' palabra nueva' : ' palabras nuevas') : ''}${nNew && nRev ? ' · ' : ''}${nRev ? nRev + (nRev === 1 ? ' repaso' : ' repasos') : ''}</small></button>`;
    else main = `<p class="note good center">${allDone ? '¡Ya sabes todas las palabras!' : '¡Terminaste por hoy! Vuelve mañana.'}</p>`;
    show(`<h1>¡Hola, ${esc(d.n)}!</h1>
      ${homeScene()}
      <div class="stats">
        <div class="stat"><b>${streakNow()}</b><span>${streakNow() === 1 ? 'día seguido' : 'días seguidos'}</span></div>
        <div class="stat"><b>${known}</b><span>de ${total} palabras</span></div>
        <div class="stat"><b>${lv}</b><span>nivel</span></div>
      </div>
      <div><div class="bar"><i style="width:${Math.round(inLv / XP_LEVEL * 100)}%"></i></div><p class="soft center" style="font-size:.85rem;margin-top:4px">${inLv} de ${XP_LEVEL} XP para el nivel ${lv + 1}</p></div>
      ${main}
      <button class="btn sec" id="free" ${known < 3 ? 'disabled' : ''}>Ronda libre<small>${known < 3 ? 'Primero aprende unas palabras' : 'Practica palabras que ya viste'}</small></button>
      <div class="row"><button class="btn sec" id="col">Colección</button><button class="btn sec" id="bak">Copia</button></div>`);
    on('#start', () => runSession(buildDay(td), { day: true }));
    on('#free', () => runSession(shuffle(learned()).slice(0, 10).map(k => ({ t: 'type', k: k, free: true })), { free: true }));
    on('#col', collection); on('#bak', backup);
  }

  /* Reihenfolge einer Tageslektion: erst Wiederholungen tippen, dann neue Wörter
     kennenlernen, antippen und zum Schluss selbst tippen. */
  function buildDay(td) {
    const rev = td.rev.filter(k => !td.done[k]), neu = td.neu.filter(k => !td.done[k]);
    const q = rev.map(k => ({ t: 'type', k: k }));
    neu.forEach(k => { q.push({ t: 'intro', k: k }); q.push({ t: 'tapEn', k: k }); });
    shuffle(neu).forEach(k => q.push({ t: 'tapEs', k: k }));
    shuffle(neu).forEach(k => q.push({ t: 'type', k: k, neu: true }));
    return q;
  }
  function options(w, field) {
    const max = Math.max(...Object.keys(P.words).map(k => BY[k] ? BY[k].i : 0).concat((P.today ? P.today.neu : []).map(k => BY[k].i)), 14) + 5;
    let pool = WORDS.filter(x => x.i <= max && x.w !== w.w && S[x.w] && x[field] !== w[field]);
    const same = pool.filter(x => x.t === w.t); if (same.length >= 2) pool = same;
    const seen = {}, out = [];
    shuffle(pool).forEach(x => { if (out.length < 2 && !seen[x[field]]) { seen[x[field]] = 1; out.push(x); } });
    return shuffle(out.concat([w]));
  }

  function runSession(queue, mode) {
    let i = 0; const total0 = queue.length; let gained = 0, lvUp = false, firstTry = {};
    if (!queue.length) return home();
    const head = () => `<div class="top"><button class="x" id="quit" aria-label="Salir">×</button><div class="bar red"><i style="width:${Math.round(i / queue.length * 100)}%"></i></div></div>`;
    const xp = n => { gained += n; if (addXp(n)) lvUp = true; };
    const next = () => { i++; step(); };
    function bindQuit() { on('#quit', () => { try { speechSynthesis.cancel(); } catch (e) { } home(); }); }
    function step() {
      if (i >= queue.length) return done();
      const s = queue[i], w = BY[s.k];
      if (s.t === 'intro') return intro(w);
      if (s.t === 'tapEn' || s.t === 'tapEs') return tap(s, w);
      return type(s, w);
    }
    function intro(w) {
      if (!P.words[w.w]) { P.words[w.w] = { box: 0, due: dayStr(), n: 0, bad: 0 }; save(); }
      show(`${head()}<p class="task">Palabra nueva</p>${scene(w.w)}
        <div class="center">${badge(w)}</div>
        <div class="wordrow"><span class="word">${esc(w.w)}</span><button class="audio" id="au" aria-label="Escuchar">${SPK}</button></div>
        ${w.s ? `<p class="sent center">${sentHtml(w)}</p>` : ''}
        <button class="reveal" id="rev">Toca para ver en español</button>
        <div class="grow"></div><button class="btn" id="nx">Siguiente</button>`);
      bindQuit(); say(w.w);
      on('#au', () => say(w.s ? w.w + '. ' + sentPlain(w) : w.w));
      on('#rev', ev => { ev.currentTarget.outerHTML = `<div class="center"><p class="es">${esc(w.es)}</p>${w.ses ? `<p class="ses">${esc(w.ses)}</p>` : ''}</div>`; });
      on('#nx', next);
    }
    function tap(s, w) {
      const en = s.t === 'tapEn', f = en ? 'w' : 'es', opts = options(w, f);
      show(`${head()}<p class="task">${en ? '¿Qué palabra es?' : '¿Qué significa?'}</p>
        ${en ? scene(w.w, 'small') + `<p class="es center">${esc(w.es)}</p>` : `<div class="wordrow" style="margin:18px 0"><span class="word">${esc(w.w)}</span><button class="audio" id="au" aria-label="Escuchar">${SPK}</button></div>`}
        <div class="opts">${opts.map((o, n) => `<button class="opt" data-n="${n}">${esc(o[f])}</button>`).join('')}</div>
        <div class="grow"></div><div id="foot"></div>`);
      bindQuit(); if (!en) say(w.w); on('#au', () => say(w.w));
      let locked = false, wrong = false;
      app.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        if (locked) return;
        const o = opts[+b.dataset.n];
        if (o.w === w.w) {
          locked = true; b.classList.add('good'); say(w.w); if (!wrong) xp(3);
          app.querySelector('#foot').innerHTML = `<button class="btn ok" id="nx">Continuar</button>`; on('#nx', next);
        } else { wrong = true; b.classList.add('bad'); }
      }));
    }
    function type(s, w) {
      const gf = gapForm(w), useSent = gf && norm(gf) === norm(w.w);
      const hint = w.w.split('').map((c, n) => c === ' ' ? '  ' : (n === 0 ? c : '_')).join(' ');
      show(`${head()}<p class="task">Escribe en inglés</p>${scene(w.w, 'tiny')}
        <p class="es center">${esc(w.es)}</p>
        ${useSent ? `<p class="sent center">${esc(w.s).replace(/\{.+?\}/, '<b>____</b>')}</p><p class="ses center">${esc(w.ses)}</p>` : ''}
        <p class="hint" aria-hidden="true">${esc(hint)}</p>
        <form id="f"><input id="in" class="field" type="text" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="Escribe la palabra en inglés"></form>
        <div id="note"></div><div class="grow"></div><button class="btn" id="ok">Comprobar</button>`);
      bindQuit();
      const input = app.querySelector('#in'), note = app.querySelector('#note'), btn = app.querySelector('#ok');
      let state = 'ask', first = true;
      setTimeout(() => { try { input.focus({ preventScroll: true }); } catch (e) { } }, 50);
      const check = ev => {
        if (ev) ev.preventDefault();
        if (state === 'done') return next();
        const v = norm(input.value); if (!v) return;
        if (v === norm(w.w)) {
          state = 'done'; input.classList.remove('bad'); input.classList.add('good'); input.readOnly = true; say(w.w);
          if (first) { note.innerHTML = `<p class="note good">¡Muy bien!</p>`; xp(s.free ? 5 : 10); }
          else { note.innerHTML = `<p class="note good">¡Ahora sí!</p>`; xp(s.free ? 2 : 4); }
          if (!s.free && firstTry[w.w] === undefined) { firstTry[w.w] = first; grade(w.w, first, !!s.neu); }
          if (!first && !s.again) queue.push({ t: 'type', k: w.w, again: true, free: s.free, neu: s.neu });
          btn.textContent = 'Continuar'; btn.classList.add('ok');
        } else {
          first = false; input.classList.add('bad'); say(w.w);
          note.innerHTML = `<div class="note bad">Casi. Mira la palabra y escríbela otra vez:<div class="word">${esc(w.w)}</div></div>`;
          input.value = ''; setTimeout(() => { input.classList.remove('bad'); try { input.focus({ preventScroll: true }); } catch (e) { } }, 500);
        }
      };
      on('#f', check, 'submit'); on('#ok', check);
    }
    function done() {
      let streakMsg = '';
      if (mode.day && !left(P.today).length) { const before = best(); finishDay(); P.best = Math.max(before, P.streak); save(); streakMsg = `<p class="center es">Racha: ${P.streak} ${P.streak === 1 ? 'día' : 'días'}</p>`; }
      const newHat = HATS.find(h => h.days === P.streak && mode.day);
      show(`<div class="grow"></div>
        <svg class="scene small" viewBox="0 0 200 200" role="img" aria-label="Canela feliz">${bg('#fff3cf')}<circle cx="100" cy="104" r="80" fill="#ffe7a3"/>${burst(30, 40, RED, 0)}${burst(170, 40, VIO, .5)}${floor(184, '#ffe08a')}${sh(100, 192, 38)}${at(100, 190, 1.02, canela({ mouth: 'big', armL: 140, armR: -140, armRcls: '' }), 'hop')}</svg>
        <h1 class="center">¡Lo lograste!</h1>
        <p class="center es">+${gained} XP</p>${streakMsg}
        ${lvUp ? `<p class="note good center">¡Subiste al nivel ${level()}!</p>` : ''}
        ${newHat ? `<p class="note good center">Regalo nuevo en tu colección: ${newHat.name}</p>` : ''}
        <div class="grow"></div><button class="btn" id="h">Volver</button>`);
      on('#h', home);
    }
    step();
  }

  /* ---------- Sammlung ---------- */
  function collection() {
    const lv = level();
    const hat = h => { const open = hatOpen(h), onNow = P.hat === h.id;
      return `<div class="item ${open ? '' : 'locked'}"><svg viewBox="0 0 200 200" class="scene" aria-hidden="true">${bg('#ffe9d6')}${at(100, 196, 1.1, cat({ eyes: 'happy', hat: h.v(), bow: !h.nobow, tail: false }))}</svg><b>${h.name}</b>
        ${open ? `<button class="btn ${onNow ? 'sec' : ''}" data-hat="${h.id}">${onNow ? 'Quitar' : 'Usar'}</button>` : `<span>Racha de ${h.days} días</span>`}</div>`; };
    const fr = f => { const open = lv >= f.lvl;
      return `<div class="item ${open ? '' : 'locked'}"><svg viewBox="0 0 200 200" class="scene" aria-hidden="true">${bg('#e3fbf5')}${at(100, 196, 1.1, K(f.id, { eyes: 'happy', tail: false }))}</svg><b>${f.name}</b><span>${open ? 'Ya es tu amiga' : 'Nivel ' + f.lvl}</span></div>`; };
    show(`<div class="top"><button class="x" id="back" aria-label="Volver">×</button><h2>Colección</h2></div>
      <p class="soft">Amigas de Canela. Llegan cuando subes de nivel.</p><div class="items">${FRIENDS.map(fr).join('')}</div>
      <p class="soft">Regalos para Canela. Los ganas con tu racha.</p><div class="items">${HATS.map(hat).join('')}</div>`);
    on('#back', home);
    app.querySelectorAll('[data-hat]').forEach(b => b.addEventListener('click', () => { P.hat = P.hat === b.dataset.hat ? '' : b.dataset.hat; save(); collection(); }));
  }

  /* ---------- Sicherung ---------- */
  const enc = o => btoa(unescape(encodeURIComponent(JSON.stringify(o))));
  const dec = s => JSON.parse(decodeURIComponent(escape(atob(s.trim()))));
  function backup(msg) {
    show(`<div class="top"><button class="x" id="back" aria-label="Volver">×</button><h2>Copia de seguridad</h2></div>
      <p class="soft">Tu avance vive en este teléfono. Copia este texto y guárdalo, por ejemplo en un chat contigo misma.</p>
      <textarea class="field" id="out" readonly aria-label="Tu copia">${enc(P)}</textarea>
      <button class="btn" id="cp">Copiar</button>
      <p class="soft">¿Teléfono nuevo? Pega aquí tu copia.</p>
      <textarea class="field" id="inp" aria-label="Pegar una copia"></textarea>
      <button class="btn sec" id="rs">Restaurar</button>
      ${msg ? `<p class="note ${msg.ok ? 'good' : 'bad'} center">${msg.t}</p>` : ''}`);
    on('#back', home);
    on('#cp', async () => { const t = app.querySelector('#out'); t.select(); try { await navigator.clipboard.writeText(t.value); } catch (e) { try { document.execCommand('copy'); } catch (e2) { } } toast('Copiado'); });
    on('#rs', () => {
      try { const p = dec(app.querySelector('#inp').value); if (!p || p.v !== 1 || !p.words) throw 0; P = Object.assign(fresh(), p); if (!TEST) P.off = 0; save(); backup({ ok: true, t: 'Listo. Tu avance está de vuelta.' }); }
      catch (e) { backup({ ok: false, t: 'Ese texto no es una copia válida.' }); }
    });
  }

  /* ---------- Testmodus für Roberto: ?prueba ---------- */
  function testBar() { return `<div class="testbar"><span>Modo prueba · ${dayStr()}</span><button id="t1">+1 día</button><button id="t0">Reiniciar</button><button id="tf">Resolver</button></div>`; }
  function bindTest() {
    on('#t1', () => { P.off = (P.off || 0) + 1; save(); home(); });
    on('#t0', () => { P = fresh(); save(); home(); });
    on('#tf', () => { const td = planToday(); left(td).forEach(k => grade(k, true, td.neu.includes(k))); const b = best(); finishDay(); P.best = Math.max(b, P.streak); P.xp += 60; save(); home(); });
  }

  if (!window.crypto || !crypto.subtle) { app.innerHTML = '<p class="cargando">Abre esta página con https.</p>'; return; }
  home();
})();
