/* ================= INGRESO A 7º ================= */
const G7 = {
ing:[
{id:"k1",dot:"🏃",name:"-ing o to",title:"Gerund o infinitive",sub:"-ing como sujeto · después de preposición · to + verbo · let / make / allowed to",
rules:`
<div class="rsec"><h4>Verbo + -ing (gerund)</h4>
<div class="rrow"><span class="rl">como sujeto de la oración</span><span class="ra"><b>Reading</b> is relaxing.</span></div>
<div class="rrow"><span class="rl">después de una preposición</span><span class="ra">interested <b>in learning</b></span></div>
<div class="rrow"><span class="rl">después de enjoy, avoid, finish, mind</span><span class="ra">I avoid <b>eating</b> late.</span></div></div>
<div class="rsec"><h4>to + verbo (infinitive)</h4>
<p class="exline">Después de <b>want, decide, hope, need, would like</b>: I hope <b>to see</b> you soon.</p></div>
<div class="rsec"><h4>Permisos y obligaciones</h4>
<div class="rrow"><span class="rl">let + persona + verbo</span><span class="ra">sin to</span></div>
<div class="rrow"><span class="rl">make + persona + verbo</span><span class="ra">sin to</span></div>
<div class="rrow"><span class="rl">be allowed + to + verbo</span><span class="ra">con to</span></div></div>`,
ex:[
 {t:"choice",q:"___ is good for your health.",o:["Running","Run","To running"],a:0},
 {t:"choice",q:"I'm good at ___.",o:["drawing","draw","to draw"],a:0},
 {t:"choice",q:"She wants ___ a doctor.",o:["to become","becoming","become"],a:0},
 {t:"choice",q:"They enjoy ___ video games.",o:["playing","to play"],a:0},
 {t:"choice",q:"We decided ___ home early.",o:["to go","going"],a:0},
 {t:"choice",q:"He's afraid of ___ alone.",o:["being","be","to be"],a:0},
 {t:"choice",q:"My parents let me ___ up late on Saturdays.",o:["stay","to stay","staying"],a:0},
 {t:"choice",q:"We aren't allowed ___ phones in class.",o:["to use","use","using"],a:0},
 {t:"choice",q:"My mum makes me ___ my bed.",o:["make","to make","making"],a:0}
]},
{id:"k2",dot:"🔀",name:"Condicionales",title:"Condicionales",sub:"Zero · first · second · condicional con imperativo",
rules:`
<div class="rsec"><h4>Tres condicionales</h4>
<div class="rrow"><span class="rl"><b>zero</b>: verdades generales</span><span class="ra">If + present, present</span></div>
<div class="rrow"><span class="rl"><b>first</b>: algo posible</span><span class="ra">If + present, will</span></div>
<div class="rrow"><span class="rl"><b>second</b>: algo imaginario</span><span class="ra">If + past, would</span></div>
<p class="exline">If you heat ice, it melts. &nbsp; If it rains, we'll stay home. &nbsp; If I had a dragon, I would fly to school.</p>
<div class="warn">En el <b>second conditional</b> el verbo va en pasado aunque se hable del presente: es una forma de marcar que es imaginario. Con <i>be</i> se suele usar <b>were</b> para todas las personas.</div></div>
<div class="rsec"><h4>Con imperativo</h4>
<p class="exline">If you're cold, <b>close</b> the window. (consejo u orden)</p></div>`,
ex:[
 {t:"choice",q:"If you mix blue and yellow, you ___ green.",o:["get","would get","got"],a:0},
 {t:"choice",q:"If it's sunny tomorrow, we ___ to the beach.",o:["will go","would go","went"],a:0},
 {t:"choice",q:"If I ___ a million dollars, I would travel the world.",o:["had","have","will have"],a:0},
 {t:"choice",q:"If I were you, I ___ tell her the truth.",o:["would","will"],a:0},
 {t:"choice",q:"If you don't study, you ___ pass the exam.",o:["won't","wouldn't"],a:0},
 {t:"choice",q:"«Si tuviera alas, volaría»:",o:["If I had wings, I would fly.","If I have wings, I will fly."],a:0},
 {t:"choice",q:"If you're hungry, ___ a sandwich.",o:["have","will have","had"],a:0}
]},
{id:"k3",dot:"✅",name:"Present perfect",title:"Present perfect",sub:"just · already · yet · for · since · vs. past simple",
rules:`
<div class="rsec"><h4>Cómo se forma</h4>
<p class="exline"><b>have / has + participio</b>: She has finished. They have travelled.</p></div>
<div class="rsec"><h4>Palabras que lo acompañan</h4>
<div class="rrow"><span class="rl">just</span><span class="ra">recién</span></div>
<div class="rrow"><span class="rl">already</span><span class="ra">ya (en afirmativas)</span></div>
<div class="rrow"><span class="rl">yet</span><span class="ra">todavía / ya (en negativas y preguntas, al final)</span></div>
<div class="rrow"><span class="rl">for</span><span class="ra">durante (un período: two weeks)</span></div>
<div class="rrow"><span class="rl">since</span><span class="ra">desde (un momento: Monday)</span></div></div>
<div class="rsec"><h4>¿Present perfect o past simple?</h4>
<div class="warn">Si se dice <b>cuándo</b> pasó exactamente (yesterday, in 2019, last week), va <b>past simple</b>. Si no importa cuándo, o sigue hasta ahora, va <b>present perfect</b>.</div></div>`,
ex:[
 {t:"choice",q:"I have ___ finished my homework.",h:"recién",o:["just","yet","since"],a:0},
 {t:"choice",q:"Have you done the dishes ___?",o:["yet","already","just"],a:0},
 {t:"choice",q:"She has lived here ___ 2020.",o:["since","for"],a:0},
 {t:"choice",q:"We've known each other ___ five years.",o:["for","since"],a:0},
 {t:"choice",q:"I ___ to Brazil last year.",o:["went","have gone","have been"],a:0},
 {t:"choice",q:"___ you ever eaten sushi?",o:["Have","Did","Are"],a:0},
 {t:"fill",q:"Escribí el participio",labels:["eat","see","write","go"],a:["eaten","seen","written","re:^\\s*(gone|been)\\s*$"]},
 {t:"choice",q:"He hasn't arrived ___.",o:["yet","already","just"],a:0}
]},
{id:"k4",dot:"🧭",name:"Modales",title:"Modales y used to",sub:"must · can't · may / might · have to · should · used to",
rules:`
<div class="rsec"><h4>Grados de seguridad</h4>
<div class="rrow"><span class="rl">estoy seguro de que sí</span><span class="ra">must</span></div>
<div class="rrow"><span class="rl">es posible</span><span class="ra">may / might</span></div>
<div class="rrow"><span class="rl">es imposible</span><span class="ra">can't</span></div></div>
<div class="rsec"><h4>Obligación y consejo</h4>
<div class="rrow"><span class="rl">obligación (una regla)</span><span class="ra">have to</span></div>
<div class="rrow"><span class="rl">consejo</span><span class="ra">should / shouldn't</span></div></div>
<div class="rsec"><h4>Used to</h4>
<p class="exline">Costumbres del pasado que ya no ocurren: My dad <b>used to</b> have a beard. En negativas y preguntas: <b>didn't use to</b> / <b>Did</b> you <b>use to</b>…?</p>
<div class="warn">Después de un modal, el verbo va <b>sin to</b> y <b>sin -s</b>: She must <b>be</b>, nunca "must to be" ni "musts".</div></div>`,
ex:[
 {t:"choice",q:"You ___ see a doctor. You look sick.",h:"consejo",o:["should","mustn't","might"],a:0},
 {t:"choice",q:"It ___ rain later. Take an umbrella, just in case.",o:["might","must","should"],a:0},
 {t:"choice",q:"That ___ be Tom. He's in Spain!",o:["can't","must","may"],a:0},
 {t:"choice",q:"She's been working all day. She ___ be tired.",o:["must","can't","might not"],a:0},
 {t:"choice",q:"We ___ wear a uniform at school. It's the rule.",o:["have to","should","might"],a:0},
 {t:"choice",q:"I ___ play with dolls when I was little.",o:["used to","use to","was used"],a:0},
 {t:"choice",q:"<span class='en'>Did you use to have long hair?</span>",h:"Respondé que NO",o:["No, I didn't.","No, I used not.","No, I wasn't."],a:0},
 {t:"choice",q:"You ___ eat so much sugar.",h:"consejo",o:["shouldn't","mustn't to","don't should"],a:0}
]},
{id:"k5",dot:"💬",name:"Vocabulario",title:"Vocabulario de Metro 3",sub:"do / make · salud · verdad y mentira · -ion · sentidos",
rules:`
<div class="rsec"><h4>Do o make</h4>
<p class="exline">No hay una regla exacta: se aprenden como frases hechas. En general, <b>make</b> se usa cuando se crea algo (make a cake) y <b>do</b> para tareas y actividades (do the shopping).</p></div>
<div class="rsec"><h4>Sustantivos terminados en -ion</h4>
<p class="exline">Muchos salen de un verbo: <b>collect &rarr; collection</b>, <b>prepare &rarr; preparation</b>. Fijate qué letras cambian.</p></div>`,
ex:[
 {t:"choice",q:"___ a mistake",o:["make","do"],a:0},
 {t:"choice",q:"___ your best",o:["do","make"],a:0},
 {t:"choice",q:"___ noise",o:["make","do"],a:0},
 {t:"choice",q:"___ your chores",o:["do","make"],a:0},
 {t:"match",q:"Uní cada malestar",pairs:[["have a cold","estar resfriado"],["have a fever","tener fiebre"],["have a headache","tener dolor de cabeza"],["have a sore throat","tener dolor de garganta"],["have a cough","tener tos"],["have a stomachache","tener dolor de panza"]]},
 {t:"match",q:"Uní cada expresión",pairs:[["tell the truth","decir la verdad"],["keep a secret","guardar un secreto"],["promise","prometer"],["pretend","fingir"],["admit","admitir"],["trust","confiar"]]},
 {t:"fill",q:"Escribí el sustantivo terminado en -ion",labels:["decide","invite","explain","describe"],a:["decision","invitation","explanation","description"]},
 {t:"choice",q:"When you are very tired, you ___.",o:["yawn","blush","frown"],a:0},
 {t:"choice",q:"Someone who helps without being paid ___.",o:["volunteers","earns","borrows"],a:0},
 {t:"choice",e:"🍋",q:"Lemons taste ___.",o:["sour","sweet","salty"],a:0}
]}
],

mate:[
{id:"m1",dot:"➗",name:"División",title:"La división y sus partes",sub:"Dividendo · divisor · cociente · resto",
rules:`
<div class="rsec"><h4>La relación que siempre se cumple</h4>
<p class="exline"><b>dividendo = divisor × cociente + resto</b>, y el resto es siempre <b>menor que el divisor</b>.</p>
<p class="exline">Ejemplo: 47 ÷ 5 da cociente 9 y resto 2, porque 5 × 9 + 2 = 47.</p>
<div class="warn">Con esa relación podés encontrar cualquier parte que falte, y también controlar si una división está bien hecha.</div></div>`,
ex:[
 {t:"fill",q:"Resolvé 157 ÷ 12",labels:["Cociente","Resto"],a:["13","1"]},
 {t:"fill",q:"Encontrá el dividendo: divisor 8, cociente 15 y resto 3",labels:[""],a:["123"]},
 {t:"choice",q:"En una división por 9, ¿cuál <b>NO</b> puede ser el resto?",o:["9","8","0"],a:0},
 {t:"fill",q:"Una división tiene divisor 7 y cociente 20. ¿Cuál es el mayor resto posible?",labels:[""],a:["6"]},
 {t:"fill",q:"Con ese resto, ¿cuál sería el dividendo?",labels:[""],a:["146"]},
 {t:"fill",q:"Hay <b>500</b> alfajores para empaquetar en cajas de <b>24</b>.",labels:["Cajas completas","Sobran"],a:["20","20"]},
 {t:"choice",q:"Si 245 ÷ 7 = 35, entonces 245 ÷ 35 =",o:["7","35","245"],a:0}
]},
{id:"m2",dot:"🔟",name:"Decimales",title:"Números decimales",sub:"Valor posicional · × y ÷ por 10, 100, 1.000 · operaciones",
rules:`
<div class="rsec"><h4>Después de la coma</h4>
<div class="rrow"><span class="rl">1ª cifra</span><span class="ra">décimos</span></div>
<div class="rrow"><span class="rl">2ª cifra</span><span class="ra">centésimos</span></div>
<div class="rrow"><span class="rl">3ª cifra</span><span class="ra">milésimos</span></div></div>
<div class="rsec"><h4>Multiplicar y dividir por la unidad seguida de ceros</h4>
<p class="exline">× 10, × 100, × 1.000: la coma se corre 1, 2 o 3 lugares <b>a la derecha</b>. ÷: <b>a la izquierda</b>. Si faltan cifras, se completan con ceros.</p>
<p class="exline">3,25 × 10 = 32,5 &nbsp; · &nbsp; 46,8 ÷ 100 = 0,468</p></div>
<div class="rsec"><h4>Sumar y restar</h4>
<div class="warn">Alineá las comas. Un número entero tiene la coma "escondida" al final: 10 = 10,00.</div></div>`,
ex:[
 {t:"fill",q:"Calculá",labels:["4,57 × 10","0,38 × 100","2,5 × 1.000"],a:["re:^\\s*45[,.]7\\s*$","re:^\\s*38([,.]0+)?\\s*$","re:^\\s*2\\.?500([,.]0+)?\\s*$"]},
 {t:"fill",q:"Calculá",labels:["125 ÷ 10","36,4 ÷ 100","7 ÷ 1.000"],a:["re:^\\s*12[,.]5\\s*$","re:^\\s*0[,.]364\\s*$","re:^\\s*0[,.]007\\s*$"]},
 {t:"choice",q:"En 6,382, el 8 vale…",o:["8 centésimos","8 décimos","8 milésimos"],a:0},
 {t:"choice",q:"¿Cuál es el mayor?",o:["0,6","0,59","0,599"],a:0},
 {t:"fill",q:"Calculá",labels:["3,75 + 1,5","10 − 2,35"],a:["re:^\\s*5[,.]25\\s*$","re:^\\s*7[,.]65\\s*$"]},
 {t:"fill",q:"Un litro de leche cuesta <b>$1.250,50</b>. ¿Cuánto cuestan 4 litros?",labels:["Respuesta"],a:["re:^\\s*\\$?\\s*5\\.?002([,.]0+)?\\s*$"]},
 {t:"order",q:"Ordená de menor a mayor",items:["0,5","0,05","0,55","0,505"],a:["0,05","0,5","0,505","0,55"]}
]},
{id:"m3",dot:"🔁",name:"Múltiplos y proporción",title:"Múltiplos, divisores y proporcionalidad",sub:"Coincidencias · primos · tablas de proporcionalidad",
rules:`
<div class="rsec"><h4>Primos</h4>
<p class="exline">Un número es <b>primo</b> si solo se puede dividir exacto por 1 y por sí mismo: 2, 3, 5, 7, 11, 13…</p></div>
<div class="rsec"><h4>Múltiplo común y divisor común</h4>
<p class="exline">Para saber cuándo <b>coinciden</b> dos cosas que se repiten, buscá el menor <b>múltiplo común</b>. Para armar grupos iguales <b>sin que sobre</b>, el mayor <b>divisor común</b>.</p></div>
<div class="rsec"><h4>Proporcionalidad directa</h4>
<p class="exline">Si una cantidad se multiplica por un número, la otra también se multiplica por el mismo número. Averiguar el valor de <b>1 unidad</b> suele ser el camino más seguro.</p></div>`,
ex:[
 {t:"fill",q:"Un faro se enciende cada <b>6</b> segundos y otro cada <b>8</b>. Si se encienden juntos, ¿en cuántos segundos vuelven a coincidir?",labels:["Respuesta"],a:["24"]},
 {t:"fill",q:"¿Cuál es el mayor número que divide exactamente a 30 y a 45?",labels:[""],a:["15"]},
 {t:"choice",q:"¿El 29 es primo?",o:["Sí","No"],a:0},
 {t:"choice",q:"¿Cuál es primo?",o:["31","33","39"],a:0},
 {t:"fill",q:"<b>3</b> kg de manzanas cuestan <b>$4.500</b>. ¿Cuánto cuestan <b>7</b> kg?",labels:["Respuesta"],a:["10500"]},
 {t:"fill",q:"Una receta para <b>4</b> personas lleva <b>300 g</b> de harina. ¿Cuántos gramos hacen falta para <b>10</b> personas?",labels:["Respuesta"],a:["750"]},
 {t:"choice",q:"¿Cuál es una tabla de proporcionalidad directa?",o:["1 → 5, 2 → 10, 3 → 15","1 → 5, 2 → 7, 3 → 9","1 → 5, 2 → 4, 3 → 3"],a:0}
]},
{id:"m4",dot:"📐",name:"Ángulos",title:"Ángulos interiores",sub:"Triángulos: 180° · cuadriláteros: 360°",
rules:`
<div class="rsec"><h4>La suma de los ángulos interiores</h4>
<div class="rrow"><span class="rl">en cualquier triángulo</span><span class="ra">180°</span></div>
<div class="rrow"><span class="rl">en cualquier cuadrilátero</span><span class="ra">360°</span></div>
<p class="exline">¿Por qué 360°? Porque todo cuadrilátero se puede partir en <b>dos triángulos</b> con una diagonal.</p>
<p class="exline">Ejemplo: si un triángulo tiene ángulos de 50° y 60°, el tercero mide 180° − 110° = 70°.</p>
<div class="warn">Recordá: un ángulo recto mide 90°, y en un triángulo isósceles los dos ángulos de la base son iguales.</div></div>`,
ex:[
 {t:"fill",q:"Un triángulo tiene ángulos de 40° y 75°. ¿Cuánto mide el tercero?",labels:["Grados"],a:["65"]},
 {t:"fill",q:"Un triángulo rectángulo tiene un ángulo de 35°. ¿Cuánto mide el otro ángulo agudo?",labels:["Grados"],a:["55"]},
 {t:"fill",q:"En un triángulo equilátero, ¿cuánto mide cada ángulo?",labels:["Grados"],a:["60"]},
 {t:"fill",q:"Un cuadrilátero tiene ángulos de 90°, 90° y 110°. ¿Cuánto mide el cuarto?",labels:["Grados"],a:["70"]},
 {t:"choice",q:"¿Puede un triángulo tener dos ángulos rectos?",o:["No","Sí"],a:0},
 {t:"choice",q:"La suma de los ángulos interiores de un rectángulo es…",o:["360°","180°","90°"],a:0},
 {t:"fill",q:"En un triángulo isósceles, el ángulo distinto mide 40°. ¿Cuánto mide cada uno de los otros dos?",labels:["Grados"],a:["70"]}
]},
{id:"m5",dot:"🧾",name:"Problemas",title:"Problemas con las cuatro operaciones",sub:"Varios pasos · orden de las operaciones",
rules:`
<div class="rsec"><h4>Problemas de varios pasos</h4>
<p class="exline">Separá el problema en preguntas más chicas y resolvé una por vez. Anotá qué representa cada resultado.</p></div>
<div class="rsec"><h4>Orden de las operaciones</h4>
<div class="rrow"><span class="rl">1º</span><span class="ra">lo que está entre paréntesis</span></div>
<div class="rrow"><span class="rl">2º</span><span class="ra">multiplicaciones y divisiones</span></div>
<div class="rrow"><span class="rl">3º</span><span class="ra">sumas y restas</span></div>
<p class="exline">Ejemplo: 2 + 3 × 4 = 2 + 12 = 14 (no 20).</p></div>`,
ex:[
 {t:"fill",q:"Compré <b>3</b> cuadernos de <b>$2.400</b> y pagué con <b>$10.000</b>. ¿Cuánto me dieron de vuelto?",labels:["Respuesta"],a:["2800"]},
 {t:"fill",q:"Un micro lleva <b>45</b> pasajeros. ¿Cuántos micros hacen falta para <b>380</b> personas?",labels:["Respuesta"],a:["9"]},
 {t:"fill",q:"Ana ahorra <b>$1.500</b> por semana. ¿En cuántas semanas junta <b>$21.000</b>?",labels:["Respuesta"],a:["14"]},
 {t:"fill",q:"Un tanque de <b>1.200</b> litros pierde <b>25</b> litros por hora. ¿Cuántos litros quedan después de <b>8</b> horas?",labels:["Respuesta"],a:["1000"]},
 {t:"fill",q:"Calculá: 6 × 25 + 100 ÷ 4",labels:[""],a:["175"]},
 {t:"fill",q:"Calculá: (48 − 18) × 3",labels:[""],a:["90"]},
 {t:"choice",q:"«Tenía $5.000, gasté $1.200 y después me regalaron $800.» ¿Qué cálculo da lo que tengo ahora?",o:["5.000 − 1.200 + 800","5.000 − (1.200 + 800)","5.000 + 1.200 − 800"],a:0}
]},
{id:"msim",dot:"📝",name:"Simulacro",title:"Simulacro de Matemática",sub:"Todo junto",
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">En los problemas, escribí qué representa cada número que calculás. Al final, controlá con una estimación.</p></div>`,
ex:[
 {t:"fill",q:"1. Resolvé 235 ÷ 9",labels:["Cociente","Resto"],a:["26","1"]},
 {t:"fill",q:"2. Calculá: 3,7 × 100",labels:[""],a:["re:^\\s*370([,.]0+)?\\s*$"]},
 {t:"fill",q:"3. Un triángulo tiene ángulos de 65° y 45°. ¿Cuánto mide el tercero?",labels:["Grados"],a:["70"]},
 {t:"fill",q:"4. Una alarma suena cada <b>4</b> minutos y otra cada <b>10</b>. Si sonaron juntas, ¿en cuántos minutos vuelven a coincidir?",labels:["Respuesta"],a:["20"]},
 {t:"fill",q:"5. <b>5</b> entradas cuestan <b>$12.500</b>. ¿Cuánto cuestan <b>7</b>?",labels:["Respuesta"],a:["17500"]},
 {t:"fill",q:"6. Un cuadrilátero tiene ángulos de 80°, 100° y 95°. ¿Cuánto mide el cuarto?",labels:["Grados"],a:["85"]},
 {t:"choice",q:"7. ¿Cuál es el mayor?",o:["0,8","0,75","0,799"],a:0},
 {t:"fill",q:"8. Calculá: (120 + 30) ÷ 5",labels:[""],a:["30"]}
]}
],

lengua:[
{id:"l1",dot:"🌊",name:"Antiguas cacerías",title:"Antiguas cacerías: un cuento fantástico",sub:"Dos amigos, dos tiempos",book:["antiguas-cacerias"],
rules:`
<div class="rsec"><h4>¿Qué hace fantástico a un cuento?</h4>
<p class="exline">En un mundo que parece normal, ocurre algo <b>imposible de explicar</b>, y el lector se queda con la duda: ¿fue real, un sueño o algo más?</p></div>
<div class="rsec"><h4>Leer dos tiempos a la vez</h4>
<p class="exline">Algunos cuentos alternan escenas de épocas distintas. Prestá atención a las <b>marcas de cambio</b>: espacios en blanco, fechas y cambios de lugar.</p>
<div class="warn">El cuento toca un tema histórico serio. Las preguntas se responden con el texto delante.</div></div>`,
ex:[
 {t:"fill",q:"¿En qué ciudad ocurren los hechos del presente?",labels:[""],a:["montevideo"]},
 {t:"fill",q:"¿En qué año transcurre la historia del pasado?",labels:[""],a:["1792"]},
 {t:"choice",q:"¿Cómo se llama la maestra de primer grado?",o:["Alicia","Clara","Inés"],a:0},
 {t:"choice",q:"Según lo que averiguan los chicos, el apellido Vondel es de origen…",o:["holandés","bantú","uruguayo"],a:0},
 {t:"choice",q:"En la historia del pasado, ¿quién es Kamba Maï?",o:["Un príncipe africano","Un marinero holandés","Un pescador de Montevideo"],a:0},
 {t:"choice",q:"En el pasado, el capitán Vondel quiere…",o:["capturar al príncipe para venderlo como esclavo","salvarlo de la tormenta","enseñarle a navegar"],a:0},
 {t:"choice",q:"En el presente, ¿qué le pasa a Kamba en la playa?",o:["Cae en un pozo de mar entre las rocas","Se pierde en el bosque","Se enferma"],a:0},
 {t:"choice",q:"¿Por qué es un cuento fantástico?",o:["Porque los chicos parecen vivir lo que vivieron sus antepasados, algo imposible en la realidad","Porque aparecen dragones","Porque es una noticia real"],a:0},
 {t:"open",q:"En el presente, Cées le da la mano a Kamba; en el pasado, el capitán le tira una red. ¿Qué crees que quiere mostrar el cuento con ese contraste?",model:"Una lectura posible: la amistad del presente repara o contradice la violencia del pasado. Que justifique con escenas concretas."},
 {t:"open",q:"Buscá información y escribí tres datos sobre la esclavitud en el Río de la Plata en la época colonial",model:"Que los datos salgan de una fuente confiable (manual, enciclopedia, sitio educativo) y estén en oraciones propias."}
]},
{id:"l2",dot:"🏛️",name:"Mitos griegos",title:"Mitos griegos y el camino del héroe",sub:"Dioses, héroes y pruebas",
rules:`
<div class="rsec"><h4>El camino del héroe</h4>
<p class="exline">Muchos relatos de héroes siguen un recorrido parecido:</p>
<div class="rrow"><span class="rl">1. el llamado a la aventura</span><span class="ra">algo lo obliga a salir</span></div>
<div class="rrow"><span class="rl">2. las pruebas y los ayudantes</span><span class="ra">obstáculos y aliados</span></div>
<div class="rrow"><span class="rl">3. el desafío final</span><span class="ra">el momento más difícil</span></div>
<div class="rrow"><span class="rl">4. el regreso</span><span class="ra">vuelve transformado</span></div></div>
<div class="rsec"><h4>Los dioses del Olimpo</h4>
<p class="exline">En los mitos griegos, los dioses viven en el monte Olimpo e intervienen en la vida de los humanos: los ayudan, los castigan o los ponen a prueba.</p></div>`,
ex:[
 {t:"choice",q:"¿Quién venció al Minotauro?",o:["Teseo","Perseo","Hércules"],a:0},
 {t:"choice",q:"¿Qué usó Teseo para salir del laberinto?",o:["Un ovillo de hilo que le dio Ariadna","Un mapa","Unas alas de cera"],a:0},
 {t:"choice",q:"¿Por qué cayó Ícaro al mar?",o:["Voló demasiado cerca del sol y se derritió la cera de sus alas","Se cansó de volar","Lo empujó un dios"],a:0},
 {t:"choice",q:"Medusa convertía en piedra a quien…",o:["la miraba","la tocaba","le hablaba"],a:0},
 {t:"choice",q:"¿Quién es el rey de los dioses del Olimpo?",o:["Zeus","Poseidón","Hades"],a:0},
 {t:"choice",q:"Cuando Teseo decide viajar a Creta para enfrentar al Minotauro, ¿qué etapa del camino del héroe es?",o:["El llamado a la aventura","El regreso","El desafío final"],a:0},
 {t:"open",q:"Escribí el comienzo de un relato mitológico con tu propio héroe o heroína: ¿cuál es su llamado a la aventura?",model:"Que presente al personaje, el lugar y algo que lo obligue a salir de su mundo conocido."}
]},
{id:"l3",dot:"👻",name:"Novelas breves",title:"Novelas breves clásicas",sub:"El fantasma de Canterville · El diablo en la botella",book:["canterville"],
rules:`
<div class="rsec"><h4>Terror con humor</h4>
<p class="exline">Algunos relatos usan los elementos del terror (castillos, fantasmas, maldiciones) pero <b>dan vuelta lo esperado</b>: quien debería dar miedo termina siendo el que se asusta. Ahí aparece el humor.</p></div>
<div class="rsec"><h4>Leer un clásico</h4>
<p class="exline">Antes de leer, conviene buscar quién lo escribió, cuándo y dónde. Esos datos suelen estar en el <b>prólogo</b> o la <b>biografía</b> del autor.</p></div>`,
ex:[
 {t:"choice",q:"¿Quién escribió «El fantasma de Canterville»?",o:["Oscar Wilde","Robert L. Stevenson","Mark Twain"],a:0},
 {t:"choice",q:"La familia que compra el castillo de Canterville viene de…",o:["Estados Unidos","Inglaterra","Francia"],a:0},
 {t:"choice",q:"¿Qué tiene de gracioso el cuento?",o:["La familia no le tiene miedo al fantasma, y es él quien termina asustado","El fantasma cuenta chistes","No tiene nada de gracioso"],a:0},
 {t:"choice",q:"¿Qué pasa con la mancha de sangre del castillo?",o:["La limpian y vuelve a aparecer","Nunca la encuentran","La pinta el fantasma de azul desde el principio"],a:0},
 {t:"choice",q:"«El diablo en la botella» es de…",o:["Robert L. Stevenson","Oscar Wilde","Edgar Allan Poe"],a:0},
 {t:"choice",q:"En «El diablo en la botella», quien tiene la botella debe…",o:["venderla más barata de lo que la compró antes de morir","romperla","regalarla a un amigo"],a:0},
 {t:"open",q:"Elegí un personaje de una novela que leíste y describilo usando al menos cuatro adjetivos",model:"Que los adjetivos concuerden en género y número con el sustantivo, y que la descripción se apoye en lo que hace el personaje."}
]},
{id:"l4",dot:"⏳",name:"Gramática",title:"Adjetivos, tiempos verbales y conectores",sub:"Concordancia · pretérito perfecto e imperfecto · conectores temporales",
rules:`
<div class="rsec"><h4>Concordancia</h4>
<p class="exline">El adjetivo tiene el mismo <b>género</b> y <b>número</b> que el sustantivo: unos árbol<b>es</b> alt<b>os</b>, una noche oscur<b>a</b>.</p></div>
<div class="rsec"><h4>Dos pretéritos para narrar</h4>
<div class="rrow"><span class="rl">imperfecto: describe o cuenta lo habitual</span><span class="ra">llovía, caminaba</span></div>
<div class="rrow"><span class="rl">perfecto simple: acción puntual, que avanza la historia</span><span class="ra">llovió, caminó</span></div>
<div class="warn">En un relato, el imperfecto pinta el escenario y el perfecto simple cuenta lo que <b>pasó</b> de golpe.</div></div>
<div class="rsec"><h4>Conectores de tiempo</h4>
<p class="exline">Indican si algo pasó antes, al mismo tiempo o después de otra cosa.</p></div>`,
ex:[
 {t:"choice",q:"«Las casas ___»",o:["antiguas","antiguos","antigua"],a:0},
 {t:"choice",q:"«El castillo era ___»",o:["oscuro y frío","oscura y fría","oscuros y fríos"],a:0},
 {t:"choice",q:"«Todas las noches el fantasma ___ por los pasillos.» (acción habitual)",o:["recorría","recorrió"],a:0},
 {t:"choice",q:"«De repente, alguien ___ la puerta.» (acción puntual)",o:["golpeó","golpeaba"],a:0},
 {t:"choice",q:"¿Qué conector indica que dos cosas pasan al mismo tiempo?",o:["mientras","después","antes"],a:0},
 {t:"choice",q:"¿Qué conector indica que algo pasó antes?",o:["antes de que","luego","finalmente"],a:0},
 {t:"choice",q:"¿Cuál es un adjetivo?",o:["valiente","valentía","valer"],a:0},
 {t:"open",q:"Escribí un párrafo de terror: usá el imperfecto para describir el lugar y el perfecto simple para lo que pasa de golpe",model:"Revisá que la descripción esté en imperfecto (era, había, sonaba) y que la acción repentina esté en perfecto simple (se abrió, gritó)."}
]},
{id:"l5",dot:"🌳",name:"Ortografía",title:"Familias de palabras y tildes",sub:"Derivación · composición · tildes · hiatos",
rules:`
<div class="rsec"><h4>Familias de palabras</h4>
<p class="exline">Las palabras de una misma familia comparten una raíz y, casi siempre, su ortografía: <b>pan</b>, <b>pan</b>adero, <b>pan</b>adería.</p>
<div class="rrow"><span class="rl">primitiva</span><span class="ra">no sale de otra: pan</span></div>
<div class="rrow"><span class="rl">derivada</span><span class="ra">se le agrega algo: panadero</span></div>
<div class="rrow"><span class="rl">compuesta</span><span class="ra">se unen dos palabras: abrelatas</span></div>
<div class="warn">Si dudás cómo se escribe una palabra, pensá en otra de su familia que sepas escribir.</div></div>
<div class="rsec"><h4>Tilde en vocales que se separan</h4>
<p class="exline">Cuando la <b>i</b> o la <b>u</b> suenan fuerte junto a otra vocal, llevan tilde aunque no lo pida la regla general: r<b>í</b>o, b<b>ú</b>ho.</p></div>`,
ex:[
 {t:"choice",q:"¿Cuál es de la familia de «mar»?",o:["marinero","martes","marco"],a:0},
 {t:"choice",q:"«Sacapuntas» es una palabra…",o:["compuesta","derivada","primitiva"],a:0},
 {t:"choice",q:"«Florería» es una palabra…",o:["derivada","compuesta","primitiva"],a:0},
 {t:"choice",q:"«Hierba» se escribe con H. ¿Cómo se escribe su familiar?",o:["herbívoro","erbívoro"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["país","pais"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["día","dia"],a:0},
 {t:"choice",q:"¿Cuál está bien escrita?",o:["ningun","ningún"],a:1},
 {t:"choice",q:"«Héroe» lleva tilde porque es…",o:["esdrújula","aguda","grave terminada en vocal"],a:0}
]},
{id:"lsim",dot:"📝",name:"Simulacro",title:"Simulacro de Lengua",sub:"Todo junto",book:["antiguas-cacerias"],
rules:`<div class="rsec"><h4>Antes de empezar</h4><p class="exline">Leé con atención. Al terminar, revisá concordancias, tiempos verbales y tildes.</p></div>`,
ex:[
 {t:"choice",q:"1. «Antiguas cacerías» cuenta la historia de…",o:["dos amigos que parecen revivir lo que vivieron sus antepasados","una familia que compra un castillo","un héroe que vence a un monstruo"],a:0},
 {t:"choice",q:"2. ¿Quién es el rey de los dioses del Olimpo?",o:["Zeus","Apolo","Hermes"],a:0},
 {t:"choice",q:"3. ¿Quién escribió «El fantasma de Canterville»?",o:["Oscar Wilde","Julio Verne","Horacio Quiroga"],a:0},
 {t:"choice",q:"4. «Unas montañas ___»",o:["nevadas","nevados","nevada"],a:0},
 {t:"choice",q:"5. ¿Cuál está bien escrita?",o:["baúl","baul"],a:0},
 {t:"choice",q:"6. «Cuando era chico, ___ en el río todos los veranos.» (costumbre)",o:["nadaba","nadé"],a:0},
 {t:"open",q:"7. Escribí una reseña breve de un cuento fantástico que leíste: de qué trata (sin contar el final) y por qué lo recomendarías",model:"Dos partes: la presentación de la historia y la opinión fundamentada."}
]}
]
};
