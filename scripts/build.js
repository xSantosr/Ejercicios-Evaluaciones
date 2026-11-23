/* Arma grados/gN.js, libros.js y config.js a partir de src/.  Uso: node scripts/build.js */
const fs = require('fs'), path = require('path');
const SRC = path.join(__dirname, '..', 'src') + '/';
const OUT = path.join(__dirname, '..') + '/';

const files = ['mate.js', 'lengua.js', 'lengua2.js', 'ing3.js', 'rules.js', 'mate3_extra.js',
               'g2_ing1.js', 'g2_mate.js', 'g4.js', 'g5.js', 'g6.js', 'g7.js', 'libros.js', 'cuentas.js', 'mental.js'];
const L = new Function(files.map(f => fs.readFileSync(SRC + f, 'utf8')).join('\n') +
  '\nreturn {MATE,LENGUA,LENGUA2,ING3,RULES,RULES_L2,MATE3_EXTRA,MATE3_RULES,G2_ING1,G2_MATE,G2_LENGUA,G4,G5,G6,G7,BOOKS,CUENTAS,MENTAL};')();
const ing2 = JSON.parse(fs.readFileSync(SRC + 'ing2.json', 'utf8'));
Object.assign(L.RULES, L.RULES_L2);
L.ING3[0].ex.forEach(e => { if (e.q === 'Cuidado con estos dos') delete e.h; });

const withRules = (sid, units) => units.map(u => {
  const r = L.RULES[sid + '.' + u.id];
  if (r === undefined) throw new Error('Falta la explicación de ' + sid + '.' + u.id);
  return Object.assign({}, u, { rules: r });
});
const ING2U = withRules('ing2', ing2), ING3U = withRules('ing3', L.ING3);
const RES = ING2U.filter(u => u.id === 'resumen'), ING2_BASE = ING2U.filter(u => u.id !== 'resumen');

const mate3 = withRules('mate', L.MATE);
mate3.splice(mate3.findIndex(u => u.id === 'msim'), 0, Object.assign({}, L.MATE3_EXTRA, { rules: L.MATE3_RULES }));
const len3 = withRules('lengua', L.LENGUA.concat(L.LENGUA2)).map(u => {
  if (['l1', 'l2', 'l3', 'lsim'].includes(u.id)) return Object.assign({}, u, { book: ['vida-de-perros'] });
  if (u.id === 'l7') return Object.assign({}, u, { book: ['secreto-de-familia', 'petit'] });
  return u;
});

/* ---- helpers de cuentas escritas ---- */
const dec = s => { const t = String(s).replace('.', ','); const i = t.indexOf(','); return i < 0 ? 0 : t.length - i - 1; };
const scale = (s, k) => Math.round(Number(String(s).replace(',', '.')) * Math.pow(10, k));
const unscale = (v, k) => {
  if (k === 0) return String(v);
  const s = String(v).padStart(k + 1, '0');
  return s.slice(0, s.length - k) + ',' + s.slice(s.length - k);
};
const gcd = (a, b) => b ? gcd(b, a % b) : a;

/* división escrita: la casita */
function expandDiv(e) {
  const ds = String(e.D).split('').map(Number), n = ds.length;
  if (e.D < e.d) throw new Error('Casita con cociente 0: ' + e.D + '÷' + e.d);
  let i = 0, cur = 0;
  while (i < n && cur < e.d) { cur = cur * 10 + ds[i]; i++; }
  let col = i - 1, q = '', rem = 0;
  const steps = [];
  for (;;) {
    const qd = Math.floor(cur / e.d), prod = qd * e.d;
    rem = cur - prod; q += String(qd);
    const st = { col, prod: String(prod), rem: String(rem) };
    if (i < n) st.next = String(ds[i]);
    steps.push(st);
    if (i >= n) break;
    cur = rem * 10 + ds[i]; i++; col++;
  }
  if (e.d * Number(q) + rem !== e.D) throw new Error('Casita mal calculada: ' + e.D + '÷' + e.d);
  const out = Object.assign({}, e, { w: n, co: q, r: String(rem) });
  if (e.steps) out.steps = steps; else delete out.steps;
  if (!out.q) out.q = e.D + ' ÷ ' + e.d;
  return out;
}

/* fracciones: resultado con denominador común y, si se puede, simplificado */
function expandFrac(e) {
  const f = e.f;
  let d = f[0][1];
  f.forEach(p => { d = d * p[1] / gcd(d, p[1]); });
  let n = f[0][0] * (d / f[0][1]);
  for (let i = 1; i < f.length; i++) {
    const t = f[i][0] * (d / f[i][1]);
    n = e.op === '+' ? n + t : n - t;
  }
  if (n < 0) throw new Error('Fracción negativa: ' + f.map(p => p.join('/')).join(e.op));
  const g = gcd(n, d) || 1;
  const ans = [[n, d]];
  if (g > 1) ans.push([n / g, d / g]);
  return Object.assign({}, e, { ans, q: e.q || ('¿Cuánto da?') });
}

