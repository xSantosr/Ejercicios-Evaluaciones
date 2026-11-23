<p align="center"><img src="icon-192.png" width="96" alt=""></p>

# Ejercicios y evaluaciones

Ejercicios de práctica para la escuela primaria, armados a partir de los programas oficiales de cada grado. Están pensados para que el chico o la chica responda solo en el celular, la tablet o la computadora, y un adulto revise después.

**Usar la página:** https://xsantosr.github.io/Ejercicios-Evaluaciones/

No hace falta instalar nada ni crear una cuenta. En el celular se puede agregar a la pantalla de inicio como si fuera una app.

## Qué hay

| Para entrar a | Inglés | Matemática | Lengua |
|---|---|---|---|
| 2º grado | 146 | 54 | 38 |
| 3º grado | 142 | 75 | 86 |
| 4º grado | 78 | 55 | 41 |
| 5º grado | 77 | 51 | 41 |
| 6º grado | 76 | 59 | 39 |
| 7º grado | 80 | 59 | 47 |

En total, 1.244 ejercicios.

- **Inglés:** cubre el programa del grado anterior y el del grado al que se ingresa.
- **Matemática y Lengua:** siguen los contenidos de ingreso de la escuela, es decir, lo que hay que saber del grado anterior.
- Cada materia está dividida en módulos cortos, y cada módulo termina con un simulacro de examen.
- **Operaciones escritas (hasta 4º):** se resuelven como en el cuaderno, con un casillero por cifra. En **2º y 3º**, cada cuenta se muestra **de las dos formas**: primero en línea (`23 + 45 =`) y debajo en columna, para que se vea que son la misma.
  - **Cuentas paradas:** sumas, restas y multiplicaciones en columna, con espacio para anotar las llevadas.
  - **La casita:** divisiones, con el cociente debajo del divisor y el resto debajo del dividendo. La revisión explica qué significa el resto y muestra la comprobación.
- **Cálculo mental (desde 5º):** en lugar de escribir la cuenta se practican las estrategias que piden los programas: descomponer, redondear y ajustar, dobles y mitades, apoyarse en un cálculo conocido y estimar. Las fracciones se escriben con raya horizontal.
- **Ilustraciones:** los ejercicios usan dibujos cuando ayudan a entender — bloques de valor posicional, rectas numéricas, cuadros de números, grupos de objetos, fracciones, relojes y triángulos.

## Cómo funciona

- **Un solo intento por ejercicio.** Si la respuesta es incorrecta queda marcada en rojo y no se puede volver a contestar. Mientras resuelve, nunca se muestra la respuesta correcta.
- **Explicación antes de cada módulo.** El recuadro «Cómo se usa» explica el tema con ejemplos distintos a los de los ejercicios, para entender la regla y no copiar la respuesta.
- **Revisión del adulto.** Se habilita al terminar el módulo y muestra qué respondió, cuál era la correcta y una explicación.
- **Control de adulto.** Para abrir la revisión o reiniciar un módulo hay que resolver una cuenta. Así no se puede ver la respuesta y volver a empezar.
- **Consignas abiertas.** Las de escritura o las que se responden con un libro no se corrigen solas: las revisa el adulto con la guía que trae la revisión.
- **Guardado local.** Las respuestas quedan en el navegador del dispositivo donde se contestan. No se comparten entre dispositivos.
- **Tema claro y oscuro.** El oscuro imita un pizarrón, para cansar menos la vista.

> Las respuestas correctas están en los archivos de este repositorio. Es una herramienta de práctica, no un examen formal.

## Libros de lectura

La **Biblioteca** (`libro.html`) tiene una ficha de cada libro del programa: autor, ilustrador, de qué trata, personajes, temas, preguntas para conversar y cómo termina (oculto, para el adulto). Cada módulo de Lengua que trabaja un libro tiene un vínculo a su ficha.

Las fichas cuentan los libros con palabras propias. **No se reproducen textos ni ilustraciones**: los libros tienen derechos de autor y se leen en el ejemplar de la escuela o de una biblioteca.

## Para quien quiera colaborar

```
index.html        la página y el motor de ejercicios
libro.html        la biblioteca con las fichas de libros
config.js         qué grados están disponibles
libros.js         las fichas (se genera, no editar a mano)
grados/gN.js      el contenido de cada grado (se genera, no editar a mano)
src/              el contenido fuente: ejercicios, respuestas y explicaciones
scripts/build.js  arma grados/gN.js a partir de src/
scripts/leaks.js  avisa si una explicación contiene la respuesta de su propio ejercicio
```

Para cambiar o agregar contenido, editá los archivos de `src/` y corré:

```
node scripts/build.js
```

Tipos de ejercicio: opción múltiple (`choice`), unir con flechas (`match`), completar (`fill`), ordenar (`order`), cuenta parada (`col`), división con casita (`div`), fracciones (`frac`) y respuesta abierta (`open`).

Para ilustrar un ejercicio se le agrega `viz` (o `ov`, para dibujar cada opción). Los dibujos disponibles son `base10`, `array`, `groups`, `fraction`, `numline`, `hundred`, `clock`, `triangle` y `money`. Las operaciones escritas se cargan solo con los números y el script calcula el resto:

```js
{t:"col",  op:"+", n:[247,136]}        // cuenta parada
{t:"col",  op:"×", n:[123,24], parts:true}   // con productos parciales
{t:"col",  op:"−", n:["20","13,40"]}   // con coma: se alinea sola
{t:"div",  D:128, d:6}                 // casita: cociente y resto
{t:"div",  D:575, d:5, steps:true}     // casita paso a paso
{t:"frac", op:"+", f:[[1,2],[1,4]]}    // fracciones con raya
```

El script calcula resultados, anchos, productos parciales, los pasos de la división y las fracciones equivalentes aceptadas, y falla si una cuenta da negativa, si el resto queda mayor que el divisor o si el resultado aparece en el enunciado.
