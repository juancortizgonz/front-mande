import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Form() {
  const navigate = useNavigate();
  const url = "http://localhost:3001/api/v1/usuarios";
  const [data, setData] = useState({
    nombre_usuario: "",
    email_usuario: "",
    password_usuario: "",
    direccion_usuario: "",
    path_doc: "",
    telefono_usuario: ""
  });

  function submit (e) {
    e.preventDefault();
    Axios.post(url, {
      nombre_usuario: data.nombre_usuario,
      email_usuario: data.email_usuario,
      password_usuario: data.password_usuario,
      direccion_usuario: data.direccion_usuario,
      path_doc: data.path_doc,
      telefono_usuario: data.telefono_usuario
    })
    .then(res => {
      console.log(res.data);
      navigate('/panel');
    })
  }

  function handle (e) {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={(e) => submit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre_usuario"
                  required
                  fullWidth
                  id="nombre_usuario"
                  label="Nombre"
                  autoFocus
                  onChange={(e) => handle(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email_usuario"
                  label="Email"
                  name="email_usuario"
                  autoComplete="family-name"
                  onChange={(e) => handle(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password_usuario"
                  label="Password"
                  type="password"
                  name="password_usuario"
                  autoComplete="email"
                  onChange={(e) => handle(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="direccion_usuario"
                  label="Dirección"
                  id="direccion_usuario"
                  autoComplete="new-password"
                  onChange={(e) => handle(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="path_doc"
                  label="Path doc"
                  id="path_doc"
                  autoComplete="new-password"
                  onChange={(e) => handle(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="telefono_usuario"
                  label="Telefono"
                  id="telefono_usuario"
                  autoComplete="new-password"
                  onChange={(e) => handle(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ¿Ya tienes cuenta? Ingresa ahora.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default Form;