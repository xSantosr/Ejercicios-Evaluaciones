/* Cuentas paradas: se escriben como en el cuaderno. build.js calcula el resultado. */
const RULE_COL = `
<div class="rsec"><h4>Cómo se arma una cuenta parada</h4>
<div class="rrow"><span class="rl num">1</span><span class="rl">Las unidades debajo de las unidades, las decenas debajo de las decenas.</span></div>
<div class="rrow"><span class="rl num">2</span><span class="rl">Se empieza por la <b>derecha</b>, por la columna de las unidades.</span></div>
<div class="rrow"><span class="rl num">3</span><span class="rl">Si el resultado de una columna pasa de 9, se escribe la última cifra y <b>te llevás</b> la otra a la columna de al lado.</span></div>
<div class="warn">En esta página, los casilleros chiquitos de arriba son para anotar lo que te llevás, igual que en el cuaderno. <b>No se corrigen</b>: son tuyos para pensar.</div></div>`;

const RULE_COL_RESTA = RULE_COL + `
<div class="rsec"><h4>Cuando no alcanza para restar</h4>
<p class="exline">Si el número de arriba es más chico que el de abajo en esa columna, se le <b>pide prestado</b> a la columna de la izquierda. Esa columna pierde 1.</p>
<div class="warn"><b>Para controlar:</b> sumá el resultado con el número que restaste. Tiene que volver a darte el número de arriba.</div></div>`;

const RULE_COL_MULT = `
<div class="rsec"><h4>Multiplicar en cuenta parada</h4>
<p class="exline">Se multiplica cada cifra de arriba por la de abajo, <b>empezando por la derecha</b>. Si pasa de 9, se escribe la última cifra y te llevás la otra.</p>
<div class="warn">Lo que te llevás en una multiplicación <b>se suma</b> después de multiplicar, no antes.</div></div>`;

const RULE_COL_MULT2 = RULE_COL_MULT + `
<div class="rsec"><h4>Cuando abajo hay dos cifras</h4>
<p class="exline">Se hacen <b>dos multiplicaciones</b> y después se suman:</p>
<div class="rrow"><span class="rl">primero, por las unidades de abajo</span><span class="ra">fila 1</span></div>
<div class="rrow"><span class="rl">después, por las decenas</span><span class="ra">fila 2, corrida un lugar</span></div>
<div class="warn"><b>&#9888; El error más común</b> es olvidarse de correr la segunda fila un lugar a la izquierda. En esta página ese lugar ya viene marcado.</div></div>`;

const RULE_DIV_NUEVO = `
<div class="rsec"><h4>Una forma nueva de anotar el reparto</h4>
<p class="exline">Hasta ahora repartías contando o dibujando. Esta es la manera de <b>escribirlo</b>, y se usa toda la primaria.</p>
<div class="rrow"><span class="rl">el número que se reparte</span><span class="ra">va adentro</span></div>
<div class="rrow"><span class="rl">entre cuántos se reparte</span><span class="ra">va afuera, a la derecha</span></div>
<div class="rrow"><span class="rl">cuánto le toca a cada uno</span><span class="ra">debajo del divisor</span></div>
<div class="rrow"><span class="rl">lo que sobra</span><span class="ra">el resto</span></div>
<div class="warn"><b>Un truco que ya sabés:</b> para repartir 46 entre 2, preguntate <b>qué número por 2 da 46</b>. Si no te sale de memoria, probá: 20 × 2 = 40, te faltan 6, y 3 × 2 = 6. Entonces son 23.<br>
<b>Para controlar:</b> multiplicá lo que le tocó a cada uno por la cantidad de chicos y sumale el resto. Tiene que darte el número de adentro.</div></div>`;

const RULE_DIV = `
<div class="rsec"><h4>La casita</h4>
<p class="exline">El número que se reparte va adentro; el que reparte, afuera a la derecha. El <b>cociente</b> se escribe debajo del divisor y el <b>resto</b> es lo que queda sin repartir.</p>
<div class="warn"><b>Para controlar:</b> multiplicá el cociente por el divisor y sumale el resto. Tiene que darte el número de adentro.<br>
Y acordate: el <b>resto siempre es menor que el divisor</b>. Si te queda igual o más grande, el cociente podía ser más grande.</div></div>`;

