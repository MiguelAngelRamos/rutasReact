export const obtenerUsuarios = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();
  // console.log(typeof(users));
  return users;
}

export const obtenerUsuarioId = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  // console.log(typeof(users));
  return user;
}


