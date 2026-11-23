/* Cálculo mental: desde 5º reemplaza a las cuentas escritas */
const RULE_MENTAL = `
<div class="rsec"><h4>Pensar antes de calcular</h4>
<p class="exline">A partir de acá casi nunca hace falta escribir la cuenta: conviene <b>buscar un camino más corto</b>. Estas son las estrategias que más sirven.</p>
<div class="rrow"><span class="rl">Descomponer</span><span class="ra">7 × 14 = 7 × 10 + 7 × 4</span></div>
<div class="rrow"><span class="rl">Redondear y ajustar</span><span class="ra">+99 es +100 y después −1</span></div>
<div class="rrow"><span class="rl">Dobles y mitades</span><span class="ra">14 × 50 = 7 × 100</span></div>
<div class="rrow"><span class="rl">Apoyarse en uno conocido</span><span class="ra">si sabés × 10, sabés × 9 y × 11</span></div>
<div class="warn"><b>Antes de empezar, mirá los números.</b> Si hay un 5, un 25 o un 50, buscá el 100. Si hay un número cerca de uno redondo (99, 998, 0,99), redondeá y después ajustá.</div></div>
<div class="rsec"><h4>Estimar</h4>
<p class="exline">Estimar no es calcular mal: es saber <b>cerca de qué número</b> va a dar, para darte cuenta si el resultado tiene sentido. Redondeá los dos números a uno fácil y mirá el orden del resultado.</p></div>`;

const MENTAL = {
"5": {id:"mm",dot:"🧠",name:"Cálculo mental",title:"Cálculo mental",sub:"Estrategias para resolver sin escribir la cuenta",rules:RULE_MENTAL,ex:[
 {t:"fill",q:"Redondeá y ajustá",h:"Para +99, sumá 100 y restá 1",labels:["298 + 45","199 + 56","402 − 97"],a:["343","255","305"]},
 {t:"fill",q:"Dobles y mitades",h:"Si uno se duplica y el otro se parte al medio, el resultado no cambia",labels:["16 × 25","14 × 50"],a:["400","700"],why:"16 × 25 es lo mismo que 8 × 50, y eso es 4 × 100."},
 {t:"fill",q:"Calculá mentalmente",labels:["25 × 12","50 × 18","4 × 250"],a:["300","900","1000"]},
 {t:"fill",q:"Complementos: ¿cuánto falta para llegar?",labels:["1.000 − 349","1.000 − 725"],a:["651","275"]},
 {t:"choice",q:"¿Qué camino conviene para calcular <b>5 × 48</b>?",o:["5 × 50 − 5 × 2","5 × 40 + 8","48 + 5"],a:0,why:"48 está cerca de 50, que es más fácil. Después se descuenta lo que se agregó de más."},
 {t:"choice",q:"El cociente de <b>430 ÷ 7</b> está entre…",o:["60 y 70","6 y 7","600 y 700"],a:0,why:"7 × 60 = 420 y 7 × 70 = 490, así que el cociente cae entre 60 y 70."},
 {t:"fill",q:"Si <b>36 × 25 = 900</b>, ¿cuánto es <b>36 × 26</b>?",labels:[""],a:["936"],why:"Es un grupo de 36 más: 900 + 36."},
 {t:"choice",q:"Para estimar <b>612 ÷ 29</b>, conviene pensar…",o:["600 ÷ 30","600 ÷ 3","60 ÷ 30"],a:0},
 {t:"fill",q:"Calculá",labels:["1/2 de 460","1/4 de 800"],a:["230","200"]}
]},
"6": {id:"mm",dot:"🧠",name:"Cálculo mental",title:"Cálculo mental",sub:"Apoyarse en las propiedades y estimar",rules:RULE_MENTAL,ex:[
 {t:"fill",q:"Usá las propiedades",h:"Buscá el camino que te dé números redondos",labels:["12 × 15","18 × 50","24 × 125"],a:["180","900","3000"],why:"24 × 125 sale fácil pensando 24 × 1.000 ÷ 8, o 3 × 1.000."},
 {t:"fill",q:"Dividí mentalmente",labels:["4.800 ÷ 8","3.600 ÷ 40","7.200 ÷ 900"],a:["600","90","8"]},
 {t:"fill",q:"Complementos",labels:["10.000 − 2.750"],a:["7250"]},
 {t:"choice",q:"¿Cuál es igual a <b>99 × 7</b>?",o:["100 × 7 − 7","100 × 7 + 7","99 + 7"],a:0},
 {t:"fill",q:"Si <b>48 × 20 = 960</b>, ¿cuánto es <b>48 × 19</b>?",labels:[""],a:["912"],why:"Es un grupo de 48 menos: 960 − 48."},
 {t:"choice",q:"Estimá <b>7.950 ÷ 39</b>",o:["cerca de 200","cerca de 20","cerca de 2.000"],a:0,why:"Redondeando: 8.000 ÷ 40 = 200."},
 {t:"fill",q:"Calculá",labels:["1/2 de 460","3/4 de 200","1/10 de 850"],a:["230","150","85"]},
 {t:"choice",q:"Sin hacer la cuenta: <b>0,5 × 80</b> es igual a…",o:["la mitad de 80","el doble de 80","80 más 0,5"],a:0},
 {t:"fill",q:"Calculá con precios",labels:["$2,50 × 4","$0,25 × 8"],a:["re:^\\s*\\$?\\s*10([,.]0+)?\\s*$","re:^\\s*\\$?\\s*2([,.]0+)?\\s*$"]}
]},
"7": {id:"mm",dot:"🧠",name:"Cálculo mental",title:"Cálculo mental",sub:"Las cuatro operaciones, con decimales y estimación",rules:RULE_MENTAL,ex:[
 {t:"fill",q:"Multiplicá y dividí por la unidad seguida de ceros",labels:["3,6 × 100","450 ÷ 1.000","0,07 × 10"],a:["360","re:^\\s*0[,.]450?\\s*$","re:^\\s*0[,.]70?\\s*$"]},
 {t:"fill",q:"Calculá mentalmente",labels:["25 × 32","125 × 8","15 × 40"],a:["800","1000","600"]},
 {t:"fill",q:"Complementos",labels:["100 − 37,5","1 − 0,25"],a:["re:^\\s*62[,.]5\\s*$","re:^\\s*0[,.]75\\s*$"]},
 {t:"choice",q:"¿Qué camino conviene para <b>998 × 5</b>?",o:["1.000 × 5 − 2 × 5","1.000 × 5 + 10","998 + 5"],a:0},
 {t:"fill",q:"Si <b>72 × 50 = 3.600</b>, ¿cuánto es <b>72 × 49</b>?",labels:[""],a:["3528"],why:"Es un grupo de 72 menos: 3.600 − 72."},
 {t:"choice",q:"Estimá <b>12.300 ÷ 61</b>",o:["cerca de 200","cerca de 2.000","cerca de 20"],a:0,why:"Redondeando: 12.000 ÷ 60 = 200."},
 {t:"fill",q:"Calculá",labels:["0,25 × 40","1,5 × 6","0,1 × 250"],a:["10","9","25"]},
 {t:"choice",q:"El resultado de <b>4,8 ÷ 0,1</b> es…",o:["48","0,48","4,8"],a:0,why:"Dividir por 0,1 es lo mismo que multiplicar por 10: entra 10 veces en cada unidad."},
 {t:"fill",q:"Calculá con precios",labels:["$12,50 × 8","$0,75 × 4"],a:["re:^\\s*\\$?\\s*100([,.]0+)?\\s*$","re:^\\s*\\$?\\s*3([,.]0+)?\\s*$"]}
]}
};
