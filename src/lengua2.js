const LENGUA2 = [
{id:"l7",dot:"👹",name:"Más cuentos",title:"Otros cuentos del programa",sub:"«Secreto de familia» · «Petit, el monstruo»",ex:[
 {t:"fill",q:"¿Quién escribió «Petit, el monstruo»?",labels:[""],a:["isol"]},
 {t:"choice",q:"La autora de estos cuentos, además de escribirlos…",o:["también hace las ilustraciones","solo escribe y otra persona dibuja","es la protagonista del cuento"],a:0},
 {t:"choice",q:"¿De qué país es la autora?",o:["Argentina","España","México"],a:0},
 {t:"open",q:"Completá la ficha lectora de «Secreto de familia»: título, autora, personajes principales y dónde transcurre",model:"Revisá con el libro delante: que los personajes y el lugar salgan del cuento, no de la imaginación."},
 {t:"open",q:"Completá la ficha lectora de «Petit, el monstruo»: título, autora, personajes principales y dónde transcurre",model:"Igual que la anterior. Si duda con el lugar, que mire las ilustraciones."},
 {t:"open",q:"Describí el lugar donde pasa una escena de «Secreto de familia». Usá por lo menos tres detalles que se vean en las ilustraciones",model:"Que nombre el lugar y agregue detalles concretos (objetos, colores, si es adentro o afuera, de día o de noche). «Una casa» sola no alcanza."},
 {t:"open",q:"Escribí una recomendación breve de «Petit, el monstruo» para un compañero",model:"Dos partes: de qué trata (sin contar el final) y por qué lo recomienda."},
 {t:"open",q:"¿En qué se parecen los cuentos de esta autora que leíste? Pensá en los personajes, en las ilustraciones o en cómo terminan",model:"Pregunta de comparación: tiene que nombrar al menos dos libros y una semejanza concreta."},
 {t:"open",q:"Escribí una nota con datos sobre la autora: qué hace, de dónde es y qué libros suyos leíste",model:"Es el formato «nota de datos sobre la vida y obra del autor» que pide el programa: oraciones cortas con información, no opinión."}
]},

{id:"l8",dot:"🧦",name:"Instructivos",title:"Textos instructivos",sub:"Leer en orden · recetas, títeres, reglamentos",ex:[
 {t:"choice",q:"¿Para qué sirve el texto «Cómo hacer un títere con una media»?",o:["Para contar una historia","Para explicar cómo hacer algo","Para informar una noticia"],a:1},
 {t:"fill",q:"¿Cuántos botones se necesitan para hacer el títere?",labels:[""],a:["re:^(2|dos)$"]},
 {t:"choice",q:"¿Qué hay que hacer ANTES de pegar los botones?",o:["Pegar la lana","Marcar dónde van los ojos","Esperar que se seque"],a:1},
 {t:"order",q:"Ordená estos pasos como aparecen en el texto",items:["Pegar la lana","Esperar que se seque","Marcar los ojos","Pegar los botones"],a:["Marcar los ojos","Pegar los botones","Pegar la lana","Esperar que se seque"]},
 {t:"choice",q:"En el texto, las palabras «marcá», «pegá» y «esperá» sirven para…",o:["decirle al lector qué tiene que hacer","nombrar los materiales","contar lo que hizo un personaje"],a:0},
 {t:"choice",q:"¿Qué pasaría si usás el títere antes del último paso?",o:["Los botones y la lana se podrían despegar","El títere quedaría más lindo","No pasaría nada"],a:0},
 {t:"open",q:"Escribí el reglamento de un juego que conozcas. Poné el nombre del juego, cuántos juegan y por lo menos tres reglas",model:"El programa pide «prescribir acciones a un destinatario real». Que las reglas se entiendan sin explicación extra: probá leérselas a alguien que no conozca el juego."},
 {t:"open",q:"Escribí una receta fácil que sepas hacer. Poné ingredientes y pasos ordenados",paper:true,model:"Que tenga las dos partes (qué se necesita y qué se hace) y que los pasos vayan en orden."}
]},

{id:"l9",dot:"🦕",name:"Informativos",title:"Textos informativos y noticias",sub:"Leer para aprender · completar fichas",ex:[
 {t:"fill",q:"Completá la ficha con datos del texto «Los dinosaurios»",labels:["Un dinosaurio herbívoro","Un dinosaurio carnívoro"],a:["re:^diplodoc(o|us)$","re:^tiranosaurio( rex)?$"]},
 {t:"choice",q:"¿Qué comían los dinosaurios herbívoros?",o:["Carne","Plantas","Piedras"],a:1},
 {t:"choice",q:"¿Para qué le servía el cuello tan largo al Diplodoco?",o:["Para correr más rápido","Para alcanzar las hojas de los árboles","Para nadar"],a:1},
 {t:"choice",q:"Según el texto, ¿qué son los fósiles?",o:["Dinosaurios que siguen vivos","Restos de huesos que quedaron en las rocas","Plantas muy antiguas"],a:1},
 {t:"choice",q:"¿Los dinosaurios vivieron al mismo tiempo que las personas?",o:["Sí","No"],a:1},
 {t:"fill",q:"¿Cómo se llama el dinosaurio encontrado en la Argentina que nombra el texto?",labels:[""],a:["re:^argentinosaur(io|us)$"]},
 {t:"choice",q:"Leé este título: <b>«Encuentran en Neuquén los huesos de un dinosaurio gigante»</b>. ¿Qué tipo de texto es?",o:["Un cuento","Una noticia","Un poema"],a:1},
 {t:"open",q:"Escribí tres cosas nuevas que aprendiste leyendo el texto",model:"Que sean datos del texto, dichos con sus palabras y en oraciones completas."}
]},

{id:"l10",dot:"🎵",name:"Poesía",title:"Rimas, adivinanzas y limericks",sub:"Jugar con las palabras",ex:[
 {t:"choice",q:"¿Qué palabra rima con <b>ratón</b>?",o:["gato","botón","mesa"],a:1},
 {t:"choice",q:"¿Qué palabra rima con <b>estrella</b>?",o:["bella","sol","cielo"],a:0},
 {t:"choice",q:"¿Qué palabra rima con <b>helado</b>?",o:["frío","nieve","pescado"],a:2},
 {t:"choice",q:"¿Cuál de estas palabras NO rima con <b>flor</b>?",o:["color","calor","mesa"],a:2},
 {t:"choice",q:"Adiviná: <i>«Tengo agujas y no sé coser, tengo números y no sé leer.»</i> ¿Qué es?",o:["Un reloj","Un libro","Una tijera"],a:0},
 {t:"choice",q:"Adiviná: <i>«Tiene orejas largas, salta sin parar y le encantan las zanahorias.»</i> ¿Quién es?",o:["El pato","El perro","El conejo"],a:2},
 {t:"choice",q:"Leé este limerick:<br><i>Había una vaca en Tandil<br>que viajaba en un tren de marfil.<br>Mugía en el vagón,<br>comía turrón<br>y bailaba un tango en Tandil.</i><br><br>¿Qué palabra rima con <b>vagón</b>?",o:["tren","turrón","vaca"],a:1},
 {t:"choice",q:"En el mismo limerick, ¿qué palabra rima con <b>marfil</b>?",o:["Tandil","tango","mugía"],a:0},
 {t:"open",q:"Inventá una adivinanza sobre un animal. Dá pistas, pero no digas su nombre",model:"Que funcione: si se la leés a alguien, ¿la puede adivinar? Si dice el nombre del animal en la adivinanza, no vale."},
 {t:"open",q:"Escribí dos versos que rimen entre sí",model:"Que la última palabra de cada verso termine con el mismo sonido."}
]},

{id:"l11",dot:"🅱️",name:"Ortografía +",title:"Ortografía y separación de palabras",sub:"B antes de consonante · MB · MP · R · RR",ex:[
 {t:"fill",q:"Completá con B o V y escribí la palabra entera",labels:["__lanco","__razo","li__ro","som__rero"],a:["blanco","brazo","libro","sombrero"]},
 {t:"fill",q:"Completá con B o V y escribí la palabra entera",labels:["ca__le","__lusa","pue__lo"],a:["cable","blusa","pueblo"]},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["havlar","hablar"],a:1},
 {t:"fill",q:"Completá con MB o MP y escribí la palabra entera",labels:["ca__iar","e__ezar","ho__ro","li__io"],a:["cambiar","empezar","hombro","limpio"]},
 {t:"fill",q:"Completá con R o RR y escribí la palabra entera",labels:["pe__a (la fruta)","a__oz","__isa","ca__eta"],a:["pera","arroz","risa","carreta"]},
 {t:"fill",q:"Separá las palabras y escribí la oración",h:"MIMAMÁMEREGALÓUNLIBRO.",labels:[""],a:["mi mama me regalo un libro"]},
 {t:"fill",q:"Separá las palabras y escribí la oración",h:"LAVACACOMEPASTOENELCAMPO.",labels:[""],a:["la vaca come pasto en el campo"]},
 {t:"open",q:"Escribí una oración que tenga una palabra con BR y otra con MP",model:"Revisá las dos palabras y que la oración tenga mayúscula al principio y punto al final."}
]}
];

