import {AppBar, Box, Toolbar, Typography, Container,Button}  from '@mui/material'  
import {Link, useNavigate}  from 'react-router-dom'

export default function NavBar() {
  const  navigate = useNavigate()
    return (
      <Box sx={{flexGrow : 1}}>
        <AppBar position='static' color='primary'>
          <Container>
            <Toolbar>
              <Typography variant='h5' sx={{flexGrow : 1}}>
                <Link to='/' style={{textDecoration:'none',color:'White'}}>
                Mande
                </Link>
                
              </Typography>
              <Button variant='' title="Conoce más sobre Mande" onClick={()=> navigate("/registro") }>¿Qué es Mande?</Button>
              <Button variant='' title="Contacta nuestro equipo" onClick={()=> navigate("/registro") }>Contacto</Button>
              <Button variant='' title="Registro de usuario" onClick={()=> navigate("/registro") }>Registrarse</Button>
              <Button variant='' title="Ingresar a tu cuenta" onClick={()=> navigate("/login") }>Ingresar</Button>
            </Toolbar>
          </Container>
        </AppBar>

      </Box>
    )
  }