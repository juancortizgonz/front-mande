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
              <Button variant='' onClick={()=> navigate("/task/new") }>Registrarse</Button>
            </Toolbar>
          </Container>
        </AppBar>

      </Box>
    )
  }