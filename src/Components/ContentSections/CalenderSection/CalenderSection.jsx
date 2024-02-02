import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import USC from './Images/USC.svg'
import Ellipse1080 from './Images/Ellipse1080.svg'
import newsLogo from './Images/news.svg'

const CalenderSection = () => {
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
                            width: ['100%', '70%']
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={1.5}>
                                        <img alt='' width={'80%'} src={USC} />
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
                            p: 2
                        }}
                    >
                        Blog Section
                    </Box>
                    <Card
                        sx={{
                            p: 2,
                            backgroundColor: 'red',
                            backgroundImage: 'linear-gradient(#A34218, #1C006B)',
                            background: 'linear-gradient(to right, #A34218, #1C006B)',
                            borderRadius: '20px',
                            width: ['100%', '70%']
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={1.5}>
                                        <img alt='' width={'80%'} src={USC} />
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
                    <Card sx={{ maxWidth: 360, height: 400, p: 2 }}>
                        {/* <Card>
                            <CardContent>
                                <Typography>

                                </Typography>
                            </CardContent>
                        </Card> */}
                        {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}

export default CalenderSection