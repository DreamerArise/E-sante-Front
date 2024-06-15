// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Plateforme e-Santé
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Accueil
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Connexion
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Inscription
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

