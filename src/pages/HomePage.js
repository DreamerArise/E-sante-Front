import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container style={{ backgroundColor: '#F4F9F9', padding: '20px' }}>
      <Typography variant="h2" align="center" gutterBottom style={{ color: '#4CAF50' }}>
        Bienvenue sur la Plateforme e-Santé
      </Typography>
      <Typography variant="h5" align="center" gutterBottom style={{ color: '#1565C0' }}>
        Accédez facilement aux hôpitaux, médecins et services offerts
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <Typography variant="h6" style={{ color: '#4CAF50' }}>Hôpitaux</Typography>
            <Typography>
              Consultez la liste des hôpitaux sur notre plateforme.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/hospital-management" sx={{ marginTop: '10px' }}>
              Voir les Hôpitaux
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <Typography variant="h6" style={{ color: '#4CAF50' }}>Médecins</Typography>
            <Typography>
              Trouvez les médecins et leurs spécialités.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/doctor-profile" sx={{ marginTop: '10px' }}>
              Voir les Médecins
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <Typography variant="h6" style={{ color: '#4CAF50' }}>Services Offerts</Typography>
            <Typography>
              Découvrez les services offerts par nos partenaires.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/services" sx={{ marginTop: '10px' }}>
              Voir les Services
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '40px' }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <Typography variant="h6" style={{ color: '#4CAF50' }}>Prendre Rendez-vous</Typography>
            <Typography>
              Connectez-vous pour prendre un rendez-vous avec nos médecins.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/login" sx={{ marginTop: '10px' }}>
              Se Connecter
            </Button>
            <Typography sx={{ marginTop: '10px' }}>
              Pas encore inscrit ?
            </Typography>
            <Button variant="contained" color="secondary" component={Link} to="/register" sx={{ marginTop: '10px' }}>
              S'inscrire
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;



