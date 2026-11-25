const LENGUA2 = [
{id:"l7",dot:"👹",name:"Más cuentos",title:"Otros cuentos del programa",sub:"«Secreto de familia» · «Petit, el monstruo»",ex:[
 {t:"fill",e:"✍️",q:"¿Quién escribió «Petit, el monstruo»?",h:"El nombre está en la tapa.",labels:[""],a:["isol"]},
 {t:"choice",e:"🎨",q:"La autora de estos dos cuentos, además de escribirlos…",
  o:["también hace los dibujos","solo escribe y otra persona dibuja","es un personaje del cuento"],a:0},
 {t:"choice",e:"🌎",q:"¿De qué país es la autora?",o:["Argentina","España","México"],a:0},
 {t:"choice",e:"🦔",q:"En «Secreto de familia», ¿qué le parece a la nena que es su mamá?",
  o:["Un puercoespín","Una jirafa","Un pez"],a:0,
  ov:[{k:"emo",c:"🦔"},{k:"emo",c:"🦒"},{k:"emo",c:"🐟"}]},
 {t:"choice",e:"👥",q:"¿Quiénes son los personajes de «Secreto de familia»?",
  o:["Una nena y su mamá","Tres hermanos","Una maestra y sus alumnos"],a:0},
 {t:"choice",e:"👦",q:"¿Qué le pasa a Petit en «Petit, el monstruo»?",
  o:["A veces hace cosas buenas y a veces cosas malas","Siempre se porta bien","Nunca habla con nadie"],a:0},
 {t:"choice",e:"❓",q:"¿Quién le hace la pregunta difícil a Petit?",
  o:["Su mamá","Su maestra","Su perro"],a:0},
 {t:"choice",e:"🔍",q:"Los dos cuentos se parecen en algo. ¿En qué?",
  o:["Los escribió y dibujó la misma persona","Los dos pasan en la escuela","Los dos tienen el mismo protagonista"],a:0},
 {t:"choice",e:"📺",q:"De «Petit, el monstruo» se hizo…",
  o:["una serie animada","una película de terror","una canción"],a:0},
 {t:"open",e:"🏠",q:"Elegí una escena de «Secreto de familia» y contá cómo es el lugar. Escribí 3 cosas que se vean en el dibujo.",
  h:"Por ejemplo: qué objetos hay, de qué color, si es de día o de noche.",
  model:"Que nombre el lugar y agregue detalles concretos. «Una casa» sola no alcanza."},
 {t:"open",e:"🏷️",q:"Si tuvieras que ponerle otro título a «Petit, el monstruo», ¿cuál le pondrías? ¿Por qué?",
  h:"Inventá el que quieras, pero explicá por qué.",
  model:"El título puede ser cualquiera. Lo que se mira es que la explicación se conecte con algo del cuento."}
]},

{id:"l8",dot:"🧦",name:"Instructivos",title:"Textos instructivos",sub:"Leer en orden · recetas, títeres, reglamentos",ex:[
 {t:"choice",e:"🧦",q:"¿Para qué sirve el texto «Cómo hacer un títere con una media»?",o:["Para contar una historia","Para explicar cómo hacer algo","Para informar una noticia"],a:1},
 {t:"fill",e:"🔘",h:"Buscalo en la lista de materiales.",q:"¿Cuántos botones se necesitan para hacer el títere?",labels:[""],a:["re:^(2|dos)$"]},
 {t:"choice",e:"⏮️",q:"¿Qué hay que hacer <b>antes</b> de pegar los botones?",h:"Mirá el paso que viene justo antes.",o:["Pegar la lana","Marcar dónde van los ojos","Esperar que se seque"],a:1},
 {t:"order",e:"🔢",q:"Ordená estos pasos como aparecen en el texto",items:["Pegar la lana","Esperar que se seque","Marcar los ojos","Pegar los botones"],a:["Marcar los ojos","Pegar los botones","Pegar la lana","Esperar que se seque"]},
 {t:"choice",e:"👉",q:"En el texto, las palabras «marcá», «pegá» y «esperá» sirven para…",o:["decirle al lector qué tiene que hacer","nombrar los materiales","contar lo que hizo un personaje"],a:0},
 {t:"choice",e:"⚠️",q:"¿Qué pasaría si usás el títere antes del último paso?",o:["Los botones y la lana se podrían despegar","El títere quedaría más lindo","No pasaría nada"],a:0},
 {t:"open",e:"🎲",q:"Escribí el reglamento de un juego que conozcas. Poné el nombre del juego, cuántos juegan y por lo menos tres reglas",model:"El programa pide «prescribir acciones a un destinatario real». Que las reglas se entiendan sin explicación extra: probá leérselas a alguien que no conozca el juego."},
 {t:"open",e:"🍳",viz:{k:"partes",t:["Título","Ingredientes","Pasos"]},q:"Escribí una receta fácil que sepas hacer. Poné ingredientes y pasos ordenados",paper:true,model:"Que tenga las dos partes (qué se necesita y qué se hace) y que los pasos vayan en orden."}
]},

{id:"l9",dot:"🦕",name:"Informativos",title:"Textos informativos y noticias",sub:"Leer para aprender · completar fichas",ex:[
 {t:"fill",e:"🦕",q:"Completá la ficha con datos del texto «Los dinosaurios»",h:"Las respuestas están en el texto de arriba.",labels:["Un dinosaurio herbívoro","Un dinosaurio carnívoro"],a:["re:^diplodoc(o|us)$","re:^tiranosaurio( rex)?$"]},
 {t:"choice",e:"🌿",q:"¿Qué comían los dinosaurios herbívoros?",o:["Carne","Plantas","Piedras"],a:1},
 {t:"choice",e:"🦕",q:"¿Para qué le servía el cuello tan largo al Diplodoco?",h:"Releé el párrafo donde lo nombran.",o:["Para correr más rápido","Para alcanzar las hojas de los árboles","Para nadar"],a:1},
 {t:"choice",e:"🦴",q:"Según el texto, ¿qué son los fósiles?",o:["Dinosaurios que siguen vivos","Restos de huesos que quedaron en las rocas","Plantas muy antiguas"],a:1},
 {t:"choice",e:"⏳",q:"¿Los dinosaurios vivieron al mismo tiempo que las personas?",o:["Sí","No"],a:1},
 {t:"fill",e:"🇦🇷",q:"¿Cómo se llama el dinosaurio encontrado en la Argentina que nombra el texto?",labels:[""],a:["re:^argentinosaur(io|us)$"]},
 {t:"choice",e:"📰",q:"Leé este título: <b>«Encuentran en Neuquén los huesos de un dinosaurio gigante»</b>. ¿Qué tipo de texto es?",o:["Un cuento","Una noticia","Un poema"],a:1},
 {t:"open",e:"💡",q:"Escribí tres cosas nuevas que aprendiste leyendo el texto",model:"Que sean datos del texto, dichos con sus palabras y en oraciones completas."}
]},

{id:"l10",dot:"🎵",name:"Poesía",title:"Rimas, adivinanzas y limericks",sub:"Jugar con las palabras",ex:[
 {t:"choice",q:"¿Qué palabra rima con <b>ratón</b>?",o:["gato","botón","mesa"],a:1,h:"Decilas en voz alta.",
  ov:[{k:"emo",c:"🐈"},{k:"emo",c:"🔘"},{k:"emo",c:"🪑"}]},
 {t:"choice",e:"⭐",q:"¿Qué palabra rima con <b>estrella</b>?",o:["bella","sol","cielo"],a:0,
  h:"Decilas en voz alta, una atrás de la otra."},
 {t:"choice",q:"¿Qué palabra rima con <b>helado</b>?",o:["frío","nieve","pescado"],a:2,
  ov:[{k:"emo",c:"❄️"},{k:"emo",c:"🌨️"},{k:"emo",c:"🐟"}]},
 {t:"choice",e:"🌸",q:"Tres de estas riman con <b>flor</b> y una no. ¿Cuál <b>no</b> rima?",
  o:["color","calor","mesa"],a:2,h:"Probá diciendo flor y cada palabra, una atrás de la otra."},
 {t:"fill",e:"🕐",q:"Adiviná y escribí qué es:<br><i>«Tengo agujas y no sé coser, tengo números y no sé leer.»</i>",
  h:"Las agujas y los números están en el mismo objeto.",labels:[""],a:["reloj"]},
 {t:"choice",q:"Adiviná: <i>«Tiene orejas largas, salta sin parar y le encantan las zanahorias.»</i>",
  o:["El pato","El perro","El conejo"],a:2,
  ov:[{k:"emo",c:"🦆"},{k:"emo",c:"🐕"},{k:"emo",c:"🐇"}]},
 {t:"choice",e:"🐄",sobreTexto:true,q:"Leé este limerick:<br><i>Había una vaca en Tandil<br>que viajaba en un tren de marfil.<br>Mugía en el vagón,<br>comía turrón<br>y bailaba un tango en Tandil.</i><br><br>¿Qué palabra rima con <b>vagón</b>?",
  o:["tren","turrón","vaca"],a:1,h:"Fijate cómo termina cada palabra."},
 {t:"fill",e:"🔊",sobreTexto:true,q:"En el mismo limerick, ¿qué palabra rima con <b>marfil</b>?",
  h:"Está en el primer verso y en el último.",labels:[""],a:["tandil"]},
 {t:"open",e:"🐾",q:"Inventá una adivinanza sobre un animal. Dá pistas, pero no digas su nombre.",
  h:"Dos o tres pistas alcanzan.",
  model:"Que funcione: si se la leés a alguien, ¿la puede adivinar? Si nombra al animal adentro de la adivinanza, no vale."},
 {t:"open",e:"✍️",q:"Escribí dos versos que rimen entre sí.",
  h:"Lo que importa es cómo termina cada uno.",
  model:"Que la última palabra de cada verso termine con el mismo sonido. Puede ser disparatado: eso no resta."}
]},

{id:"l11",dot:"🅱️",name:"Ortografía +",title:"Ortografía y separación de palabras",sub:"B antes de consonante · MB · MP · R · RR",ex:[
 {t:"fill",e:"🅱️",q:"Completá con B o V y escribí la palabra entera",
  h:"Antes de L y de R siempre va B.",
  labels:["__lanco","__razo","li__ro","som__rero"],a:["blanco","brazo","libro","sombrero"]},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["cable","cavle"],a:0,h:"Pensá qué letra va antes de la L."},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["havlar","hablar"],a:1},
 {t:"fill",e:"🔡",q:"Completá con MB o MP y escribí la palabra entera",
  h:"Antes de B y de P siempre va M.",
  labels:["ca__iar","e__ezar","ho__ro","li__io"],a:["cambiar","empezar","hombro","limpio"]},
 {t:"choice",e:"🔊",q:"¿Cuál está bien escrita?",o:["caro (barato)","carro (barato)"],a:0,
  h:"Entre vocales, RR suena fuerte y R suena suave."},
 {t:"fill",e:"🔊",q:"Completá con R o RR y escribí la palabra entera",
  labels:["pe__a (la fruta)","a__oz","__isa","ca__eta"],a:["pera","arroz","risa","carreta"]},
 {t:"fill",e:"✂️",q:"Separá las palabras y escribí la oración",h:"MIMAMÁMEREGALÓUNLIBRO.",labels:[""],a:["mi mama me regalo un libro"]},
 {t:"fill",e:"🐄",q:"Separá las palabras y escribí la oración",h:"LAVACACOMEPASTOENELCAMPO.",labels:[""],a:["la vaca come pasto en el campo"]},
 {t:"open",e:"✏️",q:"Escribí una oración que tenga una palabra con BR y otra con MP.",
  h:"Mayúscula al empezar y punto al terminar.",
  model:"Revisá las dos palabras y que la oración tenga mayúscula al principio y punto al final."}
]}
,