/* expande las cuentas paradas: calcula resultado, ancho y productos parciales */
function expandCol(e) {
  if (e.t !== 'col') return e;
  const k = Math.max(...e.n.map(dec));                 /* decimales a usar */
  const iv = e.n.map(x => scale(x, k));
  let resv;
  if (e.op === '+') resv = iv.reduce((a, b) => a + b, 0);
  else if (e.op === '−') { if (e.n.length !== 2) throw new Error('La resta lleva dos números'); resv = iv[0] - iv[1]; }
  else { /* × : solo el primero puede llevar coma */
    if (dec(e.n[1])) throw new Error('No se multiplica por un decimal en columna: ' + e.n.join('×'));
    resv = scale(e.n[0], k) * Number(e.n[1]);
  }
  if (resv < 0) throw new Error('Cuenta con resultado negativo: ' + e.n.join(e.op));
  const res = unscale(resv, k);
  const rows = e.n.map((x, idx) => {
    const t = String(x).replace('.', ',');
    /* en la multiplicación, el multiplicador se escribe sin coma */
    if (k === 0 || (e.op === '×' && idx > 0)) return t;
    const i = t.indexOf(',');
    return i < 0 ? t + ',' + '0'.repeat(k) : t + '0'.repeat(k - (t.length - i - 1));
  });
  let parts = null;
  if (e.op === '×' && e.parts) {
    if (k) throw new Error('Productos parciales con coma: ' + e.n.join('×'));
    parts = String(e.n[1]).split('').reverse().map((d, i) => {
      if (d === '0') throw new Error('Producto parcial con 0: ' + e.n.join('×'));
      return { d: String(e.n[0] * Number(d)), s: i };
    });
  }
  const w = Math.max(...rows.map(x => x.length), res.length,
                     ...(parts ? parts.map(p => p.d.length + p.s) : [0]));
  if (w > 7) throw new Error('Cuenta demasiado ancha para el celular: ' + e.n.join(e.op));
  const out = Object.assign({}, e, { w, res: res.padStart(w, ' '), rows: rows.map(x => x.padStart(w, ' ')) });
  if (parts) out.parts = parts; else delete out.parts;
  if (!out.q) out.q = e.n.join(' ' + e.op + ' ');
  return out;
}

const C = { ing: ['#FF9F5A', '#FF7A8A'], mate: ['#3F8FE8', '#4FB9DB'], lengua: ['#3E9E5F', '#86C252'] };
const subj = (id, name, emo, tag, desc, units) =>
  ({ id, name, emo, tag, desc, c1: C[id.startsWith('ing') ? 'ing' : id][0], c2: C[id.startsWith('ing') ? 'ing' : id][1], units });

const GRADES = {
  '2': [subj('ing', 'Inglés', '🇬🇧', 'Prueba de inglés', 'Programas de 1º y 2º · Open Day Starter y Open Day 1', L.G2_ING1.concat(ING2_BASE, RES)),
        subj('mate', 'Matemática', '🔢', '', 'Cálculos, números hasta 100 y problemas', L.G2_MATE),
        subj('lengua', 'Lengua', '📖', '', 'Nombres, calendario, cuentos, rimas y listas', L.G2_LENGUA)],
  '3': [subj('ing2', 'Inglés', '🇬🇧', 'Prueba de inglés', 'Programas de 2º y 3º · Open Day 1 y Brighter Ideas 2', ING2_BASE.concat(ING3U, RES)),
        subj('mate', 'Matemática', '🔢', '', 'Números, series, cuentas y problemas', mate3),
        subj('lengua', 'Lengua', '📖', '', 'Lectura, escritura, poesía y ortografía', len3)],
  '4': [subj('ing', 'Inglés', '🇬🇧', 'Prueba de inglés', 'Programas de 3º y 4º · Brighter Ideas 2 y Metro Starter', ING3U.concat(L.G4.ing)),
        subj('mate', 'Matemática', '🔢', '', 'Números hasta 10.000, dobles, multiplicación y repartos', L.G4.mate),
        subj('lengua', 'Lengua', '📖', '', 'Irulana y el ogronte, clásicos, instructivos y puntuación', L.G4.lengua)],
  '5': [subj('ing', 'Inglés', '🇬🇧', 'Prueba de inglés', 'Programas de 4º y 5º · Metro Starter y Metro 1', L.G4.ing.concat(L.G5.ing)),
        subj('mate', 'Matemática', '🔢', '', 'Cálculo mental, división, fracciones y proporcionalidad', L.G5.mate),
        subj('lengua', 'Lengua', '📖', '', 'Leyendas, relatos de animales, Peter Pan y tildes', L.G5.lengua)],
  '6': [subj('ing', 'Inglés', '🇬🇧', 'Prueba de inglés', 'Programas de 5º y 6º · Metro 1 y Metro 2', L.G5.ing.concat(L.G6.ing)),
        subj('mate', 'Matemática', '🔢', '', 'Propiedades, múltiplos, fracciones, decimales y triángulos', L.G6.mate),
        subj('lengua', 'Lengua', '📖', '', 'Narrador, aventuras, humor y ortografía', L.G6.lengua)],
  '7': [subj('ing', 'Inglés', '🇬🇧', 'Prueba de inglés', 'Programas de 6º y 7º · Metro 2 y Metro 3', L.G6.ing.concat(L.G7.ing)),
        subj('mate', 'Matemática', '🔢', '', 'División, decimales, proporcionalidad y ángulos', L.G7.mate),
        subj('lengua', 'Lengua', '📖', '', 'Lo fantástico, mitos griegos, clásicos y gramática', L.G7.lengua)]
};