const RULE_DIV_PASOS = `
<div class="rsec"><h4>La casita, paso a paso</h4>
<div class="rrow"><span class="rl num">1</span><span class="rl">Tomá de a una las cifras de la izquierda hasta que el número alcance para dividir.</span></div>
<div class="rrow"><span class="rl num">2</span><span class="rl">Buscá cuántas veces entra el divisor y escribilo en el cociente.</span></div>
<div class="rrow"><span class="rl num">3</span><span class="rl">Multiplicá, restá, y <b>bajá</b> la cifra siguiente.</span></div>
<div class="rrow"><span class="rl num">4</span><span class="rl">Repetí hasta que no queden cifras para bajar.</span></div>
<div class="warn">En esta página, la cifra que se baja <b>ya aparece en gris</b>: vos completás las multiplicaciones y las restas.<br>
<b>&#9888;</b> Si al restar te da un número <b>mayor o igual</b> que el divisor, el cociente de ese paso quedó corto.</div></div>`;

const RULE_DEC = `
<div class="rsec"><h4>Cuentas con coma</h4>
<p class="exline">Se arman igual que siempre, pero con una regla más: las <b>comas van una debajo de la otra</b>. Así quedan alineados los pesos con los pesos y los centavos con los centavos.</p>
<div class="warn">Si a un número le faltan cifras después de la coma, <b>completalo con ceros</b>: $20 es $20,00. Sin eso, la cuenta se desalinea.<br>
En el resultado, la coma va en la misma columna que las de arriba.</div></div>`;

const RULE_DEC_MULT = `
<div class="rsec"><h4>Multiplicar un decimal por un número entero</h4>
<p class="exline">Se multiplica <b>como si no hubiera coma</b>. Al final, el resultado lleva <b>la misma cantidad de cifras después de la coma</b> que tenía el número de arriba.</p>
<div class="warn">$1,25 × 4: primero 125 × 4, y como arriba había dos cifras después de la coma, el resultado también lleva dos.</div></div>`;

const RULE_FRAC = `
<div class="rsec"><h4>Sumar y restar fracciones</h4>
<div class="rrow"><span class="rl">Mismo denominador</span><span class="ra">se suman los de arriba</span></div>
<div class="rrow"><span class="rl">Distinto denominador</span><span class="ra">primero hay que igualarlos</span></div>
<p class="exline">Para igualarlos, buscá un número en el que entren los dos denominadores y escribí las fracciones equivalentes. El denominador <b>no se suma nunca</b>.</p>
<div class="warn">Se acepta el resultado con el denominador común <b>o</b> ya simplificado: las dos formas valen.</div></div>`;