{id:"l12",dot:"👏",name:"Sílabas",title:"Separar en sílabas",sub:"Fuera del programa de ingreso · práctica extra",

ex:[
 {t:"choice",e:"👏",q:"¿Cuántas sílabas tiene <b>CASA</b>?",viz:{k:"letras",w:"CASA"},
  h:"Decila en voz alta y dale una palmada a cada golpe de voz.",o:["2","1","3"],a:0},
 {t:"fill",e:"✂️",q:"Separá en sílabas",h:"Usá guiones entre cada golpe de voz.",
  labels:["PELOTA","CAMINO"],a:["re:^pe[ /·-]+lo[ /·-]+ta$","re:^ca[ /·-]+mi[ /·-]+no$"]},
 {t:"choice",e:"🔍",sobreTexto:true,q:"¿Cuál de estas separaciones de <b>CUENTO</b> está bien?",
  o:["cuen-to","cu-en-to","c-uen-to"],a:0,
  why:"La <b>ue</b> va junta: suena en un solo golpe de voz."},
 {t:"fill",e:"🔢",q:"¿Cuántas sílabas tiene cada palabra? Escribí el número.",
  h:"Contá las palmadas.",labels:["SOL","ÁRBOL","TELÉFONO"],a:["1","2","4"]},
 {t:"choice",e:"1️⃣",q:"Una palabra de una sola sílaba se llama…",
  o:["monosílaba","bisílaba","trisílaba"],a:0},
 {t:"choice",e:"3️⃣",q:"¿Cuál de estas palabras tiene <b>3</b> sílabas?",
  o:["ventana","mesa","pan"],a:0,h:"Probá con las palmadas, una por una."},
 {t:"fill",e:"✂️",q:"Separá en sílabas",h:"Cuidado con las vocales que van juntas.",
  labels:["ESCUELA","CUADERNO"],a:["re:^es[ /·-]+cue[ /·-]+la$","re:^cua[ /·-]+der[ /·-]+no$"]},
 {t:"choice",e:"🔤",q:"Toda sílaba tiene por lo menos…",
  o:["una vocal","una consonante","tres letras"],a:0},
 {t:"open",e:"✍️",q:"Escribí tu nombre separado en sílabas y decí cuántas tiene.",
  h:"Dale una palmada a cada golpe de voz.",
  model:"Que el nombre quede partido en trozos que se puedan decir solos y que cada trozo tenga una vocal. El número tiene que coincidir con la cantidad de trozos."}
]},

