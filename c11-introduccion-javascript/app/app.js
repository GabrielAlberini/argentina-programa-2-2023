// Comentario de una linea

/*
Esto
es 
un
comentario
multi
linea
*/

// variables => lugar reservado en la memoria de mi pc para guardar un dato
// declaración | asignación | inicialización

let color = "rojo";

//var, let, const => ECMAsciprt

//buenas prácticas en nombres de variables

// todos los nombres comienzar en minúscula
// javascript es un lenguaje camelCase

let gustoDeHeladoFavorito = "Kinoto al whisky"; //string

//Tipos de datos

//primitivos => representan directamente al dato
//complejos => son una colección de datos

//string => cadena de caracteres: "hola"
//number => números: 3

let numeroEntero = 3;
let numeroNegativo = -1;
let numeroDecimal = 3.1;

// boolean => representa un valor de verdad : true | false
// undefined => ausencia de valor: undefined

let variableSinValor = undefined;

//null => ausencia de valor : null

let variableDeValorNulo = null;

//NaN => Not a number : "hola" * 3

//Symbol => objeto incorporado cuyo constructor devuelve un symbol primitivo

//consola => herramienta de desarrollo por donde vemos la interactividad de javascript

console.log(gustoDeHeladoFavorito);
console.log(numeroNegativo);
console.log(variableSinValor);

//Operaciones artimeticas + - * / %

let numeroUno = 10;
let numeroDos = 20;

console.log(numeroUno / numeroDos);

let fraseUno = "Hola"; //Hola mundo
let fraseDos = "todos mis compañeros de Argentina Programa"; // "hola" + " " + "mundo"

//Concatenando => unir string
console.log(fraseUno + " " + fraseDos);

//Ocasionando error NaN
console.log("Hola" * 3);

//Interpolación => back sticks / template string
console.log(`${fraseUno} como anda ${fraseDos}`);

console.log(fraseUno + " " + "como andan" + " " + fraseDos);

console.log("Hola mundo como anda");

//prompt => una forma dinamica de pedir un dato al usuario

/*
Crear un programa que pida al usuario ingresar un nombre completo, y luego muestre un mensaje por la consola que diga, "Hola {nombreCompleto} bienvenidx a Argentina Programa".
*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

console.log(nombre);
console.log(apellido);

//Interpolando
console.log(`Hola ${nombre} ${apellido} bienvenidx a Argentina Programa`);

//Concatenando de forma tradicional
console.log(
  "Hola " + nombre + " " + apellido + " bienvenidx a Argentina Programa"
);
