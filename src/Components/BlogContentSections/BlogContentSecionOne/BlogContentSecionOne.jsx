import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import newsLogo from './Images/news.svg'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import parse from 'html-react-parser'
import moment from 'moment';

const BlogContentSecionOne = ({ blogData }) => {

    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    console.log('BlogContentSecionOne', blogData);

    return (
        <Box m='20px' >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8} p={3}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'}>
                        <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'35px'} mb={5} mt={5}>
                            {blogData?.post_title}
                        </Typography>
                        <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'20px'}>
                            {moment(blogData?.post_date).format('MMMM Do YYYY')}
                        </Typography>
                    </Box>
                    <img alt='' src={blogData?.guid} />
                    <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'25px'}>
                        {parse(blogData?.post_content)}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}
                    display={'flex'}
                    justifyContent={'center'}
                >
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
        </Box>
    )
}

export default BlogContentSecionOne