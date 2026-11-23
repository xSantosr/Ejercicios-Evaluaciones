const MATE = [
{id:"m1",dot:"🔢",name:"Día 1",title:"Día 1 · Números y valor posicional",sub:"Leer, escribir, descomponer y comparar",
rules:`
<div class="rsec"><h4>Valor posicional</h4>
<p class="exline">En <b>352</b> cada cifra vale distinto según el lugar que ocupa:</p>
<div class="rrow"><span class="rl">el 3 está en las <b>centenas</b></span><span class="ra">vale 300</span></div>
<div class="rrow"><span class="rl">el 5 está en las <b>decenas</b></span><span class="ra">vale 50</span></div>
<div class="rrow"><span class="rl">el 2 está en las <b>unidades</b></span><span class="ra">vale 2</span></div>
<p class="exline">Por eso <b>352 = 300 + 50 + 2</b>. Eso es "descomponer".</p></div>
<div class="rsec"><h4>Comparar: &lt; y &gt;</h4>
<div class="warn">La boca del signo <b>siempre se abre hacia el número más grande</b>.<br>
345 <b>&lt;</b> 354 &nbsp;(la boca mira a 354, que es mayor)<br>
809 <b>&gt;</b> 790 &nbsp;(la boca mira a 809)<br><br>
<b>Truco:</b> primero compará cuántas cifras tiene cada uno. Si tienen la misma cantidad, mirá la primera cifra de la izquierda.</div></div>`,
ex:[
 {t:"fill",q:"Escribí con palabras",labels:["126","408","735","1.204"],a:["ciento veintiseis","cuatrocientos ocho","setecientos treinta y cinco","mil doscientos cuatro"]},
 {t:"fill",q:"Escribí el número en cifras",labels:["Doscientos treinta y cinco","Seiscientos ocho","Mil trescientos veinte","Novecientos noventa y nueve"],a:["235","608","1320","999"]},
 {t:"fill",q:"Descomponé el número",viz:{k:"base10",c:1,d:2,u:6},h:"El dibujo muestra 126. Ejemplo: 426 = 400 + 20 + 6",labels:["583 =","709 =","1.346 =","2.080 ="],a:["500+80+3","700+9","1000+300+40+6","2000+80"],why:"Ojo con el 709: no hay decenas, así que va 700 + 9."},
 {t:"choice",q:"345 ___ 354",o:["&lt;","&gt;","="],a:0},
 {t:"choice",q:"809 ___ 790",o:["&lt;","&gt;","="],a:1},
 {t:"choice",q:"1.205 ___ 1.250",o:["&lt;","&gt;","="],a:0},
 {t:"choice",q:"999 ___ 1.000",o:["&lt;","&gt;","="],a:0,why:"999 tiene 3 cifras y 1.000 tiene 4. El que tiene más cifras es mayor."},
 {t:"choice",q:"632 ___ 632",o:["&lt;","&gt;","="],a:2},
 {t:"order",q:"Ordená de menor a mayor",h:"Tocá los números en orden, del más chico al más grande",items:["508","85","580","805","358"],a:["85","358","508","580","805"]}
]},

{id:"m2",dot:"📈",name:"Día 2",title:"Día 2 · Series y relaciones",sub:"Regularidades, anterior y siguiente, 100 más y 100 menos",
rules:`
<div class="rsec"><h4>¿Qué es una regularidad?</h4>
<p class="exline">Es algo que se repite siguiendo una regla. Para descubrirla, mirá <b>cuánto cambia de un número al siguiente</b>.</p>
<div class="rrow"><span class="rl">10 – 20 – 30 – 40</span><span class="ra">+10 cada vez</span></div>
<div class="rrow"><span class="rl">450 – 400 – 350</span><span class="ra">−50 cada vez</span></div>
<p class="exline">Si los números <b>suben</b>, se suma. Si <b>bajan</b>, se resta.</p></div>
<div class="rsec"><h4>Sumar o restar 100 y 1.000</h4>
<div class="warn">Solo cambia <b>una cifra</b>:<br>
100 más que <b>3</b>25 &rarr; <b>4</b>25 &nbsp;(cambia la centena)<br>
1.000 más que <b>2</b>.315 &rarr; <b>3</b>.315 &nbsp;(cambia el mil)<br><br>
<b>Excepción:</b> cuando hay que "pasarse", cambian más cifras. Uno menos que 700 es 699, no 609.</div></div>`,
ex:[
 {t:"fill",q:"Completá la serie: 120 – 130 – 140 – ...",viz:{k:"numline",from:120,to:170,step:10,marks:[120,130,140],q:150},labels:["","",""],a:["150","160","170"],why:"Va de 10 en 10."},
 {t:"fill",q:"Completá la serie: 450 – 400 – 350 – ...",labels:["",""],a:["300","250"],why:"Esta BAJA de 50 en 50."},
 {t:"fill",q:"Completá la serie: 205 – 210 – 215 – ...",labels:["",""],a:["220","225"],why:"Va de 5 en 5."},
 {t:"fill",q:"Completá la serie: 1.000 – 2.000 – 3.000 – ...",labels:["",""],a:["4000","5000"],why:"Va de 1.000 en 1.000."},
 {t:"fill",q:"Escribí el número que corresponde",labels:["Uno más que 459","Uno menos que 700","100 más que 325","100 menos que 840","1.000 más que 2.315","1.000 menos que 4.600"],a:["460","699","425","740","3315","3600"]},
 {t:"fill",q:"¿Qué número está justo en el medio?",viz:{k:"numline",from:346,to:352,marks:[348,350],q:349},labels:["Entre 348 y 350","Entre 1.199 y 1.201","Entre 699 y 701"],a:["349","1200","700"]},
 {t:"fill",q:"Escribí dos números entre 620 y 630",labels:["",""],a:["re:^62[1-9]$","re:^62[1-9]$"],why:"Cualquiera del 621 al 629 sirve."},
 {t:"fill",q:"Descubrí la regla y continuá: 7 – 14 – 21 – 28 – ...",labels:["",""],a:["35","42"],why:"Va de 7 en 7. Es la tabla del 7."}
]},

{id:"m3",dot:"➕",name:"Día 3",title:"Día 3 · Sumas y restas",sub:"Cálculo mental, cuentas paradas y descomposición",
rules:`
<div class="rsec"><h4>Tres formas de resolver</h4>
<div class="rrow"><span class="rl">Mentalmente</span><span class="ra">230 + 40 = 270</span></div>
<div class="rrow"><span class="rl">Por descomposición</span><span class="ra">34+25 = (30+20)+(4+5)</span></div>
<div class="rrow"><span class="rl">Con la cuenta parada</span><span class="ra">una cifra debajo de la otra</span></div>
<p class="exline">Las tres valen. Eleg&iacute; la que te salga más rápido y después <b>revisá</b>.</p></div>
<div class="rsec"><h4>Cuando hay que pedir prestado</h4>
<div class="warn">En <b>704 − 356</b> no se puede hacer 4 − 6. Hay que <b>pedirle</b> a la cifra de al lado.<br>
<b>Forma de controlar:</b> si la resta dio bien, sumando el resultado con el número que restaste tiene que volver a dar el primero.<br>
348 + 356 = 704 &nbsp;&#10003;</div></div>`,
ex:[
 {t:"fill",q:"Calculá mentalmente",labels:["230 + 40","125 + 30","300 − 70","86 − 20","145 + 55","420 − 120"],a:["270","155","230","66","200","300"]},
 {t:"fill",q:"Resolvé las cuentas",h:"Podés hacerlas en papel y escribir acá el resultado",labels:["247 + 136","358 + 275","562 − 238","704 − 356"],a:["383","633","324","348"]},
 {t:"fill",q:"Resolvé por descomposición",h:"Ejemplo: 34 + 25 = (30 + 20) + (4 + 5) = 50 + 9 = 59",labels:["42 + 36","76 − 24"],a:["78","52"]},
 {t:"open",q:"Inventá una suma cuyo resultado sea 100",model:"Hay muchísimas respuestas correctas: 60 + 40, 75 + 25, 99 + 1, 50 + 50. Lo importante es que al sumar dé exactamente 100."}
]},

{id:"m4",dot:"🧩",name:"Día 4",title:"Día 4 · Problemas",sub:"Entender qué pasa antes de elegir la cuenta",
rules:`
<div class="rsec"><h4>Primero pensá qué está pasando</h4>
<p class="exline">No busques la cuenta de entrada. Preguntate qué ocurre en el problema:</p>
<div class="rrow"><span class="rl">se agrega, se junta, se avanza</span><span class="ra">SUMA</span></div>
<div class="rrow"><span class="rl">se quita, se separa, se retrocede</span><span class="ra">RESTA</span></div>
<div class="rrow"><span class="rl">se comparan: ¿cuántos más?</span><span class="ra">RESTA</span></div>
<div class="warn"><b>La trampa más común:</b> "¿cuántas cartas MÁS tiene Tomás?" tiene la palabra <b>más</b>, pero se resuelve <b>restando</b>. La palabra suelta no decide: decide lo que pasa en la historia.</div></div>`,
ex:[
 {t:"fill",e:"📚",q:"En la biblioteca había <b>238</b> libros y llegaron <b>125</b> nuevos. ¿Cuántos libros hay ahora?",labels:["Respuesta"],a:["363"],why:"Llegan más libros, así que se juntan: 238 + 125 = 363."},
 {t:"fill",e:"🃏",q:"Martina tenía <b>350</b> figuritas y regaló <b>127</b>. ¿Cuántas le quedaron?",labels:["Respuesta"],a:["223"],why:"Regalar es quitar: 350 − 127 = 223."},
 {t:"fill",e:"🚌",q:"Un colectivo está en la parada <b>145</b> y avanza <b>28</b> paradas. ¿A qué parada llega?",labels:["Respuesta"],a:["173"],why:"Avanzar es sumar: 145 + 28 = 173."},
 {t:"choice",q:"Tomás tiene <b>186</b> cartas y Julia tiene <b>149</b>. ¿Cuántas cartas MÁS tiene Tomás?",h:"¿Qué cuenta hay que hacer?",o:["Sumar","Restar"],a:1,why:"Aunque diga «más», se comparan dos cantidades. Eso se resuelve restando."},
 {t:"fill",q:"Entonces, ¿cuántas cartas más tiene Tomás?",labels:["Respuesta"],a:["37"],why:"186 − 149 = 37 cartas."},
 {t:"fill",e:"🎮",q:"Sofi tenía <b>420</b> puntos y retrocedió <b>65</b>. ¿Con cuántos puntos queda?",labels:["Respuesta"],a:["355"],why:"Retroceder es restar: 420 − 65 = 355."}
]},

{id:"m5",dot:"✖️",name:"Día 5",title:"Día 5 · Suma repetida y reparto",sub:"La puerta de entrada a la multiplicación y la división",
rules:`
<div class="rsec"><h4>Suma repetida</h4>
<p class="exline">Cuando la <b>misma cantidad se repite</b>, podemos sumarla varias veces.</p>
<div class="rrow"><span class="rl">4 grupos de 3</span><span class="ra">3 + 3 + 3 + 3 = 12</span></div>
<div class="warn"><b>&#9888; Ojo al orden:</b> "3 platos con 4 galletitas" es <b>4 + 4 + 4</b> (tres veces el cuatro), no 3 + 3 + 3 + 3.<br>
El primer número dice <b>cuántos grupos</b>; el segundo, <b>cuánto hay en cada grupo</b>. Lo que se repite es el segundo.</div></div>
<div class="rsec"><h4>Repartir en partes iguales</h4>
<p class="exline">Repartir es lo contrario: todos reciben <b>la misma cantidad</b>.</p>
<div class="rrow"><span class="rl">12 lápices entre 3 chicos</span><span class="ra">4 cada uno</span></div>
<p class="exline">A veces <b>sobra</b>: 14 caramelos entre 4 chicos &rarr; 3 cada uno y sobran 2. Ese resto no se puede repartir sin partir un caramelo.</p></div>`,
ex:[
 {t:"fill",q:"3 platos con 4 galletitas en cada uno",viz:{k:"groups",g:3,per:4},labels:["Suma repetida","Total"],a:["4+4+4","12"],why:"Se repite el 4, tres veces."},
 {t:"fill",q:"5 bolsas con 2 naranjas en cada una",viz:{k:"groups",g:5,per:2},labels:["Suma repetida","Total"],a:["2+2+2+2+2","10"],why:"Se repite el 2, cinco veces."},
 {t:"fill",q:"Escribí la suma repetida y el total: <b>4 veces 5</b>",labels:["Suma","Total"],a:["5+5+5+5","20"]},
 {t:"fill",q:"Escribí la suma repetida y el total: <b>3 veces 6</b>",labels:["Suma","Total"],a:["6+6+6","18"]},
 {t:"fill",q:"Repartí en partes iguales. ¿Cuántos recibe cada uno?",labels:["12 lápices entre 3 chicos","20 galletitas entre 5 chicos"],a:["4","4"]},
 {t:"fill",q:"14 caramelos entre 4 chicos",viz:{k:"groups",g:4,per:3,left:2},labels:["Recibe cada uno","Sobran"],a:["3","2"],why:"3 para cada uno son 12, y quedan 2 sueltos."},
 {t:"open",q:"Explicá con tus palabras: ¿qué significa repartir en partes iguales?",model:"Lo que se espera: que diga que TODOS reciben la misma cantidad, que a nadie le toca más ni menos. Si lo explica con un ejemplo propio, mejor todavía."}
]},

{id:"msim",dot:"📝",name:"Simulacro",title:"Simulacro de examen",sub:"Sin mirar los ejemplos · 35 a 40 minutos",
rules:`
<div class="rsec"><h4>Antes de empezar</h4>
<p class="exline">Le&eacute; <b>todo</b> el examen antes de escribir la primera respuesta. Resolv&eacute; primero lo que te sale seguro y dej&aacute; para el final lo que te cuesta.</p>
<div class="warn"><b>Al terminar, revis&aacute;:</b> &iquest;contestaste <b>todas</b> las consignas? &iquest;Las cuentas est&aacute;n bien copiadas? En los problemas, &iquest;la respuesta tiene sentido? (Si Martina regal&oacute; figuritas, le tienen que quedar <b>menos</b> de las que ten&iacute;a.)</div></div>`,
ex:[
 {t:"order",q:"1. Ordená de menor a mayor",items:["705","570","75","750","507"],a:["75","507","570","705","750"]},
 {t:"fill",q:"2. Descomponé",labels:["684 =","1.307 ="],a:["600+80+4","1000+300+7"]},
 {t:"fill",q:"3. Completá",labels:["100 más que 456","100 menos que 823","1.000 más que 2.145","Uno menos que 1.000"],a:["556","723","3145","999"]},
 {t:"fill",q:"4. Resolvé",labels:["268 + 157","603 − 278"],a:["425","325"]},
 {t:"fill",q:"5. En una escuela juntaron <b>175</b> tapitas el lunes y <b>148</b> el martes. ¿Cuántas juntaron en total?",labels:["Respuesta"],a:["323"],why:"175 + 148 = 323 tapitas."},
 {t:"fill",q:"6. En una caja había <b>320</b> lápices. Se repartieron <b>85</b>. ¿Cuántos quedaron?",labels:["Respuesta"],a:["235"],why:"320 − 85 = 235 lápices."},
 {t:"fill",q:"7. Hay <b>4 paquetes</b> con <b>5 figuritas</b> cada uno. ¿Cuántas figuritas hay?",labels:["Suma repetida","Total"],a:["5+5+5+5","20"]},
 {t:"fill",q:"8. Se reparten <b>18 marcadores</b> entre <b>3 equipos</b> en partes iguales. ¿Cuántos recibe cada equipo?",labels:["Respuesta"],a:["6"]},
 {t:"fill",q:"9. Completá la serie: 250 – 300 – 350 – ...",labels:["",""],a:["400","450"]},
 {t:"fill",q:"10. Escribí un número entre 1.498 y 1.500",labels:[""],a:["1499"]}
]}
];
