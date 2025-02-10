import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

const ContactBanner = () => {
  return (
    <Box
      sx={{
        padding: '80px 0',
        textAlign: 'center',
        backgroundColor: 'var(--banner-color)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Content on the left */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', flex: 1 }}>
        <Typography variant="h1" sx={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color:"var(--text-black)" }}>
          Shop
        </Typography>

        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" sx={{ color: 'var(--text-black)' }} />}
          aria-label="breadcrumb"
          sx={{ justifyContent: 'center', display: 'flex', color: 'white' }}
        >
          <Link href="/" sx={{ color: '#c8c8c8', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Home
          </Link>
          <Typography sx={{ color: '#c8c8c8' }}>Shop</Typography>
        </Breadcrumbs>
      </Box>

      {/* Background image on the right */}
      <Box
        sx={{
          backgroundImage: 'url("")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '40%', 
          height: '100%',
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default ContactBanner;