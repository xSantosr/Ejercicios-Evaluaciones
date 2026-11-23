/* ================= INGRESO A 6º ================= */
const G6 = {
ing:[
{id:"h1",dot:"🔮",name:"Futuro",title:"Going to y will",sub:"Planes e intenciones · predicciones",
rules:`
<div class="rsec"><h4>Be going to: planes ya decididos</h4>
<p class="exline">I'<b>m going to visit</b> my grandma on Sunday. (ya lo decidí)</p></div>
<div class="rsec"><h4>Will / won't: predicciones y opiniones</h4>
<p class="exline">I think it <b>will be</b> sunny tomorrow. &nbsp; People <b>won't use</b> cash in the future.</p>
<div class="warn"><b>Pista:</b> si hay un plan, una decisión tomada o pruebas de que algo va a pasar, va <b>going to</b>. Si es una opinión o una predicción («I think…», «maybe…»), va <b>will</b>.</div></div>`,
ex:[
 {t:"choice",q:"We ___ visit Spain next summer. We bought the tickets!",o:["are going to","will"],a:0},
 {t:"choice",q:"I think robots ___ do our homework in the future.",o:["will","are going to"],a:0},
 {t:"choice",q:"She ___ come to the party. She's ill.",o:["won't","will"],a:0},
 {t:"choice",q:"What ___ you going to do this weekend?",o:["are","will","do"],a:0},
 {t:"choice",q:"I'm going to ___ a new bike.",o:["buy","buying","buys"],a:0},
 {t:"choice",q:"«Creo que mañana va a llover» (predicción):",o:["I think it will rain tomorrow.","I think it going rain tomorrow.","I think it rains tomorrow."],a:0},
 {t:"choice",q:"My brother ___ study medicine. He decided last year.",o:["is going to","will"],a:0}
]},
{id:"h2",dot:"🏖️",name:"Gustos",title:"Gustos y deseos",sub:"like / love / hate + -ing · would like to",
rules:`
<div class="rsec"><h4>Gustos: verbo + -ing</h4>
<p class="exline">Después de <b>like, love, hate, enjoy</b> el verbo lleva <b>-ing</b>: He hates <b>waking</b> up early.</p></div>
<div class="rsec"><h4>Deseos: would like</h4>
<p class="exline"><b>Would like</b> = me gustaría. Con un verbo, va <b>to</b> + verbo: I'd like <b>to learn</b> Japanese. Para ofrecer algo: <b>Would you like</b> some tea?</p>
<div class="warn"><b>like</b> + -ing habla de lo que te gusta en general; <b>would like</b> + to, de lo que querrías ahora o en el futuro.</div></div>`,
ex:[
 {t:"choice",q:"I love ___ to music.",o:["listening","listen","to listening"],a:0},
 {t:"choice",q:"She hates ___ the dishes.",o:["doing","do","does"],a:0},
 {t:"choice",q:"I ___ like to be a vet.",o:["would","will","do"],a:0},
 {t:"choice",q:"<span class='en'>Would you like a sandwich?</span>",o:["Yes, please.","Yes, I like.","Yes, I would like."],a:0},
 {t:"choice",q:"We'd like ___ Brazil.",o:["to visit","visiting","visit"],a:0},
 {t:"choice",q:"Do you like ___ photos?",o:["taking","take","to taking"],a:0},
 {t:"match",q:"Uní cada actividad de vacaciones",pairs:[["go hiking","hacer senderismo"],["go sightseeing","recorrer lugares turísticos"],["sunbathe","tomar sol"],["eat out","comer afuera"],["buy gifts","comprar regalos"],["stay in a hotel","alojarse en un hotel"]]}
]},
{id:"h3",dot:"⚖️",name:"Too / enough",title:"Comparar: too, enough, as…as",sub:"Demasiado · suficiente · tan…como",
rules:`
<div class="rsec"><h4>too, enough, as…as</h4>
<div class="rrow"><span class="rl"><b>too</b> + adjetivo</span><span class="ra">demasiado (es un problema)</span></div>
<div class="rrow"><span class="rl">(not) + adjetivo + <b>enough</b></span><span class="ra">(no) lo suficiente</span></div>
<div class="rrow"><span class="rl"><b>as</b> + adjetivo + <b>as</b></span><span class="ra">tan… como</span></div>
<p class="exline">The tea is <b>too</b> hot to drink. &nbsp; He isn't old <b>enough</b> to drive. &nbsp; My bike is <b>as</b> fast <b>as</b> yours.</p>
<div class="warn">Ojo con el orden: <b>too</b> va <b>antes</b> del adjetivo; <b>enough</b>, <b>después</b>.</div></div>`,
ex:[
 {t:"choice",q:"This box is ___ heavy. I can't lift it.",o:["too","enough","as"],a:0},
 {t:"choice",q:"I'm not tall ___ to reach the shelf.",o:["enough","too","as"],a:0},
 {t:"choice",q:"My sister is as tall ___ me.",o:["as","than","that"],a:0},
 {t:"choice",q:"The water is ___ cold for swimming.",o:["too","enough"],a:0},
 {t:"choice",q:"Is the room big ___ for ten people?",o:["enough","too"],a:0},
 {t:"choice",q:"This film is ___ interesting than that one.",o:["more","most","as"],a:0},
 {t:"choice",q:"Paris is one of ___ cities in the world.",o:["the most beautiful","the more beautiful","most beautiful"],a:0}
]},
{id:"h4",dot:"🕵️",name:"Pasado",title:"Past simple y past progressive",sub:"Acción terminada · acción en desarrollo",
rules:`
<div class="rsec"><h4>Dos pasados</h4>
<div class="rrow"><span class="rl">acción terminada</span><span class="ra">past simple: I cooked</span></div>
<div class="rrow"><span class="rl">acción en desarrollo</span><span class="ra">past progressive: I was cooking</span></div>
<p class="exline">I <b>was cooking</b> when the phone <b>rang</b>. (cocinar estaba pasando; el teléfono interrumpió)</p>
<div class="warn"><b>while</b> suele ir con la acción larga (progressive); <b>when</b>, con la corta que interrumpe.</div></div>`,
ex:[
 {t:"choice",q:"While I ___ TV, the lights went off.",o:["was watching","watched"],a:0},
 {t:"choice",q:"They ___ football when it started to rain.",o:["were playing","was playing"],a:0},
 {t:"choice",q:"<span class='en'>What were you doing at 8 pm?</span>",o:["I was having dinner.","I had dinner.","I am having dinner."],a:0},
 {t:"choice",q:"She ___ when I called her.",h:"estaba durmiendo",o:["was sleeping","slept","sleeps"],a:0},
 {t:"choice",q:"Yesterday I ___ my grandma and then I went home.",o:["visited","was visiting"],a:0},
 {t:"match",q:"Uní cada verbo del tema «crimen»",pairs:[["steal","robar (algo)"],["arrest","arrestar"],["chase","perseguir"],["catch","atrapar"],["investigate","investigar"],["break into","entrar por la fuerza"]]}
]},
{id:"h5",dot:"🌎",name:"Vocabulario",title:"Dinero, trabajos, ambiente y más",sub:"Vocabulario de Metro 2",
rules:`
<div class="rsec"><h4>Adjetivos con preposición</h4>
<p class="exline">Muchos adjetivos de sentimientos van con una preposición fija, que conviene aprender junto con la palabra: <b>bored of</b>, <b>angry with</b>, <b>happy about</b>.</p></div>
<div class="rsec"><h4>Reglas y permisos: can / can't</h4>
<p class="exline">You <b>can</b> use a dictionary in the exam. (está permitido) &nbsp; You <b>can't</b> talk. (está prohibido)</p></div>`,
ex:[
 {t:"match",q:"Uní cada verbo sobre el dinero",pairs:[["borrow","pedir prestado"],["lend","prestar"],["save","ahorrar"],["spend","gastar"],["earn","ganar (dinero)"],["waste","malgastar"]]},
 {t:"match",q:"Uní cada trabajo",pairs:[["nurse","enfermero/a"],["builder","albañil"],["chef","cocinero/a"],["lawyer","abogado/a"],["hairdresser","peluquero/a"],["salesperson","vendedor/a"]]},
 {t:"match",q:"Uní cada palabra sobre el ambiente",pairs:[["reduce","reducir"],["reuse","reutilizar"],["recycle","reciclar"],["throw away","tirar"],["protect","proteger"],["run out of","quedarse sin"]]},
 {t:"choice",q:"I'm ___ of spiders.",o:["scared","interested","proud"],a:0},
 {t:"choice",q:"She's interested ___ history.",o:["in","of","about"],a:0},
 {t:"choice",q:"We're proud ___ you!",o:["of","in","with"],a:0},
 {t:"choice",q:"A drought is when…",o:["there is no rain for a long time","there is too much water","the ground shakes"],a:0},
 {t:"choice",q:"Para estar seguro en internet:",o:["Use different passwords.","Share personal information.","Click on all links."],a:0},
 {t:"choice",e:"👜",q:"This bag is made of ___.",h:"cuero",o:["leather","wool","glass"],a:0},
 {t:"choice",q:"A ___ person always tells the truth.",o:["honest","polite","patient"],a:0},
 {t:"choice",q:"You ___ run in the corridor. It's dangerous.",o:["can't","can"],a:0}
]}
],

mate:[
{id:"m1",dot:"🧠",name:"Propiedades",title:"Propiedades y cálculo mental",sub:"Conmutativa · asociativa · distributiva · estimar",
rules:`
<div class="rsec"><h4>Tres propiedades que ayudan a calcular</h4>
<div class="rrow"><span class="rl">conmutativa: el orden no cambia</span><span class="ra">3 × 9 = 9 × 3</span></div>
<div class="rrow"><span class="rl">asociativa: se puede agrupar distinto</span><span class="ra">(2 × 5) × 7 = 2 × (5 × 7)</span></div>
<div class="rrow"><span class="rl">distributiva: se puede separar un factor</span><span class="ra">7 × 12 = 7 × 10 + 7 × 2</span></div>
<div class="warn"><b>Truco:</b> buscá pares que den números redondos, como 2 y 5, o 4 y 25.</div></div>
<div class="rsec"><h4>Estimar</h4>
<p class="exline">Redondeá los factores: 31 × 19 está cerca de 30 × 20 = 600.</p></div>`,
ex:[
 {t:"fill",q:"Calculá mentalmente",labels:["25 × 16","5 × 48","4 × 35"],a:["400","240","140"]},
 {t:"fill",q:"Usá la propiedad distributiva",labels:["8 × 13","6 × 21","9 × 15"],a:["104","126","135"]},
 {t:"choice",q:"¿Qué propiedad se usó? &nbsp; 4 × 7 × 25 = 4 × 25 × 7",o:["Conmutativa","Distributiva","Ninguna"],a:0},
 {t:"choice",q:"¿Qué propiedad se usó? &nbsp; 6 × 14 = 6 × 10 + 6 × 4",o:["Distributiva","Conmutativa","Asociativa"],a:0},
 {t:"choice",q:"Estimá: 49 × 21 está cerca de…",o:["1.000","100","10.000"],a:0},
 {t:"fill",q:"Si 24 × 15 = 360, ¿cuánto es 360 ÷ 15?",labels:[""],a:["24"]},
 {t:"fill",q:"Si 12 × 30 = 360, ¿cuánto es 12 × 31?",labels:[""],a:["372"]}
]},
{id:"m2",dot:"🔁",name:"Múltiplos y divisores",title:"Múltiplos y divisores",sub:"Criterios de divisibilidad · problemas",
rules:`
<div class="rsec"><h4>Múltiplos y divisores</h4>
<p class="exline">Los <b>múltiplos</b> de 7 son los resultados de su tabla: 7, 14, 21, 28… Los <b>divisores</b> de 18 son los números que lo dividen sin resto: 1, 2, 3, 6, 9 y 18.</p></div>
<div class="rsec"><h4>Criterios de divisibilidad</h4>
<div class="rrow"><span class="rl">por 2</span><span class="ra">termina en cifra par</span></div>
<div class="rrow"><span class="rl">por 5</span><span class="ra">termina en 0 o 5</span></div>
<div class="rrow"><span class="rl">por 10</span><span class="ra">termina en 0</span></div>
<div class="rrow"><span class="rl">por 3</span><span class="ra">la suma de sus cifras es múltiplo de 3</span></div></div>
<div class="rsec"><h4>Problemas de "coincidir"</h4>
<p class="exline">Cuando dos cosas se repiten cada tanto y querés saber cuándo coinciden, buscá un <b>múltiplo común</b>. Cuando querés armar grupos iguales sin que sobre nada, buscá un <b>divisor común</b>.</p></div>`,
ex:[
 {t:"choice",q:"¿Cuál es múltiplo de 6?",o:["42","32","26"],a:0},
 {t:"choice",q:"¿Cuál es divisor de 36?",o:["9","7","5"],a:0},
 {t:"fill",q:"Escribí los divisores de 12, de menor a mayor, separados por comas",labels:[""],a:["re:^\\s*1\\s*,\\s*2\\s*,\\s*3\\s*,\\s*4\\s*,\\s*6\\s*,\\s*12\\s*$"]},
 {t:"choice",q:"¿El número 135 es divisible por 5?",o:["Sí","No"],a:0},
 {t:"choice",q:"¿El número 234 es divisible por 3?",o:["Sí","No"],a:0},
 {t:"fill",q:"Ana va al club cada <b>4</b> días y Leo cada <b>6</b>. Hoy fueron juntos. ¿En cuántos días vuelven a coincidir?",labels:["Respuesta"],a:["12"]},
 {t:"fill",q:"Con <b>24</b> caramelos y <b>18</b> chupetines se quieren armar bolsitas iguales, sin que sobre nada y con la mayor cantidad de bolsitas posible. ¿Cuántas bolsitas?",labels:["Respuesta"],a:["6"]}
]},
{id:"m3",dot:"🍫",name:"Fracciones",title:"Fracciones",sub:"Reparto · equivalencias · sumar y restar",
rules:`
<div class="rsec"><h4>Fracción como reparto</h4>
<p class="exline">Si se reparten 2 pizzas entre 3 personas, a cada una le tocan <b>2/3</b> de pizza.</p></div>
<div class="rsec"><h4>Fracciones equivalentes</h4>
<p class="exline">Multiplicando o dividiendo arriba y abajo por el mismo número, la fracción no cambia: 1/3 = 2/6 = 3/9.</p></div>
<div class="rsec"><h4>Sumar y restar</h4>
<div class="rrow"><span class="rl">mismo denominador</span><span class="ra">se suman los de arriba</span></div>
<div class="rrow"><span class="rl">distinto denominador</span><span class="ra">primero se buscan equivalentes</span></div>
<p class="exline">1/3 + 1/6 = 2/6 + 1/6 = 3/6 (que es igual a 1/2).</p></div>`,
ex:[
 {t:"choice",q:"Se reparten <b>3</b> chocolates entre <b>4</b> chicos en partes iguales. ¿Cuánto le toca a cada uno?",o:["3/4 de chocolate","4/3 de chocolate","1/4 de chocolate"],a:0},
 {t:"fill",q:"Completá la fracción equivalente",labels:["1/2 = __/8","2/3 = __/9","3/5 = __/10"],a:["4","6","6"]},
 {t:"fill",q:"Resolvé y escribí la fracción",labels:["2/7 + 3/7","5/8 − 1/8"],a:["5/7","re:^\\s*(4/8|1/2)\\s*$"]},
 {t:"fill",q:"Resolvé: 1/2 + 1/4",labels:[""],a:["3/4"]},
 {t:"choice",q:"¿Cuál es la mayor?",o:["3/4","2/3","1/2"],a:0},
 {t:"fill",q:"Una cinta mide 1 metro. ¿Cuántos centímetros son 3/4 de metro?",labels:[""],a:["75"]},
 {t:"choice",q:"¿Qué fracción de la hora son 15 minutos?",o:["1/4","1/2","1/15"],a:0}
]},
{id:"m4",dot:"💲",name:"Decimales",title:"Decimales y dinero",sub:"Décimos y centésimos · sumar y multiplicar precios",
rules:`
<div class="rsec"><h4>Decimales y fracciones decimales</h4>
<div class="rrow"><span class="rl">0,1</span><span class="ra">1/10 (un décimo)</span></div>
<div class="rrow"><span class="rl">0,01</span><span class="ra">1/100 (un centésimo)</span></div>
<p class="exline">$3,40 son 3 pesos con 40 centavos.</p></div>
<div class="rsec"><h4>Sumar y restar decimales</h4>
<div class="warn">Alineá las <b>comas</b>, una debajo de la otra. Si falta una cifra, completá con cero: 5 = 5,00.</div></div>
<div class="rsec"><h4>Comparar</h4>
<p class="exline">Compará primero la parte entera y después cifra por cifra después de la coma: 0,8 &gt; 0,75 porque 8 décimos es más que 7 décimos.</p></div>`,
ex:[
 {t:"choice",q:"0,5 es igual a…",o:["1/2","1/5","5"],a:0},
 {t:"choice",q:"0,25 es igual a…",o:["1/4","2/5","25"],a:0},
 {t:"fill",q:"Escribí como número decimal",labels:["3/10","7/100","45/100"],a:["re:^\\s*0[,.]30?\\s*$","re:^\\s*0[,.]07\\s*$","re:^\\s*0[,.]450?\\s*$"]},
 {t:"fill",q:"Sumá",labels:["$12,50 + $3,25","$8,75 + $1,25"],a:["re:^\\s*\\$?\\s*15[,.]75\\s*$","re:^\\s*\\$?\\s*10([,.]0+)?\\s*$"]},
 {t:"fill",q:"Un alfajor cuesta <b>$1,50</b>. ¿Cuánto cuestan 4?",labels:["Respuesta"],a:["re:^\\s*\\$?\\s*6([,.]0+)?\\s*$"]},
 {t:"choice",q:"¿Cuál es el mayor?",o:["0,7","0,65","0,09"],a:0},
 {t:"fill",q:"Pagué con <b>$20</b> algo que costaba <b>$13,40</b>. ¿Cuánto me dieron de vuelto?",labels:["Respuesta"],a:["re:^\\s*\\$?\\s*6[,.]60?\\s*$"]}
]},
{id:"m5",dot:"🔺",name:"Triángulos",title:"Triángulos",sub:"Propiedad triangular · clasificación por lados",
rules:`
<div class="rsec"><h4>Propiedad triangular</h4>
<p class="exline">Para que tres segmentos formen un triángulo, <b>cada lado tiene que ser menor que la suma de los otros dos</b>.</p>
<div class="rrow"><span class="rl">3, 4 y 5 cm</span><span class="ra">sí: 5 &lt; 3 + 4</span></div>
<div class="rrow"><span class="rl">2, 3 y 8 cm</span><span class="ra">no: 8 no es menor que 2 + 3</span></div>
<div class="warn">Alcanza con revisar el lado <b>más largo</b>: si es menor que la suma de los otros dos, se puede.</div></div>
<div class="rsec"><h4>Clasificación por lados</h4>
<p class="exline">Según cuántos lados iguales tenga: tres, dos o ninguno. Cada caso tiene su nombre.</p></div>`,
ex:[
 {t:"choice",q:"¿Se puede construir un triángulo con lados de 4 cm, 5 cm y 12 cm?",o:["No","Sí"],a:0},
 {t:"choice",q:"¿Y con 6 cm, 7 cm y 10 cm?",o:["Sí","No"],a:0},
 {t:"choice",q:"Un triángulo con los tres lados iguales es…",o:["equilátero","isósceles","escaleno"],a:0},
 {t:"choice",q:"Un triángulo con dos lados iguales es…",o:["isósceles","escaleno","equilátero"],a:0},
 {t:"choice",q:"Un triángulo con todos los lados distintos es…",o:["escaleno","isósceles","equilátero"],a:0},
 {t:"fill",q:"Dos lados miden 5 cm y 8 cm. ¿Cuál es el mayor largo posible del tercero, en centímetros enteros?",labels:[""],a:["12"]},
 {t:"choice",q:"¿Con cuál NO se puede armar un triángulo?",o:["1, 2 y 3 cm","3, 4 y 5 cm","5, 5 y 5 cm"],a:0}
]},
{id:"msim",dot:"📝",name:"Simulacro",title:"Simulacro de Matemática",sub:"Todo junto",
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Antes de cada cuenta, buscá si alguna propiedad te la simplifica. Al terminar, estimá para controlar.</p></div>`,
ex:[
 {t:"fill",q:"1. Calculá mentalmente",labels:["25 × 24","7 × 101"],a:["600","707"]},
 {t:"choice",q:"2. ¿Cuál es múltiplo de 9?",o:["81","91","19"],a:0},
 {t:"fill",q:"3. Resolvé: 2/5 + 1/5",labels:[""],a:["3/5"]},
 {t:"fill",q:"4. Completá: 3/4 = __/12",labels:[""],a:["9"]},
 {t:"fill",q:"5. Sumá: $7,25 + $2,75",labels:[""],a:["re:^\\s*\\$?\\s*10([,.]0+)?\\s*$"]},
 {t:"choice",q:"6. ¿Con lados de 4, 4 y 9 cm se puede armar un triángulo?",o:["No","Sí"],a:0},
 {t:"fill",q:"7. El colectivo A pasa cada <b>10</b> minutos y el B cada <b>15</b>. Si acaban de pasar juntos, ¿en cuántos minutos vuelven a coincidir?",labels:["Respuesta"],a:["30"]},
 {t:"fill",q:"8. Hay <b>144</b> lápices repartidos en <b>12</b> paquetes iguales. ¿Cuántos tiene cada paquete?",labels:["Respuesta"],a:["12"]}
]}
],

lengua:[
{id:"l1",dot:"🗣️",name:"Narrador",title:"Narrador y punto de vista",sub:"Protagonista · testigo · omnisciente · voces de los personajes",
rules:`
<div class="rsec"><h4>¿Quién cuenta la historia?</h4>
<div class="rrow"><span class="rl">narrador protagonista</span><span class="ra">cuenta lo que le pasó a él (yo)</span></div>
<div class="rrow"><span class="rl">narrador testigo</span><span class="ra">cuenta lo que vio que le pasó a otro</span></div>
<div class="rrow"><span class="rl">narrador omnisciente</span><span class="ra">no es personaje y sabe todo, hasta lo que piensan</span></div>
<div class="warn"><b>Pista:</b> mirá los verbos. Si dice <b>«yo»</b>, es primera persona; si dice <b>«él/ella»</b> y además conoce pensamientos ocultos de los personajes, es omnisciente.</div></div>
<div class="rsec"><h4>Las voces de los personajes</h4>
<p class="exline">En los diálogos, cada vez que habla un personaje se abre con <b>raya</b> (—).</p></div>`,
ex:[
 {t:"choice",q:"«Ese día yo me levanté tarde y perdí el colectivo.» ¿Qué narrador es?",o:["Protagonista","Omnisciente","Testigo"],a:0},
 {t:"choice",q:"«Lucía caminaba sin saber que su hermano la seguía, y él tenía miedo de que lo descubriera.» ¿Qué narrador es?",o:["Omnisciente","Protagonista","Testigo"],a:0},
 {t:"choice",q:"«Vi cómo mi amigo Tomás se subía al árbol y se caía.» ¿Qué narrador es?",o:["Testigo","Protagonista","Omnisciente"],a:0},
 {t:"choice",q:"En los diálogos, ¿qué signo indica que habla un personaje?",o:["La raya (—)","El punto y coma","Los dos puntos"],a:0},
 {t:"open",q:"Reescribí este fragmento con narrador protagonista (en primera persona):<br><b>Martín abrió la puerta despacio. Tenía miedo de lo que iba a encontrar.</b>",model:"«Abrí la puerta despacio. Tenía miedo de lo que iba a encontrar.» Que cambien los verbos y los pronombres a la primera persona."}
]},
{id:"l2",dot:"🧞",name:"Aventuras",title:"Las mil y una noches y novelas de aventuras",sub:"Relatos de tradición oral · Robin Hood · Huckleberry Finn",book:["mil-y-una-noches"],
rules:`
<div class="rsec"><h4>Relatos dentro de un relato</h4>
<p class="exline">«Las mil y una noches» es un libro de cuentos enmarcados: hay una historia principal y, dentro de ella, un personaje que cuenta muchas otras.</p></div>
<div class="rsec"><h4>Novelas de aventuras</h4>
<p class="exline">Tienen un héroe o heroína que viaja, enfrenta peligros y se pone a prueba. Muchas son clásicas y se leen en <b>versiones adaptadas</b>.</p></div>`,
ex:[
 {t:"choice",q:"En «Las mil y una noches», ¿quién cuenta las historias cada noche?",o:["Sherezade","Aladino","Simbad"],a:0},
 {t:"choice",q:"¿Por qué Sherezade cuenta un cuento cada noche?",o:["Para que el sultán quiera escuchar la continuación y no la mate","Para dormirse","Porque es maestra"],a:0},
 {t:"choice",q:"¿Cuál de estos personajes aparece en «Las mil y una noches»?",o:["Alí Babá","Peter Pan","Robin Hood"],a:0},
 {t:"choice",q:"Robin Hood les robaba a los ricos para…",o:["dárselo a los pobres","hacerse rico","comprar un castillo"],a:0},
 {t:"choice",q:"¿En qué bosque vivía Robin Hood?",o:["Sherwood","el Amazonas","la Selva Negra"],a:0},
 {t:"choice",q:"«Las aventuras de Huckleberry Finn» es de…",o:["Mark Twain","Charles Dickens","Julio Verne"],a:0},
 {t:"choice",q:"Huck viaja en balsa por el río…",o:["Misisipi","Paraná","Nilo"],a:0},
 {t:"open",q:"¿Qué tienen en común las novelas de aventuras que leíste o conocés?",model:"Algunas respuestas posibles: un viaje, peligros, un héroe que cambia, amistades, enemigos. Que lo justifique con ejemplos."}
]},
{id:"l3",dot:"😂",name:"Humor y limericks",title:"Cuentos de humor y limericks",sub:"Ema Wolf · Gianni Rodari · María Elena Walsh",
rules:`
<div class="rsec"><h4>¿Qué nos hace reír en un cuento?</h4>
<p class="exline">La <b>exageración</b>, las situaciones <b>absurdas</b>, los <b>juegos de palabras</b> y los personajes que se toman todo al pie de la letra.</p></div>
<div class="rsec"><h4>Limericks</h4>
<p class="exline">Son poemas breves y disparatados. Leé este, que no es de ningún libro, y fijate cómo riman los versos:</p>
<p class="exline"><i>Un pingüino que vivía en Tandil<br>se peinaba con aceite de candil.<br>Se ponía corbata,<br>bailaba en la lata,<br>y cantaba ópera ese pingüino gentil.</i></p></div>`,
ex:[
 {t:"choice",q:"¿Cuántos versos tiene un limerick?",o:["5","4","14"],a:0},
 {t:"choice",q:"¿Cómo riman los versos de un limerick?",o:["El 1, el 2 y el 5 entre sí; el 3 y el 4 entre sí","Ninguno rima","El 1 con el 3 y el 2 con el 4"],a:0},
 {t:"choice",q:"¿Quién escribió «Zoo Loco», un libro de limericks?",o:["María Elena Walsh","Ema Wolf","Gianni Rodari"],a:0},
 {t:"choice",q:"Gianni Rodari era de…",o:["Italia","Argentina","Francia"],a:0},
 {t:"choice",q:"«Cuentos por teléfono» es de…",o:["Gianni Rodari","Ema Wolf","Horacio Quiroga"],a:0},
 {t:"choice",q:"«Tenía tanta hambre que se comió el plato, la mesa y la heladera.» ¿Qué recurso de humor usa?",o:["La exageración","La rima","La descripción científica"],a:0},
 {t:"open",q:"Escribí un limerick sobre un animal",model:"Que tenga cinco versos, que rimen el 1, el 2 y el 5 por un lado, y el 3 y el 4 por otro, y que sea disparatado."}
]},
{id:"l4",dot:"🔗",name:"Cohesión",title:"Cohesión y puntuación",sub:"Conectores · sustituciones · punto seguido y aparte",
rules:`
<div class="rsec"><h4>Conectores</h4>
<div class="rrow"><span class="rl">causa</span><span class="ra">ya que, puesto que</span></div>
<div class="rrow"><span class="rl">oposición</span><span class="ra">aunque, pero</span></div>
<div class="rrow"><span class="rl">orden</span><span class="ra">primero, luego, finalmente</span></div>
<div class="rrow"><span class="rl">suma</span><span class="ra">y, también</span></div></div>
<div class="rsec"><h4>Sustituciones</h4>
<p class="exline">Para no repetir, se reemplaza por un sinónimo, un pronombre o una expresión equivalente.</p></div>`,
ex:[
 {t:"choice",q:"El punto aparte se usa para…",o:["empezar un párrafo nuevo con otro tema","seguir la misma idea","separar palabras de una lista"],a:0},
 {t:"choice",q:"«Los perros ladraban. ___ querían salir a pasear.» ¿Qué evita repetir?",o:["Ellos","Los perros","Él"],a:0},
 {t:"choice",q:"Sinónimo de «rápido»",o:["veloz","lento","largo"],a:0},
 {t:"choice",q:"¿Qué conector expresa causa?",o:["porque","pero","luego"],a:0},
 {t:"choice",q:"¿Qué conector expresa oposición?",o:["sin embargo","además","entonces"],a:0},
 {t:"open",q:"Uní en un solo texto, sin repetir:<br><b>Ana tiene un gato. El gato se llama Pepe. Pepe duerme todo el día.</b>",model:"Por ejemplo: «Ana tiene un gato llamado Pepe, que duerme todo el día.»"}
]},
{id:"l5",dot:"✍️",name:"Ortografía",title:"Ortografía y tildes",sub:"B en -aba y -bir · tildes · él / el",
rules:`
<div class="rsec"><h4>Dos regularidades con B</h4>
<div class="rrow"><span class="rl">terminación -aba de los verbos</span><span class="ra">jugaba, saltaba</span></div>
<div class="rrow"><span class="rl">verbos terminados en -bir</span><span class="ra">recibir, subir</span></div>
<div class="warn">Hay excepciones de -bir que van con V: hay que memorizarlas (son pocas y muy usadas).</div></div>
<div class="rsec"><h4>Tildes</h4>
<p class="exline">Repasá: agudas con tilde si terminan en n, s o vocal; graves si no terminan en n, s o vocal; esdrújulas siempre.</p></div>
<div class="rsec"><h4>Tilde que cambia el significado</h4>
<p class="exline"><b>él</b> (pronombre: la persona) y <b>el</b> (artículo: el perro).</p></div>`,
ex:[
 {t:"choice",q:"¿Cuál está bien escrita?",o:["cantaba","cantava"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["escribir","escrivir"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["servir","serbir"],a:0},
 {t:"choice",q:"«Lápiz» lleva tilde porque es…",o:["grave terminada en z","aguda","esdrújula"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["jardín","jardin"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["examenes","exámenes"],a:1},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["Mi hermano dijo que él viene.","Mi hermano dijo que el viene."],a:0}
]},
{id:"lsim",dot:"📝",name:"Simulacro",title:"Simulacro de Lengua",sub:"Todo junto",
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Leé cada fragmento con atención antes de elegir. Al terminar, revisá tildes y puntuación de lo que escribiste.</p></div>`,
ex:[
 {t:"choice",q:"1. «Nosotros entramos a la cueva y sentimos frío.» ¿Qué narrador es?",o:["Protagonista","Omnisciente"],a:0},
 {t:"choice",q:"2. ¿Quién cuenta los cuentos en «Las mil y una noches»?",o:["Sherezade","Alí Babá","El sultán"],a:0},
 {t:"choice",q:"3. En un limerick riman entre sí…",o:["los versos 1, 2 y 5","todos los versos","ninguno"],a:0},
 {t:"choice",q:"4. ¿Cuál está bien escrita?",o:["llegaba","llegava"],a:0},
 {t:"choice",q:"5. ¿Qué conector expresa oposición?",o:["no obstante","porque","después"],a:0},
 {t:"open",q:"6. Reescribí con narrador omnisciente: <b>«Yo tenía hambre, así que fui a la cocina.»</b>",model:"Por ejemplo: «Pedro tenía hambre, así que fue a la cocina.» Que pase a tercera persona."}
]}
]
};
