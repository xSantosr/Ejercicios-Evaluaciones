const fs=require('fs');
const path=require('path');
const B=path.join(__dirname,'..','src')+'/', OUT=path.join(__dirname,'..')+'/';
const files=['mate.js','lengua.js','lengua2.js','ing3.js','rules.js','mate3_extra.js','g2_ing1.js','g2_mate.js'];
const src=files.map(f=>fs.readFileSync(B+f,'utf8')).join('\n');
const L=new Function(src+'\nreturn {MATE,LENGUA,LENGUA2,ING3,RULES,RULES_L2,MATE3_EXTRA,MATE3_RULES,G2_ING1,G2_MATE,G2_LENGUA};')();
const ing2=JSON.parse(fs.readFileSync(B+'ing2.json','utf8'));
Object.assign(L.RULES,L.RULES_L2);
L.ING3[0].ex.forEach(e=>{ if(e.q==="Cuidado con estos dos") delete e.h; });

const withRules=(sid,units)=>units.map(u=>{
  const r=L.RULES[sid+'.'+u.id]; if(r===undefined) throw new Error('Falta regla '+sid+'.'+u.id);
  return Object.assign({},u,{rules:r});
});
const ING2U=withRules("ing2",ing2), ING3U=withRules("ing3",L.ING3);
const RES=ING2U.filter(u=>u.id==="resumen"), ING2_BASE=ING2U.filter(u=>u.id!=="resumen");

/* ---------- 3º ---------- */
const mate3=withRules("mate",L.MATE);
const iSim=mate3.findIndex(u=>u.id==="msim");
mate3.splice(iSim,0,Object.assign({},L.MATE3_EXTRA,{rules:L.MATE3_RULES}));
const G3=[
 {id:"ing2",name:"Inglés",emo:"🇬🇧",tag:"Prueba de inglés",desc:"Programas de 2º y 3º · Open Day 1 y Brighter Ideas 2",c1:"#FF9F5A",c2:"#FF7A8A",units:ING2_BASE.concat(ING3U,RES)},
 {id:"mate",name:"Matemática",emo:"🔢",tag:"Ingreso",desc:"Números, series, cuentas y problemas",c1:"#3F8FE8",c2:"#4FB9DB",units:mate3},
 {id:"lengua",name:"Lengua",emo:"📖",tag:"Ingreso",desc:"Lectura, escritura, poesía y ortografía",c1:"#3E9E5F",c2:"#86C252",units:withRules("lengua",L.LENGUA.concat(L.LENGUA2))}
];
/* ---------- 2º ---------- */
const G2=[
 {id:"ing",name:"Inglés",emo:"🇬🇧",tag:"Prueba de inglés",desc:"Programas de 1º y 2º · Open Day Starter y Open Day 1",c1:"#FF9F5A",c2:"#FF7A8A",units:L.G2_ING1.concat(ING2_BASE,RES)},
 {id:"mate",name:"Matemática",emo:"🔢",tag:"Ingreso",desc:"Cálculos, números hasta 100 y problemas",c1:"#3F8FE8",c2:"#4FB9DB",units:L.G2_MATE},
 {id:"lengua",name:"Lengua",emo:"📖",tag:"Ingreso",desc:"Nombres, calendario, cuentos, rimas y listas",c1:"#3E9E5F",c2:"#86C252",units:L.G2_LENGUA}
];

const VER=Date.now().toString(36);
fs.mkdirSync(OUT+'grados',{recursive:true});
const write=(g,subjects)=>fs.writeFileSync(OUT+'grados/g'+g+'.js','window.GRADES=window.GRADES||{};GRADES["'+g+'"]={subjects:'+JSON.stringify(subjects)+'};\n');
write("2",G2); write("3",G3);
fs.writeFileSync(OUT+'config.js','window.EE_READY=["2","3"];window.EE_VER="'+VER+'";\n');
if(fs.existsSync(OUT+'data.js')) fs.unlinkSync(OUT+'data.js');
[["2",G2],["3",G3]].forEach(([g,S])=>{
  console.log('Ingreso a '+g+'º');
  S.forEach(s=>{
    const ids=new Set(); s.units.forEach(u=>{ if(ids.has(u.id)) throw new Error('id repetido '+g+' '+s.id+'.'+u.id); ids.add(u.id); if(!u.rules) console.log('   sin reglas:',u.id); });
    console.log('   '+s.name.padEnd(11), String(s.units.length).padStart(2),'módulos', String(s.units.reduce((a,u)=>a+u.ex.length,0)).padStart(4),'ejercicios');
  });
});
