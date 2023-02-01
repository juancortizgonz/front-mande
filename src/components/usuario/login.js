import { Diversity1TwoTone } from '@mui/icons-material';
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

const Labores = () => {

  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/v1/usuarios")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsuario(data);
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
          </div>
        );
    }
}
export default Labores;