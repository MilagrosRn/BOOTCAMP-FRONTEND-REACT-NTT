const users = [
  {
    id: 1,
    first_name: 'John Doe',
    email: 'jhon@gmail.com',
    type: 'user',
  },
  {
    id: 2,
    first_name: 'Jane Doe',
    email: 'doe@gmail',
    type: 'admin'
  },
  {
    id: 3,
    first_name: 'Jean Osco',
    email: 'jean@gmail',
    type: 'admin'
  },
  {
    id: 4,
    first_name: 'Diego Perez',
    email: 'diego@gmail',
    type: 'admin'
  }
]

// foreach
const numbers = [1, 2, 3, 4];
// numbers.forEach(num => console.log(num * 2));

// map
// const doubled = numbers.map(num => {
//   if (num % 2 == 0) return num * 2;
// });
// console.log(doubled);
// [2,4,6,8] 1
// [4,8] 2
// [undefined, 4, undefined, 8] 3

// filter
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log({
//   numbers,
//   evenNumbers
// });

// reduce
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);
// const usersData = users.reduce((acc, user) => {
//   user.type === 'admin' ? acc.admins.push(user) : acc.users.push(user);
//   return acc;
// }, {
//   admins: [],
//   users: []
// });

// console.log({ admis: usersData.admins, users: usersData.users });

//find
// const firstEven = numbers.find(num => num === 1);
// console.log(firstEven);

//some 
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven);

//every
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

//includes
// const hasThree = numbers.includes(30);
// console.log(hasThree);

//sort
// numbers.sort();
// console.log(numbers);


//join
const words = ['Hello', 'world'];
const sentence = words.join('-');
console.log(sentence);

//reverse
numbers.reverse();
console.log(numbers);

