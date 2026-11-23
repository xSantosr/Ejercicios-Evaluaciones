const LENGUA = [
{id:"l1",dot:"📕",name:"Día 1",title:"Día 1 · Antes, durante y después de leer",sub:"Anticipar, preguntarse y recapitular",
rules:`
<div class="rsec"><h4>Cómo se trabaja un libro álbum</h4>
<p class="exline">En un libro álbum, <b>las ilustraciones también cuentan</b>. A veces dicen algo distinto de lo que dicen las palabras, y ahí está la gracia.</p>
<div class="rrow"><span class="rl">Antes de leer</span><span class="ra">mirar la tapa y anticipar</span></div>
<div class="rrow"><span class="rl">Durante</span><span class="ra">anotar dudas y detalles</span></div>
<div class="rrow"><span class="rl">Después</span><span class="ra">contar con tus palabras</span></div>
<div class="warn"><b>Para el adulto:</b> esta unidad casi no se autocorrige, porque las respuestas dependen del ejemplar que tiene. Us&aacute; el libro al lado y escuch&aacute; c&oacute;mo justifica. Lo que se eval&uacute;a es que <b>sostenga lo que dice con algo del libro</b>, no que acierte una respuesta.</div></div>`,
ex:[
 {t:"open",q:"Mirá la tapa. ¿Qué personajes aparecen? ¿De qué pensás que va a tratar el cuento? ¿Qué te hace pensar eso?",model:"No hay una respuesta correcta: es una hipótesis. Lo que importa es que la justifique con algo que VE en la tapa («porque el perro está arriba de la cama», «porque el nene tiene cara de…»)."},
 {t:"fill",q:"¿Cómo se llama el perro?",labels:[""],a:["clovis"]},
 {t:"open",q:"Anotá una pregunta que te haya surgido mientras leías",model:"Cualquier pregunta genuina sirve. Si no se le ocurre ninguna, relean juntos una página y preguntale qué le llamó la atención."},
 {t:"open",q:"Elegí una ilustración que te haya llamado la atención y contá por qué",model:"Se busca que describa lo que ve y que diga qué le produjo. Pedile que señale la página."},
 {t:"open",q:"¿Qué quiere averiguar el niño?",model:"La idea central: el nene quiere saber cómo hace su mamá para estar tan segura de que él no es un perro."},
 {t:"open",q:"¿Qué relación hay entre el niño y Clovis?",model:"Son amigos, compañeros, hacen todo juntos. Si dice «son amigos» a secas, pedile un ejemplo del libro."}
]},

{id:"l2",dot:"🔎",name:"Día 2",title:"Día 2 · Comprensión lectora",sub:"Volver al texto a buscar las pistas",
rules:`
<div class="rsec"><h4>La regla de oro de comprensión</h4>
<div class="warn">Si no se acuerda de algo, <b>no se adivina: se vuelve al libro a buscarlo</b>. Esa es la destreza que se eval&uacute;a, m&aacute;s que la memoria.</div>
<p class="exline">Y al responder, <b>oraciones completas</b>. No "en la casa", sino "Los dos juegan en la casa".</p></div>`,
ex:[
 {t:"open",q:"¿Qué le pregunta el niño a su mamá?",model:"Debe reconstruir la pregunta del nene sobre cómo ella sabe que él no es un perro."},
 {t:"open",q:"¿Qué razones le da la mamá para explicarle que no es un perro?",model:"Que busque las razones en el libro y las diga con sus palabras. Si da una sola, pedile otra."},
 {t:"open",q:"¿Qué hacen el niño y Clovis cuando están juntos? Escribí dos acciones que aparezcan en el cuento",model:"Dos acciones concretas, sacadas del libro. Pedile que te muestre dónde las vio."},
 {t:"open",q:"¿Las ilustraciones muestran lo mismo que dicen las palabras, o agregan información? Contá un ejemplo",model:"La respuesta esperada: AGREGAN. A veces hasta contradicen el texto, y ahí aparece el humor. Lo importante es el ejemplo concreto."},
 {t:"open",q:"¿Qué parte te resultó más graciosa? ¿Por qué?",model:"Pregunta de opinión: cualquier respuesta vale si explica el porqué."},
 {t:"open",q:"¿Cómo describirías la amistad entre el niño y Clovis?",model:"Se espera algo más que «buena»: que use dos o tres características."},
 {t:"open",q:"¿Qué título alternativo le pondrías al cuento? ¿Por qué?",model:"El título puede ser cualquiera, pero la justificación tiene que conectarse con algo del cuento."},
 {t:"open",q:"Ordená los momentos principales del cuento (1, 2 y 3) revisando el libro:<br>— El niño comparte juegos y aventuras con Clovis.<br>— El niño le hace una pregunta a su mamá.<br>— La historia muestra cómo se comportan los dos amigos.",model:"El orden se decide revisando el libro, no de memoria. Que te lo justifique señalando las páginas."}
]},

{id:"l3",dot:"🗣️",name:"Día 3",title:"Día 3 · Personajes, lugares y vocabulario",sub:"Describir y buscar palabras nuevas",
rules:`
<div class="rsec"><h4>Describir no es nombrar</h4>
<div class="rrow"><span class="rl"><span class="no">&#10007;</span> "Clovis es un perro"</span><span class="ra">eso es nombrarlo</span></div>
<div class="rrow"><span class="rl"><span class="yes">&#10003;</span> "Clovis es un perro fiel que acompaña al nene a todos lados"</span><span class="ra">eso es describirlo</span></div>
<p class="exline">Una buena descripción dice <b>cómo es</b>, <b>qué hace</b> y <b>cómo se relaciona</b> con los demás.</p></div>
<div class="rsec"><h4>Palabras nuevas</h4>
<p class="exline">Cuando aparece una palabra que no conoce, primero que <b>la adivine por el contexto</b> (qué dice alrededor), y recién después se busca o se pregunta.</p></div>`,
ex:[
 {t:"open",q:"Describí al niño: cómo es, qué hace, cómo se relaciona con los demás",model:"Pedí al menos dos características y un ejemplo del libro."},
 {t:"open",q:"Describí a Clovis con el mismo criterio",model:"Igual que antes: cómo es, qué hace, cómo se lleva con el nene."},
 {t:"open",q:"Elegí dos lugares o espacios que aparezcan en las ilustraciones y describilos",model:"Tiene que mirar las ilustraciones, no inventar. Que señale las páginas."},
 {t:"open",q:"Buscá en el libro tres palabras que te parezcan importantes o nuevas, y escribí qué significan",model:"Si las tres son fáciles, pedile una que de verdad no conociera. Primero que adivine por contexto, después se confirma."},
 {t:"open",q:"Escribí tres palabras que describan la amistad entre el niño y Clovis",model:"Por ejemplo: compañerismo, lealtad, diversión, confianza. Cualquier terna razonable sirve."},
 {t:"open",q:"¿Por qué creés que el libro se llama «Vida de perros»?",model:"Pregunta de interpretación. Lo que se evalúa es que conecte el título con algo del cuento, no que acierte una lectura única."}
]},

{id:"l4",dot:"✏️",name:"Día 4",title:"Día 4 · Escritura",sub:"Recomendar, narrar e instruir",
rules:`
<div class="rsec"><h4>Un texto escrito se arma en tres partes</h4>
<div class="rrow"><span class="rl">Comienzo</span><span class="ra">quién y dónde</span></div>
<div class="rrow"><span class="rl">Nudo</span><span class="ra">qué sucede, el problema</span></div>
<div class="rrow"><span class="rl">Final</span><span class="ra">cómo se resuelve</span></div>
<p class="exline">Si falta el nudo, no hay cuento: hay una descripción.</p></div>
<div class="rsec"><h4>Conectores para instrucciones</h4>
<p class="exline">Sirven para ordenar los pasos: <b>primero · después · luego · finalmente</b>.</p>
<div class="warn"><b>Antes de dar por terminado cualquier escrito, que revise tres cosas:</b> may&uacute;scula al empezar, punto al terminar y espacios entre las palabras. Esa revisi&oacute;n propia es parte de lo que se eval&uacute;a.</div></div>`,
ex:[
 {t:"order",q:"Ordená los conectores para escribir instrucciones",h:"Tocalos en el orden en que se usan",items:["Luego","Finalmente","Primero","Después"],a:["Primero","Después","Luego","Finalmente"]},
 {t:"open",q:"Escribí una recomendación del cuento para un compañero: de qué trata (sin contar el final) y por qué lo recomendarías",model:"Dos cosas tienen que estar: de qué trata Y por qué lo recomienda. Si contó el final, pedile que lo reescriba sin spoilear."},
 {t:"open",q:"Inventá una nueva aventura para el niño y Clovis. Poné título, comienzo, qué sucede y final",paper:true,model:"Conviene hacerla en el cuaderno, con renglones. Revisá que tenga las tres partes: si solo describe, falta el «qué sucede»."},
 {t:"open",q:"Escribí instrucciones para cuidar a un perro, usando primero, después, luego y finalmente",model:"Cuatro pasos, uno por conector, y que cada paso sea una acción concreta («darle de comer», no «cuidarlo bien»)."}
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
 {t:"fill",q:"Separá las palabras y escribí la oración correctamente",h:"ELNIÑOJUEGACONCLOVIS.",labels:[""],a:["el nino juega con clovis"],why:"El niño juega con Clovis."},
 {t:"fill",q:"Separá las palabras y escribí la oración correctamente",h:"ELPERROESUNGRANAMIGO.",labels:[""],a:["el perro es un gran amigo"],why:"El perro es un gran amigo."},
 {t:"fill",q:"Completá con MB o MP y escribí la palabra entera",labels:["ta__or","ca__ana","so__ra","tie__o"],a:["tambor","campana","sombra","tiempo"]},
 {t:"fill",q:"Completá con MB o MP y escribí la palabra entera",labels:["bo__ón","ca__o"],a:["bombon","campo"]},
 {t:"fill",q:"Completá con R o RR y escribí la palabra entera",labels:["pe__o (el animal)","ca__o (el vehículo)","co__er","pe__era"],a:["perro","carro","correr","perrera"]},
 {t:"choice",q:"El niño es un ___ amigo.",o:["buen","vuén"],a:0},
 {t:"choice",q:"Clovis corre por el ___.",o:["varrio","barrio"],a:1},
 {t:"choice",q:"El niño ___ con su perro.",o:["jueja","juega"],a:1},
 {t:"open",q:"Revisá este texto: agregá mayúsculas, puntos y espacios donde hagan falta<br><b>unniñoteníaunperrollamadoclovisjuntosjugabanmuchotodoslosdías</b>",model:"Un niño tenía un perro llamado Clovis. Juntos jugaban mucho todos los días.\n\nSon DOS oraciones: cada una con mayúscula al empezar y punto al terminar. Clovis va con mayúscula por ser nombre propio."},
 {t:"open",q:"Escribí una oración que tenga una palabra con MB y otra con RR",model:"Por ejemplo: «La sombra del perro corría por el barrio». Revisá que las dos palabras estén y que la oración tenga mayúscula y punto."}
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
 {t:"choice",q:"Parte A · ¿Qué tipo de texto es el de arriba?",o:["Cuento","Instrucciones","Noticia"],a:1,why:"Va en pasos numerados y los verbos dan órdenes."},
 {t:"open",q:"Parte A · ¿Para qué sirve ese texto?",model:"Para explicar cómo preparar un lugar cómodo antes de ponerse a leer."},
 {t:"choice",q:"Parte A · ¿Qué tenés que hacer si no entendés una palabra?",o:["Saltearla y seguir","Volver a leer la oración","Cerrar el libro"],a:1},
 {t:"fill",q:"Parte B · 1. Título y autora del libro que leíste",labels:["Título","Autora"],a:["vida de perros","isol"]},
 {t:"open",q:"Parte B · 2. Nombrá dos personajes y describí a uno de ellos",model:"Los dos personajes centrales son el niño y Clovis. La descripción tiene que decir cómo es o qué hace, no solo nombrarlo."},
 {t:"open",q:"Parte B · 3. Contá con tus palabras de qué trata el cuento, en 3 o 4 oraciones",paper:true,model:"Que entren: quiénes son, qué pasa y cómo termina. Conviene hacerlo en el cuaderno y después leerlo en voz alta para ver si se entiende."},
 {t:"open",q:"Parte B · 4. Escribí una recomendación de dos oraciones para otro chico",model:"Dos oraciones, no una: una dice de qué trata, la otra por qué lo recomienda."},
 {t:"open",q:"Parte B · 5. Corregí esta oración:<br><b>el niño juega con clovis y son muy amigos</b>",model:"El niño juega con Clovis y son muy amigos.\n\nTres cambios: mayúscula inicial, Clovis con mayúscula (nombre propio) y punto final."},
 {t:"fill",q:"Parte B · 6. Completá y escribí la palabra entera",labels:["ta__or (MB/MP)","pe__o (R/RR, el animal)","ba__io (R/RR)"],a:["tambor","perro","barrio"]}
]}
];
