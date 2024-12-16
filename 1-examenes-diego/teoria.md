1. ¿Que diferencia una variable creada con `let` de una creada con `const`?
Que la variable creada con const no puede cambiar mientras que la de let si

2. ¿Qué diferencia hay entre `==` y `===`?
Dos iguales generan una igualdad débil, mientras que === es una igualdad estricta. Por ejemplo en el primer == una comprobacion de un string que contenga un 5 ("5") == 5, sería TRUE, mientras que en el segundo caso con el === sería FALSE.

3. Analiza el siguiente código, ¿qué valor se mostrará en la consola?
```js
let a = 1;

function mi_funcion() {
    let a = 2;
}

mi_funcion();
console.log(a);
```
1, porque los valores que creamos dentro de una variable, no se pueden usar fuera de la variable, por eso este código nos deja crear otra variable con el mismo nombre, pero solo podremos usarla dentro de mi_funcion.

4. ¿Qué es el DOM? Explícalo brevemente.
El DOM es una interfaz de programación que permite a los desarrolladores interactuar con documentos HTML y XML de una manera estructurada y dinamica.

5. ¿Este código es correcto? Si no lo es, ¿por qué?
```js
const boton = document.querySelector('button');
function saluda() {
    console.log('Hola');
}
boton.addEventListener('click', saluda());
```
No es correcto, porque no va a funcionar de la manera que esperamos, esto sucede por los () despues  de la funcion "saluda" dentro del eventlistener, esto hará que la funcion se ejecute 1 sola vez, cuando lo que queremos es que se ejecute cada vez que hagamos click en el boton.