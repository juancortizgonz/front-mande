import {Box,Button,Card, CardContent, TextField, Typography} from '@mui/material'

export default function Home() {
  return (
    <Box  sx={{ display: '', mx: '2px', transform: 'scale(0.8)' }}>
      <Card sx={{mt:5}} variant='elevation'>
        <Typography align='center'>
          Bienvenido
        </Typography>
        <CardContent align='center'>
          <TextField placeholder='Ingrese su nombre' variant='outlined'  fullWidth  required />
          <TextField placeholder='Ingrese su contraseña' variant='outlined'  fullWidth  required/>
          <Button variant='contained'>
            Iniciar sesion
          </Button>
          <Button variant='text' align=''>¿No tienes una cuenta?</Button>
        </CardContent>
      </Card>

    </Box>
  )
}