const MATE3_EXTRA = {id:"m6",dot:"🤔",name:"Día 6",title:"Día 6 · ¿Qué cuenta va?",sub:"Suma o suma repetida · separar · comparar",ex:[
 {t:"choice",q:"En un florero hay <b>7 rosas</b> y <b>5 margaritas</b>. ¿Cuántas flores hay?",h:"¿Qué cuenta resuelve el problema?",o:["7 + 5","7 + 7 + 7 + 7 + 7","5 + 5 + 5 + 5 + 5 + 5 + 5"],a:0},
 {t:"choice",q:"Hay <b>4 floreros</b> con <b>5 flores</b> en cada uno. ¿Cuántas flores hay?",h:"¿Qué cuenta resuelve el problema?",o:["4 + 5","5 + 5 + 5 + 5","4 + 4 + 4"],a:1},
 {t:"choice",q:"¿Cuál de estos problemas se resuelve con una <b>suma repetida</b>?",o:["Tengo 8 bolitas y me regalan 6","En cada mano tengo 5 dedos. ¿Cuántos dedos tengo en las dos manos?","Tengo 12 caramelos y como 3"],a:1},
 {t:"fill",q:"Hay <b>3 mesas</b> con <b>6 sillas</b> cada una. ¿Cuántas sillas hay?",labels:["Respuesta"],a:["18"],why:"Se repite el 6 tres veces: 6 + 6 + 6 = 18."},
 {t:"fill",q:"Sofía tiene <b>9 figuritas</b> y Tomás tiene <b>6</b>. ¿Cuántas tienen entre los dos?",labels:["Respuesta"],a:["15"],why:"Son dos cantidades distintas que se juntan: 9 + 6 = 15."},
 {t:"choice",q:"En un grado hay <b>28 chicos</b>. <b>13</b> son varones. ¿Cuántas son nenas?",h:"¿Qué cuenta hay que hacer?",o:["Sumar","Restar"],a:1,why:"Las nenas son la otra parte del total: se separa."},
 {t:"fill",q:"Entonces, ¿cuántas nenas hay en ese grado?",labels:["Respuesta"],a:["15"]},
 {t:"fill",q:"En la granja hay <b>54 animales</b>. <b>30</b> son gallinas y el resto son patos. ¿Cuántos patos hay?",labels:["Respuesta"],a:["24"],why:"54 − 30 = 24 patos."},
 {t:"fill",q:"Lucas mide <b>125 cm</b> y su hermana mide <b>98 cm</b>. ¿Cuántos centímetros más mide Lucas?",labels:["Respuesta"],a:["27"],why:"Se comparan dos medidas: 125 − 98 = 27."},
 {t:"fill",q:"Un tren tiene <b>5 vagones</b> y en cada vagón viajan <b>10 personas</b>. ¿Cuántas personas viajan?",labels:["Respuesta"],a:["50"]}
]};
const MATE3_RULES = `
<div class="rsec"><h4>¿Suma o suma repetida?</h4>
<div class="rrow"><span class="rl">Cantidades <b>distintas</b> que se juntan</span><span class="ra">suma común</span></div>
<div class="rrow"><span class="rl">La <b>misma cantidad</b> muchas veces</span><span class="ra">suma repetida</span></div>
<p class="exline">"Tengo 3 perros y 2 gatos" &rarr; 3 + 2.<br>"Tengo 3 perros y cada uno tiene 4 patas" &rarr; 4 + 4 + 4.</p>
<div class="warn"><b>La pista:</b> si aparece "<b>cada uno</b>", "<b>en cada</b>" o "<b>de a</b>", casi siempre hay grupos iguales. Igual leé bien: la palabra sola no decide.</div></div>
<div class="rsec"><h4>Separar una parte del total</h4>
<p class="exline">Cuando conocés el <b>total</b> y <b>una parte</b>, la otra parte se encuentra <b>restando</b>.</p>
<div class="rrow"><span class="rl">En una bolsa hay 20 frutas; 8 son peras</span><span class="ra">20 − 8 = manzanas</span></div></div>
<div class="rsec"><h4>Comparar</h4>
<p class="exline">"¿Cuánto más…?" o "¿Cuánto menos…?" compara dos cantidades. Se resuelve <b>restando</b> la chica de la grande.</p></div>`;
