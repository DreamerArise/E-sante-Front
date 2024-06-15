import React from 'react';
import { Container, Typography } from '@mui/material';

const Privacy = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Politique de Confidentialité
      </Typography>
      <Typography variant="body1" paragraph>
        Notre plateforme e-Santé est engagée à protéger votre confidentialité en ligne. Cette politique de confidentialité
        décrit comment nous collectons, utilisons et protégeons vos informations personnelles.
      </Typography>
      <Typography variant="body1" paragraph>
        Nous collectons des informations personnelles lorsque vous utilisez nos services, telles que votre nom, votre adresse
        e-mail et votre numéro de téléphone. Ces informations sont utilisées uniquement dans le but de vous fournir nos services
        et ne seront jamais partagées avec des tiers sans votre consentement.
      </Typography>
      <Typography variant="body1" paragraph>
        Nous utilisons également des cookies pour améliorer votre expérience utilisateur sur notre plateforme. Vous pouvez
        contrôler l'utilisation des cookies via les paramètres de votre navigateur.
      </Typography>
      {/* Ajoutez d'autres sections si nécessaire */}
    </Container>
  );
};

export default Privacy;

