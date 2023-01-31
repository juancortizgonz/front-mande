import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Login from "./components/login"
import NavBar from "./components/navbar"
import Form from "./components/usuario/form"
import LaborForm from "./components/labor/laborForm";
import Labores from "./components/labor/labores";
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
      <Route path='/crear-labor' element={< LaborForm />}/>
      <Route path='/labores' element={< Labores />}/>
     
    </Routes>
    </Container>
   </BrowserRouter>
  )
}