/* cuentas escritas: se pueden usar en cualquier módulo */
const expandWritten = x => x.t === 'div' ? expandDiv(x) : x.t === 'frac' ? expandFrac(x) : expandCol(x);
for (const g in GRADES) GRADES[g].forEach(s => s.units.forEach(u => { u.ex = u.ex.map(expandWritten); }));

for (const g in GRADES) {
  const m = GRADES[g].find(s => s.id === 'mate');
  if (!m) continue;
  const mods = Object.keys(L.CUENTAS).filter(k => k[0] === g).sort()
    .map(k => Object.assign({}, L.CUENTAS[k], { ex: L.CUENTAS[k].ex.map(expandWritten) }));
  if (L.MENTAL[g]) mods.unshift(L.MENTAL[g]);
  const i = m.units.findIndex(u => u.id === 'msim');
  m.units.splice(i < 0 ? m.units.length : i, 0, ...mods);
}

/* vínculos a las fichas de libros */
const bookById = Object.fromEntries(L.BOOKS.map(b => [b.id, b]));
for (const g in GRADES) GRADES[g].forEach(s => s.units.forEach(u => {
  if (u.book) u.books = u.book.map(id => {
    if (!bookById[id]) throw new Error('Libro inexistente: ' + id);
    return { id, title: bookById[id].title };
  });
  delete u.book;
}));

/* validaciones */
for (const g in GRADES) GRADES[g].forEach(s => {
  const ids = new Set(), names = new Set();
  s.units.forEach(u => {
    if (ids.has(u.id)) throw new Error('Módulo repetido en ' + g + 'º ' + s.id + ': ' + u.id);
    if (names.has(u.name)) throw new Error('Dos módulos con el mismo nombre en ' + g + 'º ' + s.id + ': ' + u.name);
    ids.add(u.id); names.add(u.name);
    if (!u.rules) throw new Error('Módulo sin explicación: ' + g + 'º ' + s.id + '.' + u.id);
    u.ex.forEach((e, i) => {
      const at = g + 'º ' + s.id + '.' + u.id + ' #' + (i + 1);
      if (e.t === 'choice' && !(e.a >= 0 && e.a < e.o.length)) throw new Error('Respuesta fuera de rango: ' + at);
      if (e.t === 'fill' && e.labels && e.labels.length !== e.a.length) throw new Error('Etiquetas y respuestas no coinciden: ' + at);
      if (e.t === 'order' && e.items.slice().sort().join('|') !== e.a.slice().sort().join('|')) throw new Error('Orden con elementos distintos: ' + at);
    });
  });
});

const VER = Date.now().toString(36);
fs.mkdirSync(OUT + 'grados', { recursive: true });
for (const g in GRADES)
  fs.writeFileSync(OUT + 'grados/g' + g + '.js',
    'window.GRADES=window.GRADES||{};GRADES["' + g + '"]={subjects:' + JSON.stringify(GRADES[g]) + '};\n');
fs.writeFileSync(OUT + 'libros.js', 'window.BOOKS=' + JSON.stringify(L.BOOKS) + ';\n');
fs.writeFileSync(OUT + 'config.js', 'window.EE_READY=' + JSON.stringify(Object.keys(GRADES)) + ';window.EE_VER="' + VER + '";\n');

let total = 0;
for (const g in GRADES) {
  const line = GRADES[g].map(s => { const n = s.units.reduce((a, u) => a + u.ex.length, 0); total += n; return s.name + ' ' + n; }).join(' · ');
  console.log('Para entrar a ' + g + 'º  ' + line);
}
console.log('Total: ' + total + ' ejercicios · ' + L.BOOKS.length + ' fichas de libros');
