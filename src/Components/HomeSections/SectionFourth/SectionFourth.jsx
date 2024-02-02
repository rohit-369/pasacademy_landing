import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import image1 from './Images/image1.svg';

const SectionFourth = () => {

    const [index, setIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const cardData = [
        {
            id: 1,
            image: image1,
            name: 'PS Sir',
            decription: 'UPSC or MPPSC exams after the 12th grade, what should you do?',
            date: '24 nov, 2021',
        },
        {
            id: 2,
            image: image1,
            name: 'PS ss',
            decription: 'UPSC or MPPSC exams after the 12th grade, what should you do?',
            date: '24 nov, 2021',
        },
        {
            id: 3,
            image: image1,
            name: 'PS sssss',
            decription: 'UPSC or MPPSC exams after the 12th grade, what should you do?',
            date: '24 nov, 2021',
        },
        {
            id: 4,
            image: image1,
            name: 'PS sssssss',
            decription: 'UPSC or MPPSC exams after the 12th grade, what should you do?',
            date: '24 nov, 2021',
        },
        {
            id: 5,
            image: image1,
            name: 'PS sssssssssss',
            decription: 'UPSC or MPPSC exams after the 12th grade, what should you do?',
            date: '24 nov, 2021',
        },
        {
            id: 6,
            image: image1,
            name: 'PS ssssssssssssssssss',
            decription: 'UPSC or MPPSC exams after the 12th grade, what should you do?',
            date: '24 nov, 2021',
        },
    ];

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
        <Box p={4}>
            {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                }}
            >
               
                <Box>
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
                        {index}
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
                </Box>
            </Box> */}
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
                    <Typography
                        color={'#212529'}
                        fontFamily={'Inter'}
                        fontSize={'31px'}
                        fontStyle={'normal'}
                        fontWeight={'700'}
                        lineHeight={'38px'}
                        ml={'30px'}
                    >
                        FAQ'S
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
            <Grid container spacing={2} p={4}>

                {showAll
                    ? cardData.map((data) => (
                        <Grid item xs={12} sm={4} md={3} key={data.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={data?.image}
                                // title="green iguana"
                                />
                                <CardContent>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'baseline'}
                                    >
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'600'}
                                            fontSize={'18px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.name}
                                        </Typography>
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'400'}
                                            fontSize={'15px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.date}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        fontFamily={'Inter'}
                                        fontWeight={'600'}
                                        fontSize={'15px'}
                                        textTransform={'capitalize'}
                                        variant="body2" color="text.secondary"
                                    >
                                        {data?.decription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        sx={{
                                            background: '#F6E9FF',
                                            padding: '16px 32px',
                                            alignItems: 'flex-start',
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
                                    image={data?.image}
                                // title="green iguana"
                                />
                                <CardContent>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'baseline'}
                                    >
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'600'}
                                            fontSize={'18px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.name}
                                        </Typography>
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'400'}
                                            fontSize={'15px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.date}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        fontFamily={'Inter'}
                                        fontWeight={'600'}
                                        fontSize={'15px'}
                                        textTransform={'capitalize'}
                                        variant="body2" color="text.secondary"
                                    >
                                        {data?.decription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        sx={{
                                            background: '#F6E9FF',
                                            padding: '16px 32px',
                                            alignItems: 'flex-start',
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
                    ))}

                {/* {cardData.slice(index, index + 4).map((data, dataIndex) => {
                    return (
                        <Grid item xs={12} sm={4} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={data?.image}
                                // title="green iguana"
                                />
                                <CardContent>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'baseline'}
                                    >
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'600'}
                                            fontSize={'18px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.name}
                                        </Typography>
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'400'}
                                            fontSize={'15px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.date}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        fontFamily={'Inter'}
                                        fontWeight={'600'}
                                        fontSize={'15px'}
                                        textTransform={'capitalize'}
                                        variant="body2" color="text.secondary"
                                    >
                                        {data?.decription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        sx={{
                                            background: '#F6E9FF',
                                            padding: '16px 32px',
                                            alignItems: 'flex-start',
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
                    )
                })} */}
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

export default SectionFourth