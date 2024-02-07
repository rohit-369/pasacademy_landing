import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import USC from './Images/USC.svg'
import Ellipse1080 from './Images/Ellipse1080.svg'
import dayjs from 'dayjs';
import newsLogo from './Images/news.svg'
import BlogSection from './BlogsSection'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CalenderSection = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log('data', data);

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8} p={3}>
                    <Card
                        sx={{
                            p: 2,
                            backgroundColor: 'red',
                            backgroundImage: 'linear-gradient(#A34218, #1C006B)',
                            background: 'linear-gradient(to right, #A34218, #1C006B)',
                            borderRadius: '20px',
                            width: ['100%', '90%'],
                            padding: '10px'
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={1.5}>
                                        <img alt='' width={'72%'} src={USC} />
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <img alt='' width={'80%'} style={{ marginTop: '70px' }} src={Ellipse1080} />
                                    </Grid>
                                    <Grid item xs={6} mt={2}>
                                        <Typography
                                            fontFamily={'Inter'}
                                            fontSize={'31px'}
                                            fontWeight={'600'}
                                            color={'#fff'}
                                            width={'130%'}
                                        >
                                            Online UPSC - MPPSC Coaching
                                        </Typography>
                                        <Typography
                                            fontFamily={'Inter'}
                                            fontSize={'18px'}
                                            fontWeight={'500'}
                                            color={'#FFFF00'}
                                            width={'110%'}
                                        >
                                            Best Coaching for online / classroom UPSC CSE and MPPSC
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}
                                        display={'flex'}
                                        justifyContent={'end'}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            sx={{
                                                borderRadius: '40px',
                                                background: '#CC0000',
                                                fontSize: '16px',
                                                color: 'white',
                                                textTransform: 'none',
                                                padding: '5px 20px 5px 20px',
                                                fontWeight: '600',
                                                '&:hover': {
                                                    background: '#CC0000', // Change the background color on hover
                                                    // Add any other styles you want for hover effect
                                                },
                                            }}
                                        >
                                            Enquire Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                    <Box
                        sx={{
                            pt: 2,
                            pb: 2
                        }}
                    >
                        <BlogSection cardData={data} />
                    </Box>
                    <Card
                        sx={{
                            p: 2,
                            backgroundColor: 'red',
                            backgroundImage: 'linear-gradient(#A34218, #1C006B)',
                            background: 'linear-gradient(to right, #A34218, #1C006B)',
                            borderRadius: '20px',
                            width: ['100%', '79%'],
                            padding: '10px'
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={1.5}>
                                        <img alt='' width={'72%'} src={USC} />
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <img alt='' width={'80%'} style={{ marginTop: '70px' }} src={Ellipse1080} />
                                    </Grid>
                                    <Grid item xs={6} mt={2}>
                                        <Typography
                                            fontFamily={'Inter'}
                                            fontSize={'31px'}
                                            fontWeight={'600'}
                                            color={'#fff'}
                                            width={'130%'}
                                        >
                                            Online UPSC - MPPSC Coaching
                                        </Typography>
                                        <Typography
                                            fontFamily={'Inter'}
                                            fontSize={'18px'}
                                            fontWeight={'500'}
                                            color={'#FFFF00'}
                                            width={'110%'}
                                        >
                                            Indore Best Coaching for online / classroom UPSC CSE and MPPSC
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}
                                        display={'flex'}
                                        justifyContent={'end'}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            sx={{
                                                borderRadius: '40px',
                                                background: '#CC0000',
                                                fontSize: '16px',
                                                color: 'white',
                                                textTransform: 'none',
                                                padding: '5px 20px 5px 20px',
                                                fontWeight: '600',
                                                '&:hover': {
                                                    background: '#CC0000', // Change the background color on hover
                                                    // Add any other styles you want for hover effect
                                                },
                                            }}
                                        >
                                            Enquire Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card sx={{ maxWidth: 360, height: 670 }}>
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
                                    <Grid item xs={12} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <EventAvailableIcon />
                                        29 January 2024
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}
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
                                    <Grid item xs={12} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <EventAvailableIcon />
                                        29 January 2024
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}
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
                                    <Grid item xs={12} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <EventAvailableIcon />
                                        29 January 2024
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}
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
                                        <DateCalendar defaultValue={dayjs('2022-04-17')} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}

export default CalenderSection