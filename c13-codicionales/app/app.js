//Hacer una función que salude a una persona tomando de manera dinámica el nombre de la misma.

//Declaración
const saludar = (nombre) => {
  //Concatenar - Interpolar - Template string - Back sticks
  let saludo = `Hola ${nombre}`;
  console.log(saludo);
};

//Invocación
// saludar("Gabriel");
// saludar("Juan");

// Condicionales
// Crear un programa que le comunique al usuario "Puedes pasar" si el color del semáforo esta en verde, de lo contrario "No puedes pasar"

// palabra reservada | condición (true) | instrucción
// if(){

// }

// Operadores de comparación (siempre nos devolverán un valor booleano)

// < menor que
// > mayor que
// <= menor o igual que
// >= mayor o igual que
// == igual
// === estrictamente igual
// !== distinto

//Operador lógico
// || OR
// && AND

// console.log(1 > 3); // false
// console.log(4 < 10); // true
// console.log(18 >= 18); // true
// //el igual no es lo mismo a la asignación
// console.log(1 == "1"); // true o false
// console.log(1 === "1"); // valor Y tipo de dato

// let edadDePersona = 26;

// // OR - AND
// //                  true         Y           false
// console.log(edadDePersona >= 15 && edadDePersona <= 25);
// //                             false

// const validarCarnet = (pagoPatente, libreDeuda, multasPagas = true) => {
//   console.log(
//     "Resultado carnet: ",
//     //  true                          false                     true
//     multasPagas === true && pagoPatente === true && libreDeuda === true
//   );
// };

// //               argumentos
// validarCarnet(true, true);

// let clima = "soleado";
// //               true           OR           false
// console.log(clima === "soleado" || clima === "templado");

//Condición
// palabra reservada | condición (true) | instrucción
if (2 < 1) {
  console.log("Es menor");
} else {
  console.log("Es mayor");
}

// Crear un programa que le comunique al usuario "Puedes pasar" si el color del semáforo esta en verde, si está en amarillo "Con precaución", de lo contrario "No puedes pasar"

// let color = "pepito";

// if (color === "verde") {
//   console.log("Puedes pasar");
// } else if (color === "amarillo") {
//   console.log("Ten cuidado...");
// } else if (color === "rojo") {
//   console.log("No puedes pasar");
// } else {
//   console.log("Ingrese un color correcto");
// }

//Crear un programa que nos informe si debemos llevar paraguas si llueve O si está nublado

// let clima = "granizo";

// const usarParaguas = (clima) => {
//   //           false                 false
//   if (clima === "templado" || clima === "soleado") {
//     console.log("No lleves porque está lindo :)");
//   } else if (clima === "granizo") {
//     console.log("Llevate casco, HAY PIEDRAS!!");
//   } else {
//     console.log("Llevate paraguas, se viene :/");
//   }
// };

// usarParaguas(clima);

// Crear un programa que solamente admita perros

let animal = "perro";

const validarPerritos = (animal) => {
  if (animal !== "perro") {
    console.log("Disculpame, este es solo un lugar para perritos");
  } else {
    console.log("Adelante! :D");
  }
};

validarPerritos(animal);

// = asignar => let saludo = "Hola"
// == comparación => 3 == "3" true
// === comparación de tipo de dato y valor => 3 === "3" false

//Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (num, min, max) => {
  if (num >= min && num <= max) {
    console.log("Esta en rango");
  } else {
    console.log("No esta en rango");
  }
};

estaEnRango(11, 0, 10); //Esta en rango
