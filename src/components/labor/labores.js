import { Diversity1TwoTone } from '@mui/icons-material';
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

const Labores = () => {

  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [labores, setLabor] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/v1/labores")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setLabor(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
  if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
          <div>
                <h1>Lista de labores existentes</h1>
                {labores.map(labor => (
                <>
                  <h2>{labor.nombre_labor}</h2>
                  <p>{labor.descripcion_labor}</p>
                  <p>Unidad de labor: <strong>{labor.unidad_labor}</strong></p>
                  <Link to={`/${labor.id_labor}`}>Detalles de la labor.</Link>
                </>
                ))}
          </div>
        );
    }
}
export default Labores;