const RULES_L2 = {
"lengua.l7":`
<div class="rsec"><h4>Cómo completar una ficha lectora</h4>
<div class="rrow"><span class="rl">Título</span><span class="ra">está en la tapa</span></div>
<div class="rrow"><span class="rl">Autor o autora</span><span class="ra">también en la tapa</span></div>
<div class="rrow"><span class="rl">Personajes</span><span class="ra">quiénes aparecen</span></div>
<div class="rrow"><span class="rl">Lugar</span><span class="ra">dónde pasa la historia</span></div>
<p class="exline">Todo sale <b>del libro</b>. Si no te acordás, volvé a mirarlo.</p></div>
<div class="rsec"><h4>Describir un lugar</h4>
<p class="exline">No alcanza con nombrarlo ("una plaza"). Contá <b>cómo es</b>: qué objetos hay, de qué color, si es adentro o afuera, de día o de noche.</p>
<div class="warn"><b>Para el adulto:</b> estas consignas se contestan con el libro delante. Lo que se evalúa es que lo que dice <b>salga del cuento</b>.</div></div>`,

"lengua.l8":`
<div class="rsec"><h4>Las partes de un texto instructivo</h4>
<div class="rrow"><span class="rl">Título</span><span class="ra">qué se va a hacer</span></div>
<div class="rrow"><span class="rl">Materiales o ingredientes</span><span class="ra">qué se necesita</span></div>
<div class="rrow"><span class="rl">Pasos</span><span class="ra">en orden, uno por uno</span></div>
<div class="warn">Se lee <b>despacio y en orden</b>. Si te salteás un paso o cambiás el orden, lo que estás haciendo sale mal.</div></div>
<div class="rsec"><h4>Texto para leer</h4>
<div class="rrow"><span class="rl" style="text-align:left"><b>Cómo hacer un títere con una media</b><br><br>
<b>Materiales:</b> una media vieja, dos botones, lana, pegamento y un marcador.<br><br>
1. Poné la mano adentro de la media para ver dónde quedan los ojos.<br>
2. Marcá con el marcador el lugar de los ojos.<br>
3. Sacá la mano y pegá los dos botones en las marcas.<br>
4. Pegá la lana arriba, como si fuera el pelo.<br>
5. Esperá a que se seque el pegamento antes de usarlo.</span></div></div>`,

"lengua.l9":`
<div class="rsec"><h4>Leer para aprender</h4>
<p class="exline">Un texto informativo cuenta <b>datos reales</b> sobre un tema. Para completar una ficha, buscá en el texto la <b>palabra exacta</b> que responde cada dato y releé el párrafo donde aparece.</p>
<p class="exline">Una <b>noticia</b> cuenta algo real que pasó hace poco. Su título resume lo más importante.</p></div>
<div class="rsec"><h4>Texto para leer</h4>
<div class="rrow"><span class="rl" style="text-align:left"><b>Los dinosaurios</b><br><br>
Los dinosaurios vivieron hace millones de años, mucho antes de que existieran las personas. Algunos eran enormes y otros eran del tamaño de una gallina.<br><br>
Había dinosaurios herbívoros, que comían plantas, y carnívoros, que comían carne. El Tiranosaurio era carnívoro y tenía dientes muy filosos. El Diplodoco era herbívoro y tenía un cuello larguísimo para alcanzar las hojas de los árboles.<br><br>
Hoy sabemos cómo eran gracias a los fósiles: restos de huesos que quedaron guardados en las rocas durante muchísimo tiempo.<br><br>
En la Argentina se encontraron fósiles de dinosaurios gigantes, como el Argentinosaurio.</span></div></div>`,

"lengua.l10":`
<div class="rsec"><h4>¿Cuándo riman dos palabras?</h4>
<p class="exline">Cuando <b>terminan con el mismo sonido</b>.</p>
<div class="rrow"><span class="rl">ma<b>no</b> / ena<b>no</b></span><span class="ra">riman</span></div>
<div class="rrow"><span class="rl">ma<b>no</b> / so<b>pa</b></span><span class="ra">no riman</span></div>
<div class="warn"><b>Truco:</b> decí las dos palabras en voz alta y escuchá solo el final. Si suena igual, riman.</div></div>
<div class="rsec"><h4>Adivinanzas</h4>
<p class="exline">Describen algo con <b>pistas</b>, sin decir su nombre. Por ejemplo: <i>«Es amarilla por fuera, blanca por dentro, y los monos la pelan.»</i></p></div>
<div class="rsec"><h4>Limericks</h4>
<p class="exline">Son poemas cortos y disparatados, de cinco versos. El 1º, el 2º y el 5º riman entre sí; el 3º y el 4º riman entre ellos.</p></div>`,

"lengua.l11":`
<div class="rsec"><h4>1. Antes de L y R va siempre B</h4>
<div class="rrow"><span class="rl">ha<b>bl</b>ar, ta<b>bl</b>a</span><span class="ra">BL</span></div>
<div class="rrow"><span class="rl">a<b>br</b>igo, ca<b>br</b>a</span><span class="ra">BR</span></div>
<div class="warn">En castellano <b>no existen</b> «vl» ni «vr». Si después viene L o R, la letra es <b>B</b>, sin dudar.</div></div>
<div class="rsec"><h4>2. MB y MP (repaso)</h4>
<p class="exline">Antes de B y P va <b>M</b>, nunca N: ta<b>mb</b>ién, co<b>mp</b>rar.</p></div>
<div class="rsec"><h4>3. R y RR (repaso)</h4>
<p class="exline">Suena fuerte entre vocales: <b>RR</b> (ja<b>rr</b>a). Al principio de la palabra, aunque suene fuerte, va <b>una sola R</b> (<b>r</b>opa). Si suena suave, una sola (ca<b>r</b>a).</p></div>
<div class="rsec"><h4>4. Separar las palabras</h4>
<p class="exline">Cada palabra va separada por un espacio. Las palabras cortitas como <b>a</b>, <b>y</b>, <b>el</b>, <b>en</b>, <b>un</b> también son palabras y van solas.</p>
<div class="warn">Para revisar: <b>señalá con el dedo</b> cada palabra mientras la leés en voz alta. Si con un solo toque dijiste dos palabras, falta un espacio.</div></div>`
};
