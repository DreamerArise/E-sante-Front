import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button component={Link} to="/hospital-management" onClick={onClose}>
          <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
          <ListItemText primary="Hôpitaux" />
        </ListItem>
        <ListItem button component={Link} to="/doctor-profile" onClick={onClose}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Médecins" />
        </ListItem>
        <ListItem button component={Link} to="/appointment-management" onClick={onClose}>
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Rendez-vous" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

