/* Arma grados/gN.js, libros.js y config.js a partir de src/.  Uso: node scripts/build.js */
const fs = require('fs'), path = require('path');
const SRC = path.join(__dirname, '..', 'src') + '/';
const OUT = path.join(__dirname, '..') + '/';

const files = ['mate.js', 'lengua.js', 'lengua2.js', 'ing3.js', 'rules.js', 'mate3_extra.js',
               'g2_ing1.js', 'g2_mate.js', 'g4.js', 'g5.js', 'g6.js', 'g7.js', 'libros.js', 'cuentas.js'];
const L = new Function(files.map(f => fs.readFileSync(SRC + f, 'utf8')).join('\n') +
  '\nreturn {MATE,LENGUA,LENGUA2,ING3,RULES,RULES_L2,MATE3_EXTRA,MATE3_RULES,G2_ING1,G2_MATE,G2_LENGUA,G4,G5,G6,G7,BOOKS,CUENTAS};')();
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

/* expande las cuentas paradas: calcula resultado, ancho y productos parciales */
function expandCol(e) {
  if (e.t !== 'col') return e;
  const res = e.op === '+' ? e.n.reduce((a, b) => a + b, 0)
            : e.op === '−' ? e.n[0] - e.n[1]
            : e.n[0] * e.n[1];
  if (res < 0) throw new Error('Cuenta con resultado negativo: ' + e.n.join(e.op));
  if (e.op === '−' && e.n.length !== 2) throw new Error('La resta lleva dos números');
  let parts = null;
  if (e.op === '×' && e.parts) {
    parts = String(e.n[1]).split('').reverse().map((d, i) => {
      if (d === '0') throw new Error('Producto parcial con 0: ' + e.n.join('×'));
      return { d: String(e.n[0] * Number(d)), s: i };
    });
  }
  const w = Math.max(...e.n.map(x => String(x).length), String(res).length,
                     ...(parts ? parts.map(p => p.d.length + p.s) : [0]));
  if (w > 6) throw new Error('Cuenta demasiado ancha para el celular: ' + e.n.join(e.op));
  const out = Object.assign({}, e, { w, res: String(res) });
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

/* cuentas paradas: un módulo por grado, antes del simulacro */
for (const g in GRADES) {
  const m = GRADES[g].find(s => s.id === 'mate');
  const mod = L.CUENTAS[g];
  if (!m || !mod) continue;
  const i = m.units.findIndex(u => u.id === 'msim');
  m.units.splice(i < 0 ? m.units.length : i, 0,
    Object.assign({}, mod, { ex: mod.ex.map(expandCol) }));
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
  const ids = new Set();
  s.units.forEach(u => {
    if (ids.has(u.id)) throw new Error('Módulo repetido en ' + g + 'º ' + s.id + ': ' + u.id);
    ids.add(u.id);
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
