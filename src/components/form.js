import React, { useState } from 'react';
import Axios from 'axios';
function Form() {
  const url = "http://localhost:3001/api/v1/usuarios";
  const [data, setData] = useState({
    nombre_usuario: "",
    email_usuario: "",
    password_usuario: "",
    direccion_usuario: "",
    path_doc: "",
    telefono_usuario: ""
  });

  function submit (e) {
    e.preventDefault();
    Axios.post(url, {
      nombre_usuario: data.nombre_usuario,
      email_usuario: data.email_usuario,
      password_usuario: data.password_usuario,
      direccion_usuario: data.direccion_usuario,
      path_doc: data.path_doc,
      telefono_usuario: data.telefono_usuario
    })
    .then(res => {
      console.log(res.data);
    })
  }

  function handle (e) {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handle(e)} id="nombre_usuario" value={data.nombre_usuario} placeholder='Nombre' type='text' />
        <input onChange={(e) => handle(e)} id="email_usuario" value={data.email_usuario} placeholder='Email' type='text' />
        <input onChange={(e) => handle(e)} id="password_usuario" value={data.password_usuario} placeholder='Password' type='text' />
        <input onChange={(e) => handle(e)} id="direccion_usuario" value={data.direccion_usuario} placeholder='Direccion' type='text' />
        <input onChange={(e) => handle(e)} id="path_doc" value={data.path_doc} placeholder='Path' type='text' />
        <input onChange={(e) => handle(e)} id="telefono_usuario" value={data.telefono_usuario} placeholder='Telefono' type='text' />
        <button>Registrarme</button>
      </form>
    </div>
  )
}

export default Form;