// const edad = 18;
// const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
// console.log(mensaje); // 'Eres mayor de edad'

// function obtenerDescuento(edad) {
//   return edad >= 18 ? 'Descuento de adulto' : 'Descuento de menor';
// }

// console.log(obtenerDescuento(20)); // 'Descuento de adulto'
// console.log(obtenerDescuento(16)); // 'Descuento de menor'


// const puntuacion = 85;
// const resultado = puntuacion >= 90 ? 'A' : puntuacion >= 80 ? 'B' : 'C';
// console.log(resultado); // 'B'


// let mensajeEdad;
// if (edad >= 18) {
//   mensajeEdad = 'Eres mayor de edad';
// } else {
//   mensajeEdad = 'Eres menor de edad';
// }
// console.log(mensaje);

const nombre = 0;
const nombrePorDefecto = 'Usuario Anónimo';

const nombreMostrar = nombre || nombrePorDefecto;
console.log(nombreMostrar);  // 'Usuario Anónimo'

// const nombre = '';
// const nombrePorDefecto = 'Usuario Anónimo';

// const nombreMostrar = nombre ?? nombrePorDefecto;
// console.log(nombreMostrar);  // ''


// const valor1 = '';
// const valor2 = null;

// console.log(valor1 || 'Valor por defecto');  // 'Valor por defecto' ('' es falsy)
// console.log(valor1 ?? 'Valor por defecto');  // '' (No es null o undefined)

// console.log(valor2 || 'Valor por defecto');  // 'Valor por defecto'
// console.log(valor2 ?? 'Valor por defecto');  // 'Valor por defecto' (null)