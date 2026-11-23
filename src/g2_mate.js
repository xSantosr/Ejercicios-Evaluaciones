const G2_MATE = [
{id:"m1",dot:"⚡",name:"Cálculos fáciles",title:"Cálculos que conviene saber de memoria",sub:"+1 y −1 · dobles · los que dan 10 · decenas · +10",
rules:`
<div class="rsec"><h4>Sumar o restar 1</h4>
<p class="exline">Sumar 1 es decir <b>el número que sigue</b>. Restar 1 es decir <b>el que viene antes</b>. Ejemplo: 26 + 1 = 27.</p></div>
<div class="rsec"><h4>Dobles</h4>
<p class="exline">Un doble es sumar <b>el mismo número dos veces</b>: 4 + 4 = 8. Conviene saberlos de memoria.</p></div>
<div class="rsec"><h4>Los que dan 10</h4>
<p class="exline">Son parejas de números que juntos forman 10, como <b>1 + 9</b>. Usá los dedos de las dos manos para encontrarlas.</p></div>
<div class="rsec"><h4>Sumar 10</h4>
<div class="warn">Cuando sumás 10, <b>solo cambia la cifra de adelante</b> (las decenas): 46 + 10 = <b>5</b>6. La de atrás queda igual.</div></div>`,
ex:[
 {t:"fill",q:"Uno más y uno menos",labels:["8 + 1","15 + 1","20 − 1","43 − 1"],a:["9","16","19","42"]},
 {t:"fill",q:"Dobles",viz:{k:"array",r:2,c:5},h:"Dos filas iguales: eso es un doble",labels:["3 + 3","5 + 5","7 + 7","9 + 9"],a:["6","10","14","18"]},
 {t:"fill",q:"Completá para que dé 10",labels:["6 + __","3 + __","__ + 8","5 + __"],a:["4","7","2","5"]},
 {t:"fill",q:"Decenas más unidades",labels:["20 + 4","50 + 7","30 + 9","80 + 1"],a:["24","57","39","81"]},
 {t:"fill",q:"Sumá 10",labels:["12 + 10","35 + 10","8 + 10","60 + 10"],a:["22","45","18","70"]},
 {t:"fill",q:"Restá 10",labels:["40 − 10","27 − 10","90 − 10"],a:["30","17","80"]}
]},

{id:"m2",dot:"🔢",name:"Números hasta 100",title:"Números hasta 100",sub:"Cuadro de números · anterior y siguiente · comparar · decenas",
rules:`
<div class="rsec"><h4>El cuadro de números</h4>
<div class="rrow"><span class="rl">un lugar a la derecha</span><span class="ra">+1</span></div>
<div class="rrow"><span class="rl">un lugar a la izquierda</span><span class="ra">−1</span></div>
<div class="rrow"><span class="rl">un lugar abajo</span><span class="ra">+10</span></div>
<div class="rrow"><span class="rl">un lugar arriba</span><span class="ra">−10</span></div>
<p class="exline">Ejemplo: abajo del 12 está el 22.</p></div>
<div class="rsec"><h4>Decenas y unidades</h4>
<p class="exline">En <b>75</b>, el 7 son <b>decenas</b> (grupos de 10) y el 5 son <b>unidades</b> (sueltos).</p></div>
<div class="rsec"><h4>¿Cuál es mayor?</h4>
<div class="warn">Mirá primero <b>la cifra de adelante</b>. El que tiene más decenas es el mayor: 31 &gt; 29. Si las decenas son iguales, mirá las unidades.</div></div>`,
ex:[
 {t:"fill",q:"¿Qué número sigue?",viz:{k:"numline",from:25,to:35,mark:29,q:30},labels:["29 →","59 →","99 →"],a:["30","60","100"]},
 {t:"fill",q:"¿Qué número va antes?",labels:["→ 40","→ 71","→ 100"],a:["39","70","99"]},
 {t:"fill",q:"En el cuadro de números, ¿qué número está…?",viz:{k:"hundred",from:31,rows:3,mark:34},labels:["abajo del 34","arriba del 57","a la derecha del 68","a la izquierda del 90"],a:["44","47","69","89"]},
 {t:"choice",q:"47 ___ 74",o:["&lt;","&gt;","="],a:0},
 {t:"choice",q:"60 ___ 59",o:["&lt;","&gt;","="],a:1},
 {t:"choice",q:"¿Cuál es el número más grande?",o:["38","83","58"],ov:[{k:"base10",d:3,u:8},{k:"base10",d:8,u:3},{k:"base10",d:5,u:8}],a:1},
 {t:"order",q:"Ordená de menor a mayor",items:["52","25","70","7","61"],a:["7","25","52","61","70"]},
 {t:"fill",q:"El número 63 tiene…",viz:{k:"base10",d:6,u:3},labels:["Decenas","Unidades"],a:["6","3"]},
 {t:"fill",q:"Escribí el número que tiene 4 decenas y 8 unidades",viz:{k:"base10",d:4,u:8},labels:[""],a:["48"]},
 {t:"fill",q:"Escribí con palabras",labels:["15","40"],a:["quince","cuarenta"]}
]},

{id:"m3",dot:"🧩",name:"Problemas",title:"Problemas de sumar y restar",sub:"Agregar · avanzar · juntar · quitar · retroceder",
rules:`
<div class="rsec"><h4>¿Qué pasa en el problema?</h4>
<div class="rrow"><span class="rl">me dan más, avanzo, junto</span><span class="ra">SUMA</span></div>
<div class="rrow"><span class="rl">me sacan, pierdo, retrocedo</span><span class="ra">RESTA</span></div>
<p class="exline">Ejemplo: "Tenía 5 autitos y me regalaron 2" &rarr; me dieron más &rarr; 5 + 2.</p>
<div class="warn"><b>Revisá:</b> si te dieron cosas, tenés que terminar con <b>más</b> que antes. Si te sacaron, con <b>menos</b>.</div></div>`,
ex:[
 {t:"fill",e:"🍬",q:"Tenía <b>8</b> caramelos y me regalaron <b>5</b>. ¿Cuántos tengo ahora?",labels:["Respuesta"],a:["13"]},
 {t:"fill",e:"🚌",q:"En el colectivo había <b>15</b> personas y bajaron <b>6</b>. ¿Cuántas quedaron?",labels:["Respuesta"],a:["9"]},
 {t:"fill",q:"En el juego estoy en el casillero <b>12</b> y avanzo <b>6</b>. ¿A qué casillero llego?",viz:{k:"numline",from:10,to:20,mark:12},labels:["Respuesta"],a:["18"]},
 {t:"fill",q:"Yo tengo <b>9</b> figuritas y mi hermano tiene <b>7</b>. ¿Cuántas tenemos entre los dos?",labels:["Respuesta"],a:["16"]},
 {t:"fill",q:"Estaba en el casillero <b>20</b> y retrocedí <b>4</b>. ¿Dónde quedé?",viz:{k:"numline",from:14,to:24,mark:20},labels:["Respuesta"],a:["16"]},
 {t:"choice",q:"Tenía <b>14</b> globos y se volaron <b>5</b>. ¿Qué cuenta hay que hacer?",o:["14 + 5","14 − 5"],a:1},
 {t:"fill",q:"Entonces, ¿cuántos globos me quedaron?",labels:["Respuesta"],a:["9"]},
 {t:"choice",q:"¿Qué problema se resuelve con una <b>resta</b>?",o:["Tengo 6 lápices y me dan 3","Tengo 10 lápices y pierdo 2","Tengo 4 lápices rojos y 5 azules"],a:1}
]},

{id:"m4",dot:"🧱",name:"Descomponer",title:"Calcular descomponiendo",sub:"Separar en decenas y unidades",
rules:`
<div class="rsec"><h4>Descomponer un número</h4>
<p class="exline">Es separarlo en decenas y unidades: <b>25 = 20 + 5</b>.</p></div>
<div class="rsec"><h4>Sumar descomponiendo</h4>
<div class="rrow"><span class="rl">25 + 13</span><span class="ra">(20 + 10) + (5 + 3)</span></div>
<div class="rrow"><span class="rl"></span><span class="ra">30 + 8 = 38</span></div>
<p class="exline">Se suman las decenas con las decenas y las unidades con las unidades. Al final se juntan.</p></div>`,
ex:[
 {t:"fill",q:"Descomponé",viz:{k:"base10",d:3,u:6},labels:["36 =","58 =","71 ="],a:["30+6","50+8","70+1"]},
 {t:"fill",q:"Resolvé descomponiendo",labels:["23 + 14","41 + 35","56 + 22"],a:["37","76","78"]},
 {t:"fill",q:"Restá descomponiendo",labels:["47 − 23","68 − 35"],a:["24","33"]},
 {t:"open",q:"Contá cómo hiciste la cuenta 23 + 14",model:"Lo que se busca: que separe decenas y unidades (20 + 10 y 3 + 4) y que junte los resultados. Si lo hizo de otra forma y llegó bien, también vale: pedile que lo explique."}
]},

{id:"msim",dot:"📝",name:"Simulacro",title:"Simulacro de examen",sub:"Todo junto · sin mirar los ejemplos",
rules:`
<div class="rsec"><h4>Antes de empezar</h4>
<p class="exline">Leé cada consigna dos veces. Si un problema cuesta, hacé un dibujo o usá los dedos.</p>
<div class="warn">Al terminar, revisá que no haya quedado nada sin contestar.</div></div>`,
ex:[
 {t:"fill",q:"1. Calculá",labels:["7 + 7","40 + 6","19 + 1","25 + 10"],a:["14","46","20","35"]},
 {t:"fill",q:"2. Completá para llegar a 10",labels:["4 + __","9 + __"],a:["6","1"]},
 {t:"order",q:"3. Ordená de menor a mayor",items:["43","34","40","14"],a:["14","34","40","43"]},
 {t:"choice",q:"4. 56 ___ 65",o:["&lt;","&gt;","="],a:0},
 {t:"fill",q:"5. ¿Qué número está abajo del 27 en el cuadro?",viz:{k:"hundred",from:21,rows:3,mark:27,q:37},labels:[""],a:["37"]},
 {t:"fill",q:"6. Tenía <b>12</b> bolitas y gané <b>7</b>. ¿Cuántas tengo?",labels:["Respuesta"],a:["19"]},
 {t:"fill",q:"7. Había <b>18</b> pájaros y se fueron <b>9</b>. ¿Cuántos quedaron?",labels:["Respuesta"],a:["9"]},
 {t:"fill",q:"8. Descomponé",labels:["84 ="],a:["80+4"]},
 {t:"fill",q:"9. Resolvé",labels:["33 + 25"],a:["58"]}
]}
];

