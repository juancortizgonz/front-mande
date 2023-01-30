import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from "./components/home"
import NavBar from "./components/navbar"
import Form from "./components/form"
import {Container} from '@mui/material'


export default function App(){
  return (
   <BrowserRouter>
   <NavBar/>
   <Container>
    <Routes>
      <Route path='/' element={< Home />}/>
      <Route path='/registro' element={< Form />}/>
     
    </Routes>
    </Container>
   </BrowserRouter>
  )
}