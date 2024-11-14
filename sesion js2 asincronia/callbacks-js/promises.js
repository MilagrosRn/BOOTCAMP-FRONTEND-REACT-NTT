// const promesa = new Promise((resolve, reject) => {
//   const exito = false; // Simulamos una operación exitosa
//   if (exito) {
//     resolve('La operación fue exitosa');
//   } else {
//     reject('Ocurrió un error');
//   }
// });

// console.log("iniciar");
// promesa
//   .then((resultado) => {
//     console.log(resultado); // Se ejecuta si la promesa se resuelve
//   })
//   .catch((error) => {
//     console.log(error); // Se ejecuta si la promesa es rechazada
//   });
console.log("final")

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve('Datos recibidos');
      } else {
        reject('Error al obtener datos');
      }
    }, 2000);
  });
}

// obtenerDatos()
//   .then((resultado) => {
//     console.log(resultado); // 'Datos recibidos' después de 2 segundos
//   })
//   .catch((error) => {
//     console.log(error); // Si algo sale mal, muestra el error
//   });

// obtenerDatos()
//   .then((resultado) => {
//     console.log(resultado);
//     return otraOperacion();
//   })
//   .then((resultado2) => {
//     console.log(resultado2);
//   })
//   .catch((error) => {
//     console.log(error); // Atrapa cualquier error en la cadena
//   });

async function ejecutarOperacion() {
  try {
    const resultado = await obtenerDatos();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
console.log("first")
ejecutarOperacion();
console.log("object")