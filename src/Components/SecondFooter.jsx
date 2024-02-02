import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const SecondFooter = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#540000' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8} p={5}>
                    <Box pb={3} pl={[5, 10]}>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'700'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                        >
                            Admission Office
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'baseline'}
                        >
                            <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: '700', fontSize: '15px', width: ['8%', '100%'] }}>Centre 1</p>: G-10, Veda Business Park, Bhawarkua Square, Indore, Madhya Pradesh 452014
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'baseline'}
                        >
                            <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: '700', fontSize: '15px', width: ['8%', '100%'] }}>Centre 2</p>: 206, Ranawat Trade Centre, Bhawarkuan Square, Indore, Madhya Pradesh 452001
                        </Typography>
                    </Box>
                    <Box pl={[5, 10]}>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'700'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            pb={2}
                        >
                            PS Academy
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            width={'68%'}
                        >
                            PS Academy does not want to pen down a success story but we want to create a successful generation.
                            We believe in shaping the future of every student in the best way possible.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <iframe
                        width="80%"
                        height="250"
                        src="https://www.youtube.com/embed/WTXTCoLBlkY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <Typography
                        color={'#979595'}
                        fontFamily={'Inter'}
                        fontSize={'16px'}
                        fontWeight={'400'}
                        lineHeight={'24px'}
                    >
                        FAQs | Privacy Policy | Terms and Conditions
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SecondFooter