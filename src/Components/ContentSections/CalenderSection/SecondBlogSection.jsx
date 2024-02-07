import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import image1 from './Images/image1.svg';
import parse from 'html-react-parser'
import moment from 'moment/moment';

const SecondBlogSection = () => {

    const [index, setIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const [cardData, setCardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setCardData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log('cardData', cardData);

    const next = () => {
        const maxIndex = cardData.length - 1;
        const newIndex = (index + 1) % (maxIndex + 1);
        setIndex(newIndex);
    }

    const previous = () => {
        const maxIndex = cardData.length - 1;
        const newIndex = (index - 1 + maxIndex + 1) % (maxIndex + 1);
        setIndex(newIndex);
    }

    const toggleViewAll = () => {
        setShowAll(!showAll);
    }

    return (
        <Box m='20px'>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
                    <Typography
                        color={'#212529'}
                        fontFamily={'Inter'}
                        fontSize={'31px'}
                        fontStyle={'normal'}
                        fontWeight={'700'}
                        lineHeight={'38px'}
                    // ml={'30px'}
                    >
                        Blog's
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'flex-end'}>
                    <button
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'baseline',
                            background: 'none',
                            border: 'none'
                        }}

                    >
                        <ChevronLeftIcon onClick={previous} style={{ width: '14%', background: '#FECACA', borderRadius: '10px', color: 'white' }} />
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '18px',
                            paddingLeft: '1rem',
                            paddingRight: '1rem'
                        }}
                    >
                        {index + 1}
                    </button>
                    <button
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'baseline',
                            background: 'none',
                            border: 'none'
                        }}

                    >
                        <ChevronRightIcon onClick={next} style={{ width: '14%', background: '#FECACA', borderRadius: '10px', color: 'white' }} />
                    </button>
                </Grid>
            </Grid>
            <Grid container spacing={2} p={2} gap={'10px'}>
                {
                    showAll
                        ?
                        cardData.map((data) => (
                            <Grid item xs={12} sm={4} md={3} key={data.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={data?.guid}
                                    // title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                            {data?.post_title}
                                        </Typography>
                                        <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                            {parse(data?.post_content)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                                            {moment(data?.post_date).format('MMMM Do YYYY')}
                                        </Typography>
                                        <Button
                                            sx={{
                                                // background: '#F6E9FF',
                                                padding: '16px 32px',
                                                alignItems: 'flex-end',
                                                gap: '10px',
                                                borderRadius: '15px',
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                color: "#8976FD"
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                        : cardData.slice(index, index + 4).map((data) => (
                            <Grid item xs={12} sm={4} md={3} key={data.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={data?.guid}
                                    // title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                            {data?.post_title}
                                        </Typography>
                                        <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                            {parse(data?.post_content)}
                                        </Typography>
                                    </CardContent>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'} mt={'-15px'} ml={1}>
                                        <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                                            {moment(data?.post_date).format('MMMM Do YYYY')}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                // background: '#F6E9FF',
                                                padding: '16px 32px',
                                                alignItems: 'flex-end',
                                                gap: '10px',
                                                borderRadius: '15px',
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                color: "#8976FD"
                                            }}
                                        >
                                            Read More
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Button
                    onClick={toggleViewAll}
                    sx={{
                        background: '#9D0009',
                        color: 'white',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        p: '5px 25px 5px 25px',
                    }}
                >
                    {showAll ? 'Show Less' : 'View All'}
                </Button>
            </Box>

        </Box>
    )
}

export default SecondBlogSection