const CUENTAS = {
"2": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Sumar, restar y multiplicar como en el cuaderno",rules:RULE_COL_RESTA+RULE_COL_MULT,ex:[
 {t:"col",op:"+",n:[23,45],h:"Sin llevarte nada"},
 {t:"col",op:"+",n:[36,27],h:"Acá te vas a llevar 1"},
 {t:"col",op:"+",n:[58,34]},
 {t:"col",op:"+",n:[125,64]},
 {t:"col",op:"−",n:[47,23],h:"Sin pedir prestado"},
 {t:"col",op:"−",n:[62,28],h:"Acá hay que pedir prestado"},
 {t:"col",op:"−",n:[90,47]},
 {t:"col",op:"+",n:[12,24,31],h:"Tres números, de a una columna por vez"},
 {t:"col",op:"×",n:[13,3],h:"Multiplicar también se escribe así"},
 {t:"col",op:"×",n:[22,4]},
 {t:"col",op:"×",n:[26,3],h:"Acá te vas a llevar algo"}
]},
"2b":{id:"mcd",dot:"🏠",name:"La casita",title:"La casita",sub:"Repartir, escrito como en el cuaderno",rules:RULE_DIV_NUEVO,ex:[
 {t:"div",D:46,d:2,h:"Repartí 46 entre 2"},
 {t:"div",D:68,d:2},
 {t:"div",D:90,d:3},
 {t:"div",D:55,d:5},
 {t:"div",D:27,d:2,h:"Acá va a sobrar algo"},
 {t:"div",D:38,d:3}
]},
"3": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Sumar, restar y multiplicar de tres cifras",rules:RULE_COL_RESTA+RULE_COL_MULT,ex:[
 {t:"col",op:"+",n:[247,136]},
 {t:"col",op:"+",n:[358,275]},
 {t:"col",op:"+",n:[125,48,230],h:"Tres sumandos"},
 {t:"col",op:"−",n:[562,238]},
 {t:"col",op:"−",n:[704,356],h:"Ojo con el cero del medio"},
 {t:"col",op:"−",n:[500,164]},
 {t:"col",op:"+",n:[1204,397]},
 {t:"col",op:"−",n:[1000,625]},
 {t:"col",op:"×",n:[123,2],h:"Multiplicá cada cifra, empezando por la derecha"},
 {t:"col",op:"×",n:[214,3]},
 {t:"col",op:"×",n:[136,4],h:"Acá hay que llevarse varias veces"}
]},
"3b":{id:"mcd",dot:"🏠",name:"La casita",title:"La casita",sub:"Repartir, escrito como en el cuaderno",rules:RULE_DIV_NUEVO,ex:[
 {t:"div",D:96,d:3},
 {t:"div",D:148,d:4},
 {t:"div",D:175,d:5},
 {t:"div",D:243,d:9},
 {t:"div",D:137,d:6,h:"Acá va a sobrar algo"},
 {t:"div",D:250,d:8}
]},
"4": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Sumar, restar y multiplicar por una cifra",rules:RULE_COL_RESTA+RULE_COL_MULT,ex:[
 {t:"col",op:"+",n:[1245,678]},
 {t:"col",op:"+",n:[2360,1845]},
 {t:"col",op:"−",n:[3040,1256],h:"Hay que pedir prestado varias veces"},
 {t:"col",op:"−",n:[5000,2374]},
 {t:"col",op:"×",n:[24,3],h:"Empezá por las unidades"},
 {t:"col",op:"×",n:[137,4]},
 {t:"col",op:"×",n:[206,5],h:"Ojo con el cero"},
 {t:"col",op:"×",n:[318,7]}
]},
"4b":{id:"mcd",dot:"🏠",name:"La casita",title:"La casita",sub:"Dividir como en el cuaderno",rules:RULE_DIV,ex:[
 {t:"div",D:84,d:4,h:"Esta da justo: el resto es 0"},
 {t:"div",D:96,d:6},
 {t:"div",D:75,d:5},
 {t:"div",D:58,d:4,h:"Acá va a sobrar algo"},
 {t:"div",D:93,d:7},
 {t:"div",D:128,d:6}
]},
"5": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Multiplicar por dos cifras",rules:RULE_COL_MULT2,ex:[
 {t:"col",op:"×",n:[42,13],parts:true,h:"Dos filas: primero por las unidades"},
 {t:"col",op:"×",n:[123,24],parts:true},
 {t:"col",op:"×",n:[245,32],parts:true},
 {t:"col",op:"×",n:[408,6],h:"Esta es de una sola cifra"},
 {t:"col",op:"+",n:[4567,2845]},
 {t:"col",op:"−",n:[6000,2473]}
]},
"5b":{id:"mcd",dot:"🏠",name:"La casita",title:"La casita",sub:"Dividir con divisores de dos cifras",rules:RULE_DIV,ex:[
 {t:"div",D:96,d:8},
 {t:"div",D:156,d:12},
 {t:"div",D:157,d:12,h:"Acá va a sobrar algo"},
 {t:"div",D:250,d:15},
 {t:"div",D:432,d:16},
 {t:"div",D:525,d:25}
]},
"6": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Números grandes",rules:RULE_COL_MULT2,ex:[
 {t:"col",op:"×",n:[134,25],parts:true},
 {t:"col",op:"×",n:[507,38],parts:true,h:"Ojo con el cero del medio"},
 {t:"col",op:"+",n:[12456,8975]},
 {t:"col",op:"−",n:[7005,3468]},
 {t:"col",op:"×",n:[1234,6]}
]},
"6b":{id:"mcd",dot:"🏠",name:"La casita",title:"La casita, paso a paso",sub:"Con las multiplicaciones y las restas de cada paso",rules:RULE_DIV_PASOS,ex:[
 {t:"div",D:575,d:5,steps:true,h:"Completá cada multiplicación y cada resta"},
 {t:"div",D:846,d:6,steps:true},
 {t:"div",D:1248,d:4,steps:true},
 {t:"div",D:962,d:7,steps:true},
 {t:"div",D:1375,d:11,steps:true}
]},
"6c":{id:"mcc",dot:"🪙",name:"Con coma",title:"Cuentas con coma y fracciones",sub:"Decimales alineados · sumar y restar fracciones",rules:RULE_DEC+RULE_DEC_MULT+RULE_FRAC,ex:[
 {t:"col",op:"+",n:["12,50","3,25"],h:"Las comas, una debajo de la otra"},
 {t:"col",op:"+",n:["8,75","1,25"]},
 {t:"col",op:"−",n:["20","13,40"],h:"$20 es $20,00"},
 {t:"col",op:"−",n:["7,05","2,8"]},
 {t:"col",op:"×",n:["1,25",4],h:"Multiplicá como si no hubiera coma"},
 {t:"col",op:"×",n:["3,40",6]},
 {t:"frac",op:"+",f:[[2,7],[3,7]],h:"Mismo denominador"},
 {t:"frac",op:"+",f:[[1,2],[1,4]],h:"Primero hay que igualar los denominadores"},
 {t:"frac",op:"−",f:[[5,8],[1,8]]},
 {t:"frac",op:"+",f:[[1,3],[1,6]]}
]},
"7": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Repaso de las tres operaciones",rules:RULE_COL_MULT2,ex:[
 {t:"col",op:"×",n:[2345,36],parts:true},
 {t:"col",op:"×",n:[1408,27],parts:true},
 {t:"col",op:"−",n:[10000,4567]},
 {t:"col",op:"+",n:[45678,9876]},
 {t:"col",op:"×",n:[3006,9]}
]},
"7b":{id:"mcd",dot:"🏠",name:"La casita",title:"La casita, paso a paso",sub:"Divisores de dos cifras",rules:RULE_DIV_PASOS,ex:[
 {t:"div",D:1872,d:24,steps:true},
 {t:"div",D:4056,d:39,steps:true},
 {t:"div",D:2975,d:17,steps:true},
 {t:"div",D:8064,d:32,steps:true},
 {t:"div",D:1105,d:13,steps:true}
]},
"7c":{id:"mcc",dot:"🪙",name:"Con coma",title:"Cuentas con coma y fracciones",sub:"Decimales y fracciones con distinto denominador",rules:RULE_DEC+RULE_DEC_MULT+RULE_FRAC,ex:[
 {t:"col",op:"+",n:["125,40","78,65"]},
 {t:"col",op:"−",n:["200","47,85"],h:"Completá con ceros el que no tiene coma"},
 {t:"col",op:"+",n:["9,5","12,75","0,8"],h:"Tres números con distinta cantidad de decimales"},
 {t:"col",op:"×",n:["12,50",8]},
 {t:"col",op:"−",n:["50,05","19,9"]},
 {t:"frac",op:"+",f:[[2,3],[1,4]]},
 {t:"frac",op:"−",f:[[3,4],[1,6]]},
 {t:"frac",op:"+",f:[[1,5],[3,10]]},
 {t:"frac",op:"+",f:[[1,2],[1,3],[1,6]],h:"Tres fracciones"}
]}
};
