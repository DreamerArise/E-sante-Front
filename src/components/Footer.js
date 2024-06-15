import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#3f51b5', color: 'white', padding: '10px 0', marginTop: '20px' }}>
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2024 Plateforme e-Santé. Tous droits réservés.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/privacy" color="inherit" style={{ margin: '0 10px' }}>
            Politique de confidentialité
          </Link>
          |
          <Link href="/terms" color="inherit" style={{ margin: '0 10px' }}>
            Conditions d'utilisation
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

