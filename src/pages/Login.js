import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logique pour la connexion
    // Déterminez le type d'utilisateur (patient ou médecin)

    // Exemple de redirection conditionnelle
    const userType = 'patient'; // ou 'doctor'
    if (userType === 'patient') {
      navigate('/patient-profile');
    } else if (userType === 'doctor') {
      navigate('/doctor-profile');
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Connexion
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ marginTop: '20px' }}
          >
            Se Connecter
          </Button>
          <Typography align="center" sx={{ marginTop: '20px' }}>
            Pas encore inscrit ? <Link to="/register">S'inscrire</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

