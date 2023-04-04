//PEQUEÑO PROGRAMITA QUE HACE HACE UNA ACCION DETERMINADA
//es una maquina que le pones algo y te devuelve algo

//sintaxis de función

//forma tradicional (función nombrada)
//palabra clave | nombre | parametros | instrucciones
// function saludar() {
//   console.log("hola1");
//   console.log("hola2");
// }

//invocar => ejecutando la función
// saludar();
// saludar();
// saludar();
// saludar();

// //Arrow function
// const saludar = () => {
//   console.log("Hola a todos desde la consola");
//   document.write("Hola a todos desde el documento");
// };

// //invocar
// saludar();

//¡Hola Gabriel Alberini!

// let primerNombre = prompt("Ingrese su nombre");
// let apellidoPaterno = prompt("Ingrese su apellido");

// const hacerNombreCompleto = (nombre, apellido) => {
//   let nombreCompleto = `${nombre} ${apellido}`;
//   console.log(nombreCompleto);
// };

// hacerNombreCompleto(primerNombre, apellidoPaterno);

// let numeroUno = Number(prompt("Ingrese primer numero"));
// let numeroDos = Number(prompt("Ingrese segundo numero"));

// //parametros => variables que se declaran para su uso interno
// const sumar = (num1, num2, num3 = 0) => {
//   console.log(num1 + num2 + num3);
// };

// //argumentos => los datos que "rellenan" los parametros
// sumar(numeroUno, numeroDos, 10);

//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// const calcularArea = (base, altura) => {
//   let area = (base * altura) / 2;
//   console.log(`El area del triangulo es de ${area}cm2`);
// };

// calcularArea(100, 300);

//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

const convertirHorasEnSegundos = (cantDeHoras) => {
  let segundosTotales = cantDeHoras * 3600;
  console.log(`${cantDeHoras} horas equivalen a ${segundosTotales} segundos`);
};

convertirHorasEnSegundos(6);
