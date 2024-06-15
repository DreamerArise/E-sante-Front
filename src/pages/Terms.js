import React from 'react';
import { Container, Typography } from '@mui/material';

const Terms = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Conditions d'Utilisation
      </Typography>
      <Typography variant="body1" paragraph>
        En utilisant notre plateforme e-Santé, vous acceptez de respecter les présentes conditions d'utilisation.
      </Typography>
      <Typography variant="body1" paragraph>
        Vous êtes responsable de la confidentialité de votre compte et de votre mot de passe. Vous acceptez de ne pas
        partager votre compte avec d'autres personnes et de ne pas accéder aux comptes d'autres utilisateurs sans
        autorisation.
      </Typography>
      <Typography variant="body1" paragraph>
        Nous nous réservons le droit de suspendre ou de résilier votre compte si nous détectons une activité suspecte
        ou une violation de nos conditions d'utilisation.
      </Typography>
      {/* Ajoutez d'autres sections si nécessaire */}
    </Container>
  );
};

export default Terms;

