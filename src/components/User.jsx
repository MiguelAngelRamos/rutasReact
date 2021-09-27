import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { obtenerUsuarioId } from '../api/user-id';

const User = () => {
  const { id } = useParams();
  const[user, setUser] = useState({});
  // console.log(useParams());
  useEffect( ()=> {
    obtenerUsuarioId(id).then(user => setUser(user))
  }, [id])

  return (
    <div>
      <h1>Nombre: {user.name} </h1>
      <h2>Email : {user.email} </h2>
    </div>
  )
}

export default User
