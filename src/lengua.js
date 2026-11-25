const LENGUA = [
{id:"l1",dot:"📕",name:"Día 1",title:"Día 1 · Antes y después de leer",sub:"Mirar la tapa, leer y contar",
rules:`
<div class="rsec"><h4>Un libro álbum se lee dos veces</h4>
<p class="exline">Una vez con las <b>palabras</b> y otra con los <b>dibujos</b>. En este libro los dibujos cuentan cosas que las palabras no dicen.</p>
<div class="rrow"><span class="rl">Antes de leer</span><span class="ra">mirá la tapa y adiviná</span></div>
<div class="rrow"><span class="rl">Mientras leés</span><span class="ra">mirá bien cada dibujo</span></div>
<div class="rrow"><span class="rl">Después</span><span class="ra">contalo con tus palabras</span></div></div>
<div class="rsec"><h4>Si no te acordás</h4>
<div class="warn">No lo adivines: <b>volvé al libro y buscalo</b>. Buscar en el libro está permitido y es lo que hay que aprender.</div></div>
<div class="rsec"><h4>Para el adulto</h4>
<p class="exline">Las consignas de escribir no se corrigen solas. Lo que se mira no es que acierte, sino que <b>muestre en el libro de dónde lo sacó</b>.</p></div>`,
ex:[
 {t:"choice",e:"🐕",q:"¿Qué animal es Clovis?",o:["Un perro","Un gato","Un pájaro"],a:0,
  ov:[{k:"emo",c:"🐕"},{k:"emo",c:"🐈"},{k:"emo",c:"🐦"}]},
 {t:"open",e:"📖",q:"Mirá la tapa. ¿De qué te parece que va a tratar el cuento?",
  h:"No hay respuesta correcta. Contá qué ves en el dibujo.",
  model:"Es una hipótesis: vale cualquiera. Lo que se mira es que la apoye en algo que VE en la tapa."},
 {t:"fill",e:"🏷️",q:"¿Cómo se llama el perro?",labels:[""],a:["clovis"]},
 {t:"choice",e:"🗣️",q:"¿Quién cuenta la historia?",o:["El chico","La mamá","Clovis"],a:0,
  h:"Fijate si el que habla dice «yo»."},
 {t:"choice",e:"❓",q:"¿Qué quiere saber el chico?",
  o:["Cómo hace su mamá para saber que él no es un perro","Dónde está escondido Clovis","Qué va a comer esa noche"],a:0},
 {t:"open",e:"✍️",q:"Escribí una pregunta que te hayas hecho mientras leías.",
  h:"Cualquier duda que te haya quedado sirve.",
  model:"Vale cualquier pregunta genuina. Si no se le ocurre ninguna, relean una página juntos y preguntale qué le llamó la atención."},
 {t:"choice",e:"🤝",q:"¿Cómo se llevan el chico y Clovis?",
  o:["Hacen todo juntos","Casi no se ven","Se pelean todo el tiempo"],a:0},
 {t:"open",e:"🖼️",q:"Elegí un dibujo que te guste y contá qué se ve.",
  h:"Señalá la página antes de escribir.",
  model:"Que describa lo que ve, no lo que imagina. Pedile que te muestre la página."}
]},

{id:"l2",dot:"🔎",name:"Día 2",title:"Día 2 · Buscar en el libro",sub:"Volver al texto a encontrar las pistas",
rules:`
<div class="rsec"><h4>La regla de oro</h4>
<div class="warn">Si no te acordás de algo, <b>volvé al libro a buscarlo</b>. No se adivina.</div></div>
<div class="rsec"><h4>Respondé con una oración entera</h4>
<div class="rrow"><span class="rl"><span class="no">&#10007;</span> "en la casa"</span><span class="ra">falta el resto</span></div>
<div class="rrow"><span class="rl"><span class="yes">&#10003;</span> "Los dos juegan en la casa"</span><span class="ra">así sí</span></div></div>`,
ex:[
 {t:"choice",e:"👩",q:"¿A quién le hace la pregunta el chico?",o:["A su mamá","A su maestra","A Clovis"],a:0},
 {t:"open",e:"❓",q:"¿Qué le pregunta el chico a su mamá? Escribilo con tus palabras.",
  h:"Volvé a esa página y leela de nuevo.",
  model:"Tiene que reconstruir la pregunta del chico sobre cómo ella sabe que él no es un perro."},
 {t:"open",e:"💬",q:"Escribí una razón que le da la mamá.",
  h:"Con una alcanza. Buscala en el libro.",
  model:"Que la saque del libro y la diga con sus palabras. Si da una, está bien; pedile una segunda solo si salió rápido."},
 {t:"choice",e:"🎾",q:"¿Qué hacen el chico y Clovis cuando están juntos?",
  o:["Juegan, corren y se ensucian","Estudian y hacen la tarea","Duermen todo el día"],a:0},
 {t:"choice",e:"🖍️",q:"En este libro, los dibujos…",
  o:["cuentan cosas que las palabras no dicen","repiten exactamente lo que dice el texto","no tienen nada que ver con el cuento"],a:0},
 {t:"open",e:"🔎",q:"Buscá una página donde el dibujo cuente algo que las palabras no dicen. Contá qué pasa ahí.",
  h:"Primero encontrala en el libro, después escribí.",
  model:"Lo importante es el ejemplo concreto y que pueda señalar la página."},
 {t:"open",e:"😄",q:"¿Qué parte te dio más risa? ¿Por qué?",
  model:"Es de opinión: vale cualquier respuesta que explique el porqué."},
 {t:"order",e:"🔢",q:"Ordená lo que pasa en el cuento",h:"Si dudás, revisá el libro.",
  items:["El chico le hace una pregunta a su mamá","El chico y Clovis juegan juntos","La mamá le da sus razones"],
  a:["El chico y Clovis juegan juntos","El chico le hace una pregunta a su mamá","La mamá le da sus razones"]}
]},

{id:"l3",dot:"🗣️",name:"Día 3",title:"Día 3 · Personajes y palabras nuevas",sub:"Describir · adivinar qué significa",
rules:`
<div class="rsec"><h4>Describir no es nombrar</h4>
<div class="rrow"><span class="rl"><span class="no">&#10007;</span> "Clovis es un perro"</span><span class="ra">eso es nombrarlo</span></div>
<div class="rrow"><span class="rl"><span class="yes">&#10003;</span> "Clovis es un perro que acompaña al chico a todos lados"</span><span class="ra">eso es describirlo</span></div>
<p class="exline">Para describir decí <b>cómo es</b> y <b>qué hace</b>.</p></div>
<div class="rsec"><h4>Una palabra que no conocés</h4>
<p class="exline">Leé la oración entera y las de al lado. Muchas veces se entiende por ahí. Recién después preguntá o buscala.</p></div>`,
ex:[
 {t:"choice",e:"🗣️",q:"Describir a alguien es decir…",
  o:["cómo es y qué hace","solamente su nombre","en qué año nació"],a:0},
 {t:"open",e:"🐕",q:"Describí a Clovis: ¿cómo es? ¿qué hace?",
  h:"Con dos cosas alcanza.",
  model:"Dos características y, si se puede, un ejemplo del libro. Si solo dice «es un perro», recordale la diferencia entre nombrar y describir."},
 {t:"open",e:"🧒",q:"Describí al chico de la misma manera.",
  h:"Cómo es y qué hace.",
  model:"Igual que antes: cómo es, qué hace, cómo se lleva con Clovis."},
 {t:"choice",e:"👥",q:"¿Quiénes son los personajes del cuento?",
  o:["El chico, Clovis y la mamá","El chico y su maestra","Clovis y otros perros del barrio"],a:0},
 {t:"choice",e:"🤔",q:"Si aparece una palabra que no conocés, lo primero que conviene hacer es…",
  o:["leer lo que está alrededor para darte una idea","saltearla y seguir","cerrar el libro"],a:0},
 {t:"open",e:"📔",q:"Buscá en el libro una palabra que no conocías. Escribila y contá qué creés que significa.",
  h:"Primero adiviná por lo que dice alrededor. Después confirmalo con un adulto.",
  model:"Si eligió una palabra fácil, pedile una que de verdad no supiera. Primero la hipótesis, después la confirmación."},
 {t:"open",e:"📕",q:"¿Por qué te parece que el libro se llama «Vida de perros»?",
  h:"Pensá en lo que hacen los dos amigos.",
  model:"Es interpretación: no hay una sola lectura. Se mira que conecte el título con algo del cuento."}
]},

{id:"l4",dot:"✏️",name:"Día 4",title:"Día 4 · Escribir",sub:"Recomendar, inventar y explicar",
rules:`
<div class="rsec"><h4>Un cuento tiene tres partes</h4>
<p class="exline">Si falta la del medio, no es un cuento: es una descripción.</p>
<div class="rrow"><span class="rl">Comienzo</span><span class="ra">quién es y dónde está</span></div>
<div class="rrow"><span class="rl">Qué pasa</span><span class="ra">el problema, lo que ocurre</span></div>
<div class="rrow"><span class="rl">Final</span><span class="ra">cómo termina</span></div></div>
<div class="rsec"><h4>Palabras para ordenar pasos</h4>
<p class="exline"><b>Primero · Después · Luego · Finalmente</b></p>
<div class="warn">Antes de decir que terminaste, revisá tres cosas: <b>mayúscula</b> al empezar, <b>punto</b> al terminar y <b>espacios</b> entre las palabras.</div></div>`,
ex:[
 {t:"choice",e:"🧩",q:"Un cuento tiene comienzo, ___ y final. ¿Qué va en el medio?",
  viz:{k:"partes",t:["Comienzo","?","Final"]},
  o:["Qué pasa","El título","El nombre del autor"],a:0},
 {t:"order",e:"🔢",q:"Ordená estas palabras para explicar pasos",h:"Tocalas en el orden en que se usan",
  items:["Luego","Finalmente","Primero","Después"],a:["Primero","Después","Luego","Finalmente"]},
 {t:"choice",e:"✍️",q:"¿Cuál de estos sirve para <b>empezar</b> un cuento?",
  o:["Una tarde, Mateo salió a pasear con su perro.","Y colorín colorado.","Finalmente volvieron a casa."],a:0},
 {t:"open",e:"⭐",q:"Recomendale el cuento a un compañero: contá de qué trata, <b>sin contar el final</b>, y por qué te gustó.",
  h:"Dos cosas: de qué trata y por qué lo recomendás.",
  model:"Tienen que estar las dos. Si contó el final, pedile que lo reescriba sin spoilear."},
 {t:"open",e:"🚀",q:"Inventá una aventura nueva para el chico y Clovis. Ponele título, comienzo, qué pasa y final.",paper:true,
  viz:{k:"partes",t:["Comienzo","Qué pasa","Final"],sub:["quién y dónde","el problema","cómo termina"]},
  model:"Mejor en el cuaderno, con renglones. Revisá que tenga las tres partes: si solo describe, le falta el «qué pasa»."},
 {t:"open",e:"🦴",q:"Escribí cómo se cuida a un perro. Usá primero, después, luego y finalmente.",
  h:"Un paso por palabra. Que cada paso sea algo que se hace.",
  viz:{k:"pasos",n:4,cap:["Primero","Después","Luego","Final"]},
  model:"Cuatro pasos, uno por conector, y cada uno una acción concreta («darle de comer», no «cuidarlo bien»)."}
]},

{id:"l5",dot:"🔤",name:"Día 5",title:"Día 5 · Ortografía",sub:"MB · MP · R · RR · B · V · puntuación",
rules:`
<div class="rsec"><h4>1. Antes de B y P va M, nunca N</h4>
<div class="rrow"><span class="rl">ta<b>mb</b>or, so<b>mb</b>ra, bo<b>mb</b>ón</span><span class="ra">MB</span></div>
<div class="rrow"><span class="rl">ca<b>mp</b>ana, tie<b>mp</b>o, ca<b>mp</b>o</span><span class="ra">MP</span></div>
<div class="warn">Es una regla <b>sin excepciones</b> en castellano. Si suena "n" antes de b o p, se escribe <b>m</b>.</div></div>
<div class="rsec"><h4>2. R o RR</h4>
<div class="rrow"><span class="rl">Suena fuerte ENTRE vocales</span><span class="ra">se escribe RR</span></div>
<div class="rrow"><span class="rl">Suena fuerte al PRINCIPIO</span><span class="ra">se escribe una sola R</span></div>
<p class="exline"><b>pe<b>rr</b>o</b>, <b>ca<b>rr</b>o</b>, <b>ba<b>rr</b>io</b> &rarr; va RR porque está entre vocales y suena fuerte.<br>
<b>r</b>atón, <b>r</b>opa &rarr; una sola R, porque está al principio.<br>
co<b>rr</b>er &rarr; RR. Pero ca<b>r</b>o (barato) suena suave: una sola R.</p>
<div class="warn"><b>Prueba del sonido:</b> dec&iacute; la palabra en voz alta y alarg&aacute; la erre. Si "vibra" (pe-rrrr-o), van dos.</div></div>
<div class="rsec"><h4>3. B o V</h4>
<p class="exline">No hay regla que sirva siempre: estas se aprenden de memoria. Las del cuadernillo: <b>buen</b>, <b>barrio</b>, <b>bueno</b>, <b>jugar</b> (con J, no con G).</p></div>`,
ex:[
 {t:"fill",e:"✂️",q:"Separá las palabras y escribí la oración correctamente",h:"ELNIÑOJUEGACONCLOVIS.",labels:[""],a:["el nino juega con clovis"],why:"El niño juega con Clovis."},
 {t:"fill",q:"Separá las palabras y escribí la oración correctamente",h:"ELPERROESUNGRANAMIGO.",labels:[""],a:["el perro es un gran amigo"],why:"El perro es un gran amigo."},
 {t:"fill",e:"🔡",q:"Completá con MB o MP y escribí la palabra entera",h:"Antes de B y de P siempre va M.",labels:["ta__or","ca__ana","so__ra","tie__o"],a:["tambor","campana","sombra","tiempo"]},
 {t:"fill",q:"Completá con MB o MP y escribí la palabra entera",labels:["bo__ón","ca__o"],a:["bombon","campo"]},
 {t:"fill",e:"🔊",q:"Completá con R o RR y escribí la palabra entera",h:"Entre vocales, RR suena fuerte.",labels:["pe__o (el animal)","ca__o (el vehículo)","co__er","pe__era"],a:["perro","carro","correr","perrera"]},
 {t:"choice",q:"El niño es un ___ amigo.",o:["buen","vuén"],a:0},
 {t:"choice",q:"Clovis corre por el ___.",o:["varrio","barrio"],a:1},
 {t:"choice",q:"El niño ___ con su perro.",o:["jueja","juega"],a:1},
 {t:"open",e:"🔍",h:"Leelo en voz alta: donde parás, va un punto.",q:"Revisá este texto: agregá mayúsculas, puntos y espacios donde hagan falta<br><b>unniñoteníaunperrollamadoclovisjuntosjugabanmuchotodoslosdías</b>",model:"Un niño tenía un perro llamado Clovis. Juntos jugaban mucho todos los días.\n\nSon DOS oraciones: cada una con mayúscula al empezar y punto al terminar. Clovis va con mayúscula por ser nombre propio."},
 {t:"choice",e:"🔡",q:"¿Cuál está bien escrita?",o:["tanbor","tambor"],a:1,h:"Pensá qué letra va antes de la B."},
 {t:"choice",e:"🔊",q:"¿Cuál está bien escrita?",o:["caro (un auto que cuesta mucho)","carro (un auto que cuesta mucho)"],a:0,
  h:"Entre vocales, RR suena fuerte y R suena suave."},
 {t:"open",e:"✏️",q:"Escribí una oración que tenga una palabra con MB y otra con RR",model:"Por ejemplo: «La sombra del perro corría por el barrio». Revisá que las dos palabras estén y que la oración tenga mayúscula y punto."}
]},

{id:"lsim",dot:"📝",name:"Día 6 · Simulacro",title:"Día 6 · Otros textos y simulacro",sub:"Texto instructivo + examen de práctica",
rules:`
<div class="rsec"><h4>Reconocer tipos de texto</h4>
<div class="rrow"><span class="rl">Cuenta una historia con personajes</span><span class="ra">cuento</span></div>
<div class="rrow"><span class="rl">Explica cómo hacer algo, paso a paso</span><span class="ra">instrucciones</span></div>
<div class="rrow"><span class="rl">Informa algo que pasó de verdad</span><span class="ra">noticia</span></div>
<p class="exline">Las <b>instrucciones</b> se reconocen fácil: van numeradas o en pasos, y los verbos mandan ("buscá", "elegí", "sentate").</p></div>
<div class="rsec"><h4>Texto para leer (Parte A)</h4>
<div class="rrow"><span class="rl" style="text-align:left"><b>Cómo preparar un lugar cómodo para leer</b><br>
1. Buscá un lugar tranquilo.<br>
2. Elegí un libro que te guste.<br>
3. Sentate cómodamente y tené buena luz.<br>
4. Leé con atención y, si una palabra no se entiende, volvé a leer la oración.</span></div></div>`,
ex:[
 {t:"choice",e:"📄",q:"Parte A · ¿Qué tipo de texto es el de arriba?",o:["Cuento","Instrucciones","Noticia"],a:1,why:"Va en pasos numerados y los verbos dan órdenes."},
 {t:"open",e:"🎯",q:"Parte A · ¿Para qué sirve ese texto?",model:"Para explicar cómo preparar un lugar cómodo antes de ponerse a leer."},
 {t:"choice",e:"🤔",q:"Parte A · ¿Qué tenés que hacer si no entendés una palabra?",o:["Saltearla y seguir","Volver a leer la oración","Cerrar el libro"],a:1},
 {t:"fill",e:"📕",q:"Parte B · 1. Título y autora del libro que leíste",labels:["Título","Autora"],a:["vida de perros","isol"]},
 {t:"open",e:"👥",q:"Parte B · 2. Nombrá dos personajes y describí a uno de ellos",model:"Los dos personajes centrales son el niño y Clovis. La descripción tiene que decir cómo es o qué hace, no solo nombrarlo."},
 {t:"open",e:"💬",q:"Parte B · 3. Contá con tus palabras de qué trata el cuento, en 3 o 4 oraciones",paper:true,model:"Que entren: quiénes son, qué pasa y cómo termina. Conviene hacerlo en el cuaderno y después leerlo en voz alta para ver si se entiende."},
 {t:"open",e:"⭐",q:"Parte B · 4. Escribí una recomendación de dos oraciones para otro chico",model:"Dos oraciones, no una: una dice de qué trata, la otra por qué lo recomienda."},
 {t:"open",e:"✏️",q:"Parte B · 5. Corregí esta oración:<br><b>el niño juega con clovis y son muy amigos</b>",model:"El niño juega con Clovis y son muy amigos.\n\nTres cambios: mayúscula inicial, Clovis con mayúscula (nombre propio) y punto final."},
 {t:"fill",e:"🔤",q:"Parte B · 6. Completá y escribí la palabra entera",labels:["ta__or (MB/MP)","pe__o (R/RR, el animal)","ba__io (R/RR)"],a:["tambor","perro","barrio"]}
]}
];
