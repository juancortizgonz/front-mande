import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

function ClienteForm() {
  const navigate = useNavigate();
  const endpoint = "http://localhost:3001/api/v1/clientes/form";
  const url = "http://localhost:3001/api/v1/clientes";
  const [data, setData] = useState({
    recibo: "",
    lat_dir: "",
    lon_dir: "",
    id_usuario: ""
  });
  const [cliente, setCliente] = useState([]);
  const [emailSeleccionado, setEmailSeleccionado] = useState({
    email:""
  });
  let id_usuario_get = 1;


  function submit(e) {
    e.preventDefault();
    axios.get(endpoint).then((response) => {
        const dataGet = response.data;
        setCliente(dataGet);
        console.log(dataGet);
    }
    )
    axios.post(url, {
      recibo: data.nombre,
      lat_dir: data.lat_dir,
      lon_dir: data.lon_dir,
      id_usuario: id_usuario_get
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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEmailSeleccionado(prevState=>({
        ...prevState,
        [name]: value
    }));
    };

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
              Registro cliente
            </Typography>
            <Box component="form" noValidate onSubmit={(e) => submit(e)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="recibo"
                    required
                    fullWidth
                    id="recibo"
                    label="Recibo"
                    autoFocus
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lat_dir"
                    label="Latitud"
                    name="lat_dir"
                    autoComplete="family-name"
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="lon_dir"
                    label="Longitud"
                    name="lon_dir"
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
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

export default ClienteForm;