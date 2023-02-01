import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const LaboresTable = () => {
    // Configuracion de Hooks
    const [labores, setLabores] = useState([]);

    // Funcion para mostrar datos con Axios
    const endpoint = 'http://localhost:3001/api/v1/labores';

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data);
            setLabores(data);
        })
    };

    useEffect(() => {
        getData();
    }, []);

    // Definicion de columnas
    const columns = [
        {
            name:"nombre",
            label:"Nombre"
        },
        {
            name:"descripcion",
            label:"Descripción"
        },
        {
            name:"unidad",
            label:"Unidad"
        },
    ];

    // Renderizar el componente
    return (
        <>
        <MUIDataTable 
        title="Explora todas las labores"
        data={labores}
        columns={columns}
        />
        <a href="ofertas">Haz clic aquí para ver las ofertas disponibles. Recuerda que esta es solo una lista de todas las labores que se ofertan en nuestra web.</a>
        </>
    );
};