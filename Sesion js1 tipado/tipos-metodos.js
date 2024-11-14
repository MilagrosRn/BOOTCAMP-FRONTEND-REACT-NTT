const boolean = true;
typeof boolean;    // Devuelve "Boolean"

let notDefined;
typeof notDefined; // Devuelve undefined

const numbers = [1, 2, 3, 4];
typeof numbers;    // Devuelve "object"

const enemies = [
    { id: "SKELETON", name: "Esqueleto" },
    { id: "SPECTRE", name: "Espectro" },
    { id: "GHOST", name: "Fantasma" }
  ];
  
  const addEnemy = (id, name) => {
    enemies.push({ id, name });
  }
  
  // Añadimos nuevo esqueleto a la lista de enemigos
  addEnemy("SKELETON", "Esqueleto resplandeciente");
  
  const findEnemyById = (id) => {
    return enemies.find(enemy => enemy.id === id);
  }
  
  findEnemyById("SKELETON");
  // Devuelve { id: "SKELETON", name: "Esqueleto" }

//   DESTRUCTURACION DE OBJETOS
const user = {
    id: 42,
    is_verified: true,
  };
  
  const { id, is_verified } = user;
  
  console.log(id); // 42
  console.log(is_verified); // true

// SPREAD SINTAX
  let a, b, rest;
[a, b] = [10, 20];

console.log(a); // Expected output: 10

console.log(b); // Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // Expected output: Array [30, 40, 50]
