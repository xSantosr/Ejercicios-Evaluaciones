/* ================= INGRESO A 4º ================= */
const G4 = {
ing:[
{id:"f1",dot:"🗓️",name:"Present simple",title:"Present simple: rutinas",sub:"I / you / we / they · don't · Do…? · Wh- questions",
rules:`
<div class="rsec"><h4>Lo que hacemos siempre</h4>
<p class="exline">Con <b>I, you, we, they</b> el verbo va tal cual: <b>We watch TV at night.</b></p>
<div class="rrow"><span class="rl">negativo</span><span class="ra">don't + verbo</span></div>
<div class="rrow"><span class="rl">pregunta</span><span class="ra">Do + sujeto + verbo?</span></div>
<p class="exline">They <b>don't eat</b> fish. &nbsp; <b>Do</b> they <b>like</b> music? &rarr; Yes, they do. / No, they don't.</p></div>
<div class="rsec"><h4>Preguntas con Wh-</h4>
<p class="exline">La palabra de pregunta va <b>primero</b>, después <b>do</b>: <b>Where do</b> you go on Saturdays?</p>
<div class="warn">Para elegir la palabra, pensá qué se responde: un <b>lugar</b>, un <b>momento</b>, una <b>persona</b>, una <b>manera</b> o una <b>cosa</b>.</div></div>`,
ex:[
 {t:"choice",q:"I ___ English every day.",o:["study","studies","studying"],a:0},
 {t:"choice",q:"We ___ play football on Mondays.",o:["don't","doesn't","aren't"],a:0},
 {t:"choice",q:"___ you play football every day?",o:["Do","Does","Are"],a:0},
 {t:"choice",q:"<span class='en'>Do you play tennis?</span>",h:"Respondé que NO",o:["No, I don't.","No, I'm not.","No, I doesn't."],a:0},
 {t:"choice",q:"<span class='en'>Where do you live?</span>",o:["I live in Buenos Aires.","I lives in Buenos Aires.","I'm live in Buenos Aires."],a:0},
 {t:"choice",q:"What ___ you do on Mondays?",o:["do","does","are"],a:0},
 {t:"match",q:"Uní cada palabra de pregunta",pairs:[["What","qué"],["Where","dónde"],["When","cuándo"],["Who","quién"],["Why","por qué"],["How","cómo"]]},
 {t:"choice",q:"Respuesta: <i>«I go to school by bus.»</i> ¿Cuál fue la pregunta?",o:["How do you go to school?","Where do you go to school?","What do you do?"],a:0}
]},
{id:"f2",dot:"👧",name:"He / She",title:"Present simple: he, she, it",sub:"plays · doesn't · Does…?",
rules:`
<div class="rsec"><h4>La S de la tercera persona</h4>
<p class="exline">Con <b>he, she, it</b> el verbo lleva <b>-s</b>: My dad read<b>s</b> the newspaper.</p>
<div class="rrow"><span class="rl">verbos terminados en -ch, -sh, -o</span><span class="ra">+es (fix &rarr; fixes)</span></div>
<div class="rrow"><span class="rl">consonante + y</span><span class="ra">-ies (cry &rarr; cries)</span></div>
<div class="rrow"><span class="rl">have</span><span class="ra">has</span></div></div>
<div class="rsec"><h4>Negativo y pregunta</h4>
<p class="exline">It <b>doesn't rain</b> much here. &nbsp; <b>Does</b> your cat <b>sleep</b> a lot?</p>
<div class="warn">La S va <b>una sola vez</b>: si está en <b>does</b> o <b>doesn't</b>, el verbo queda sin S.</div></div>`,
ex:[
 {t:"choice",q:"She ___ volleyball on Saturdays.",o:["play","plays","playing"],a:1},
 {t:"choice",q:"He ___ study English.",o:["don't","doesn't"],a:1},
 {t:"choice",q:"___ she swim?",o:["Do","Does"],a:1},
 {t:"choice",q:"<span class='en'>Does she swim?</span>",h:"Respondé que SÍ",o:["Yes, she does.","Yes, she do.","Yes, she swims."],a:0},
 {t:"fill",q:"Escribí el verbo para he / she / it",labels:["watch","study","go","have"],a:["watches","studies","goes","has"]},
 {t:"choice",q:"My brother ___ TV after school.",o:["watch","watches"],a:1},
 {t:"choice",q:"Tom ___ like vegetables.",h:"No le gustan",o:["don't","doesn't","isn't"],a:1},
 {t:"choice",e:"🌧️",q:"It ___ a lot in winter.",o:["rain","rains"],a:1}
]},
{id:"f3",dot:"⏰",name:"Rutinas y hora",title:"Always, never y la hora",sub:"Adverbios de frecuencia · momentos del día · What time…?",
rules:`
<div class="rsec"><h4>¿Con qué frecuencia?</h4>
<div class="rrow"><span class="rl">always</span><span class="ra">●●●●● 100%</span></div>
<div class="rrow"><span class="rl">usually</span><span class="ra">●●●●○</span></div>
<div class="rrow"><span class="rl">often</span><span class="ra">●●●○○</span></div>
<div class="rrow"><span class="rl">sometimes</span><span class="ra">●●○○○</span></div>
<div class="rrow"><span class="rl">never</span><span class="ra">○○○○○ 0%</span></div>
<div class="warn"><b>Dónde van:</b> antes del verbo (I <b>usually</b> walk to school), pero <b>después</b> de am/is/are (She is <b>often</b> late).</div></div>
<div class="rsec"><h4>La hora y los momentos del día</h4>
<div class="rrow"><span class="rl">5:00</span><span class="ra">five o'clock</span></div>
<div class="rrow"><span class="rl">5:30</span><span class="ra">half past five</span></div>
<div class="rrow"><span class="rl">5:15 / 5:45</span><span class="ra">quarter past five / quarter to six</span></div>
<p class="exline">Momentos: <b>in</b> the afternoon, <b>in</b> the evening… Pero ojo: <b>la noche es una excepción</b> y no usa <i>in</i>. Para la hora exacta se usa <b>at</b>: at five o'clock.</p></div>`,
ex:[
 {t:"choice",q:"She ___ wears jeans.",h:"nunca",o:["never","always","often"],a:0},
 {t:"order",q:"Ordená la oración",items:["have","I","lunch at 12.","always"],a:["I","always","have","lunch at 12."]},
 {t:"choice",q:"¿Cuál está bien ordenada?",o:["He is always happy.","He always is happy."],a:0},
 {t:"choice",q:"Lo hace todos los días, sin excepción: I ___ brush my teeth.",o:["always","sometimes","never"],a:0},
 {t:"choice",e:"🕒",q:"<span class='en'>What time is it?</span>",o:["It's three o'clock.","It's half past three.","It's quarter to three."],a:0},
 {t:"choice",e:"🕦",q:"<span class='en'>What time is it?</span>",h:"Son las 11:30",o:["It's half past eleven.","It's eleven o'clock.","It's quarter past eleven."],a:0},
 {t:"choice",q:"Cenamos a la noche: We have dinner ___.",o:["at night","in night","on night"],a:0},
 {t:"choice",q:"I get up at 7 ___.",o:["in the morning","at the morning","on the morning"],a:0}
]},
{id:"f4",dot:"🚌",name:"Transporte",title:"Transporte, naturaleza y colecciones",sub:"by bus · on foot · Can you…? · There is / are",
rules:`
<div class="rsec"><h4>¿Cómo vas?</h4>
<p class="exline">Con un medio de transporte se usa <b>by</b>: I go to the park <b>by car</b>.</p>
<div class="warn"><b>Excepción:</b> para ir caminando hay una expresión especial con la palabra <i>foot</i> (pie), que hay que memorizar.</div></div>
<div class="rsec"><h4>Habilidades: can</h4>
<p class="exline">Can your cat swim? &rarr; Yes, it can. / No, it can't.</p></div>
<div class="rsec"><h4>Colecciones</h4>
<p class="exline">Para decir qué juntás: <b>I collect</b> + lo que coleccionás. Ejemplo: I collect shells.</p></div>`,
ex:[
 {t:"match",q:"Uní cada medio de transporte",pairs:[["underground","subte"],["plane","avión"],["ship","barco"],["motorbike","moto"],["train","tren"],["lorry","camión"]]},
 {t:"choice",q:"I go to school ___ bus.",o:["by","in","with"],a:0},
 {t:"choice",q:"Vas caminando: I go to school ___.",o:["on foot","by foot","with feet"],a:0},
 {t:"choice",q:"<span class='en'>Can you ride a bike?</span>",h:"Respondé que NO",o:["No, I can't.","No, I don't.","No, I'm not."],a:0},
 {t:"match",q:"Uní cada palabra de la naturaleza",pairs:[["river","río"],["mountain","montaña"],["forest","bosque"],["lake","lago"],["beach","playa"],["island","isla"]]},
 {t:"choice",e:"🪙",q:"I collect ___.",o:["coins","stamps","cards"],a:0},
 {t:"choice",q:"There ___ a lot of trees in the forest.",o:["are","is"],a:0},
 {t:"choice",q:"<span class='en'>Is there a river near your house?</span>",h:"Respondé que NO",o:["No, there isn't.","No, it isn't.","No, there aren't."],a:0}
]},
{id:"f5",dot:"🧑",name:"Ahora o siempre",title:"Ahora o siempre · personas y cosas",sub:"Present simple vs continuous · his / her · have got",
rules:`
<div class="rsec"><h4>¿Siempre o ahora?</h4>
<div class="rrow"><span class="rl">rutina (every day, usually…)</span><span class="ra">She plays the piano on Fridays.</span></div>
<div class="rrow"><span class="rl">ahora mismo (now, Look!, Listen!)</span><span class="ra">Listen! She's playing the piano.</span></div>
<div class="warn">Buscá la <b>pista</b> en la oración: las palabras de tiempo te dicen cuál va.</div></div>
<div class="rsec"><h4>Describir</h4>
<p class="exline">Para el aspecto se usa <b>has got</b>: He has got short hair. Y para lo que es de alguien, <b>his</b> (de él) o <b>her</b> (de ella).</p></div>`,
ex:[
 {t:"choice",q:"This is Ana. This is ___ watch.",o:["her","his"],a:0},
 {t:"choice",q:"Right now he ___ a book.",o:["is reading","reads"],a:0},
 {t:"choice",q:"Every day he ___ a book.",o:["reads","is reading"],a:0},
 {t:"choice",e:"🌧️",q:"Look! It ___.",o:["is raining","rains"],a:0},
 {t:"choice",q:"<i>«She has got long hair and blue eyes.»</i> ¿Cómo es?",o:["Tiene pelo largo y ojos azules","Tiene pelo corto y ojos azules","Tiene ojos largos y pelo azul"],a:0},
 {t:"choice",q:"I haven't got a dog, but I ___ got a cat.",o:["have","has"],a:0},
 {t:"choice",q:"What ___ you doing?",o:["are","do","is"],a:0}
]}
],

mate:[
{id:"m1",dot:"🔢",name:"Números",title:"Números hasta 10.000 y cálculos",sub:"Valor posicional · sumar y restar con números redondos",
rules:`
<div class="rsec"><h4>Valor posicional con miles</h4>
<p class="exline"><b>6.381 = 6.000 + 300 + 80 + 1</b>. Cada cifra vale según el lugar: unidades de mil, centenas, decenas y unidades.</p>
<div class="warn">Pensalo con billetes: 6 de $1.000, 3 de $100, 8 de $10 y 1 de $1.</div></div>
<div class="rsec"><h4>Calcular con números redondos</h4>
<p class="exline">Para sumar 499 + 300, conviene pensar 500 + 300 = 800, y después restar el 1 que agregaste: <b>799</b>.</p></div>`,
ex:[
 {t:"fill",q:"Descomponé",labels:["4.256 =","7.083 ="],a:["4000+200+50+6","7000+80+3"]},
 {t:"fill",q:"¿Cuánta plata es?",labels:["5 billetes de $1.000, 3 de $100 y 4 de $10","8 de $1.000 y 6 de $1"],a:["5340","8006"]},
 {t:"fill",q:"Calculá",labels:["2.500 + 1.000","3.400 + 600","5.000 − 1","6.020 − 100"],a:["3500","4000","4999","5920"]},
 {t:"fill",q:"Calculá",labels:["1.999 + 1","3.450 − 1.000","700 + 800"],a:["2000","2450","1500"]},
 {t:"order",q:"Ordená de menor a mayor",items:["3.030","3.300","3.003","3.330"],a:["3.003","3.030","3.300","3.330"]},
 {t:"choice",q:"¿Cuántos billetes de $100 se necesitan para tener $2.500?",o:["25","250","2.500"],a:0},
 {t:"fill",q:"En el número 6.471, ¿cuánto vale el 4?",labels:[""],a:["400"]}
]},
{id:"m2",dot:"✌️",name:"Dobles y mitades",title:"Dobles y mitades",sub:"Calcular rápido el doble y la mitad",
rules:`
<div class="rsec"><h4>El doble</h4>
<p class="exline">Es sumar un número consigo mismo: el doble de 35 es 35 + 35 = 70.</p>
<div class="warn"><b>Truco:</b> separá el número. Doble de 45 = doble de 40 + doble de 5 = 80 + 10.</div></div>
<div class="rsec"><h4>La mitad</h4>
<p class="exline">Es repartir en 2 partes iguales: la mitad de 80 es 40. La mitad es lo contrario del doble.</p></div>`,
ex:[
 {t:"fill",q:"Calculá el doble",labels:["24","50","125","300"],a:["48","100","250","600"]},
 {t:"fill",q:"Calculá la mitad",labels:["60","48","500","130"],a:["30","24","250","65"]},
 {t:"fill",q:"El doble de 15 es… y el doble de ese resultado es…",labels:["Doble de 15","Doble del anterior"],a:["30","60"]},
 {t:"fill",q:"Juan tiene <b>18</b> figuritas y Ana tiene el doble. ¿Cuántas tiene Ana?",labels:["Respuesta"],a:["36"]},
 {t:"fill",q:"Una pizza tiene <b>8</b> porciones. Si comimos la mitad, ¿cuántas porciones comimos?",labels:["Respuesta"],a:["4"]},
 {t:"choice",q:"La mitad de 50 es…",o:["25","20","100"],a:0}
]},
{id:"m3",dot:"✖️",name:"Multiplicar",title:"¿Para qué sirve multiplicar?",sub:"Grupos iguales · filas y columnas · combinaciones",
rules:`
<div class="rsec"><h4>Tres situaciones de multiplicar</h4>
<div class="rrow"><span class="rl">Grupos iguales: 3 bolsas de 4 naranjas</span><span class="ra">3 × 4</span></div>
<div class="rrow"><span class="rl">Filas y columnas: 5 filas de 6 sillas</span><span class="ra">5 × 6</span></div>
<div class="rrow"><span class="rl">Combinaciones: 2 remeras y 3 pantalones</span><span class="ra">2 × 3 conjuntos</span></div>
<div class="warn">En las <b>combinaciones</b>, cada opción de una cosa se junta con <b>cada</b> opción de la otra. Hacé un dibujo o una tabla para verlo.</div></div>`,
ex:[
 {t:"fill",q:"<b>4</b> paquetes con <b>6</b> alfajores cada uno. ¿Cuántos alfajores hay?",labels:["Respuesta"],a:["24"]},
 {t:"fill",q:"Un patio tiene <b>7</b> filas de <b>5</b> baldosas. ¿Cuántas baldosas hay?",labels:["Respuesta"],a:["35"]},
 {t:"fill",q:"Hay <b>3</b> sabores de helado y <b>2</b> tipos de cucurucho. ¿Cuántos helados distintos se pueden armar con un sabor?",labels:["Respuesta"],a:["6"]},
 {t:"choice",q:"¿Qué cuenta resuelve: <i>6 cajas con 8 lápices cada una</i>?",o:["6 × 8","6 + 8","8 − 6"],a:0},
 {t:"choice",q:"Tengo <b>4</b> remeras y <b>3</b> shorts. ¿Cuántos conjuntos distintos puedo armar?",o:["12","7","1"],a:0},
 {t:"fill",q:"Un micro tiene <b>10</b> filas de <b>4</b> asientos. ¿Cuántos asientos hay?",labels:["Respuesta"],a:["40"]},
 {t:"choice",q:"¿Cuál problema <b>NO</b> se resuelve multiplicando?",o:["Hay 5 platos con 3 galletitas cada uno","Tengo 5 galletitas y como 3","Hay 3 filas de 5 sillas"],a:1}
]},
{id:"m4",dot:"🧮",name:"Tabla pitagórica",title:"La tabla pitagórica",sub:"Relaciones entre las tablas",
rules:`
<div class="rsec"><h4>Las tablas se relacionan</h4>
<div class="rrow"><span class="rl">la del 4 es el doble de la del 2</span><span class="ra">4 × 6 = doble de 2 × 6</span></div>
<div class="rrow"><span class="rl">la del 8 es el doble de la del 4</span><span class="ra"></span></div>
<div class="rrow"><span class="rl">la del 5 es la mitad de la del 10</span><span class="ra">5 × 4 = mitad de 10 × 4</span></div>
<div class="rrow"><span class="rl">el orden no cambia el resultado</span><span class="ra">3 × 7 = 7 × 3</span></div>
<div class="warn">Si te olvidás una cuenta, armala con otra que sí sepas.</div></div>`,
ex:[
 {t:"fill",q:"Calculá",labels:["6 × 7","8 × 4","9 × 3","7 × 7"],a:["42","32","27","49"]},
 {t:"fill",q:"Calculá",labels:["5 × 8","10 × 6","3 × 9","4 × 7"],a:["40","60","27","28"]},
 {t:"fill",q:"Si 3 × 8 = 24, entonces 6 × 8 = …",labels:[""],a:["48"]},
 {t:"fill",q:"Si 10 × 7 = 70, entonces 5 × 7 = …",labels:[""],a:["35"]},
 {t:"fill",q:"¿Qué número falta?",labels:["6 × __ = 54","__ × 4 = 36","7 × __ = 56"],a:["9","9","8"]},
 {t:"choice",q:"¿Cuál es igual a 4 × 9?",o:["9 × 4","4 + 9","49"],a:0},
 {t:"fill",q:"Completá la tabla del 6: 6, 12, 18, …",labels:["",""],a:["24","30"]}
]},
{id:"m5",dot:"🍬",name:"Repartos",title:"Repartir en partes iguales",sub:"Con la tabla · cuando sobra",
rules:`
<div class="rsec"><h4>Repartir usando la tabla</h4>
<p class="exline">Para repartir 18 entre 2, preguntate: <b>¿qué número por 2 da 18?</b> &rarr; 9.</p></div>
<div class="rsec"><h4>Cuando sobra</h4>
<p class="exline">Lo que sobra siempre es <b>menos</b> que la cantidad de partes. Si sobra más, todavía se puede dar uno más a cada uno.</p>
<div class="warn">Leé bien qué te preguntan: a veces lo que sobra obliga a agregar un grupo más (por ejemplo, un auto más para que nadie quede afuera).</div></div>`,
ex:[
 {t:"fill",q:"Se reparten <b>35</b> caramelos entre <b>5</b> chicos. ¿Cuántos recibe cada uno?",labels:["Respuesta"],a:["7"]},
 {t:"fill",q:"¿Cuántos sobres de <b>6</b> figuritas se arman con <b>48</b> figuritas?",labels:["Respuesta"],a:["8"]},
 {t:"fill",q:"Se reparten <b>27</b> lápices entre <b>4</b> chicos.",labels:["Recibe cada uno","Sobran"],a:["6","3"]},
 {t:"fill",q:"Hay <b>30</b> chicos y en cada mesa se sientan <b>6</b>. ¿Cuántas mesas hacen falta?",labels:["Respuesta"],a:["5"]},
 {t:"choice",q:"Hay <b>22</b> alumnos y en cada auto entran <b>4</b>. ¿Cuántos autos hacen falta para llevarlos a todos?",o:["5","6","4"],a:1},
 {t:"fill",q:"¿Cuánto es la mitad de 64?",labels:[""],a:["32"]}
]},
{id:"msim",dot:"📝",name:"Simulacro",title:"Simulacro de Matemática",sub:"Todo junto",
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Leé todo primero. En los problemas, pensá qué pasa antes de elegir la cuenta, y al final revisá que el resultado tenga sentido.</p></div>`,
ex:[
 {t:"fill",q:"1. Calculá",labels:["5.000 + 400 + 3","2.999 + 1"],a:["5403","3000"]},
 {t:"fill",q:"2. Dobles y mitades",labels:["Doble de 45","Mitad de 90"],a:["90","45"]},
 {t:"fill",q:"3. Calculá",labels:["7 × 8","6 × 9"],a:["56","54"]},
 {t:"fill",q:"4. Hay <b>8</b> cajas con <b>5</b> huevos. ¿Cuántos huevos hay?",labels:["Respuesta"],a:["40"]},
 {t:"fill",q:"5. Con <b>3</b> tipos de pan y <b>4</b> de fiambre, ¿cuántos sándwiches distintos (un pan y un fiambre) se pueden hacer?",labels:["Respuesta"],a:["12"]},
 {t:"fill",q:"6. Se reparten <b>42</b> globos entre <b>6</b> chicos. ¿Cuántos recibe cada uno?",labels:["Respuesta"],a:["7"]},
 {t:"fill",q:"7. ¿Cuánto es 1.000 más que 6.250?",labels:[""],a:["7250"]},
 {t:"order",q:"8. Ordená de menor a mayor",items:["4.500","4.050","4.005","5.400"],a:["4.005","4.050","4.500","5.400"]}
]}
],

lengua:[
{id:"l1",dot:"👹",name:"Irulana",title:"Irulana y el ogronte",sub:"Un cuento de mucho miedo",book:["irulana"],
rules:`
<div class="rsec"><h4>Leer un cuento de miedo</h4>
<p class="exline">En este cuento el <b>narrador le habla directamente al lector</b>, como si estuviera contando la historia en voz alta. Fijate cuándo lo hace y para qué.</p>
<div class="warn">Las preguntas se responden con el libro al lado. Si no te acordás de algo, <b>volvé a buscarlo</b>.</div></div>`,
ex:[
 {t:"fill",q:"¿Quién escribió «Irulana y el ogronte»?",labels:[""],a:["graciela montes"]},
 {t:"fill",q:"¿Quién hizo las ilustraciones?",labels:[""],a:["claudia legnazzi"]},
 {t:"choice",q:"¿Qué hace el ogronte con el pueblo?",o:["Se lo come","Lo construye","Lo cuida"],a:0},
 {t:"choice",q:"¿Dónde está Irulana cuando el ogronte se come todo?",o:["En su banquito","En la escuela","En el bosque"],a:0},
 {t:"choice",q:"¿Qué usa Irulana para vencer al ogronte?",o:["Su nombre: la palabra","Una espada","Una trampa"],a:0},
 {t:"choice",q:"¿Qué pasa con las letras del nombre de Irulana?",o:["Atrapan y vencen al ogronte","Se borran","Se las come el ogronte"],a:0},
 {t:"choice",q:"¿Cómo termina el cuento?",o:["Llega gente con música para fundar un pueblo","El ogronte se despierta","Irulana se va del pueblo"],a:0},
 {t:"open",q:"El subtítulo dice «un cuento de mucho miedo». ¿Te dio miedo? ¿Por qué?",model:"Pregunta de opinión. Lo que vale es que justifique con algo del cuento (la noche, la soledad de Irulana, el tamaño del ogronte)."},
 {t:"open",q:"Buscá un momento en que el narrador le habla al lector. ¿Qué efecto produce?",model:"Por ejemplo, cuando pide que «tengan en cuenta» algo o comenta la página. Produce cercanía, como si nos contara el cuento a nosotros, y a veces humor."}
]},
{id:"l2",dot:"🦢",name:"Clásicos",title:"Versiones, personajes y autores clásicos",sub:"Andersen · el zorro · versiones de un cuento",
rules:`
<div class="rsec"><h4>Versiones</h4>
<p class="exline">Una <b>versión</b> es el mismo cuento contado de otra manera: puede cambiar el final, un personaje o el lugar, pero la historia básica se reconoce.</p></div>
<div class="rsec"><h4>Personajes que se repiten</h4>
<p class="exline">Algunos animales aparecen en muchos cuentos con la misma personalidad. Prestá atención a cómo actúan y qué consiguen.</p></div>
<div class="rsec"><h4>Autores clásicos</h4>
<p class="exline">Algunos autores del siglo XIX escribieron cuentos que se siguen leyendo hoy en todo el mundo. Cuando leas uno, averiguá quién lo escribió y de dónde era.</p></div>`,
ex:[
 {t:"choice",q:"En las fábulas, el zorro suele ser…",o:["astuto","tonto","lento"],a:0},
 {t:"choice",q:"¿Quién escribió «El patito feo»?",o:["Hans Christian Andersen","Graciela Montes","Isol"],a:0},
 {t:"choice",q:"¿De qué país era Andersen?",o:["Dinamarca","Argentina","España"],a:0},
 {t:"choice",q:"En «El patito feo», al final el patito descubre que es…",o:["un cisne","un pato","un ganso"],a:0},
 {t:"choice",q:"Dos versiones de un mismo cuento…",o:["tienen la misma historia básica con algunos cambios","son cuentos completamente distintos","tienen siempre el mismo final"],a:0},
 {t:"choice",q:"«El soldadito de plomo» también es de…",o:["Andersen","los hermanos Grimm","Charles Perrault"],a:0},
 {t:"open",q:"Elegí un cuento clásico que conozcas en dos versiones (libro y película, o dos libros). ¿Qué cambia entre una y otra?",model:"Que nombre las dos versiones y señale al menos dos diferencias concretas."}
]},
{id:"l3",dot:"🧾",name:"Instructivos",title:"Textos instructivos",sub:"Recetas, reglamentos e instrucciones de armado",
rules:`
<div class="rsec"><h4>Partes de un instructivo</h4>
<div class="rrow"><span class="rl">Título</span><span class="ra">qué se va a hacer</span></div>
<div class="rrow"><span class="rl">Materiales o ingredientes</span><span class="ra">qué se necesita</span></div>
<div class="rrow"><span class="rl">Pasos</span><span class="ra">en orden</span></div>
<p class="exline">Los verbos dan órdenes o indicaciones: <b>cortá</b>, <b>doblá</b>, <b>pegá</b>.</p></div>`,
ex:[
 {t:"choice",q:"Una receta es un instructivo que…",o:["explica cómo preparar una comida","cuenta una historia","informa una noticia"],a:0},
 {t:"choice",q:"¿Qué parte de una receta dice qué se necesita?",o:["Los ingredientes","La preparación","El título"],a:0},
 {t:"order",q:"Ordená los pasos para hacer un licuado",items:["Servir en un vaso","Pelar y cortar la fruta","Licuar con leche"],a:["Pelar y cortar la fruta","Licuar con leche","Servir en un vaso"]},
 {t:"choice",q:"¿Cuál está escrita como instrucción?",o:["Mezclá la harina con el agua.","Ayer mezclé harina.","La harina es blanca."],a:0},
 {t:"choice",q:"El reglamento de un juego sirve para…",o:["explicar cómo se juega y qué está permitido","contar quién ganó","describir la pelota"],a:0},
 {t:"open",q:"Escribí las instrucciones para hacer un avioncito de papel o algo que sepas armar",model:"Título, materiales y pasos numerados con verbos que indiquen qué hacer. Probá seguirlas al pie de la letra: si algo no sale, falta un paso."}
]},
{id:"l4",dot:"❗",name:"Puntuación",title:"Puntuación",sub:"Punto seguido y aparte · comas · ¿? ¡! · comillas",
rules:`
<div class="rsec"><h4>Puntos</h4>
<div class="rrow"><span class="rl">punto seguido</span><span class="ra">misma idea, mismo párrafo</span></div>
<div class="rrow"><span class="rl">punto aparte</span><span class="ra">cambia el tema, párrafo nuevo</span></div></div>
<div class="rsec"><h4>Comas para enumerar</h4>
<p class="exline">Entre los elementos de una lista va coma, pero <b>antes de la «y» final no</b>: rojo, azul, verde y amarillo.</p></div>
<div class="rsec"><h4>Preguntas y exclamaciones</h4>
<div class="warn">En castellano los signos van <b>al principio y al final</b>: ¿…? y ¡…!</div>
<p class="exline">Las <b>comillas</b> («…») sirven para copiar las palabras exactas de alguien.</p></div>`,
ex:[
 {t:"choice",q:"¿Cuál está bien puntuada?",o:["Compré pan, leche, queso y manteca.","Compré pan leche queso y manteca.","Compré, pan, leche, queso, y manteca."],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["¿Dónde está mi mochila?","Dónde está mi mochila?","¿Dónde está mi mochila"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["¡Qué susto!","Qué susto!","¡Qué susto"],a:0},
 {t:"choice",q:"«Fuimos al zoológico y vimos leones ___ Al día siguiente empezaron las clases y conocimos a la maestra nueva.» ¿Qué va en el lugar marcado, si después cambia el tema?",o:["Punto aparte","Punto seguido","Coma"],a:0},
 {t:"choice",q:"Las comillas («») se usan para…",o:["copiar las palabras exactas que dijo alguien","separar números","terminar el texto"],a:0},
 {t:"open",q:"Puntuá este texto:<br><b>el sábado fuimos a la plaza llevamos la pelota el mate y galletitas mi hermano preguntó vamos a volver mañana</b>",model:"El sábado fuimos a la plaza. Llevamos la pelota, el mate y galletitas. Mi hermano preguntó: «¿Vamos a volver mañana?»\n\nMirá: mayúsculas al empezar cada oración, comas en la lista sin coma antes de la «y», y signos de pregunta en los dos extremos."}
]},
{id:"l5",dot:"🔤",name:"Ortografía",title:"Ortografía",sub:"Plurales con Z · QUE / QUI · GUE / GUI · N antes de V · R después de N",
rules:`
<div class="rsec"><h4>Plural de las palabras terminadas en Z</h4>
<p class="exline">La Z cambia por C: <b>cruz &rarr; cruces</b>.</p></div>
<div class="rsec"><h4>QUE, QUI, GUE, GUI</h4>
<p class="exline">En <b>que, qui, gue, gui</b> la <b>u no suena</b>: está para que la letra de antes suene fuerte. Ejemplos: <b>que</b>rer, <b>gui</b>ño.</p></div>
<div class="rsec"><h4>Antes de V va N</h4>
<p class="exline">e<b>nv</b>iar, co<b>nv</b>ersar. Y antes de B y P va M (como ya sabés).</p></div>
<div class="rsec"><h4>R después de N, L o S</h4>
<div class="warn">Después de <b>n, l o s</b>, la r suena fuerte pero se escribe <b>una sola</b>: E<b>nr</b>ique.</div></div>`,
ex:[
 {t:"fill",q:"Escribí el plural",labels:["lápiz","pez","nariz"],a:["lapices","peces","narices"]},
 {t:"fill",q:"Completá y escribí la palabra entera",labels:["__eso (QUE o KE)","__erra (GUE o GE: pelea)","__itarra (GUI o GI)"],a:["queso","guerra","guitarra"]},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["invitar","imvitar"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["enbarcar","embarcar"],a:1},
 {t:"fill",q:"Completá con R o RR y escribí la palabra entera",labels:["hon__a","al__ededor","en__edo"],a:["honra","alrededor","enredo"]},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["Fuimos a Mar del Plata en enero.","fuimos a mar del plata en Enero."],a:0}
]},
{id:"lsim",dot:"📝",name:"Simulacro",title:"Simulacro de Lengua",sub:"Todo junto",book:["irulana"],
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Leé cada consigna dos veces. Al terminar, revisá mayúsculas, puntos y tildes.</p></div>`,
ex:[
 {t:"choice",q:"1. ¿Quién escribió «Irulana y el ogronte»?",o:["Graciela Montes","Isol","Andersen"],a:0},
 {t:"choice",q:"2. ¿Cuál está bien escrita?",o:["¡Cuidado con el perro!","Cuidado con el perro!"],a:0},
 {t:"fill",q:"3. Escribí el plural de <b>voz</b>",labels:[""],a:["voces"]},
 {t:"choice",q:"4. Si cambia el tema del texto, usás…",o:["punto aparte","punto seguido"],a:0},
 {t:"order",q:"5. Ordená los pasos para lavarse las manos",items:["Secarse con la toalla","Mojarse las manos","Frotar con jabón","Enjuagarse"],a:["Mojarse las manos","Frotar con jabón","Enjuagarse","Secarse con la toalla"]},
 {t:"fill",q:"6. Completá y escribí la palabra entera",labels:["__itarra (GUI o GI)"],a:["guitarra"]},
 {t:"open",q:"7. Escribí un final distinto para «Irulana y el ogronte»",model:"Que el nuevo final sea coherente con lo que pasó antes y tenga mayúsculas y puntos."}
]}
]
};
