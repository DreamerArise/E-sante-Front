import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const DoctorProfile = () => {
  // State pour stocker les données des médecins
  const [doctors, setDoctors] = useState([]);

  // Effet pour récupérer les données des médecins
  useEffect(() => {
    // Fonction de simulation des données
    const fetchDoctors = async () => {
      // Remplacer cette partie avec votre logique de récupération des données
      const data = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologue' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Pédiatre' },
        { id: 3, name: 'Dr. David Johnson', specialty: 'Dermatologue' },
        // Ajoutez d'autres médecins ici...
      ];
      setDoctors(data);
    };

    // Appeler la fonction de récupération des données
    fetchDoctors();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Liste des Médecins
      </Typography>
      <List>
        {doctors.map(doctor => (
          <ListItem key={doctor.id}>
            <ListItemText primary={doctor.name} secondary={`Spécialité: ${doctor.specialty}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DoctorProfile;

