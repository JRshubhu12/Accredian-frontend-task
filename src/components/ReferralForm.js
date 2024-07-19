import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const ReferralForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h6" gutterBottom>
        Refer a Friend
      </Typography>
      <TextField
        required
        fullWidth
        margin="normal"
        label="Your Name"
        name="referrerName"
        value={formData.referrerName}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        margin="normal"
        label="Your Email"
        name="referrerEmail"
        type="email"
        value={formData.referrerEmail}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        margin="normal"
        label="Friend's Name"
        name="refereeName"
        value={formData.refereeName}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        margin="normal"
        label="Friend's Email"
        name="refereeEmail"
        type="email"
        value={formData.refereeEmail}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default ReferralForm;
