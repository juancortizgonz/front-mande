import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

function LaborForm() {
  const navigate = useNavigate();
  const url = "http://localhost:3001/api/v1/labores";
  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    unidad: ""
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      nombre: data.nombre,
      descripcion: data.descripcion,
      unidad: data.unidad
    })
      .then(res => {
        console.log(res.data);
      })
  }

  function handle(e) {
    const newData = { ...data };
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
            <Typography component="h1" variant="h5">
              Crear nueva labor
            </Typography>
            <Box component="form" noValidate onSubmit={(e) => submit(e)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="nombre"
                    required
                    fullWidth
                    id="nombre"
                    label="Nombre"
                    autoFocus
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="descripcion"
                    label="Descripci??n"
                    name="descripcion"
                    autoComplete="family-name"
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="unidad"
                    label="Unidad"
                    type="unidad"
                    name="unidad"
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
                Crear nueva labor
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/labores" variant="body2">
                    Ver labores existentes.
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

export default LaborForm;