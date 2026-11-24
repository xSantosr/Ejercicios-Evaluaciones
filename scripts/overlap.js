/* Aviso: busca respuestas que aparezcan textuales en la guía del módulo.
   No marca dos casos que son legítimos:
     · módulos de comprensión lectora, donde el texto debe estar y encontrar
       la respuesta en él es justamente la destreza que se evalúa;
     · guías que nombran el concepto que enseñan («narrador omnisciente»,
       «propiedad distributiva») cuando el ejercicio pide clasificar un caso
       distinto del que usa el ejemplo.
   Lo que sí busca: un ejemplo resuelto en la guía que sea el mismo ejercicio.
   Informa y no corta el build; lo que liste hay que mirarlo a mano. */
const fs=require('fs'),path=require('path');
const R=path.join(__dirname,'..');
global.window={};
const strip=h=>String(h).replace(/<[^>]+>/g,' ').replace(/&[a-z]+;|&#\d+;/g,' ')
  .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
  .replace(/[.,;:!?¡¿"'`´()\-_]/g,' ').replace(/\s+/g,' ').trim();

let malos=0,revisados=0;
for(const g of ['2','3','4','5','6','7']){
  const f=path.join(R,'grados','g'+g+'.js');
  if(!fs.existsSync(f)) continue;
  eval(fs.readFileSync(f,'utf8').replace('window.GRADES=window.GRADES||{};','var GRADES={};'));
  GRADES[g].subjects.forEach(s=>s.units.forEach(u=>{
    const crudo=[u.rules||'',...(u.tips||[])].join(' ');
    if(/texto para leer/i.test(crudo)) return;   // comprensión lectora
    const guia=' '+strip(crudo)+' ';
    if(guia.trim().length<2) return;
    u.ex.forEach((ex,i)=>{
      let resp=[];
      if(ex.t==='choice') resp=[ex.o[ex.a]];
      else if(ex.t==='fill'||ex.t==='spell') resp=[ex.a];
      else if(ex.t==='order') resp=[(ex.a||ex.w||[]).join(' ')];
      else if(ex.t==='match') resp=(ex.p||[]).map(p=>p.join(' '));
      else return;
      resp.filter(Boolean).forEach(r=>{
        const n=strip(r);
        /* una palabra corta suelta es inevitable; buscamos frases copiables */
        if(n.split(' ').length<3 && n.length<9) return;
        revisados++;
        /* ¿la guía trae también lo propio del enunciado, o solo el concepto? */
        const pal=strip(String(ex.q).replace(/<[^>]+>/g,' ')).split(' ')
          .filter(w=>w.length>4 && !/^(texto|palabra|ejerc|cuento|oracion|respuesta|siguiente|segun|cual|donde|porque|usando|parte)/.test(w));
        const k=guia.indexOf(' '+n+' ');
        const cerca=k<0?'':guia.slice(Math.max(0,k-90),k+n.length+90);
        if(k>=0 && pal.some(w=>cerca.includes(w))){
          console.log('⚠ '+g+'º '+s.name+' · '+u.name+' · ej '+(i+1)+': la guía contiene «'+r+'»');
          malos++;
        }
      });
    });
  }));
}
console.log(malos? malos+' para revisar a mano ('+revisados+' respuestas revisadas)'
                 : 'Ninguna guía repite el ejercicio que evalúa ('+revisados+' respuestas revisadas)');
