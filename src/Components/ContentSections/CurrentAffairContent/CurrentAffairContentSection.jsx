import { Box, Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import newsLogo from './Images/news.svg'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import parse from 'html-react-parser'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CurrentAffairContentSection = ({ data }) => {

  const [value, setValue] = useState(null);
  const isMobile = useMediaQuery("(min-width:600px)");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date();
  const day = date.getDate() - 3;
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day} ${monthName} ${year}`;

  const day2 = date.getDate() - 2;
  const formattedDate1 = `${day2} ${monthName} ${year}`;

  const day3 = date.getDate() - 1;
  const formattedDate3 = `${day3} ${monthName} ${year}`;

  const handleChangeDate = (newValue) => {
    const dateObj = new Date(newValue);

    // Extract date components
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it starts from 0
    const date = String(dateObj.getDate()).padStart(2, '0');

    // Extract time components
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    // Concatenate components in the desired format
    const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    setValue(newValue);
  };

  return (
    <Box m='20px'>
      <Grid container spacing={2}>
        {Array.isArray(data) && data.map((data, index) => {

          const extractImageUrlFromPostContent = (post_content) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post_content, 'text/html');
            const imageElement = doc.querySelector('img'); // Assuming the image is the first one found

            if (imageElement) {
              return imageElement.getAttribute('src');
            } else {
              return null;
            }
          }
          const first10Words = data?.post_content
            .replace(/<[^>]*>/g, ' ') // Remove HTML tags
            .split(/\s+/) // Split into words
            .slice(0, 10) // Take the first 10 words
            .join(' ');
          const imageUrl = extractImageUrlFromPostContent(data?.post_content);

          return (
            <Grid item xs={12} sm={8} md={8} p={3}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'}>
                <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'35px'} fontSize={'35px'} mb={5} mt={5}>
                  {data?.post_title}
                </Typography>
                <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'20px'}>
                  {moment(data?.post_date).format('MMMM Do YYYY')}
                </Typography>
              </Box>
              <img alt='' style={{ width: isMobile ? '60%' : '100%' }} src={imageUrl} />
              <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'35px'} fontSize={'25px'}>
                {parse(first10Words)}
              </Typography>
            </Grid>
          )
        }
        )}
        <Grid item xs={12} sm={4} md={4}
          display={'flex'}
          justifyContent={'center'}
        >
          <Card sx={{ maxWidth: 360, height: ['670', 'auto'] }}>
            <CardContent>
              <Box
                sx={{
                  background: '#B92727',
                  padding: '0.5rem',
                  display: 'flex',
                  gap: '8px',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '16px',
                  letterSpacing: '1px',
                  borderRadius: '5px'
                }}
              >
                <img alt='' src={newsLogo} />
                Daily News
              </Box>
            </CardContent>
            <CardContent>
              <Box
                sx={{
                  padding: '8px',
                  borderLeft: '5px solid #F47C7C',
                  display: 'flex',
                  mb: 2,
                  boxShadow: '1px 1px 1px 1px #00000059',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '4px 3px 10px 2px #00000059',
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <EventAvailableIcon />
                    {formattedDate}
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <KeyboardArrowRightIcon />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  padding: '8px',
                  borderLeft: '5px solid #F47C7C',
                  display: 'flex',
                  mb: 2,
                  boxShadow: '1px 1px 1px 1px #00000059',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '4px 3px 10px 2px #00000059',
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <EventAvailableIcon />
                    {formattedDate1}
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <KeyboardArrowRightIcon />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  padding: '8px',
                  borderLeft: '5px solid #F47C7C',
                  display: 'flex',
                  mb: 2,
                  boxShadow: '1px 1px 1px 1px #00000059',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '4px 3px 10px 2px #00000059',
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <EventAvailableIcon />
                    {formattedDate3}
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <KeyboardArrowRightIcon />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <CardContent
              sx={{
                background: '#FFF2F2'
              }}
            >
              <Typography gutterBottom variant="h5" component="div" fontSize={'15px'} fontWeight={'700'} fontFamily={'Inter'}>
                To View Old News, please select date below
              </Typography>
            </CardContent>
            <CardContent>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                  <DemoItem>
                    <DateCalendar defaultValue={value} onChange={handleChangeDate} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CurrentAffairContentSection

// import { Box, Grid, Typography } from '@mui/material';
// import moment from 'moment';
// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import parse from 'html-react-parser'

// const CurrentAffairContentSection = ({ data }) => {

//   const extractImageUrlFromPostContent = (post_content) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(post_content, 'text/html');
//     const imageElement = doc.querySelector('img'); // Assuming the image is the first one found

//     if (imageElement) {
//       return imageElement.getAttribute('src');
//     } else {
//       return null;
//     }
//   }
//   const first10Words = data?.post_content
//     .replace(/<[^>]*>/g, ' ') // Remove HTML tags
//     .split(/\s+/) // Split into words
//     .slice(0, 10) // Take the first 10 words
//     .join(' ');
//   const imageUrl = extractImageUrlFromPostContent(data?.post_content);

//   return (
//     <Box m='20px'>
//       {Array.isArray(data) && data.map((data, index) => {
//         return (
//           <Grid item xs={12} sm={8} md={8} p={3}>
//             <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'}>
//               <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'35px'} mb={5} mt={5}>
//                 {data?.post_title}
//               </Typography>
//               <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'20px'}>
//                 {moment(data?.post_date).format('MMMM Do YYYY')}
//               </Typography>
//             </Box>
//             <img alt='' src={imageUrl} />
//             <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'25px'}>
//               {parse(first10Words)}
//             </Typography>
//           </Grid>
//         )
//       }
//       )}
//     </Box>
//   )
// }

// export default CurrentAffairContentSection