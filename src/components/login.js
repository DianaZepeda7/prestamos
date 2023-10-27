import { useNavigate } from 'react-router-dom';

import {Button, Container, TextField} from '@mui/material'
import Paper from '@mui/material/Paper';
import '../styles/login.css'
import React from 'react';
import Casa from '../assets/images/casa.jpg'




export const Login = (navigation) => {
  const navigate = useNavigate();

  const handleHome = () => {
    // Navegar a otra página cuando se hace clic en el botón
    navigate('/home');
  };
  return (
    <>
       <div className="login-container">
      <Container className="main-content">
        <Paper elevation={3} className='paper' variant="elevation" >
          <h2 className='h2'> Bienvenido </h2>
          <div className='div'>
            <p className='p'>Usuario:</p>
            <TextField className='text' id="user" variant="standard" />
            <p className='p'>Contraseña:</p>
            <TextField className='text' id="password" type="password" variant="standard" />
          </div>
          <div>
          <br></br><br></br>
          <Button  variant="outlined" onClick={handleHome} style={{marginLeft:'20%', width:'65%', color:'black', borderColor:'white', backgroundColor:'#E9E6E6'}}>Iniciar Sesión</Button>
          </div>
        </Paper>
        
      </Container>
      
      <aside className="aside">
        <img src={Casa} width={1400}  height={950} alt='casa'  />
      </aside>
    </div>
    </>
  )
}