{id:"l13",dot:"🏷️",name:"Clases de palabras",title:"Sustantivo, adjetivo, verbo y pronombre",sub:"Fuera del programa de ingreso · práctica extra",

ex:[
 {t:"choice",e:"🐈",sobreTexto:true,q:"En la oración «El gato negro duerme», ¿cuál es el <b>sustantivo</b>?",
  o:["gato","negro","duerme"],a:0,why:"Es lo que <b>es</b>: la cosa de la que habla la oración."},
 {t:"choice",e:"🎨",sobreTexto:true,q:"En esa misma oración, ¿cuál es el <b>adjetivo</b>?",
  o:["negro","gato","duerme"],a:0,why:"Dice <b>cómo es</b>."},
 {t:"choice",e:"🏃",sobreTexto:true,q:"Y en esa oración, ¿cuál es el <b>verbo</b>?",
  o:["duerme","gato","negro"],a:0,why:"Dice <b>qué hace</b>."},
 {t:"fill",e:"📖",sobreTexto:true,q:"Escribí el <b>verbo</b> de esta oración:<br><i>«La maestra lee un cuento.»</i>",
  h:"¿Qué hace?",labels:[""],a:["lee"]},
 {t:"choice",e:"🔠",q:"Un sustantivo propio siempre se escribe…",
  o:["con mayúscula","con minúscula","entre comillas"],a:0},
 {t:"choice",e:"📍",q:"¿Cuál de estas palabras es un sustantivo <b>propio</b>?",
  o:["Mendoza","ciudad","grande"],a:0},
 {t:"choice",e:"📏",q:"¿Cuál de estas palabras dice <b>cómo es</b> algo?",
  o:["alto","salta","perro"],a:0},
 {t:"fill",e:"🔁",q:"Escribí el pronombre que reemplaza a <b>María</b>.",
  h:"Es una sola persona y es mujer.",labels:[""],a:["ella"]},
 {t:"choice",e:"👥",q:"La palabra «nosotros» es…",
  o:["un pronombre","un adjetivo","un verbo"],a:0,why:"Reemplaza a varios nombres a la vez."},
 {t:"fill",e:"⚽",q:"Completá con el pronombre que corresponde:<br><i>«___ juego al fútbol.»</i>",
  h:"¿Quién juega: la persona que habla?",labels:[""],a:["yo"]},
 {t:"open",e:"✍️",q:"Escribí una oración que tenga un sustantivo, un adjetivo y un verbo. Después escribí al lado cuál es cada uno.",
  h:"Por ejemplo: qué es, cómo es y qué hace.",
  model:"Que la oración tenga las tres clases y que las identifique bien. Si le cuesta, hacele las tres preguntas: ¿qué es? ¿cómo es? ¿qué hace?"}
]}
];


