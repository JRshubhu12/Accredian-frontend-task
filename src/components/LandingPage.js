import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box } from '@mui/material';
import ReferralForm from './ReferralForm';
import SvgImage1 from './SvgImage1';
import SvgImage2 from './SvgImage2';
import SvgImage3 from './SvgImage3'; 
import SvgImage4 from './SvgImage4'; 
import SvgImage5 from './SvgImage5';
import SvgImage6 from './SvgImage6';
import SvgImage7 from './SvgImage7';
import SvgImage8 from './SvgImage8';
import SvgImage9 from './SvgImage9';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
      </Typography>
      <Typography variant="h6" gutterBottom>
        {/* Invite your friends to join our course and earn rewards! */}
      </Typography>
      <Button className='refer-now-button custom-refer-button' variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200,
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: 24,
          }
        }
        >
          <ReferralForm handleClose={handleClose} />
        </Box>
      </Modal>

      {/* New Sections with SVG Images */}
      <Box style={{ marginTop: '-80px', marginLeft: '-300px', textAlign: 'center' }}>
        <SvgImage1 x={100} y={100} />
      </Box>
      
      <Box style={{ marginTop: '100px', marginLeft: '-50px', textAlign: 'center' }}>
        <SvgImage2 x={100} y={100} />
      </Box>

        <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage3 /> {/* Use the new component */}
        </Box>

        <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage4 /> {/* Use the new component */}
        </Box>

        <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage5 /> {/* Use the new component */}
        </Box>

        <Button className='refer-now-button custom-refer-button2' variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>

      <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage6 /> {/* Use the new component */}
        </Box>
        <Button className='refer-now-button custom-refer-button3' variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>

      <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage7 /> {/* Use the new component */}
        </Box>

        <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage8 /> {/* Use the new component */}
        </Box>

        <Box style={{ marginTop: '-600px', marginLeft: '-100px', textAlign: '' }}>
            <SvgImage9 /> {/* Use the new component */}
        </Box>

    </Container>
  );
};

export default LandingPage;