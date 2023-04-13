// DATOS PRIMITIVOS
// accede directamente al valor

// DATOS COMPLEJOS
// array => estructura de dato complejo (se accede a la referencia del valor)
// objetos

let numero = 4; // number (dato primitivo)

//SINTAXIS
const mochila = ["cartuchera", "lapiz", "carpeta", "guarpolvo"];

// console.log(mochila);

//En js las posiciones comienzan por 0

//Ver en consola la mochila
//Cuando buscamos en un array se busca la posición y no el elemento
// console.log(mochila[2]);

// const nombre = "Gabriel";
// nombre = "julian";

// const documento = 948394586;

// const colores = ["rojo"];
// console.log(colores);

// colores.push("azul");
// console.log(colores);

//Objetos => conjunto de propiedad (clave - valor)

//SINTAXSIS
const cartuchera = {
  //propiedad => clave / valor
  color: "rojo",
  cierre: true,
  abrojo: false,
  utilesDentro: ["lapiz", "lapicera", "regla"],
  fabrica: {
    pais: "china",
    contacto: 2873178293127,
    fecha: new Date(),
  },
};

// console.log(cartuchera.utilesDentro[1]);

const ledZeppelin = {
  name: "Led Zeppelin",
  year: 1968,
  active: false,
  thumbnail:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  albums: [
    {
      name: "Led Zeppelin",
      year: 1969,
      songs: ["Good Times, Bad Times", "Communication Breakdown"],
      duration: 2691,
    },
    {
      name: "Led Zeppelin II",
      year: 1969,
      songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duration: 2502,
    },
    {
      name: "Led Zeppelin III",
      year: 1970,
      songs: ["Immigrant Song"],
      duration: 2489,
    },
    {
      name: "Led Zeppelin IV",
      year: 1971,
      songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duration: 2559,
    },
  ],
};

// console.log(ledZeppelin.albums[1].songs[1]);

//Bucles => ciclo / iteración

//SINTAXIS
// palabra reservada | variable inicial | condición | iteración

//      comienzo   condición (final)     iteración
for (let indice = 0; indice < 10; indice = indice + 1) {
  // console.log(`Vuelta numero ${indice}`);
}

const personajes = [
  "Rick",
  "Morty",
  "Summer Smith",
  "Beth Smith",
  "GABO",
  4,
  5,
  7,
  8,
  5,
  3,
];

for (let indice = 0; indice < personajes.length; indice = indice + 1) {
  console.log(personajes[indice]); // Rick
}
