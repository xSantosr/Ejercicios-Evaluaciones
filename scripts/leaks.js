const fs=require('fs');global.window={};
const strip=h=>String(h).replace(/<[^>]+>/g,' ').replace(/&[a-z]+;|&#\d+;/g,' ')
  .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ');
let bad=0;
for(const g of ['2','3','4','5','6','7']){
  eval(fs.readFileSync('/home/claude/ejercicios-evaluaciones/grados/g'+g+'.js','utf8')
      .replace('window.GRADES=window.GRADES||{};','var GRADES={};'));
  GRADES[g].subjects.forEach(s=>s.units.forEach(u=>{
    const R=' '+strip(u.rules)+' ';
    const tok=t=>new RegExp('[^0-9a-z]'+String(t).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'[^0-9a-z]').test(R);
    u.ex.forEach((e,i)=>{
      const at=g+'º '+s.id+'.'+u.id+' #'+(i+1);
      if(e.t==='div' && tok(e.D)){ bad++; console.log('CASITA en las reglas: '+at+'  ('+e.D+' ÷ '+e.d+' = '+e.co+')'); }
      if(e.t==='col' && tok(e.res.trim())){ bad++; console.log('RESULTADO en las reglas: '+at+'  ('+e.n.join(e.op)+' = '+e.res.trim()+')'); }
      if(e.t==='frac' && e.ans.some(p=>R.includes(p[0]+'/'+p[1]))){ bad++; console.log('FRACCIÓN en las reglas: '+at); }
    });
  }));
}
console.log(bad? '\n'+bad+' filtraciones' : 'Sin filtraciones en las operaciones escritas');
