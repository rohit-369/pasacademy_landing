import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'

const Header = () => {
    return (
        <>
            <Grid container spacing={2}
                sx={{
                    background: '#FFD80D',
                    padding: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline'
                }}
            >
                <Grid item xs={12} sm={6} md={6} textAlign={['center', 'end']}>
                    <Typography fontWeight={'700'}>
                        Registration Open for Interview Guidance Program
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} display={'flex'} justifyContent={['center', 'start']}>
                    <Button
                        sx={{
                            background: '#9D0009',
                            borderRadius: '8px',
                            color: 'white',
                            fontWeight: '400',
                            lineHeight: '24px',
                            textTransform: 'none',
                            width: ['80%', '15%']
                        }}
                    >
                        Register Now
                    </Button>
                </Grid>
            </Grid>
            {/* <Box>
                <Typography fontWeight={'700'}>
                    Registration Open for Interview Guidance Program
                </Typography>
            </Box>
            <Box>
                <Button
                    sx={{
                        background: '#9D0009',
                        borderRadius: '8px',
                        color: 'white',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textTransform: 'none'
                    }}
                >
                    Register Now
                </Button>
            </Box> */}
        </>
    )
}

export default Header