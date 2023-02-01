import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Modal, TextField, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));

export const LaboresTable = () => {
    const styles= useStyles();

    // Configuracion de Hooks
    const [labores, setLabores] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [laborSeleccionada, setLaborSeleccionada] = useState({
        nombre:"",
        descripcion:"",
        unidad:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLaborSeleccionada(prevState=>({
            ...prevState,
            [name]: value
        }));
    };

    // Funcion para mostrar datos con Axios
    const endpoint = 'http://localhost:3001/api/v1/labores';

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            setLabores(data);
        })
    };

    const peticionPost = async() => {
        await axios.post(endpoint, laborSeleccionada).then(response=> {
            const data = response.data;
            setLabores(data.concat(response.data));
            openCloseModalInsertar();
        })
    };

    const seleccionarLabor = (labor, caso) => {
        setLaborSeleccionada(labor);
        (caso==="Editar")&&openCloseModalEditar();
    };

    const openCloseModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    };

    const openCloseModalEditar = () => {
        setModalEditar(!modalEditar);
    };

    useEffect(() => {
        getData();
    }, []);

    const insertLaborBody = (
        <div className={styles.modal}>
            <h3>Crear nueva labor</h3>
            <TextField className={styles.inputMaterial} label="Nombre" name="nombre" onChange={handleChange}></TextField>
            < br/>
            <TextField className={styles.inputMaterial} label="Descripción" name="descripcion" onChange={handleChange}></TextField>
            < br/>
            <TextField className={styles.inputMaterial} label="Unidad" name="unidad" onChange={handleChange}></TextField>
            < br/>
            <div>
                <Button color="primary" onClick={()=>peticionPost()}>Crear labor</Button>
                <Button onClick={() => openCloseModalInsertar()}>Cancelar</Button>
            </div>
        </div>
    );

    const editLaborBody = (
        <div className={styles.modal}>
            <h3>Editar labor</h3>
            <TextField className={styles.inputMaterial} label="Nombre" name="nombre" onChange={handleChange} value={laborSeleccionada&&laborSeleccionada.nombre}></TextField>
            < br/>
            <TextField className={styles.inputMaterial} label="Descripción" name="descripcion" onChange={handleChange} value={laborSeleccionada&&laborSeleccionada.descripcion}></TextField>
            < br/>
            <TextField className={styles.inputMaterial} label="Unidad" name="unidad" onChange={handleChange} value={laborSeleccionada&&laborSeleccionada.unidad}></TextField>
            < br/>
            <div>
                <Button color="primary" onClick={()=>peticionPost()}>Actualizar labor</Button>
                <Button onClick={() => openCloseModalEditar()}>Cancelar</Button>
            </div>
        </div>
    );

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
        <Button onClick={() => openCloseModalInsertar()}>Crear nueva labor</Button>
        <br></ br>
        <MUIDataTable 
        columns={columns}
        data={labores}
        title="Labores existentes"
        />
        <a href="ofertas">Haz clic aquí para ver las ofertas disponibles. Recuerda que esta es solo una lista de todas las labores que se ofertan en nuestra web.</a>

        <Modal
        open={modalInsertar}
        onClose={openCloseModalInsertar}
        >
            {insertLaborBody}
        </Modal>

        <Modal
        open={modalEditar}
        onClose={openCloseModalEditar}
        >
            {editLaborBody}
        </Modal>
        </>
    );
};