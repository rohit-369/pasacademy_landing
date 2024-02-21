import React from 'react'
// import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import facebookLogo from '../../images/facebooksvg.svg'
import instagramLogo from '../../images/instagramsvg.svg'
import youtubeLogo from '../../images/youtubesvg.svg'
import telegramLogo from '../../images/telegramsvg.svg'
import emailLogo from '../../images/emailsvg.svg'
import contactLogo from '../../images/contactsvg.svg'
import appleStore from '../../images/applestoresvg.svg'
import playStore from '../../images/playstoresvg.svg'
import windowsStore from '../../images/windowsstoresvg.svg'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

const SecondHeader = () => {

  const isMobile = useMediaQuery("(min-width:600px)");

  const handleClick = () => {
    window.location.href = 'mailto:care@psacademy.co.in';
  };

  const handleClickPhone = () => {
    window.location.href = 'tel:0731-4001178'
  }

  return (
    <Box sx={{ flexGrow: 1, background: '#540000', padding: '1px' }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'10px'}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              gap: '10px',
              p: ['5px', '0px']
            }}
            onClick={handleClick}
          >
            <img alt=''
              style={{
                width: isMobile ? '5%' : '15%'
              }}
              // width={['5%', '15%']} 
              src={emailLogo} />
            <Typography
              sx={{
                color: 'white',
                display: ['none', 'flex']
              }}
            >
              care@psacademy.co.in
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              gap: '10px',
              cursor: 'pointer'
            }}
            onClick={handleClickPhone}
          >
            <img
              alt=''
              style={{
                width: isMobile ? '5%' : '15%'
              }}
              src={contactLogo}
            />
            <Typography
              sx={{
                color: 'white',
                display: ['none', 'flex']
              }}
            >
              0731-4001178 / 9826063466
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'25px'}
        >
          <img width={'8%'} alt='' src={facebookLogo} />
          <img width={'8%'} alt='' src={youtubeLogo} />
          <img width={'8%'} alt='' src={instagramLogo} />
          <img width={'8%'} alt='' src={telegramLogo} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img width={'20%'} alt='' src={appleStore} />
          <img width={'25%'} alt='' src={playStore} />
          <img width={'20%'} alt='' src={windowsStore} />
        </Grid>
      </Grid>
      <hr />
    </Box>
  )
}

export default SecondHeader