const RULES_L2 = {
"lengua.l12":`
<div class="rsec"><h4>Una sílaba es un golpe de voz</h4>
<p class="exline">Decí la palabra en voz alta y dale <b>una palmada por cada golpe</b>. Esa cantidad de palmadas es la cantidad de sílabas.</p>
<div class="rrow"><span class="rl">pa · to</span><span class="ra">2 palmadas</span></div>
<div class="rrow"><span class="rl">ma · ri · po · sa</span><span class="ra">4 palmadas</span></div></div>
<div class="rsec"><h4>Toda sílaba lleva una vocal</h4>
<p class="exline">Las vocales son <b>a e i o u</b>. Si un trozo quedó sin vocal, la separación está mal.</p></div>
<div class="rsec"><h4>Según cuántas tiene</h4>
<div class="rrow"><span class="rl">1 sílaba</span><span class="ra">monosílaba</span></div>
<div class="rrow"><span class="rl">2 sílabas</span><span class="ra">bisílaba</span></div>
<div class="rrow"><span class="rl">3 sílabas</span><span class="ra">trisílaba</span></div>
<div class="rrow"><span class="rl">4 o más</span><span class="ra">polisílaba</span></div></div>
<div class="rsec"><h4>Para separar, escribí guiones</h4>
<div class="warn">Sirve el guion, la barra o un espacio: <b>pa-to</b>, <b>pa/to</b> o <b>pa to</b>.</div></div>`,
"lengua.l13":`
<div class="rsec"><h4>Tres preguntas para reconocerlas</h4>
<div class="rrow"><span class="rl">¿Qué es?</span><span class="ra">sustantivo · <i>mesa, Buenos Aires</i></span></div>
<div class="rrow"><span class="rl">¿Cómo es?</span><span class="ra">adjetivo · <i>grande</i></span></div>
<div class="rrow"><span class="rl">¿Qué hace?</span><span class="ra">verbo · <i>corre</i></span></div>
<p class="exline">En «la bicicleta roja anda», <i>bicicleta</i> es lo que es, <i>roja</i> es cómo es y <i>anda</i> es qué hace.</p></div>
<div class="rsec"><h4>Sustantivo común y propio</h4>
<div class="rrow"><span class="rl">común</span><span class="ra">nombra cualquiera: <i>ciudad</i></span></div>
<div class="rrow"><span class="rl">propio</span><span class="ra">nombra a uno solo y va con mayúscula</span></div></div>
<div class="rsec"><h4>Los pronombres reemplazan al nombre</h4>
<p class="exline"><b>yo · vos · él · ella · nosotros · ustedes · ellos</b></p>
<p class="exline">En vez de repetir «Martín», se dice «él».</p></div>`,
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
