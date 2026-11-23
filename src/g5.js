/* ================= INGRESO A 5º ================= */
const G5 = {
ing:[
{id:"g1",dot:"⏪",name:"Was / were",title:"El pasado de to be",sub:"was · were · wasn't · weren't",
rules:`
<div class="rsec"><h4>Was o were</h4>
<div class="rrow"><span class="rl">I / he / she / it</span><span class="ra">was</span></div>
<div class="rrow"><span class="rl">you / we / they</span><span class="ra">were</span></div>
<p class="exline">The film <b>was</b> boring. &nbsp; We <b>were</b> at the cinema.</p>
<p class="exline">Negativo: <b>wasn't / weren't</b>. Pregunta: <b>Were</b> they at home? &rarr; Yes, they were.</p></div>`,
ex:[
 {t:"choice",q:"I ___ happy yesterday.",o:["was","were"],a:0},
 {t:"choice",q:"They ___ at home last weekend.",h:"No estaban",o:["weren't","wasn't"],a:0},
 {t:"choice",q:"___ you at school yesterday?",o:["Were","Was"],a:0},
 {t:"choice",q:"<span class='en'>Was she tired?</span>",h:"Respondé que SÍ",o:["Yes, she was.","Yes, she were.","Yes, she is."],a:0},
 {t:"choice",q:"The dogs ___ hungry.",o:["were","was"],a:0},
 {t:"choice",q:"Yesterday it ___ very cold.",o:["was","is","were"],a:0},
 {t:"choice",q:"Where ___ you last night?",o:["were","was"],a:0}
]},
{id:"g2",dot:"📜",name:"Past simple",title:"Past simple",sub:"Verbos regulares e irregulares · didn't · Did…?",
rules:`
<div class="rsec"><h4>Verbos regulares: +ed</h4>
<div class="rrow"><span class="rl">cook</span><span class="ra">cooked</span></div>
<div class="rrow"><span class="rl">terminado en e: dance</span><span class="ra">danced</span></div>
<div class="rrow"><span class="rl">consonante + y: cry</span><span class="ra">cried</span></div>
<div class="rrow"><span class="rl">corto, vocal + consonante: plan</span><span class="ra">planned</span></div></div>
<div class="rsec"><h4>Irregulares</h4>
<p class="exline">No siguen regla: se aprenden de memoria. Ejemplos: write &rarr; <b>wrote</b>, buy &rarr; <b>bought</b>.</p></div>
<div class="rsec"><h4>Negativo y pregunta</h4>
<div class="warn">Con <b>didn't</b> y <b>Did</b>, el verbo vuelve a su forma base: She <b>didn't call</b> me. <b>Did</b> they <b>win</b>?</div></div>`,
ex:[
 {t:"choice",q:"I ___ football yesterday.",o:["played","play","plaied"],a:0},
 {t:"fill",q:"Escribí el pasado (regulares)",labels:["watch","study","stop","like"],a:["watched","studied","stopped","liked"]},
 {t:"fill",q:"Escribí el pasado (irregulares)",labels:["go","have","eat","see"],a:["went","had","ate","saw"]},
 {t:"choice",q:"I ___ have breakfast yesterday.",o:["didn't","don't","wasn't"],a:0},
 {t:"choice",q:"<span class='en'>Did you go to the park?</span>",h:"Respondé que NO",o:["No, I didn't.","No, I wasn't.","No, I don't."],a:0},
 {t:"choice",q:"She didn't ___ the film.",o:["like","liked"],a:0},
 {t:"choice",q:"Yesterday we ___ to the beach.",o:["went","go","goed"],a:0},
 {t:"choice",q:"___ they win the match?",o:["Did","Do","Were"],a:0}
]},
{id:"g3",dot:"📏",name:"Comparar",title:"Comparativos y superlativos",sub:"-er / -est · more / the most · good / bad",
rules:`
<div class="rsec"><h4>Adjetivos cortos</h4>
<div class="rrow"><span class="rl">fast</span><span class="ra">faster · the fastest</span></div>
<div class="rrow"><span class="rl">terminado en e: nice</span><span class="ra">nicer · the nicest</span></div>
<div class="rrow"><span class="rl">vocal + consonante: thin</span><span class="ra">thinner · the thinnest</span></div>
<div class="rrow"><span class="rl">terminado en y: easy</span><span class="ra">easier · the easiest</span></div></div>
<div class="rsec"><h4>Adjetivos largos</h4>
<p class="exline"><b>more</b> beautiful · <b>the most</b> beautiful. Para comparar dos cosas se usa <b>than</b>.</p></div>
<div class="rsec"><h4>Irregulares</h4>
<div class="warn">Hay dos que no siguen ninguna regla: los de <b>bueno</b> y <b>malo</b>. Tienen formas propias que hay que memorizar.</div></div>`,
ex:[
 {t:"choice",q:"The cable car is ___ than walking.",o:["quicker","more quick","quickest"],a:0},
 {t:"choice",q:"Amusement parks are ___ than exhibitions.",o:["more interesting","interestinger","the most interesting"],a:0},
 {t:"fill",q:"Escribí el comparativo",labels:["big","happy","small"],a:["bigger","happier","smaller"]},
 {t:"choice",q:"Elephants are ___ animals on land.",o:["the biggest","the bigger","the most big"],a:0},
 {t:"choice",q:"This is ___ day of my life!",o:["the best","the goodest","the better"],a:0},
 {t:"choice",q:"My cold is ___ today than yesterday.",o:["worse","badder","worst"],a:0},
 {t:"choice",q:"Mount Everest is the ___ mountain in the world.",o:["highest","higher","most high"],a:0}
]},
{id:"g4",dot:"🥚",name:"Some / any",title:"Cantidades",sub:"a / an · some / any · How much / How many",
rules:`
<div class="rsec"><h4>Contables e incontables</h4>
<p class="exline"><b>Contables:</b> se pueden contar (one book, two books). <b>Incontables:</b> no tienen plural (milk, rice, bread).</p></div>
<div class="rsec"><h4>Some y any</h4>
<div class="rrow"><span class="rl">afirmativas</span><span class="ra">some</span></div>
<div class="rrow"><span class="rl">negativas y preguntas</span><span class="ra">any</span></div>
<p class="exline">There's <b>some</b> milk. &nbsp; Are there <b>any</b> apples?</p></div>
<div class="rsec"><h4>¿Cuánto? ¿Cuántos?</h4>
<div class="rrow"><span class="rl">contable en plural</span><span class="ra">How many books…?</span></div>
<div class="rrow"><span class="rl">incontable</span><span class="ra">How much water…?</span></div></div>`,
ex:[
 {t:"choice",q:"Is there ___ egg on the table?",o:["an","a","some"],a:0},
 {t:"choice",q:"Are there ___ cookies?",o:["any","some","a"],a:0},
 {t:"choice",q:"There's ___ ham in the fridge.",o:["some","any","a"],a:0},
 {t:"choice",q:"How ___ snow is there?",o:["much","many"],a:0},
 {t:"choice",q:"How ___ raccoons are there in North America?",o:["many","much"],a:0},
 {t:"choice",q:"There aren't ___ bananas.",o:["any","some"],a:0},
 {t:"choice",q:"¿Cuál es <b>incontable</b>?",o:["water","apple","chair"],a:0},
 {t:"choice",q:"How ___ sugar do you want?",o:["much","many"],a:0}
]},
{id:"g5",dot:"🕶️",name:"Whose y más",title:"Whose · past continuous · could · planes",sub:"mine / hers · was …ing · could · present continuous para el futuro",
rules:`
<div class="rsec"><h4>¿De quién es?</h4>
<div class="rrow"><span class="rl">my &rarr; mine</span><span class="ra">your &rarr; yours</span></div>
<div class="rrow"><span class="rl">his &rarr; his</span><span class="ra">our &rarr; ours</span></div>
<p class="exline"><b>Whose</b> bag is this? &rarr; It's <b>ours</b>. (va solo, sin sustantivo después)</p></div>
<div class="rsec"><h4>Past continuous</h4>
<p class="exline">Acción en desarrollo en el pasado: <b>was / were + -ing</b>. They <b>were dancing</b>.</p></div>
<div class="rsec"><h4>Could</h4>
<p class="exline">Es el pasado de <b>can</b>: My grandpa <b>could</b> run fast when he was young.</p></div>
<div class="rsec"><h4>Planes</h4>
<p class="exline">Para un plan ya arreglado se usa el present continuous con una palabra de futuro: I'm <b>meeting</b> Sara <b>tomorrow</b>.</p></div>`,
ex:[
 {t:"choice",q:"Whose sunglasses are those? They're not mine. They're ___.",h:"de ella",o:["hers","her","she"],a:0},
 {t:"choice",q:"Is this your pen? Yes, it's ___.",o:["mine","my","me"],a:0},
 {t:"choice",q:"I ___ wearing a jacket.",h:"No tenía puesta",o:["wasn't","weren't","didn't"],a:0},
 {t:"choice",q:"We ___ watching you.",o:["were","was"],a:0},
 {t:"choice",q:"<span class='en'>Are you playing soccer tonight?</span>",o:["No, we're having a party.","No, we had a party yesterday.","No, we were having a party."],a:0},
 {t:"choice",q:"When I was five, I ___ swim.",o:["could","can"],a:0},
 {t:"choice",q:"I ___ rollerblade when I was little.",h:"No podía",o:["couldn't","can't","didn't"],a:0},
 {t:"choice",q:"___ book is this?",o:["Whose","Who","Who's"],a:0}
]}
],

mate:[
{id:"m1",dot:"🔢",name:"Números grandes",title:"Números grandes y cálculo mental",sub:"Valor posicional · × y ÷ por 10, 100 y 1.000 · aproximar",
rules:`
<div class="rsec"><h4>Multiplicar y dividir por 10, 100 y 1.000</h4>
<div class="rrow"><span class="rl">× 10, × 100, × 1.000</span><span class="ra">se agregan 1, 2 o 3 ceros</span></div>
<div class="rrow"><span class="rl">÷ 10, ÷ 100, ÷ 1.000</span><span class="ra">se sacan 1, 2 o 3 ceros</span></div>
<p class="exline">Ejemplo: 27 × 100 = 2.700 &nbsp; y &nbsp; 9.000 ÷ 100 = 90.</p></div>
<div class="rsec"><h4>Calcular aproximadamente</h4>
<p class="exline">Redondeá a números fáciles: 498 + 303 está cerca de <b>500 + 300 = 800</b>. Sirve para controlar si una cuenta dio bien.</p></div>
<div class="rsec"><h4>Cálculos que conviene saber</h4>
<p class="exline">25 × 2 = 50 y 25 × 4 = 100: con esos podés armar muchos otros.</p></div>`,
ex:[
 {t:"fill",q:"Calculá",labels:["45 × 10","45 × 100","120 × 10","8 × 1.000"],a:["450","4500","1200","8000"]},
 {t:"fill",q:"Calculá",labels:["3.600 ÷ 10","5.000 ÷ 100","70.000 ÷ 1.000"],a:["360","50","70"]},
 {t:"choice",q:"El resultado de 297 + 405 está cerca de…",o:["700","600","800"],a:0},
 {t:"fill",q:"Descomponé",labels:["25.308 ="],a:["20000+5000+300+8"]},
 {t:"fill",q:"En el número 47.215, ¿cuánto vale el 7?",labels:[""],a:["7000"]},
 {t:"order",q:"Ordená de menor a mayor",items:["10.100","10.010","11.000","10.001"],a:["10.001","10.010","10.100","11.000"]},
 {t:"fill",q:"Calculá mentalmente",labels:["25 × 4","25 × 8","50 × 6"],a:["100","200","300"]}
]},
{id:"m2",dot:"✖️",name:"Multiplicar y dividir",title:"Multiplicar y dividir",sub:"Problemas · relación entre las dos operaciones",
rules:`
<div class="rsec"><h4>Una es la inversa de la otra</h4>
<p class="exline">Si sabés que <b>7 × 8 = 56</b>, también sabés que <b>56 ÷ 8 = 7</b> y <b>56 ÷ 7 = 8</b>.</p></div>
<div class="rsec"><h4>Dos maneras de dividir</h4>
<div class="rrow"><span class="rl">Repartir: ¿cuánto le toca a cada uno?</span><span class="ra">reparto</span></div>
<div class="rrow"><span class="rl">Armar grupos: ¿cuántas veces entra?</span><span class="ra">partición</span></div>
<p class="exline">Las dos se resuelven con la misma cuenta, pero conviene entender qué te preguntan.</p></div>`,
ex:[
 {t:"fill",q:"Calculá",labels:["9 × 8","7 × 6","8 × 8","12 × 5"],a:["72","42","64","60"]},
 {t:"fill",q:"Calculá",labels:["56 ÷ 7","81 ÷ 9","72 ÷ 8","60 ÷ 12"],a:["8","9","9","5"]},
 {t:"fill",q:"Un teatro tiene <b>15</b> filas de <b>12</b> butacas. ¿Cuántas butacas hay?",labels:["Respuesta"],a:["180"]},
 {t:"fill",q:"Se reparten <b>96</b> figuritas entre <b>8</b> chicos. ¿Cuántas recibe cada uno?",labels:["Respuesta"],a:["12"]},
 {t:"fill",q:"¿Cuántas bolsas de <b>6</b> naranjas se arman con <b>84</b> naranjas?",labels:["Respuesta"],a:["14"]},
 {t:"choice",q:"Con <b>3</b> remeras y <b>5</b> pantalones, ¿cuántos conjuntos hay? ¿Qué cuenta lo resuelve?",o:["3 × 5","3 + 5","5 − 3"],a:0},
 {t:"fill",q:"Si 6 × 25 = 150, ¿cuánto es 150 ÷ 6?",labels:[""],a:["25"]}
]},
{id:"m3",dot:"➗",name:"División",title:"La división: resto y estimación",sub:"¿Se puede seguir repartiendo? · estimar el cociente",
rules:`
<div class="rsec"><h4>Las partes de la división</h4>
<p class="exline">En <b>47 ÷ 5</b>: el cociente es 9 y el resto es 2, porque <b>5 × 9 + 2 = 47</b>.</p>
<div class="warn">El resto siempre es <b>menor que el divisor</b>. Si te da igual o mayor, el cociente puede ser más grande.</div></div>
<div class="rsec"><h4>¿Se puede repartir lo que sobra?</h4>
<p class="exline">Depende de qué se reparte: una torta se puede partir; una persona, no.</p></div>
<div class="rsec"><h4>Estimar antes de dividir</h4>
<p class="exline">Para 250 ÷ 8, probá multiplicando el divisor: 8 × 10 = 80, 8 × 30 = 240. El cociente está cerca de 30.</p></div>`,
ex:[
 {t:"fill",q:"Resolvé 75 ÷ 4",h:"Pensá cuántos grupos de 4 entran y qué sobra",labels:["Cociente","Resto"],a:["18","3"]},
 {t:"fill",q:"Resolvé 100 ÷ 7",labels:["Cociente","Resto"],a:["14","2"]},
 {t:"choice",q:"Se reparten <b>7</b> chocolates entre <b>2</b> chicos en partes iguales. ¿Se puede repartir el que sobra?",o:["Sí, partiéndolo por la mitad","No, nunca"],a:0},
 {t:"choice",q:"En una división por 6, el resto puede ser…",o:["5","6","8"],a:0},
 {t:"choice",q:"El cociente de 438 ÷ 4 está entre…",o:["100 y 200","10 y 20","1.000 y 2.000"],a:0},
 {t:"fill",q:"Hay <b>130</b> alumnos y en cada micro entran <b>30</b>. ¿Cuántos micros hacen falta?",labels:["Respuesta"],a:["5"]},
 {t:"choice",q:"¿Cuál es el resultado aproximado de 3.150 ÷ 3?",o:["1.000","100","10.000"],a:0}
]},
{id:"m4",dot:"🍕",name:"Fracciones",title:"Fracciones: medios, cuartos y octavos",sub:"Partes iguales de un entero · equivalencias",
rules:`
<div class="rsec"><h4>¿Qué es una fracción?</h4>
<p class="exline">Es una parte de un entero dividido en <b>partes iguales</b>. El número de abajo dice en cuántas partes se dividió; el de arriba, cuántas se toman.</p></div>
<div class="rsec"><h4>Equivalencias</h4>
<p class="exline">Si cortás cada parte por la mitad, tenés el doble de partes, pero la misma cantidad de torta. Por eso <b>1/3 = 2/6</b>.</p>
<div class="warn">Dibujá un rectángulo y partilo: ver las partes ayuda más que la cuenta.</div></div>`,
ex:[
 {t:"choice",viz:{k:"fraction",shape:"circle",n:1,d:8},q:"Una pizza se corta en 8 partes iguales. ¿Cuánto es la parte pintada?",o:["1/8 (un octavo)","1/4 (un cuarto)","1/2 (un medio)"],a:0},
 {t:"choice",q:"¿Cuántos cuartos forman un entero?",o:["4","2","8"],a:0},
 {t:"choice",viz:{k:"fraction",n:1,d:2},q:"1/2 es lo mismo que…",o:["2/4","1/4","1/8"],ov:[{k:"fraction",n:2,d:4},{k:"fraction",n:1,d:4},{k:"fraction",n:1,d:8}],a:0},
 {t:"fill",q:"¿Cuántos octavos hay en un cuarto?",labels:[""],a:["2"]},
 {t:"choice",q:"¿Qué es más: 3/4 o 1/2?",o:["3/4","1/2","Son iguales"],ov:[{k:"fraction",n:3,d:4},{k:"fraction",n:1,d:2},null],a:0},
 {t:"fill",q:"Compré 1/4 kg de queso y 1/4 kg de jamón. ¿Cuántos kg compré en total? (escribilo como fracción)",labels:[""],a:["re:^\\s*(1/2|2/4|medio|un medio)\\s*(kg)?\\s*$"]},
 {t:"choice",e:"🧃",q:"¿Cuántas botellas de 1/2 litro hacen falta para llenar una jarra de 2 litros?",o:["4","2","8"],a:0}
]},
{id:"m5",dot:"📊",name:"Proporcionalidad",title:"Tablas de proporcionalidad",sub:"Si una cantidad se duplica, la otra también",
rules:`
<div class="rsec"><h4>Proporcionalidad directa</h4>
<p class="exline">Si <b>1 alfajor cuesta $300</b>, 2 cuestan el doble ($600) y 3 cuestan el triple ($900).</p>
<div class="rrow"><span class="rl">Alfajores</span><span class="ra">1 · 2 · 3 · 10</span></div>
<div class="rrow"><span class="rl">Precio</span><span class="ra">300 · 600 · 900 · 3.000</span></div>
<div class="warn">Un camino seguro: averiguá primero cuánto vale <b>1</b>, y desde ahí calculá lo que pidan.</div>
<p class="exline">No todo es proporcional: si algo no crece "al mismo ritmo" que lo otro, no se puede usar una tabla así.</p></div>`,
ex:[
 {t:"fill",e:"📓",q:"Un cuaderno cuesta <b>$800</b>. Completá",labels:["2 cuadernos","5 cuadernos","10 cuadernos"],a:["1600","4000","8000"]},
 {t:"fill",q:"Si <b>4</b> entradas cuestan <b>$2.000</b>, ¿cuánto cuesta 1?",labels:["Respuesta"],a:["500"]},
 {t:"fill",e:"🍪",q:"Con <b>2</b> tazas de harina salen <b>12</b> galletitas. ¿Cuántas salen con <b>6</b> tazas?",labels:["Respuesta"],a:["36"]},
 {t:"choice",q:"¿La edad de una persona y su altura son proporcionales?",o:["No","Sí"],a:0},
 {t:"fill",q:"Una canilla llena <b>3</b> baldes en <b>6</b> minutos. ¿Cuántos minutos tarda en llenar <b>5</b> baldes?",labels:["Respuesta"],a:["10"]},
 {t:"fill",q:"<b>3</b> paquetes traen <b>24</b> caramelos. Completá",labels:["6 paquetes","1 paquete"],a:["48","8"]}
]},
{id:"msim",dot:"📝",name:"Simulacro",title:"Simulacro de Matemática",sub:"Todo junto",
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Estimá antes de calcular: si el resultado exacto queda muy lejos de tu estimación, revisá la cuenta.</p></div>`,
ex:[
 {t:"fill",q:"1. Calculá",labels:["38 × 100","4.500 ÷ 10"],a:["3800","450"]},
 {t:"fill",q:"2. Calculá",labels:["8 × 7","63 ÷ 9"],a:["56","7"]},
 {t:"fill",q:"3. Resolvé 89 ÷ 6",labels:["Cociente","Resto"],a:["14","5"]},
 {t:"choice",q:"4. 1/4 + 1/4 =",o:["1/2","1/8","2/8"],a:0},
 {t:"fill",q:"5. 1 kg de pan cuesta <b>$2.400</b>. ¿Cuánto cuesta 1/2 kg?",labels:["Respuesta"],a:["1200"]},
 {t:"fill",q:"6. Hay <b>250</b> chicos y en cada micro entran <b>40</b>. ¿Cuántos micros hacen falta?",labels:["Respuesta"],a:["7"]},
 {t:"fill",q:"7. Si <b>5</b> lápices cuestan <b>$1.500</b>, ¿cuánto cuestan <b>15</b>?",labels:["Respuesta"],a:["4500"]},
 {t:"order",q:"8. Ordená de menor a mayor",items:["1/2","1/8","1/4"],a:["1/8","1/4","1/2"]}
]}
],

lengua:[
{id:"l1",dot:"🗿",name:"Leyendas y mitos",title:"Leyendas y mitos",sub:"Relatos que se contaron de generación en generación",
rules:`
<div class="rsec"><h4>Leyenda</h4>
<p class="exline">Explica el <b>origen</b> de algo de la naturaleza o de un lugar (una planta, un río, un animal), mezclando hechos reales y fantásticos. Por ejemplo, la leyenda de la yerba mate.</p></div>
<div class="rsec"><h4>Mito</h4>
<p class="exline">Cuenta historias de <b>dioses y héroes</b> y explica cómo empezó el mundo o por qué pasan ciertas cosas.</p></div>
<div class="rsec"><h4>Tradición oral</h4>
<p class="exline">Antes de escribirse, estos relatos se <b>contaban en voz alta</b>. Por eso hay muchas versiones de cada uno.</p></div>`,
ex:[
 {t:"choice",q:"«Hace mucho tiempo, una joven guaraní se convirtió en una planta para quedarse para siempre junto a su pueblo…» ¿Qué tipo de relato es?",o:["Una leyenda","Una noticia","Un instructivo"],a:0},
 {t:"choice",q:"¿Cómo llegaron las leyendas hasta hoy?",o:["Se contaron de boca en boca durante generaciones","Se escribieron el año pasado","Las inventó un periodista"],a:0},
 {t:"choice",q:"La leyenda del ceibo explica el origen de…",o:["una flor","un río","una montaña"],a:0},
 {t:"choice",q:"Las leyendas del rey Arturo son de…",o:["Gran Bretaña","Argentina","Egipto"],a:0},
 {t:"choice",q:"¿Cómo se llama la espada del rey Arturo?",o:["Excalibur","Durandal","Tizona"],a:0},
 {t:"choice",q:"Los caballeros del rey Arturo se reunían alrededor de…",o:["la Mesa Redonda","un fogón","una torre"],a:0},
 {t:"open",q:"Elegí una leyenda que conozcas y contala en 5 oraciones",model:"Que se entienda qué origen explica, que tenga principio, problema y final, y que las oraciones tengan mayúscula y punto."}
]},
{id:"l2",dot:"🐆",name:"Relatos de animales",title:"Relatos de animales",sub:"Quiroga · Kipling · Roldán",
rules:`
<div class="rsec"><h4>Animales que piensan y hablan</h4>
<p class="exline">En estos relatos los animales <b>hablan, piensan y sienten</b> como personas, pero mantienen rasgos de su especie: el que es veloz, el que es astuto, el que es fuerte.</p></div>
<div class="rsec"><h4>Tres autores para conocer</h4>
<p class="exline">Hay autores de distintos países que escribieron relatos de animales. Cuando leas uno, averiguá de dónde era el autor y en qué lugar transcurren sus historias: muchas veces, el paisaje de su tierra aparece en los cuentos.</p></div>`,
ex:[
 {t:"choice",q:"¿Quién escribió «Cuentos de la selva»?",o:["Horacio Quiroga","Rudyard Kipling","Gustavo Roldán"],a:0},
 {t:"choice",q:"Los «Cuentos de la selva» transcurren en la selva de…",o:["Misiones","la Patagonia","Buenos Aires"],a:0},
 {t:"choice",q:"«El libro de la selva», donde aparece Mowgli, es de…",o:["Rudyard Kipling","Horacio Quiroga","Isol"],a:0},
 {t:"choice",q:"Mowgli es un niño criado por…",o:["lobos","osos","monos"],a:0},
 {t:"choice",q:"En «La tortuga gigante», la tortuga ayuda a…",o:["un hombre enfermo","un tigre","un chico perdido"],a:0},
 {t:"choice",q:"Gustavo Roldán escribió cuentos con animales del…",o:["monte chaqueño","Polo Norte","fondo del mar"],a:0},
 {t:"open",q:"Inventá un relato breve con dos animales que hablen",model:"Que los animales actúen según su manera de ser y que haya un problema y una solución."}
]},
{id:"l3",dot:"🧚",name:"Peter Pan",title:"Peter Pan: leer una novela",sub:"Una novela clásica de aventuras",book:["peter-pan"],
rules:`
<div class="rsec"><h4>Leer una novela</h4>
<p class="exline">Una novela es más larga que un cuento: tiene <b>capítulos</b>, más personajes y varias aventuras. Conviene anotar quién es quién mientras leés.</p>
<div class="warn">Si viste una película de Peter Pan, ojo: <b>el libro tiene diferencias</b>. Las preguntas son sobre la historia original.</div></div>`,
ex:[
 {t:"choice",q:"¿Quién escribió «Peter Pan»?",o:["J. M. Barrie","Lewis Carroll","Andersen"],a:0},
 {t:"choice",q:"¿Cómo se llama el lugar adonde viajan Wendy y sus hermanos?",o:["El País de Nunca Jamás","El País de las Maravillas","Narnia"],a:0},
 {t:"choice",q:"¿Quién es el enemigo de Peter Pan?",o:["El Capitán Garfio","El lobo","La Reina de Corazones"],a:0},
 {t:"choice",q:"¿Cómo se llama el hada amiga de Peter?",o:["Campanita","Ariel","Wendy"],a:0},
 {t:"choice",q:"¿Qué es lo que Peter Pan no quiere hacer?",o:["Crecer","Volar","Jugar"],a:0},
 {t:"choice",q:"¿Qué animal persigue al Capitán Garfio?",o:["Un cocodrilo","Un tiburón","Un león"],a:0},
 {t:"open",q:"Compará el libro con una película de Peter Pan: ¿en qué se parecen y en qué cambian?",model:"Que nombre al menos dos semejanzas y dos diferencias concretas."}
]},
{id:"l4",dot:"🔗",name:"No repetir",title:"Cohesión: escribir sin repetir",sub:"Sinónimos · pronombres · punto seguido y aparte",
rules:`
<div class="rsec"><h4>Cómo evitar repeticiones</h4>
<div class="rrow"><span class="rl">sinónimo</span><span class="ra">casa &rarr; vivienda</span></div>
<div class="rrow"><span class="rl">pronombre</span><span class="ra">María &rarr; ella / la</span></div>
<div class="rrow"><span class="rl">expresión equivalente</span><span class="ra">el gato &rarr; el felino</span></div>
<p class="exline">Antes: <i>Lucas tiene una bici. Lucas usa la bici todos los días.</i><br>Después: <i>Lucas tiene una bici. La usa todos los días.</i></p></div>
<div class="rsec"><h4>Puntos</h4>
<p class="exline"><b>Punto seguido</b>: la idea continúa en el mismo párrafo. <b>Punto aparte</b>: empieza otro tema.</p></div>`,
ex:[
 {t:"choice",q:"«Juan compró un perro. ___ es muy juguetón.» ¿Qué evita repetir «el perro»?",o:["El cachorro","Juan","La casa"],a:0},
 {t:"choice",q:"Sinónimo de «contento»",o:["alegre","triste","cansado"],a:0},
 {t:"choice",q:"«Martina perdió su gorra. Martina buscó la gorra por todos lados.» ¿Cuál es la mejor versión?",o:["Martina perdió su gorra. La buscó por todos lados.","Martina perdió su gorra. Martina la gorra buscó.","No hace falta cambiar nada."],a:0},
 {t:"choice",q:"Sinónimo de «enorme»",o:["gigante","pequeño","rápido"],a:0},
 {t:"choice",q:"El punto seguido se usa cuando…",o:["la idea sigue en el mismo párrafo","empieza un tema nuevo","termina el texto"],a:0},
 {t:"open",q:"Reescribí sin repetir:<br><b>El zorro vio un racimo de uvas. El zorro quiso comer las uvas. Las uvas estaban muy altas.</b>",model:"Por ejemplo: «El zorro vio un racimo de uvas y quiso comerlas, pero estaban muy altas.» Lo importante es que no repita «el zorro» ni «las uvas»."}
]},
{id:"l5",dot:"✍️",name:"Tildes",title:"Tildes",sub:"Agudas · graves · esdrújulas",
rules:`
<div class="rsec"><h4>Primero, encontrá la sílaba que suena más fuerte</h4>
<div class="rrow"><span class="rl">en la última sílaba</span><span class="ra">aguda: si-<b>llón</b></span></div>
<div class="rrow"><span class="rl">en la anteúltima</span><span class="ra">grave: <b>fá</b>-cil</span></div>
<div class="rrow"><span class="rl">en la antepenúltima</span><span class="ra">esdrújula: <b>brú</b>-ju-la</span></div></div>
<div class="rsec"><h4>Después, aplicá la regla</h4>
<div class="rrow"><span class="rl">agudas</span><span class="ra">llevan tilde si terminan en <b>n, s o vocal</b></span></div>
<div class="rrow"><span class="rl">graves</span><span class="ra">llevan tilde si <b>NO</b> terminan en n, s o vocal</span></div>
<div class="rrow"><span class="rl">esdrújulas</span><span class="ra">llevan tilde <b>siempre</b></span></div>
<div class="warn">Decí la palabra en voz alta y aplaudí cada sílaba: el aplauso más fuerte marca la sílaba tónica.</div></div>`,
ex:[
 {t:"choice",q:"«Canción» es una palabra…",o:["aguda","grave","esdrújula"],a:0},
 {t:"choice",q:"«Mesa» es una palabra…",o:["grave","aguda","esdrújula"],a:0},
 {t:"choice",q:"«Murciélago» es una palabra…",o:["esdrújula","grave","aguda"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["ratón","raton"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["arbol","árbol"],a:1},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["reloj","relój"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["sabado","sábado"],a:1},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["examen","exámen"],a:0}
]},
{id:"lsim",dot:"📝",name:"Simulacro",title:"Simulacro de Lengua",sub:"Todo junto",
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Leé con atención. Al terminar, revisá tildes, mayúsculas y que no repitas palabras.</p></div>`,
ex:[
 {t:"choice",q:"1. Una leyenda…",o:["explica el origen de algo, mezclando lo real y lo fantástico","es una noticia","es un texto instructivo"],a:0},
 {t:"choice",q:"2. ¿Quién escribió «Peter Pan»?",o:["J. M. Barrie","Horacio Quiroga","Mark Twain"],a:0},
 {t:"choice",q:"3. ¿Cuál está bien escrita?",o:["lápiz","lapiz"],a:0},
 {t:"choice",q:"4. ¿Cuál es esdrújula?",o:["pájaro","camión","mesa"],a:0},
 {t:"choice",q:"5. «Sofía tiene una tortuga. ___ come lechuga.»",o:["La tortuga","Sofía","Tortuga tortuga"],a:0},
 {t:"open",q:"6. Escribí la ficha de un relato de animales que leíste: título, autor, personajes y de qué trata",model:"Los cuatro datos tienen que estar. «De qué trata» en dos o tres oraciones, con sus palabras."}
]}
]
};
