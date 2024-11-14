// mapper => transform 

// response backend => model frontend

const user = {
  id: 1,
  first_name: 'John Doe',
  email: 'jhon@gmail.com',
  last_name: "Doe",
  age: 18
}

const userMapper = (user) => {
  return {
    id: user.id,
    firstName: user.first_name,
    email: user.email,
    lastName: user.last_name,
    status: user.age >= 18 ? 'Adult' : 'Minor'
  }
}

const getUser = async () => {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return userMapper(data);
  } catch (error) {
    console.log(error)
  }
}