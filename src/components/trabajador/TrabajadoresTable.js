import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const TrabajadoresTable = () => {
    // Configuracion de Hooks
    const [trabajadores, setTrabajadores] = useState([]);

    // Funcion para mostrar datos con Axios
    const endpoint = 'http://localhost:3001/api/v1/trabajadores/all';

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data);
            setTrabajadores(data);
        })
    };

    useEffect(() => {
        getData();
    }, []);

    // Definicion de columnas
    const columns = [
        {
            name:"id_usuario",
            label:"ID"
        },
        {
            name:"nombre",
            label:"Nombre"
        },
        {
            name:"email",
            label:"Email"
        },
        {
            name:"telefono",
            label:"Telefono"
        },
    ];

    // Renderizar el componente
    return (
        <MUIDataTable 
        title="Conoce nuestros profesionales"
        data={trabajadores}
        columns={columns}
        />
    );
};