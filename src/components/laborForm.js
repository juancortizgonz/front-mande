import React, { useState } from 'react';
import Axios from 'axios';
function LaborForm() {
  const url = "http://localhost:3001/api/v1/labores";
  const [data, setData] = useState({
    nombre_labor: "",
    descripcion_labor: "",
    unidad_labor: ""
  });

  function submit (e) {
    e.preventDefault();
    Axios.post(url, {
      nombre_labor: data.nombre_labor,
      descripcion_labor: data.descripcion_labor,
      unidad_labor: data.unidad_labor
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
        <input onChange={(e) => handle(e)} id="nombre_labor" value={data.nombre_labor} placeholder='Nombre labor' type='text' />
        <input onChange={(e) => handle(e)} id="descripcion_labor" value={data.descripcion_labor} placeholder='Descripcion labor' type='text' />
        <input onChange={(e) => handle(e)} id="unidad_labor" value={data.unidad_labor} placeholder='Unidad labor' type='text' />
        <button>Crear labor</button>
      </form>
    </div>
  )
}

export default LaborForm;