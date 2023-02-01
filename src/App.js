import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Login from "./components/usuario/login"
import NavBar from "./components/navbar"
import Form from "./components/usuario/form"
import LaborForm from "./components/labor/laborForm";
import { LaboresTable } from "./components/labor/LaboresTable";
import { ClientesTable } from "./components/cliente/ClientesTable";
import ClienteForm from "./components/cliente/ClienteForm";
import { TrabajadoresTable } from "./components/trabajador/TrabajadoresTable";
import Inicio from "./components/inicio";
import Dashboard from "./components/panel";
import {Container} from '@mui/material'


export default function App(){
  return (
   <BrowserRouter>
   <NavBar/>
   <Container>
    <Routes>
      <Route path='/' element={< Inicio />}/>
      <Route path='/login' element={< Login />}/>
      <Route path='/registro' element={< Form />}/>
      <Route path='/panel' element={< Dashboard />}/>
      // Labor
      <Route path='/crear-labor' element={< LaborForm />}/>
      <Route path='/labores' element={< LaboresTable />}/>
      // Cliente
      <Route path='/clientes' element={< ClientesTable />}/>
      <Route path='/registro-cliente' element={< ClienteForm />}/>

      <Route path='/trabajadores' element={< TrabajadoresTable />}/>
     
    </Routes>
    </Container>
   </BrowserRouter>
  )
}