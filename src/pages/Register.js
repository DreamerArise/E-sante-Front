import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = () => {
    // Logic to handle registration
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Inscription
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Âge"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            margin="normal"
          />
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
          <TextField
            fullWidth
            label="Confirmer le mot de passe"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegister}
            sx={{ marginTop: '20px' }}
          >
            S'inscrire
          </Button>
          <Typography align="center" sx={{ marginTop: '20px' }}>
            Déjà inscrit ? <Link to="/login">Se connecter</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