const G2_LENGUA = [
{id:"l1",dot:"📅",name:"Nombres y calendario",title:"Nombres, días y meses",sub:"Leer nombres, el calendario y carteles",
rules:`
<div class="rsec"><h4>La semana y el año</h4>
<p class="exline">La semana tiene <b>7 días</b> y el año tiene <b>12 meses</b>. Siempre van en el mismo orden. Recitalos en voz alta para acordarte.</p></div>
<div class="rsec"><h4>Los nombres de las personas</h4>
<div class="warn">Los nombres de personas, mascotas y lugares van con <b>mayúscula</b> al principio: <b>M</b>artín, <b>T</b>oby.</div></div>
<div class="rsec"><h4>Leer palabras</h4>
<p class="exline">Si dudás, fijate <b>con qué letra empieza</b> y <b>con cuál termina</b>. Eso ayuda a saber qué dice.</p></div>`,
ex:[
 {t:"order",q:"Ordená los días de la semana",items:["miércoles","lunes","viernes","martes","jueves"],a:["lunes","martes","miércoles","jueves","viernes"]},
 {t:"fill",q:"Completá",labels:["Después del martes viene el…","Antes del domingo está el…"],a:["miercoles","sabado"]},
 {t:"choice",q:"¿Cuál de estas palabras es un <b>mes</b>?",o:["marzo","lunes","verano"],a:0},
 {t:"order",q:"Ordená estos meses",items:["marzo","enero","abril","febrero"],a:["enero","febrero","marzo","abril"]},
 {t:"choice",q:"¿Qué cartel le ponés a la caja de los lápices?",o:["LÁPICES","PELOTAS","LIBROS"],a:0},
 {t:"choice",q:"¿Qué palabra empieza igual que <b>MAMÁ</b>?",o:["MESA","PATO","SOL"],a:0},
 {t:"choice",q:"¿Cuál está bien escrito?",o:["Lucía","lucía"],a:0}
]},

{id:"l2",dot:"🐺",name:"Cuentos y poesía",title:"Cuentos tradicionales, rimas y adivinanzas",sub:"Escuchar, leer y jugar con las palabras",
rules:`
<div class="rsec"><h4>Cuentos tradicionales</h4>
<p class="exline">Son cuentos que se cuentan desde hace muchísimos años. Todo cuento tiene un <b>principio</b>, algo que <b>pasa</b> y un <b>final</b>.</p></div>
<div class="rsec"><h4>Rimas</h4>
<p class="exline">Dos palabras riman cuando <b>terminan con el mismo sonido</b>: s<b>ol</b> y c<b>ol</b>.</p></div>
<div class="rsec"><h4>Adivinanzas</h4>
<p class="exline">Dan <b>pistas</b> sin decir el nombre. Ejemplo: <i>«Oro parece, plata no es»</i>. Prestá atención a cada pista.</p></div>`,
ex:[
 {t:"choice",q:"En «Caperucita Roja», ¿a quién va a visitar Caperucita?",o:["A su abuela","A su tía","Al cazador"],a:0},
 {t:"choice",q:"En «Los tres chanchitos», ¿qué casa no pudo voltear el lobo?",o:["La de paja","La de madera","La de ladrillos"],a:2},
 {t:"order",q:"Ordená el cuento «Los tres chanchitos»",items:["El lobo sopla la casa de paja","Los chanchitos construyen sus casas","El lobo no puede voltear la casa de ladrillos"],a:["Los chanchitos construyen sus casas","El lobo sopla la casa de paja","El lobo no puede voltear la casa de ladrillos"]},
 {t:"choice",q:"¿Qué palabra rima con <b>GATO</b>?",o:["PATO","PERRO","MESA"],a:0},
 {t:"choice",q:"¿Qué palabra rima con <b>LUNA</b>?",o:["CUNA","SOL","LUZ"],a:0},
 {t:"choice",q:"¿Qué palabra rima con <b>CAMIÓN</b>?",o:["RATÓN","AUTO","RUEDA"],a:0},
 {t:"choice",q:"Adiviná: <i>«Blanca por dentro, verde por fuera; si quieres que te lo diga, espera.»</i>",o:["La pera","La manzana","La banana"],a:0},
 {t:"choice",q:"Adiviná: <i>«Tengo agujas y no sé coser, tengo números y no sé leer.»</i>",o:["El reloj","El libro","La tijera"],a:0},
 {t:"open",q:"Inventá una rima con tu nombre",model:"Que la palabra que elija termine con el mismo sonido que su nombre. Puede ser divertida o sin sentido: lo que importa es que rime."}
]},

{id:"l3",dot:"📝",name:"Listas y letras",title:"Escribir listas",sub:"Listas con un propósito · qué letras van",
rules:`
<div class="rsec"><h4>¿Para qué sirve una lista?</h4>
<p class="exline">Para no olvidarse de nada. Cada lista tiene un <b>tema</b>, y solo van cosas de ese tema. Ejemplo, lista del cumpleaños: globos, torta, velas.</p></div>
<div class="rsec"><h4>¿Qué letras van?</h4>
<div class="warn">Decí la palabra <b>despacio</b>, separando los sonidos, y escribí una letra por cada sonido. Después leela con el dedo para ver si dice lo que querías.</div></div>`,
ex:[
 {t:"choice",q:"¿Qué va en la lista de las compras del súper?",o:["leche","lunes","Lucía"],a:0},
 {t:"choice",q:"¿Qué <b>NO</b> va en una lista de útiles?",o:["lápiz","goma","pelota"],a:2},
 {t:"choice",q:"Para hacer una torta necesitamos…",o:["harina, huevos y azúcar","pelota, auto y muñeca","lunes, martes y jueves"],a:0},
 {t:"fill",q:"Escribí la palabra completa",labels:["CA_A (donde vivimos)","SO_ (brilla en el cielo)","ME_A (para comer)"],a:["casa","sol","mesa"]},
 {t:"choice",q:"¿Con qué letra empieza <b>PELOTA</b>?",o:["P","B","T"],a:0},
 {t:"choice",q:"¿Cuántas letras tiene <b>SOL</b>?",o:["3","2","4"],a:0},
 {t:"open",q:"Escribí una lista de tus 4 juegos preferidos",model:"Una cosa por renglón. Revisá juntos que cada palabra diga lo que quiso escribir, leyéndola con el dedo."},
 {t:"open",q:"Escribí la lista de los personajes de un cuento que conozcas",model:"Que nombre a todos los personajes importantes del cuento. Los nombres propios, con mayúscula."}
]},

{id:"l4",dot:"🔁",name:"Escribir en orden",title:"Escribir siguiendo un orden y revisar",sub:"Primero, después, al final · separar y revisar",
rules:`
<div class="rsec"><h4>Primero, después, al final</h4>
<p class="exline">Para contar algo que se hace en pasos, pensá qué pasa <b>primero</b>, qué <b>después</b> y qué <b>al final</b>. Ejemplo, hacer la cama: primero estiro la sábana, después la frazada, al final acomodo la almohada.</p></div>
<div class="rsec"><h4>Revisar lo que escribí</h4>
<div class="warn"><b>Señalá con el dedo</b> cada palabra mientras la leés. Así te das cuenta si <b>falta</b> una letra, si <b>sobra</b> alguna o si dos palabras quedaron pegadas.</div></div>`,
ex:[
 {t:"order",q:"Ordená los pasos para lavarse los dientes",items:["Me enjuago la boca","Pongo pasta en el cepillo","Me cepillo los dientes"],a:["Pongo pasta en el cepillo","Me cepillo los dientes","Me enjuago la boca"]},
 {t:"order",q:"Ordená los pasos para plantar una semilla",items:["Riego la tierra","Hago un pozo","Pongo la semilla"],a:["Hago un pozo","Pongo la semilla","Riego la tierra"]},
 {t:"choice",q:"¿Cuál está bien escrito?",o:["EL SOL BRILLA","ELSOLBRILLA","EL SOLBRI LLA"],a:0},
 {t:"choice",q:"Leé con el dedo: <b>MESSA</b>. ¿Qué le pasa?",o:["Le sobra una letra","Le falta una letra","Está bien"],a:0},
 {t:"choice",q:"Leé con el dedo: <b>PELTA</b>. ¿Qué le pasa?",o:["Le sobra una letra","Le falta una letra","Está bien"],a:1},
 {t:"choice",q:"La persona que escribe un libro es…",o:["el autor o la autora","el lector o la lectora","el librero"],a:0},
 {t:"open",q:"Escribí 3 oraciones sobre tu día: qué hacés primero, qué después y qué al final",model:"Tres oraciones en orden. Revisá juntos que estén separadas las palabras y que no falten letras."}
]},

{id:"lsim",dot:"📝",name:"Simulacro",title:"Simulacro de Lengua",sub:"Todo junto",
rules:`
<div class="rsec"><h4>Antes de empezar</h4>
<p class="exline">Leé cada pregunta despacio. Si no estás segura o seguro, volvé a leerla.</p>
<div class="warn">Al terminar, leé con el dedo lo que escribiste.</div></div>`,
ex:[
 {t:"choice",q:"1. ¿Qué día viene después del jueves?",o:["viernes","miércoles","sábado"],a:0},
 {t:"choice",q:"2. ¿Qué palabra rima con <b>FLOR</b>?",o:["COLOR","FLORES","ROSA"],a:0},
 {t:"fill",q:"3. Escribí la palabra completa",labels:["PA_O (un ave que nada)"],a:["pato"]},
 {t:"choice",q:"4. ¿Qué <b>NO</b> va en una lista de frutas?",o:["manzana","pera","zapato"],a:2},
 {t:"order",q:"5. Ordená los pasos para ponerse las zapatillas",items:["Me ato los cordones","Me pongo las medias","Me pongo las zapatillas"],a:["Me pongo las medias","Me pongo las zapatillas","Me ato los cordones"]},
 {t:"choice",q:"6. ¿Cuál está bien escrito?",o:["Ana juega en el patio.","anajuegaenelpatio","ana juega en el patio"],a:0},
 {t:"open",q:"7. Escribí una adivinanza sobre un animal",model:"Que dé pistas sin decir el nombre del animal."}
]}
];
