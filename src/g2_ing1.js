const G2_ING1 = [
{id:"e1",dot:"👋",name:"Hello!",title:"Hello! · colores y útiles",sub:"Saludos · nombre y edad · alfabeto · colores",
rules:`
<div class="rsec"><h4>Hablar de vos</h4>
<div class="rrow"><span class="rl">Para decir tu nombre</span><span class="ra">My name's + nombre</span></div>
<div class="rrow"><span class="rl">Para decir tu edad</span><span class="ra">I'm + número</span></div>
<p class="exline">Ejemplo: un chico llamado Leo, de cinco años, diría <b>My name's Leo</b> y <b>I'm five</b>.</p></div>
<div class="rsec"><h4>Decir qué es algo</h4>
<p class="exline">Se empieza con <b>It's</b> ("es") y después va la cosa o el color: <b>It's a book. It's black.</b></p>
<div class="warn">Fijate qué te preguntan: si es <b>qué cosa es</b> o <b>de qué color es</b>.</div></div>`,
ex:[
 {t:"choice",q:"Te vas de la escuela. ¿Qué decís?",o:["Goodbye!","Hello!","Thank you!"],a:0},
 {t:"choice",q:"<span class='en'>What's your name?</span>",o:["My name's Tom.","I'm six.","It's red."],a:0},
 {t:"choice",q:"<span class='en'>How old are you?</span>",h:"Tenés 7 años",o:["I'm seven.","I'm Tom.","It's seven."],a:0},
 {t:"match",q:"Uní cada color",pairs:[["pink","rosa"],["purple","violeta"],["grey","gris"],["blue","azul"],["red","rojo"],["green","verde"]]},
 {t:"choice",e:"🟡",q:"<span class='en'>What colour is it?</span>",o:["It's yellow.","It's orange.","It's brown."],a:0},
 {t:"match",q:"Uní cada útil",pairs:[["pencil","lápiz"],["ruler","regla"],["crayon","crayón"],["pencil case","cartuchera"],["rubber","goma"]]},
 {t:"choice",e:"🖊️",q:"<span class='en'>What is it?</span>",o:["It's a pen.","It's a pencil.","It's a ruler."],a:0},
 {t:"choice",q:"En el abecedario, ¿qué letra viene después de la <b>B</b>?",o:["C","D","A"],a:0},
 {t:"fill",q:"Escribí el número en inglés",labels:["3","8"],a:["three","eight"]}
]},

{id:"e2",dot:"🦁",name:"Animals",title:"Animals",sub:"It's a / an · Is it a…? · big / small",
rules:`
<div class="rsec"><h4>A o AN</h4>
<div class="rrow"><span class="rl">empieza con consonante</span><span class="ra">a dog</span></div>
<div class="rrow"><span class="rl">empieza con vocal (a, e, i, o, u)</span><span class="ra">an orange</span></div></div>
<div class="rsec"><h4>Is it a…? (¿Es un…?)</h4>
<div class="rrow"><span class="rl">Is it a cat? (sí)</span><span class="ra">Yes, it's a cat.</span></div>
<div class="rrow"><span class="rl">Is it a cat? (no, es un perro)</span><span class="ra">No, it's a dog.</span></div>
<p class="exline">En el NO se dice qué es en realidad.</p></div>
<div class="rsec"><h4>El color y el tamaño van ANTES</h4>
<p class="exline">En inglés se dice primero cómo es y después la cosa: <b>a red ball</b> (una pelota roja), nunca "a ball red".</p></div>`,
ex:[
 {t:"match",q:"Uní cada animal",pairs:[["lion","león"],["monkey","mono"],["elephant","elefante"],["giraffe","jirafa"],["crocodile","cocodrilo"],["zebra","cebra"]]},
 {t:"choice",e:"🐯",q:"<span class='en'>What is it?</span>",o:["It's a tiger.","It's a lion.","It's a hippo."],a:0},
 {t:"choice",e:"🦅",q:"It's ___ eagle.",o:["a","an"],a:1},
 {t:"choice",e:"🦛",q:"It's ___ hippo.",o:["a","an"],a:0},
 {t:"choice",e:"🚗",q:"<span class='en'>Is it a car?</span>",o:["Yes, it's a car.","No, it's a car.","Yes, it's a boat."],a:0},
 {t:"choice",e:"⛵",q:"<span class='en'>Is it a car?</span>",o:["No, it's a boat.","Yes, it's a boat.","No, it's a car."],a:0},
 {t:"choice",e:"🚙",q:"Es un auto azul: It's a ___.",o:["blue car","car blue"],a:0},
 {t:"choice",e:"🐘",q:"The elephant is ___.",o:["big","small"],a:0},
 {t:"choice",e:"🐭",q:"The mouse is ___.",o:["big","small"],a:1}
]},

{id:"e3",dot:"🙂",name:"Me",title:"Me · el cuerpo y cómo me siento",sub:"I've got · It's got · feelings · appearance",
rules:`
<div class="rsec"><h4>I've got = yo tengo</h4>
<div class="rrow"><span class="rl">I've got two hands.</span><span class="ra">Tengo dos manos.</span></div>
<div class="rrow"><span class="rl">A fish hasn't got hands.</span><span class="ra">Un pez no tiene manos.</span></div>
<p class="exline">Para un animal o una cosa: <b>It's got</b> (tiene) y <b>It hasn't got</b> (no tiene).</p></div>
<div class="rsec"><h4>Cómo me siento: I'm…</h4>
<p class="exline"><b>I'm sad.</b> = Estoy triste. Primero <b>I'm</b>, después cómo estás.</p></div>
<div class="rsec"><h4>Describir el pelo</h4>
<p class="exline">Igual que con los colores, lo que describe va <b>antes</b>: <b>dark hair</b> (pelo oscuro).</p></div>`,
ex:[
 {t:"match",q:"Uní cada parte de la cara",pairs:[["eyes","ojos"],["nose","nariz"],["mouth","boca"],["ears","orejas"],["hair","pelo"]]},
 {t:"choice",e:"😀",q:"I'm ___.",o:["happy","sad","cold"],a:0},
 {t:"choice",e:"🥶",q:"I'm ___.",o:["hot","cold","happy"],a:1},
 {t:"choice",e:"🐍",q:"It ___ got legs.",o:["has","hasn't"],a:1},
 {t:"choice",e:"🐕",q:"It's got a ___.",o:["tail","wing"],a:0},
 {t:"choice",q:"Tenés el pelo largo: I've got ___ hair.",o:["long","short","curly"],a:0},
 {t:"choice",q:"¿Cuál significa «pelo rubio»?",o:["blond hair","dark hair","curly hair"],a:0},
 {t:"choice",q:"Tenés los ojos marrones: I've got ___ eyes.",o:["brown","blond","long"],a:0}
]},

{id:"e4",dot:"🏠",name:"Home & food",title:"Home & food",sub:"Where is…? · in / on / under · I like",
rules:`
<div class="rsec"><h4>¿Dónde está?</h4>
<div class="rrow"><span class="rl">Where is the dog?</span><span class="ra">It's in the garden.</span></div>
<p class="exline">Se contesta con <b>It's</b> + dónde está.</p></div>
<div class="rsec"><h4>in · on · under</h4>
<p class="exline">Imaginate un pájaro y su jaula: si está <b>adentro</b> es una palabra, si está <b>arriba</b> es otra, y si está <b>abajo</b> es otra. Mirá bien el dibujo antes de elegir.</p></div>
<div class="rsec"><h4>Me gusta / no me gusta</h4>
<div class="rrow"><span class="rl">I like cats.</span><span class="ra">Me gustan los gatos.</span></div>
<div class="rrow"><span class="rl">I don't like spiders.</span><span class="ra">No me gustan las arañas.</span></div>
<p class="exline">Para decir que NO, se agrega <b>don't</b>.</p></div>`,
ex:[
 {t:"match",q:"Uní cada palabra de la casa",pairs:[["bathroom","baño"],["bedroom","dormitorio"],["living room","living"],["fridge","heladera"],["cooker","cocina (para cocinar)"],["sofa","sofá"]]},
 {t:"choice",e:"🐱📦",q:"El gato está ADENTRO de la caja: The cat is ___ the box.",o:["in","on","under"],a:0},
 {t:"choice",e:"⚽",q:"La pelota está DEBAJO de la mesa: The ball is ___ the table.",o:["in","on","under"],a:2},
 {t:"choice",e:"📕",q:"El libro está ARRIBA de la silla: The book is ___ the chair.",o:["in","on","under"],a:1},
 {t:"choice",q:"<span class='en'>Where is the ball?</span>",h:"Está en el dormitorio",o:["It's in the bedroom.","It's a bedroom.","It's bedroom."],a:0},
 {t:"choice",e:"😋🍕",q:"Me gusta la pizza.",o:["I like pizza.","I don't like pizza."],a:0},
 {t:"choice",e:"🤢🍌",q:"No me gustan las bananas.",o:["I like bananas.","I don't like bananas."],a:1},
 {t:"choice",q:"<span class='en'>Do you like…?</span> quiere decir…",o:["¿Te gusta…?","¿Tenés…?","¿Podés…?"],a:0},
 {t:"match",q:"Uní cada comida",pairs:[["cheese","queso"],["milk","leche"],["bread","pan"],["eggs","huevos"],["chicken","pollo"],["ice cream","helado"]]}
]},

{id:"e5",dot:"👕",name:"Clothes & family",title:"Clothes, family & abilities",sub:"I'm wearing · auntie / uncle · I can / can't",
rules:`
<div class="rsec"><h4>Lo que tengo puesto</h4>
<p class="exline"><b>I'm wearing blue shoes.</b> = Tengo puestos zapatos azules.</p></div>
<div class="rsec"><h4>He's o She's</h4>
<div class="rrow"><span class="rl">varón</span><span class="ra">He's my brother.</span></div>
<div class="rrow"><span class="rl">mujer</span><span class="ra">She's my sister.</span></div></div>
<div class="rsec"><h4>can / can't</h4>
<div class="rrow"><span class="rl">I can jump.</span><span class="ra">Puedo saltar.</span></div>
<div class="rrow"><span class="rl">A cat can't talk.</span><span class="ra">Un gato no puede hablar.</span></div>
<div class="warn">Pensá si de verdad <b>puede</b> o <b>no puede</b> hacerlo antes de elegir.</div></div>`,
ex:[
 {t:"match",q:"Uní cada prenda",pairs:[["hat","gorro"],["coat","abrigo"],["boots","botas"],["gloves","guantes"],["sunglasses","anteojos de sol"],["trainers","zapatillas"]]},
 {t:"choice",e:"👕",q:"I'm wearing a green ___.",o:["T-shirt","dress","hat"],a:0},
 {t:"match",q:"Uní cada familiar",pairs:[["mummy","mamá"],["daddy","papá"],["grandma","abuela"],["grandpa","abuelo"],["auntie","tía"],["uncle","tío"]]},
 {t:"choice",q:"La hermana de mi mamá: She's my ___.",o:["auntie","uncle","sister"],a:0},
 {t:"choice",q:"El hermano de mi papá: ___ my uncle.",o:["He's","She's"],a:0},
 {t:"choice",e:"🐟",q:"Fish ___ swim.",o:["can","can't"],a:0},
 {t:"choice",e:"🐧",q:"Penguins ___ fly.",o:["can","can't"],a:1},
 {t:"choice",q:"Ella no sabe andar en bici: She ___ ride a bike.",o:["can","can't"],a:1}
]}
];
