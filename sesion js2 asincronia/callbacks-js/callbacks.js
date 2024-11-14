function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
  const nombre = "Ana";
  callback(nombre);
}

console.log("inicio");
procesarEntradaUsuario(saludar);
console.log("final");


function solicitudServidor(callback) {
  setTimeout(() => {
    const exito = true;
    if (exito) {
      callback(null, 'Datos recibidos');
    } else {
      callback('Error al obtener datos', null);
    }
  }, 2000);
}

function obtenerResultados(error, resultado) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(resultado);
}

console.log("inicio de solicitud"); // 1
solicitudServidor(obtenerResultados); // 2
console.log("fin de solicitud"); // 3

// 1 2 3
// 1 3 2

// event loop
