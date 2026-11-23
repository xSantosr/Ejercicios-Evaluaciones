/* Cuentas paradas: se escriben como en el cuaderno. build.js calcula el resultado. */
const RULE_COL = `
<div class="rsec"><h4>Cómo se arma una cuenta parada</h4>
<div class="rrow"><span class="rl">1</span><span class="rl">Las unidades debajo de las unidades, las decenas debajo de las decenas.</span></div>
<div class="rrow"><span class="rl">2</span><span class="rl">Se empieza por la <b>derecha</b>, por la columna de las unidades.</span></div>
<div class="rrow"><span class="rl">3</span><span class="rl">Si el resultado de una columna pasa de 9, se escribe la última cifra y <b>te llevás</b> la otra a la columna de al lado.</span></div>
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

const CUENTAS = {
"2": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Sumar y restar como en el cuaderno",rules:RULE_COL_RESTA,ex:[
 {t:"col",op:"+",n:[23,45],h:"Sin llevarte nada"},
 {t:"col",op:"+",n:[36,27],h:"Acá te vas a llevar 1"},
 {t:"col",op:"+",n:[58,34]},
 {t:"col",op:"+",n:[125,64]},
 {t:"col",op:"−",n:[47,23],h:"Sin pedir prestado"},
 {t:"col",op:"−",n:[62,28],h:"Acá hay que pedir prestado"},
 {t:"col",op:"−",n:[90,45]},
 {t:"col",op:"+",n:[12,24,31],h:"Tres números, de a una columna por vez"}
]},
"3": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Sumar y restar de tres cifras",rules:RULE_COL_RESTA,ex:[
 {t:"col",op:"+",n:[247,136]},
 {t:"col",op:"+",n:[358,275]},
 {t:"col",op:"+",n:[125,48,230],h:"Tres sumandos"},
 {t:"col",op:"−",n:[562,238]},
 {t:"col",op:"−",n:[704,356],h:"Ojo con el cero del medio"},
 {t:"col",op:"−",n:[500,164]},
 {t:"col",op:"+",n:[1204,397]},
 {t:"col",op:"−",n:[1000,625]}
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
"5": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Multiplicar por dos cifras",rules:RULE_COL_MULT2,ex:[
 {t:"col",op:"×",n:[42,13],parts:true,h:"Dos filas: primero por las unidades"},
 {t:"col",op:"×",n:[123,24],parts:true},
 {t:"col",op:"×",n:[245,32],parts:true},
 {t:"col",op:"×",n:[408,6],h:"Esta es de una sola cifra"},
 {t:"col",op:"+",n:[4567,2845]},
 {t:"col",op:"−",n:[6000,2473]}
]},
"6": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Números grandes",rules:RULE_COL_MULT2,ex:[
 {t:"col",op:"×",n:[134,25],parts:true},
 {t:"col",op:"×",n:[507,38],parts:true,h:"Ojo con el cero del medio"},
 {t:"col",op:"+",n:[12456,8975]},
 {t:"col",op:"−",n:[7005,3468]},
 {t:"col",op:"×",n:[1234,6]}
]},
"7": {id:"mc",dot:"✏️",name:"Cuentas paradas",title:"Cuentas paradas",sub:"Repaso de las tres operaciones",rules:RULE_COL_MULT2,ex:[
 {t:"col",op:"×",n:[2345,36],parts:true},
 {t:"col",op:"×",n:[1408,27],parts:true},
 {t:"col",op:"−",n:[10000,4567]},
 {t:"col",op:"+",n:[45678,9876]},
 {t:"col",op:"×",n:[3006,9]}
]}
};
