import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const ClientesTable = () => {
    // Configuracion de Hooks
    const [clientes, setClientes] = useState([]);

    // Funcion para mostrar datos con Axios
    const endpoint = 'http://localhost:3001/api/v1/clientes/all';

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data);
            setClientes(data);
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
    ];

    // Renderizar el componente
    return (
        <MUIDataTable 
        title="Conoce a nuestros mejores clientes"
        data={clientes}
        columns={columns}
        />
    );
};