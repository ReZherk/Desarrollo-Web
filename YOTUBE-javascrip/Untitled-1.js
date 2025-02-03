// Problema numero 1:
// Escribe una función que reciba un array de números y devuelva la suma de todos los números pares.

// let Numeros = [1, 2, 3, 4, 5];

// function NumerosPares() {
//   let resultado = 0;
//   Numeros.forEach((n) => {
//     if (n % 2 === 0) {
//       resultado += n;
//     }
//   });

//   return resultado;
// }

// console.log(NumerosPares());

//Con arrow function:

// const sumaPares = (numeros) =>
//   numeros.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
// //filter:Recorre un arreglo y busca los elementos que cumplan la condicion que se le da((n)=>n%2===0)
// //reduce:Realiza una suma consecutiva con los elementos que tiene el arreglo,se puede elegir desde donde comenzar (0)

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(sumaPares(numeros));

// Problema numero 2:
//  Escribe una función que reciba un array de palabras y un número n. Devuelve un array con las palabras cuya longitud sea mayor que n.

// const palabrasLargas = (palabras, n) =>
//   palabras.filter((palabra) => palabra.length > n);

// const palabras = ["manzana", "pera", "melancolia", "melocoton"];
// console.log(palabrasLargas(palabras, 4));

// Problema numero 3:
// Escribe una función que calcule el factorial de un número utilizando recursión.

// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// console.log(factorial(5));

// Problema numero 4:
//  Escribe una función que cuente cuántas palabras hay en una frase dada.

// const contador = (oracion) => oracion.split(" ").length;

// console.log(contador("Esto es una prueba de lógica"));

// Problema numero 5:
//  Dado un array de objetos con propiedades nombre y edad, devuelve un array con los nombres de las personas cuya edad sea mayor a un límite dado.

// const mayoresDeEdad = (personas, limite) =>
//   personas.filter((persona) => persona.edad > limite);
// // .map((persona) => persona.nombre);

// const personas = [
//   { nombre: "Juan", edad: 25 },
//   { nombre: "Ana", edad: 18 },
//   { nombre: "Luis", edad: 30 },
// ];

// console.log(mayoresDeEdad(personas, 20)); // ["Juan", "Luis"]

const persona = {
  nombre: "Juan",
  edad: 25,
  saludo: function () {
    console.log("Hola perra");
  },
};

console.log(persona);

Object.prototype.dimeAlgo = function () {
  console.log("Algo");
};
