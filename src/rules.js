/* Reglas: explican el mecanismo con ejemplos DISTINTOS a los de los ejercicios */
const RULES = {

"ing2.starter":`
<div class="rsec"><h4>Los saludos van de a pares</h4>
<p class="exline">Cada pregunta tiene su respuesta fija. Se memorizan juntas, como un par.</p>
<div class="rrow"><span class="rl">Goodbye!</span><span class="ra">See you tomorrow!</span></div>
<p class="exline">No hay regla que estudiar: hay que reconocer qué responde a qué.</p></div>
<div class="rsec"><h4>El apóstrofe borra una letra</h4>
<div class="rrow"><span class="rl">He's</span><span class="ra">= He is</span></div>
<div class="rrow"><span class="rl">That's</span><span class="ra">= That is</span></div>
<p class="exline">Siempre funciona igual: se junta el verbo con la palabra de antes y la letra que falta se reemplaza por el apóstrofe.</p></div>
<div class="rsec"><h4>Las instrucciones son órdenes</h4>
<p class="exline">El verbo va <b>primero y solo</b>, sin sujeto adelante.</p>
<div class="rrow"><span class="rl">Listen!</span><span class="ra">¡Escuchá!</span></div>
<div class="warn">Para traducir una instrucción, fijate en el <b>verbo</b>: es la primera palabra y es la que manda. Las que vienen después dicen sobre qué.</div></div>
<div class="rsec"><h4>Preguntar qué es algo</h4>
<p class="exline">A <b>What is it?</b> se contesta con <b>It's a</b> + el objeto.</p>
<div class="rrow"><span class="rl">What is it?</span><span class="ra">It's a box.</span></div></div>`,

"ing2.u1":`
<div class="rsec"><h4>El verbo TO BE</h4>
<div class="rrow"><span class="rl">I</span><span class="ra">am</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">is</span></div>
<div class="rrow"><span class="rl">you / we / they</span><span class="ra">are</span></div>
<p class="exline">The cat <b>is</b> small. &nbsp; We <b>are</b> at school.</p>
<div class="warn">La edad también se dice con <b>to be</b>, no con "tener": <b>He is eleven.</b> Literalmente "él ES once".</div></div>
<div class="rsec"><h4>Para preguntar, se da vuelta</h4>
<div class="rrow"><span class="rl">The dog is big.</span><span class="ra">Is the dog big?</span></div>
<p class="exline">El verbo salta al principio. Nada más cambia de lugar.</p></div>
<div class="rsec"><h4>Respuestas cortas</h4>
<div class="rrow"><span class="rl">Is the dog big?</span><span class="ra">Yes, it is. / No, it isn't.</span></div>
<div class="warn"><b>&#9888; En el SÍ nunca se contrae.</b><br>
<span class="yes">&#10003;</span> Yes, he <b>is</b>. &nbsp;&nbsp; <span class="no">&#10007;</span> Yes, he's.<br>
En el NO sí se puede: No, he isn't.</div></div>
<div class="rsec"><h4>HIS o HER: mirá de quién es</h4>
<div class="rrow"><span class="rl">Pablo &rarr; es varón</span><span class="ra">his bike</span></div>
<div class="rrow"><span class="rl">Lucía &rarr; es mujer</span><span class="ra">her bike</span></div>
<div class="warn"><b>&#9888; La trampa:</b> en castellano los dos son <b>"su"</b>. En inglés no mirás la cosa, mirás <b>al dueño</b>. La bicicleta de Pablo es <b>his</b> bike aunque "bicicleta" sea femenino.</div></div>`,

"ing2.u2":`
<div class="rsec"><h4>TO BE en plural</h4>
<div class="rrow"><span class="rl">we / you / they</span><span class="ra">are</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">is</span></div>
<p class="exline">You <b>are</b> my friends. &nbsp; The dogs <b>are</b> big.</p></div>
<div class="rsec"><h4>El negativo</h4>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">isn't</span></div>
<div class="rrow"><span class="rl">we / you / they</span><span class="ra">aren't</span></div>
<p class="exline">The cat <b>isn't</b> black. &nbsp; They <b>aren't</b> at home.</p></div>
<div class="rsec"><h4>Regla de oro de las respuestas cortas</h4>
<p class="exline">Se contesta con <b>el mismo verbo</b> con el que empieza la pregunta.</p>
<div class="rrow"><span class="rl">Is it big?</span><span class="ra">Yes, it is.</span></div>
<div class="rrow"><span class="rl">Are we late?</span><span class="ra">No, we aren't.</span></div>
<div class="warn">Mirá la <b>primera palabra</b> de la pregunta: esa misma, conjugada igual, es la que va en la respuesta.</div></div>
<div class="rsec"><h4>Adjetivos</h4>
<p class="exline">Casi todos vienen en <b>pares opuestos</b>. Si te sale uno, pensá cuál sería su contrario: suele ser el que buscás.</p></div>`,

"ing2.u3":`
<div class="rsec"><h4>There is / There are = "hay"</h4>
<div class="rrow"><span class="rl">1 sola cosa</span><span class="ra">There is</span></div>
<div class="rrow"><span class="rl">2 o más</span><span class="ra">There are</span></div>
<p class="exline">There <b>is</b> a dog in the garden. &nbsp; There <b>are</b> three birds.</p>
<div class="warn"><b>&#9888; Truco rápido:</b> si el sustantivo termina en <b>-s</b>, va <b>are</b>. Si no, va <b>is</b>.</div></div>
<div class="rsec"><h4>Preguntas y respuestas</h4>
<div class="rrow"><span class="rl">Is there a garden? (no)</span><span class="ra">No, there isn't.</span></div>
<div class="rrow"><span class="rl">Are there any trees? (sí)</span><span class="ra">Yes, there are.</span></div>
<p class="exline">En la respuesta se repiten <b>there</b> y el mismo verbo de la pregunta (<b>is</b> o <b>are</b>). Para el SÍ va sin negación; para el NO, con <b>n't</b>.</p></div>
<div class="rsec"><h4>How many…? (cuántos)</h4>
<div class="rrow"><span class="rl">How many birds are there?</span><span class="ra">There are three.</span></div>
<p class="exline">Después de <b>How many</b> el sustantivo va en <b>plural</b>, y se contesta con <b>There are</b> + el número.</p></div>
<div class="rsec"><h4>Preposiciones: el lugar exacto importa</h4>
<p class="exline">Dos que se confunden todo el tiempo:</p>
<div class="rrow"><span class="rl">The bird is <b>in</b> the cage</span><span class="ra">adentro</span></div>
<div class="rrow"><span class="rl">The bird is <b>on</b> the cage</span><span class="ra">tocando la superficie</span></div>
<div class="warn"><b>&#9888; between</b> necesita siempre <b>dos</b> cosas, una de cada lado. Si hay una sola referencia, no puede ser <i>between</i>.<br>
Antes de contestar, imaginate la escena y preguntate: ¿adentro, arriba, abajo, atrás, adelante, al costado, o en el medio de dos?</div></div>`,

"ing2.u4":`
<div class="rsec"><h4>La S de he / she / it</h4>
<div class="rrow"><span class="rl">I / you / we / they</span><span class="ra">like</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">like<b>s</b></span></div>
<p class="exline">My cousin <b>likes</b> music. &nbsp; We <b>like</b> music.</p></div>
<div class="rsec"><h4>El negativo</h4>
<div class="rrow"><span class="rl">I / you / we / they</span><span class="ra">don't</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">doesn't</span></div>
<p class="exline">We <b>don't</b> like rain. &nbsp; It <b>doesn't</b> like water.</p></div>
<div class="rsec"><h4>La pregunta</h4>
<div class="rrow"><span class="rl">Do they like school?</span><span class="ra">Yes, they do. / No, they don't.</span></div>
<div class="rrow"><span class="rl">Does your dad like tea?</span><span class="ra">Yes, he does. / No, he doesn't.</span></div></div>
<div class="rsec"><h4>&#11088; La regla más importante de la unidad</h4>
<div class="warn"><b>La S aparece UNA sola vez por frase.</b> Si ya está en <b>does</b> o <b>doesn't</b>, el verbo va limpio.<br><br>
<span class="yes">&#10003;</span> She play<b>s</b> tennis.<br>
<span class="yes">&#10003;</span> She <b>doesn't play</b> tennis. &nbsp; <span class="no">&#10007;</span> She doesn't <span class="no">plays</span>.<br>
<span class="yes">&#10003;</span> <b>Does</b> she <b>play</b> tennis? &nbsp; <span class="no">&#10007;</span> Does she <span class="no">plays</span>?<br><br>
<b>Truco:</b> "does le roba la S al verbo".</div></div>`,

"ing2.u5":`
<div class="rsec"><h4>CAN es igual para todos</h4>
<p class="exline">No cambia nunca y <b>no lleva S</b>, ni siquiera con he / she / it.</p>
<div class="rrow"><span class="rl">My brother <b>can</b> dance.</span><span class="ra">nunca "cans"</span></div>
<p class="exline">El verbo que viene después va <b>solo</b>, sin "to": can <b>jump</b>, can <b>sing</b>.</p></div>
<div class="rsec"><h4>Negativo y pregunta con CAN</h4>
<div class="rrow"><span class="rl">negativo</span><span class="ra">can't</span></div>
<div class="rrow"><span class="rl">Can it climb?</span><span class="ra">Yes, it can. / No, it can't.</span></div></div>
<div class="rsec"><h4>Hechos: lo que pasa siempre</h4>
<div class="rrow"><span class="rl">plural (varios)</span><span class="ra">Cats sleep a lot.</span></div>
<div class="rrow"><span class="rl">singular (uno)</span><span class="ra">A cat sleep<b>s</b> a lot.</span></div>
<p class="exline">Es la misma S de la Unit 4. Para preguntar se usan <b>Do</b> y <b>Does</b>, con la misma división.</p></div>
<div class="rsec"><h4>&#9888; No mezclar CAN con DO</h4>
<div class="warn">La respuesta corta repite el verbo con el que <b>empieza</b> la pregunta.<br>
Can you dance? &rarr; <span class="yes">Yes, I can</span>, nunca <span class="no">Yes, I do</span>.<br>
Do you dance? &rarr; <span class="yes">Yes, I do</span>, nunca <span class="no">Yes, I can</span>.</div></div>`,

"ing2.u6":`
<div class="rsec"><h4>HAVE GOT = tener</h4>
<p class="exline">Son <b>dos palabras que van siempre juntas</b> y significan una sola cosa: tener.</p>
<div class="rrow"><span class="rl">I / you / we / they</span><span class="ra">have got</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">has got</span></div>
<p class="exline">I <b>have got</b> two brothers. &nbsp; My friend <b>has got</b> a bike.</p></div>
<div class="rsec"><h4>&#11088; "GOT" no cambia nunca</h4>
<div class="warn">Lo único que se mueve es <b>have</b> / <b>has</b>. La palabra <b>got</b> se escribe siempre igual.<br>
No existen <span class="no">"hases"</span>, <span class="no">"gots"</span> ni <span class="no">"haves"</span>.</div></div>
<div class="rsec"><h4>Negativo, pregunta y respuesta corta</h4>
<div class="rrow"><span class="rl">negativo</span><span class="ra">haven't got / hasn't got</span></div>
<div class="rrow"><span class="rl">Has she got a sister?</span><span class="ra">Yes, she has. / No, she hasn't.</span></div>
<div class="warn"><b>&#9888; En la respuesta corta NO se repite "got".</b><br>
<span class="yes">&#10003;</span> Yes, they <b>have</b>. &nbsp;&nbsp; <span class="no">&#10007;</span> Yes, they have <span class="no">got</span>.</div></div>
<div class="rsec"><h4>This / That / These / Those</h4>
<div class="rrow"><span class="rl">cerca — 1</span><span class="ra">this</span></div>
<div class="rrow"><span class="rl">cerca — varios</span><span class="ra">these</span></div>
<div class="rrow"><span class="rl">lejos — 1</span><span class="ra">that</span></div>
<div class="rrow"><span class="rl">lejos — varios</span><span class="ra">those</span></div>
<p class="exline"><b>This</b> is a book. &nbsp; <b>These</b> are books. &nbsp; <b>That</b> is a tree. &nbsp; <b>Those</b> are trees.</p>
<div class="warn"><b>Truco:</b> <b>these</b> y <b>those</b> terminan en <b>-se</b> &rarr; son los plurales. Y si la palabra es plural, el verbo también: These <b>are</b>, Those <b>are</b>.</div></div>`,

"ing2.resumen":`
<div class="rsec"><h4>1. ¿Qué querés decir?</h4>
<div class="rrow"><span class="rl">ser, estar, edad, cómo es algo</span><span class="ra">am / is / are</span></div>
<div class="rrow"><span class="rl">tener algo</span><span class="ra">have got / has got</span></div>
<div class="rrow"><span class="rl">gustar, comer, acciones y hechos</span><span class="ra">do / does</span></div>
<div class="rrow"><span class="rl">poder o saber hacer</span><span class="ra">can</span></div>
<div class="rrow"><span class="rl">hay cosas en un lugar</span><span class="ra">there is / there are</span></div></div>
<div class="rsec"><h4>2. ¿Quién hace la acción? Hay dos grupos</h4>
<div class="rrow"><span class="rl"><b>Grupo A</b> — I, you, we, they</span><span class="ra">are · have got · like · do</span></div>
<div class="rrow"><span class="rl"><b>Grupo B</b> — he, she, it</span><span class="ra">is · has got · likes · does</span></div>
<div class="warn"><b>El Grupo B es el de la S:</b> i<b>s</b>, ha<b>s</b>, like<b>s</b>, doe<b>s</b>. Si el sujeto es él, ella, un animal o una cosa, casi todo lleva S.<br>
(<b>I</b> es la excepción: va con <b>am</b>.)</div></div>
<div class="rsec"><h4>3. Las respuestas cortas repiten el verbo de la pregunta</h4>
<p class="exline">Mirá con qué palabra <b>empieza</b> la pregunta y contestá con esa misma:</p>
<div class="rrow"><span class="rl">Is… / Are… / Am…</span><span class="ra">… is / are / am</span></div>
<div class="rrow"><span class="rl">Do… / Does…</span><span class="ra">… do / does</span></div>
<div class="rrow"><span class="rl">Have… / Has…</span><span class="ra">… have / has</span></div>
<div class="rrow"><span class="rl">Can…</span><span class="ra">… can</span></div>
<div class="warn"><b>&#9888; El error más común de toda la prueba</b> es contestar con el verbo equivocado. Antes de responder, tapá la pregunta con el dedo salvo la primera palabra: esa manda.</div></div>`,

"mate.m1":`
<div class="rsec"><h4>Valor posicional</h4>
<p class="exline">En <b>487</b> cada cifra vale distinto según el lugar que ocupa:</p>
<div class="rrow"><span class="rl">el 4 está en las <b>centenas</b></span><span class="ra">vale 400</span></div>
<div class="rrow"><span class="rl">el 8 está en las <b>decenas</b></span><span class="ra">vale 80</span></div>
<div class="rrow"><span class="rl">el 7 está en las <b>unidades</b></span><span class="ra">vale 7</span></div>
<p class="exline">Descomponer es escribirlo así: <b>487 = 400 + 80 + 7</b>.</p>
<div class="warn"><b>&#9888; Cuidado con los ceros.</b> Si una posición tiene 0, esa parte <b>no se escribe</b>: en 306 no hay decenas, así que la descomposición tiene solo dos partes, no tres.</div></div>
<div class="rsec"><h4>Comparar: &lt; y &gt;</h4>
<p class="exline">La boca del signo <b>siempre se abre hacia el número más grande</b>.</p>
<div class="rrow"><span class="rl">271 &lt; 294</span><span class="ra">la boca mira a 294</span></div>
<div class="rrow"><span class="rl">530 &gt; 503</span><span class="ra">la boca mira a 530</span></div>
<div class="warn"><b>Cómo comparar en dos pasos:</b><br>
1. Contá cuántas cifras tiene cada uno. El que tiene más, gana: <b>102 &gt; 88</b> aunque empiece con 1.<br>
2. Si tienen la misma cantidad, compará cifra por cifra <b>desde la izquierda</b>, hasta encontrar la primera diferencia.</div></div>
<div class="rsec"><h4>Ordenar de menor a mayor</h4>
<p class="exline">Separá primero por cantidad de cifras: van antes los de dos cifras, después los de tres, después los de cuatro. Recién dentro de cada grupo comparás.</p></div>`,

"mate.m2":`
<div class="rsec"><h4>¿Qué es una regularidad?</h4>
<p class="exline">Es algo que se repite siguiendo una regla. Para descubrirla, mirá <b>cuánto cambia de un número al siguiente</b>.</p>
<div class="rrow"><span class="rl">300 – 400 – 500</span><span class="ra">+100 cada vez</span></div>
<div class="rrow"><span class="rl">90 – 80 – 70</span><span class="ra">−10 cada vez</span></div>
<div class="warn"><b>&#9888; Primero fijate si sube o baja.</b> Muchos errores salen de sumar en una serie que en realidad va restando. Restá dos números seguidos para encontrar el salto.</div></div>
<div class="rsec"><h4>Sumar o restar 100 y 1.000</h4>
<p class="exline">Normalmente cambia <b>una sola cifra</b>:</p>
<div class="rrow"><span class="rl">100 más que <b>7</b>12</span><span class="ra"><b>8</b>12</span></div>
<div class="rrow"><span class="rl">1.000 más que <b>5</b>.040</span><span class="ra"><b>6</b>.040</span></div>
<div class="warn"><b>&#9888; La excepción:</b> cuando hay que "pasarse", cambian varias cifras a la vez. Uno menos que <b>400</b> no es 309 ni 390: es <b>399</b>. Pensalo como bajar un escalón entero.</div></div>
<div class="rsec"><h4>El número del medio</h4>
<p class="exline">Entre dos números que se llevan por 2, el del medio es el que sigue al primero. Entre 120 y 122 está el 121.</p></div>`,

"mate.m3":`
<div class="rsec"><h4>Tres formas de resolver</h4>
<div class="rrow"><span class="rl">Mentalmente</span><span class="ra">150 + 20 = 170</span></div>
<div class="rrow"><span class="rl">Por descomposición</span><span class="ra">61 + 23 = (60+20)+(1+3)</span></div>
<div class="rrow"><span class="rl">Con la cuenta parada</span><span class="ra">una cifra debajo de la otra</span></div>
<p class="exline">Las tres valen. Elegí la que te salga más rápido y después <b>revisá</b>.</p></div>
<div class="rsec"><h4>Descomponer para sumar</h4>
<p class="exline">Se suman por separado las decenas y las unidades, y después se juntan los dos resultados. En las restas funciona igual.</p></div>
<div class="rsec"><h4>Cómo controlar una resta</h4>
<div class="warn">Si la resta dio bien, al <b>sumar</b> el resultado con el número que restaste tiene que volver a dar el primero.<br>
500 − 240 = 260 &nbsp;&rarr;&nbsp; 260 + 240 = 500 &#10003;<br><br>
Es la forma más rápida de darte cuenta sola de si te equivocaste, sin preguntar.</div></div>`,

"mate.m4":`
<div class="rsec"><h4>Primero pensá qué está pasando</h4>
<p class="exline">No busques la cuenta de entrada. Preguntate qué ocurre en la historia:</p>
<div class="rrow"><span class="rl">se agrega, se junta, se avanza</span><span class="ra">SUMA</span></div>
<div class="rrow"><span class="rl">se quita, se separa, se retrocede</span><span class="ra">RESTA</span></div>
<div class="rrow"><span class="rl">se comparan dos cantidades</span><span class="ra">RESTA</span></div></div>
<div class="rsec"><h4>&#9888; La trampa de la palabra "más"</h4>
<div class="warn">"¿Cuántos puntos <b>más</b> tiene Ana que Luis?" tiene la palabra <b>más</b>, pero se resuelve <b>restando</b>, porque se están comparando dos cantidades.<br><br>
La palabra suelta no decide nada. Decide <b>lo que pasa en la historia</b>.</div></div>
<div class="rsec"><h4>Revisá que la respuesta tenga sentido</h4>
<p class="exline">Si alguien <b>regala</b> algo, tiene que quedarle <b>menos</b> que antes. Si <b>recibe</b>, más. Si el resultado va para el lado contrario, la cuenta está mal elegida.</p></div>`,

"mate.m5":`
<div class="rsec"><h4>Suma repetida</h4>
<p class="exline">Cuando la <b>misma cantidad se repite</b>, se puede sumar varias veces en lugar de contar de a uno.</p>
<div class="rrow"><span class="rl">2 cajas con 5 lápices</span><span class="ra">5 + 5 = 10</span></div>
<div class="warn"><b>&#9888; El orden importa.</b> En "2 cajas con 5 lápices" lo que se repite es el <b>5</b>, dos veces. No es 2 + 2 + 2 + 2 + 2.<br><br>
El primer número dice <b>cuántos grupos hay</b>; el segundo, <b>cuánto hay en cada grupo</b>. Se repite el segundo, tantas veces como diga el primero.</div></div>
<div class="rsec"><h4>Repartir en partes iguales</h4>
<p class="exline">Es lo contrario: todos reciben <b>la misma cantidad</b>, sin que a nadie le toque de más.</p>
<div class="rrow"><span class="rl">10 figuritas entre 2 chicos</span><span class="ra">5 cada uno</span></div></div>
<div class="rsec"><h4>Cuando sobra</h4>
<p class="exline">No siempre entra justo. Con <b>9 caramelos entre 2 chicos</b>, cada uno recibe 4 y <b>sobra 1</b>: ese resto no se puede repartir sin partirlo.</p>
<div class="warn">Si sobra, la respuesta tiene <b>dos partes</b>: cuánto recibe cada uno <b>y</b> cuánto sobró. Contestar solo una de las dos deja el ejercicio incompleto.</div></div>`,

"mate.msim":`
<div class="rsec"><h4>Antes de empezar</h4>
<p class="exline">Leé <b>todo</b> el examen antes de escribir la primera respuesta. Resolvé primero lo que te sale seguro y dejá para el final lo que te cuesta.</p></div>
<div class="rsec"><h4>Al terminar, revisá tres cosas</h4>
<div class="rrow"><span class="rl">1</span><span class="rl">¿Contestaste todas las consignas?</span></div>
<div class="rrow"><span class="rl">2</span><span class="rl">¿Copiaste bien los números del enunciado?</span></div>
<div class="rrow"><span class="rl">3</span><span class="rl">¿La respuesta tiene sentido?</span></div>
<div class="warn">Este módulo entra en el repaso completo: aparecen juntos los cinco días anteriores. Si algo no sale, el tema está en el día que lo trabajó.</div></div>`,

"lengua.l1":`
<div class="rsec"><h4>Cómo se trabaja un libro álbum</h4>
<p class="exline">En un libro álbum <b>las ilustraciones también cuentan la historia</b>. A veces muestran algo distinto de lo que dicen las palabras, y ahí suele estar la gracia.</p>
<div class="rrow"><span class="rl">Antes de leer</span><span class="ra">mirar la tapa y anticipar</span></div>
<div class="rrow"><span class="rl">Durante</span><span class="ra">anotar dudas y detalles</span></div>
<div class="rrow"><span class="rl">Después</span><span class="ra">contar con tus palabras</span></div></div>
<div class="rsec"><h4>Anticipar no es adivinar</h4>
<p class="exline">Cuando mirás la tapa y decís de qué va a tratar, tenés que poder explicar <b>en qué te basaste</b>: algo que se ve en el dibujo o que dice el título.</p>
<div class="warn"><b>Para el adulto:</b> esta unidad casi no se corrige sola, porque las respuestas dependen del ejemplar que ella tiene delante. Lo que se evalúa no es acertar, sino que <b>sostenga lo que dice con algo del libro</b>. Tené el libro al lado.</div></div>`,

"lengua.l2":`
<div class="rsec"><h4>La regla de oro de la comprensión</h4>
<div class="warn">Si no se acuerda de algo, <b>no se adivina: se vuelve al libro a buscarlo</b>. Esa es la destreza que se evalúa, más que la memoria.</div></div>
<div class="rsec"><h4>Responder con oraciones completas</h4>
<div class="rrow"><span class="rl"><span class="no">&#10007;</span> "en la casa"</span><span class="ra">incompleta</span></div>
<div class="rrow"><span class="rl"><span class="yes">&#10003;</span> "Los dos juegan en la casa."</span><span class="ra">completa</span></div>
<p class="exline">Una respuesta completa se entiende sola, sin leer la pregunta.</p></div>
<div class="rsec"><h4>Texto e ilustración</h4>
<p class="exline">Antes de responder sobre un dibujo, mirálo de nuevo y preguntate: ¿esto que veo <b>está dicho</b> en las palabras, o lo <b>agrega</b> la imagen?</p></div>`,

"lengua.l3":`
<div class="rsec"><h4>Describir no es nombrar</h4>
<div class="rrow"><span class="rl"><span class="no">&#10007;</span> "Es un gato"</span><span class="ra">lo nombra</span></div>
<div class="rrow"><span class="rl"><span class="yes">&#10003;</span> "Es un gato curioso que se mete en todos lados"</span><span class="ra">lo describe</span></div>
<p class="exline">Una buena descripción dice <b>cómo es</b>, <b>qué hace</b> y <b>cómo se relaciona</b> con los demás. Con una sola de las tres no alcanza.</p></div>
<div class="rsec"><h4>Palabras nuevas</h4>
<p class="exline">Cuando aparece una palabra que no conocés, primero tratá de <b>adivinar qué significa por el contexto</b>: leé la oración entera y las de alrededor. Recién después se pregunta o se busca.</p>
<div class="warn">Esa estrategia es la que se evalúa. Preguntar de entrada es más rápido, pero no entrena nada.</div></div>`,

"lengua.l4":`
<div class="rsec"><h4>Un relato se arma en tres partes</h4>
<div class="rrow"><span class="rl">Comienzo</span><span class="ra">quién y dónde</span></div>
<div class="rrow"><span class="rl">Nudo</span><span class="ra">qué sucede, el problema</span></div>
<div class="rrow"><span class="rl">Final</span><span class="ra">cómo se resuelve</span></div>
<div class="warn"><b>&#9888; Si falta el nudo, no hay cuento:</b> hay una descripción. El nudo es algo que <b>pasa</b> y que cambia la situación.</div></div>
<div class="rsec"><h4>Conectores de orden</h4>
<p class="exline">Un texto de instrucciones encadena los pasos con conectores que indican <b>en qué momento</b> va cada uno: hay uno para arrancar, otros para el medio y uno para cerrar.</p></div>
<div class="rsec"><h4>Revisar antes de entregar</h4>
<p class="exline">Tres cosas, siempre: <b>mayúscula</b> al empezar, <b>punto</b> al terminar y <b>espacios</b> entre las palabras. Esa revisión propia también se evalúa.</p></div>`,

"lengua.l5":`
<div class="rsec"><h4>1. Antes de B y P va M, nunca N</h4>
<div class="rrow"><span class="rl">ho<b>mb</b>re, ca<b>mb</b>io</span><span class="ra">MB</span></div>
<div class="rrow"><span class="rl">si<b>mp</b>le, i<b>mp</b>ortante</span><span class="ra">MP</span></div>
<div class="warn">Es una regla <b>sin excepciones</b> en castellano. Si al decirla suena "n" y después viene <b>b</b> o <b>p</b>, se escribe <b>m</b>.</div></div>
<div class="rsec"><h4>2. R o RR</h4>
<div class="rrow"><span class="rl">suena FUERTE entre vocales</span><span class="ra">RR</span></div>
<div class="rrow"><span class="rl">suena fuerte al PRINCIPIO</span><span class="ra">una sola R</span></div>
<div class="rrow"><span class="rl">suena SUAVE entre vocales</span><span class="ra">una sola R</span></div>
<p class="exline">to<b>rr</b>e, ja<b>rr</b>a &rarr; doble, porque vibra entre vocales.<br>
<b>r</b>ueda &rarr; una sola, aunque suene fuerte, porque está al principio.<br>
ca<b>r</b>a, pe<b>r</b>a &rarr; una sola, porque suena suave.</p>
<div class="warn"><b>Prueba del sonido:</b> decí la palabra en voz alta y alargá la erre. Si vibra (to-rrrr-e), van dos. Si no vibra, va una.</div></div>
<div class="rsec"><h4>3. B o V</h4>
<p class="exline">Acá no hay una regla que sirva siempre: estas palabras <b>se aprenden de memoria</b>. Ejemplos: <b>b</b>arco, <b>v</b>aca.</p>
<div class="warn">Si dudás, pensá si conocés otra palabra de la misma familia que ya sepas escribir.</div></div>
<div class="rsec"><h4>4. Puntuación</h4>
<p class="exline">Cada oración empieza con <b>mayúscula</b> y termina con <b>punto</b>. Los nombres propios llevan mayúscula estén donde estén.</p></div>`,

"lengua.lsim":`
<div class="rsec"><h4>Tres tipos de texto</h4>
<div class="rrow"><span class="rl">Cuento</span><span class="ra">narra una historia inventada</span></div>
<div class="rrow"><span class="rl">Instrucciones</span><span class="ra">explican cómo hacer algo</span></div>
<div class="rrow"><span class="rl">Noticia</span><span class="ra">informa un hecho real</span></div>
<p class="exline">Para decidir cuál es, preguntate <b>para qué fue escrito</b>: ¿para entretener, para enseñar a hacer algo, o para contar algo que pasó?</p></div>
<div class="rsec"><h4>Texto para leer (Parte A)</h4>
<div class="rrow"><span class="rl" style="text-align:left"><b>Cómo preparar un lugar cómodo para leer</b><br>
1. Buscá un lugar tranquilo.<br>
2. Elegí un libro que te guste.<br>
3. Sentate cómodamente y tené buena luz.<br>
4. Leé con atención y, si una palabra no se entiende, volvé a leer la oración.</span></div></div>`,

"ing3.n1":`
<div class="rsec"><h4>Algo nuevo: lo que pasa ahora</h4>
<p class="exline">Hasta ahora sabía decir lo que pasa <b>siempre</b>. Se agrega decir lo que pasa <b>ahora mismo</b>.</p>
<div class="rrow"><span class="rl">Todos los días</span><span class="ra">I jump.</span></div>
<div class="rrow"><span class="rl">En este momento</span><span class="ra">I'm jumping.</span></div></div>
<div class="rsec"><h4>Cómo se arma: TO BE + verbo con -ING</h4>
<div class="rrow"><span class="rl">I</span><span class="ra">am + …ing</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">is + …ing</span></div>
<div class="rrow"><span class="rl">you / we / they</span><span class="ra">are + …ing</span></div>
<div class="warn"><b>&#9888; Siempre van las DOS partes.</b> No alcanza con el -ing solo.<br>
<span class="yes">&#10003;</span> She<b>'s</b> drawing. &nbsp;&nbsp; <span class="no">&#10007;</span> She drawing.</div></div>
<div class="rsec"><h4>Dos trampas al agregar -ING</h4>
<div class="rrow"><span class="rl">swim &rarr; swi<b>mm</b>ing</span><span class="ra">se dobla la consonante final</span></div>
<div class="rrow"><span class="rl">make &rarr; mak<b>ing</b></span><span class="ra">se cae la E final</span></div>
<p class="exline">La mayoría son directos: solo se agrega <b>-ing</b> sin tocar nada.</p>
<div class="warn">¿Cuándo se dobla? Cuando el verbo es corto y termina en <b>una vocal + una consonante</b>. ¿Cuándo se cae la E? Cuando el verbo termina en <b>-e</b> muda.</div></div>
<div class="rsec"><h4>El imperativo</h4>
<p class="exline">Las órdenes van con el <b>verbo solo</b> al principio, sin sujeto adelante.</p></div>`,

"ing3.n2":`
<div class="rsec"><h4>Mayúscula obligatoria</h4>
<div class="warn">En inglés los <b>días</b> y los <b>meses</b> se escriben SIEMPRE con mayúscula, aunque estén en el medio de la oración. En castellano no: ahí está el error típico.</div></div>
<div class="rsec"><h4>Las preposiciones de tiempo</h4>
<div class="rrow"><span class="rl">con un mes</span><span class="ra">IN</span></div>
<div class="rrow"><span class="rl">con un día</span><span class="ra">ON</span></div>
<p class="exline">My birthday is <b>in</b> May. &nbsp; <b>On</b> Sundays we go to the park.</p>
<div class="warn"><b>Regla corta:</b> cuanto más grande el período de tiempo, más "adentro" estás: por eso el mes lleva <b>in</b> y el día, que es más puntual, lleva <b>on</b>.</div></div>
<div class="rsec"><h4>El clima se dice con IT</h4>
<p class="exline">No se usa <i>there is</i> ni un sujeto real: el clima siempre arranca con <b>It's</b>.</p>
<div class="rrow"><span class="rl">What's the weather like?</span><span class="ra">It's cold.</span></div>
<div class="warn"><b>&#9888;</b> Muchas palabras del clima terminan en <b>-y</b>. Si la escribís sin esa terminación, estás nombrando la cosa y no el estado del tiempo.</div></div>`,

"ing3.n3":`
<div class="rsec"><h4>There is / There are en la ciudad</h4>
<p class="exline">Funciona igual que en la Unit 3 (la casa). Lo único que cambia es el vocabulario: ahora se habla de la ciudad.</p>
<div class="rrow"><span class="rl">Is there a hospital? (no)</span><span class="ra">No, there isn't.</span></div>
<div class="rrow"><span class="rl">Are there any buses? (sí)</span><span class="ra">Yes, there are.</span></div></div>
<div class="rsec"><h4>BETWEEN necesita AND</h4>
<p class="exline">"Entre A y B" se arma siempre igual: <b>between</b> + una referencia + <b>and</b> + la otra.</p>
<div class="warn">Si hay una sola referencia, no puede ser <i>between</i>: ahí va otra preposición.</div></div>
<div class="rsec"><h4>A o AN</h4>
<div class="rrow"><span class="rl">empieza con consonante</span><span class="ra">a dog</span></div>
<div class="rrow"><span class="rl">empieza con vocal</span><span class="ra">an elephant</span></div>
<p class="exline">Se mira la <b>primera letra de la palabra que sigue</b>, no la del sustantivo principal.</p></div>
<div class="rsec"><h4>CAN y DO no se mezclan</h4>
<p class="exline">La respuesta corta repite el verbo con el que empieza la pregunta. Es la misma regla de la Unit 5.</p></div>`,

"ing3.n4":`
<div class="rsec"><h4>IT: para objetos y animales</h4>
<p class="exline">Las personas son <b>he</b> o <b>she</b>. Todo lo demás —objetos, animales, el clima— es <b>it</b>.</p>
<div class="rrow"><span class="rl">un árbol</span><span class="ra">It is a tree.</span></div></div>
<div class="rsec"><h4>Demostrativos</h4>
<div class="rrow"><span class="rl">cerca — 1</span><span class="ra">this</span></div>
<div class="rrow"><span class="rl">cerca — varios</span><span class="ra">these</span></div>
<div class="rrow"><span class="rl">lejos — 1</span><span class="ra">that</span></div>
<div class="rrow"><span class="rl">lejos — varios</span><span class="ra">those</span></div>
<p class="exline"><b>This</b> is a pen. &nbsp; <b>These</b> are pens. &nbsp; <b>That</b> is a house. &nbsp; <b>Those</b> are houses.</p>
<div class="warn"><b>Dos preguntas antes de elegir:</b> ¿está cerca o lejos? ¿es uno o son varios? Con esas dos respuestas sale solo.</div></div>
<div class="rsec"><h4>Posesión con HAVE GOT</h4>
<div class="rrow"><span class="rl">I / you / we / they</span><span class="ra">have got · haven't got</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">has got · hasn't got</span></div>
<p class="exline">I've got a sister. &nbsp; She hasn't got a pet.</p>
<div class="warn">En la respuesta corta <b>no se repite "got"</b>: Yes, I have / No, she hasn't.</div></div>
<div class="rsec"><h4>HIS o HER</h4>
<p class="exline">Depende del <b>dueño</b>, no de la cosa. Si el dueño es varón, <b>his</b>; si es mujer, <b>her</b>.</p></div>`
};
