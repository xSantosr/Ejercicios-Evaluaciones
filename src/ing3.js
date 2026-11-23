const ING3 = [
{id:"n1",dot:"🏃",name:"Ahora mismo",title:"Present continuous",sub:"What are you doing? · lo que pasa ahora",
rules:`
<div class="rsec"><h4>Lo nuevo del año que viene</h4>
<p class="exline">En 2º aprendió a decir lo que pasa <b>siempre</b>. En 3º se agrega decir lo que pasa <b>ahora mismo</b>.</p>
<div class="rrow"><span class="rl">Todos los días</span><span class="ra">I eat fruit.</span></div>
<div class="rrow"><span class="rl">En este momento</span><span class="ra">I'm eating fruit.</span></div></div>
<div class="rsec"><h4>Cómo se arma: to be + verbo con -ING</h4>
<div class="rrow"><span class="rl">I</span><span class="ra">am + playing</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">is + playing</span></div>
<div class="rrow"><span class="rl">you / we / they</span><span class="ra">are + playing</span></div>
<div class="warn"><b>&#9888; Siempre van las dos partes.</b> No alcanza con el -ing solo.<br>
<span class="no">&#10007;</span> I doing Maths. &nbsp;&nbsp; <span class="yes">&#10003;</span> I<b>'m</b> doing Maths.</div></div>
<div class="rsec"><h4>Dos trampas al agregar -ING</h4>
<div class="rrow"><span class="rl">run &rarr; ru<b>nn</b>ing</span><span class="ra">se dobla la consonante</span></div>
<div class="rrow"><span class="rl">write &rarr; writ<b>ing</b></span><span class="ra">se cae la E final</span></div>
<p class="exline">Los demás son directos: play &rarr; playing, read &rarr; reading, eat &rarr; eating.</p></div>`,
ex:[
 {t:"choice",q:"<span class='en'>What are you doing?</span>",h:"Estás haciendo Matemática",o:["I'm doing Maths.","I do Maths.","I doing Maths."],a:0},
 {t:"choice",q:"She ___ playing football.",o:["am","is","are"],a:1},
 {t:"choice",q:"They ___ reading.",o:["is","are"],a:1},
 {t:"choice",q:"I ___ eating an apple.",o:["am","is","are"],a:0},
 {t:"fill",q:"Escribí el verbo con -ING",labels:["play","read","eat","sing"],a:["playing","reading","eating","singing"]},
 {t:"fill",q:"Cuidado con estos dos",h:"Uno dobla la consonante, el otro pierde la E",labels:["run","write"],a:["running","writing"]},
 {t:"choice",q:"<b>Ahora mismo</b> estoy comiendo.",o:["I eat.","I'm eating."],a:1},
 {t:"choice",q:"<b>Todos los días</b> como fruta.",o:["I eat fruit.","I'm eating fruit."],a:0},
 {t:"choice",q:"«Sentate, por favor» en inglés es:",o:["Sit down, please.","You sit down.","I sit down."],a:0,why:"Las órdenes van con el verbo solo al principio, sin sujeto."}
]},

{id:"n2",dot:"📅",name:"Días y clima",title:"Días, meses, cumpleaños y clima",sub:"When's your birthday? · What's the weather like?",
rules:`
<div class="rsec"><h4>Mayúscula obligatoria</h4>
<div class="warn">En inglés los <b>días</b> y los <b>meses</b> se escriben SIEMPRE con mayúscula, aunque estén en el medio de la oración.<br>
<span class="yes">&#10003;</span> Tomorrow is <b>F</b>riday. &nbsp;&nbsp; <span class="no">&#10007;</span> Tomorrow is friday.</div></div>
<div class="rsec"><h4>Las preposiciones de tiempo</h4>
<div class="rrow"><span class="rl">con un mes</span><span class="ra">IN July</span></div>
<div class="rrow"><span class="rl">con un día</span><span class="ra">ON Monday</span></div>
<p class="exline">When's your birthday? &rarr; It's <b>in</b> July. &nbsp; <b>On</b> Mondays I play football.</p></div>
<div class="rsec"><h4>El clima se dice con IT</h4>
<p class="exline">What's the weather like today? &rarr; <b>It's</b> cloudy. &nbsp; <b>It's</b> sunny.</p>
<div class="warn"><span class="no">&#10007;</span> There is cloudy. &nbsp;&nbsp; <span class="no">&#10007;</span> It's cloud. &nbsp;&nbsp; <span class="yes">&#10003;</span> It's cloud<b>y</b>.</div></div>`,
ex:[
 {t:"match",q:"Uní cada día con su nombre",pairs:[["Monday","lunes"],["Tuesday","martes"],["Wednesday","miércoles"],["Thursday","jueves"],["Friday","viernes"],["Saturday","sábado"],["Sunday","domingo"]]},
 {t:"match",q:"Uní cada mes con su nombre",pairs:[["January","enero"],["March","marzo"],["June","junio"],["July","julio"],["September","septiembre"],["December","diciembre"]]},
 {t:"choice",q:"Hoy es jueves. <span class='en'>Tomorrow is ___.</span>",o:["Wednesday","Friday","Saturday"],a:1},
 {t:"choice",q:"<span class='en'>When's your birthday?</span>",h:"En julio",o:["It's in July.","It's on July.","I'm July."],a:0},
 {t:"choice",q:"<span class='en'>___ Mondays I play football.</span>",o:["In","On","At"],a:1},
 {t:"match",q:"Uní cada palabra del clima",pairs:[["sunny","soleado"],["cloudy","nublado"],["rainy","lluvioso"],["windy","ventoso"],["snowy","con nieve"],["hot","caluroso"]]},
 {t:"choice",q:"<span class='en'>What's the weather like today?</span>",h:"Está nublado",o:["It's cloudy.","There is cloudy.","It's cloud."],a:0},
 {t:"fill",q:"Escribí el día en inglés (con mayúscula)",labels:["sábado","miércoles"],a:["saturday","wednesday"]}
]},

{id:"n3",dot:"🏙️",name:"La ciudad",title:"La ciudad, la ropa y las acciones",sub:"There is / There are · preposiciones · I'm wearing · can",
rules:`
<div class="rsec"><h4>Esto ya lo sabe de 2º: There is / There are</h4>
<div class="rrow"><span class="rl">Is there a park?</span><span class="ra">Yes, there is. / No, there isn't.</span></div>
<div class="rrow"><span class="rl">Are there any shops?</span><span class="ra">Yes, there are. / No, there aren't.</span></div>
<p class="exline">Lo único nuevo es el vocabulario: ahora se habla de la ciudad, no de la casa.</p></div>
<div class="rsec"><h4>BETWEEN lleva AND</h4>
<p class="exline">The supermarket is <b>between</b> the bank <b>and</b> the post office.</p>
<div class="warn">"Entre A y B" necesita siempre las <b>dos</b> referencias unidas por <b>and</b>. Con una sola no se puede usar <i>between</i>.</div></div>
<div class="rsec"><h4>A o AN</h4>
<div class="rrow"><span class="rl">palabra que empieza con consonante</span><span class="ra">A hat</span></div>
<div class="rrow"><span class="rl">palabra que empieza con vocal</span><span class="ra">AN apple</span></div></div>`,
ex:[
 {t:"choice",q:"<span class='en'>Is there a park?</span>",h:"Respondé que SÍ",o:["Yes, there is.","Yes, it is.","Yes, there are."],a:0},
 {t:"choice",q:"<span class='en'>Are there any shops?</span>",h:"Respondé que NO",o:["No, there isn't.","No, there aren't.","No, they aren't."],a:1},
 {t:"choice",q:"The supermarket is ___ the bank ___ the post office.",o:["between / and","next to / and","in / on"],a:0},
 {t:"match",q:"Uní cada lugar de la ciudad",pairs:[["supermarket","supermercado"],["bank","banco"],["post office","correo"],["park","plaza"],["shop","negocio"],["school","escuela"]]},
 {t:"choice",q:"<span class='en'>The picture is ___ the sofa.</span>",h:"Está ARRIBA del sofá",o:["in","on","under"],a:1},
 {t:"match",q:"Uní cada prenda de ropa",pairs:[["hat","gorro"],["shoes","zapatos"],["T-shirt","remera"],["trousers","pantalón"],["jacket","campera"],["dress","vestido"]]},
 {t:"choice",q:"<span class='en'>I'm wearing ___ hat.</span>",o:["a","an","the"],a:0},
 {t:"choice",q:"<span class='en'>I'm eating ___ apple.</span>",o:["a","an"],a:1,why:"Apple empieza con vocal, así que va AN."},
 {t:"choice",q:"<span class='en'>I can run but I ___ rollerblade.</span>",o:["don't","can't","am not"],a:1},
 {t:"choice",q:"<span class='en'>Do you like pizza?</span>",h:"Respondé que SÍ",o:["Yes, I do.","Yes, I like.","Yes, I am."],a:0}
]},

{id:"n4",dot:"👩‍🏫",name:"It y posesión",title:"It, demostrativos, posesión y profesiones",sub:"It is a ball · Those are my cars · I've got",
rules:`
<div class="rsec"><h4>IT: para objetos y animales</h4>
<p class="exline">Las personas son <b>he</b> o <b>she</b>. Todo lo demás &mdash; objetos, animales, el clima &mdash; es <b>it</b>.</p>
<div class="rrow"><span class="rl">Ben &rarr; <b>he</b></span><span class="ra">He is my friend.</span></div>
<div class="rrow"><span class="rl">una pelota &rarr; <b>it</b></span><span class="ra">It is a ball.</span></div></div>
<div class="rsec"><h4>Demostrativos: igual que en 2º</h4>
<div class="rrow"><span class="rl">cerca, 1</span><span class="ra">this</span></div>
<div class="rrow"><span class="rl">cerca, varios</span><span class="ra">these</span></div>
<div class="rrow"><span class="rl">lejos, 1</span><span class="ra">that</span></div>
<div class="rrow"><span class="rl">lejos, varios</span><span class="ra">those</span></div>
<p class="exline">That is my bed. &nbsp; Those are my cars. &nbsp; This is my cat. &nbsp; These are my toys.</p></div>
<div class="rsec"><h4>Posesión: HAVE GOT (lo de la Unit 6 de 2º)</h4>
<div class="rrow"><span class="rl">I / you / we / they</span><span class="ra">I've got · haven't got</span></div>
<div class="rrow"><span class="rl">he / she / it</span><span class="ra">he's got · hasn't got</span></div>
<p class="exline">Have you got...? &rarr; Yes, I have. &nbsp; Has he got...? &rarr; Yes, he has.</p></div>`,
ex:[
 {t:"choice",q:"Para un objeto o un animal usamos:",o:["he","she","it"],a:2},
 {t:"choice",e:"⚽",q:"___ is a ball.",o:["He","She","It"],a:2},
 {t:"choice",q:"Lejos y en plural: ___ are my cars.",o:["These","Those","That"],a:1},
 {t:"choice",q:"Cerca y en singular: ___ is my cat.",o:["This","These","Those"],a:0},
 {t:"choice",q:"<span class='en'>I ___ got a ball.</span>",h:"NO tengo",o:["haven't","hasn't"],a:0},
 {t:"choice",q:"<span class='en'>He ___ got a dog.</span>",h:"NO tiene",o:["haven't","hasn't"],a:1},
 {t:"choice",q:"<span class='en'>Has he got a bike?</span>",h:"Respondé que SÍ",o:["Yes, he has.","Yes, he have.","Yes, he is."],a:0},
 {t:"choice",q:"This is Ben. This is ___ hat.",o:["his","her","its"],a:0},
 {t:"match",q:"Uní cada profesión",pairs:[["teacher","maestro/a"],["doctor","médico/a"],["zoo keeper","cuidador del zoo"],["firefighter","bombero"],["vet","veterinario/a"],["police officer","policía"]]},
 {t:"match",q:"Uní cada materia escolar",pairs:[["Maths","Matemática"],["English","Inglés"],["Art","Plástica"],["Music","Música"],["PE","Educación Física"],["Science","Ciencias"]]},
 {t:"match",q:"Uní cada emoción",pairs:[["happy","contento"],["sad","triste"],["angry","enojado"],["scared","asustado"],["tired","cansado"],["hungry","con hambre"]]},
 {t:"choice",q:"<span class='en'>I can see elephants and ___.</span>",h:"tigres",o:["tigers","tigres","tigrs"],a:0}
]}
];
