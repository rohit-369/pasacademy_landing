import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import backgroundImage from './Images/bg1.svg'
import director from './Images/directorsvg.svg'
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import checkBoxsvg from './Images/checkBoxsvg.svg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'Inter , sans-serif',
    fontWeight: '700',
    fontSize: '18px'
}));

const SectionOne = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                flexGrow: 1,
                // backgroundImage: `url(${backgroundImage})`,
                width: '100%',
                height: '100%',
                paddingTop: '5px',
                pt: '1px',
                background: '#9A0000',
                // backgroundSize: 'cover', // or 'contain' depending on your needs
                // backgroundRepeat: 'no-repeat',
            }}>
            <Grid container spacing={2}>
                <hr color='#fff' style={{ height: '14px', position: 'relative', top: mobile ? '908px' : '575px', width: '100%' }} />
                <Grid item xs={12} sm={6} md={6} mt={4}>
                    <Grid container spacing={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography>
                                <Item>🏆 Pioneer in UPSC-MPPSC Preparation</Item>
                            </Typography>
                            <Box mt={3}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '700',
                                        color: '#fff',
                                        fontSize: '44px',
                                    }}
                                >
                                    Best UPSC Coaching
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '700',
                                        color: '#fff',
                                        fontSize: '44px'
                                    }}
                                >
                                    Near You.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        color: '#fff',
                                        fontSize: '17px',
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    Learning is the process of acquiring new or modifying existing
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        color: '#fff',
                                        fontSize: '17px',
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    knowledge, behaviours, skills, values or preferences.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        color: '#fff',
                                        fontSize: '17px',
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <img alt='' src={checkBoxsvg} /> Mentorship by Pradeep Srivastava Sir
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        color: '#fff',
                                        fontSize: '17px',
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <img alt='' src={checkBoxsvg} /> Daily Current Affairs.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        color: '#fff',
                                        fontSize: '17px',
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <img alt='' src={checkBoxsvg} /> Mock Test Series.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '500',
                                        color: '#fff',
                                        fontSize: '17px',
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <img alt='' src={checkBoxsvg} /> Answer Writing Skill Development Program
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                >
                    <img width={['60%']} alt='' style={{ position: 'relative', top: '4px' }} src={director} />
                </Grid>

            </Grid>
        </Box>
    )
}

export default SectionOne