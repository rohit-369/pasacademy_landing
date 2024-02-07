import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import image from './Images/image.svg'
import image2 from './Images/image2.svg'
import parse from 'html-react-parser'
import moment from 'moment/moment';
import image3 from './Images/image3.svg'

const CurrentAffairSection = () => {

    const cardData = [
        {
            id: 1,
            guid: image3,
            post_title: 'Test1',
            post_content: 'Content 1',
            post_date: 'Date 1'
        },
        {
            id: 2,
            guid: image3,
            post_title: 'Test2',
            post_content: 'Content 2',
            post_date: 'Date 2'
        },
        {
            id: 3,
            guid: image3,
            post_title: 'Test3',
            post_content: 'Content 3',
            post_date: 'Date 3'
        },
        {
            id: 4,
            guid: image3,
            post_title: 'Test4',
            post_content: 'Content 4',
            post_date: 'Date 4'
        },
    ];

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchCurrentAffiar = async () => {
    //         try {
    //             const response = await fetch('http://localhost:5001/currentAffairList');
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const jsonData = await response.json();
    //             setData(jsonData);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchCurrentAffiar();
    // }, []);

    return (
        <Box m='20px'>
            <Typography fontSize={'25px'} fontWeight={'600'} lineHeight={'50px'} fontFamily={'Inter'} >
                Current Affair recent updates
            </Typography>
            <Grid container spacing={2} p={2}>
                <Grid item xs={12} sm={6} md={6} >
                    <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#6941C6',
                                    fontWeight: '600'
                                }}
                                variant="body2" color="text.secondary">
                                March 13, 2014
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Tite
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                sx={{
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    color: '#6941C6',
                                    background: '#F9F5FF'
                                }}
                            >
                                Programming
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    color: '#3538CD',
                                    background: '#EEF4FF'
                                }}
                            >
                                Research
                            </Button>

                            <Button
                                sx={{
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    color: '#C11574',
                                    background: '#FDF2FA'
                                }}
                            >
                                Developments
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} md={4}>
                            <CardMedia
                                sx={{ height: 165 }}
                                image={image2}
                                title="green iguana"
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: '#6941C6',
                                        fontWeight: '600'
                                    }}
                                    variant="body2" color="text.secondary">
                                    March 13, 2014
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Tite
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    sx={{
                                        borderRadius: '30px',
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        fontSize: '11px',
                                        color: '#6941C6',
                                        background: '#F9F5FF'
                                    }}
                                >
                                    Programming
                                </Button>
                                <Button
                                    sx={{
                                        borderRadius: '30px',
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        fontSize: '11px',
                                        color: '#3538CD',
                                        background: '#EEF4FF'
                                    }}
                                >
                                    Research
                                </Button>

                                <Button
                                    sx={{
                                        borderRadius: '30px',
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        fontSize: '11px',
                                        color: '#C11574',
                                        background: '#FDF2FA'
                                    }}
                                >
                                    Developments
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} p={2}>
                {
                    // showAll
                    //     ?
                    cardData.map((data) => (
                        <Grid item xs={12} sm={3} md={3} key={data.id}>
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
                                <CardActions
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Button
                                        sx={{
                                            background: '#FFE4E4',
                                            padding: '5px',
                                            alignItems: 'flex-end',
                                            gap: '10px',
                                            borderRadius: '5px',
                                            textTransform: 'none',
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            color: "#000",
                                            '&:hover': {
                                                background: '#FFE4E4',
                                            },
                                        }}
                                    >
                                        Tag 1
                                    </Button>
                                    <Button
                                        sx={{
                                            background: '#FFE4E4',
                                            padding: '5px',
                                            alignItems: 'flex-end',
                                            gap: '10px',
                                            borderRadius: '5px',
                                            textTransform: 'none',
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            color: "#000",
                                            '&:hover': {
                                                background: '#FFE4E4',
                                            },
                                        }}
                                    >
                                        Tag 2
                                    </Button>
                                    <Button
                                        sx={{
                                            background: '#FFE4E4',
                                            padding: '5px',
                                            alignItems: 'flex-end',
                                            gap: '10px',
                                            borderRadius: '5px',
                                            textTransform: 'none',
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            color: "#000",
                                            '&:hover': {
                                                background: '#FFE4E4',
                                            },
                                        }}
                                    >
                                        Tag 3
                                    </Button>
                                </CardActions>
                                <CardActions
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
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
                    // : cardData.slice(index, index + 4).map((data) => (
                    //     <Grid item xs={12} sm={4} md={3} key={data.id}>
                    //         <Card sx={{ maxWidth: 345 }}>
                    //             <CardMedia
                    //                 sx={{ height: 200 }}
                    //                 image={data?.guid}
                    //             // title="green iguana"
                    //             />
                    //             <CardContent>
                    //                 <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                    //                     {data?.post_title}
                    //                 </Typography>
                    //                 <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                    //                     {parse(data?.post_content)}
                    //                 </Typography>
                    //             </CardContent>
                    //             <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'} mt={'-15px'} ml={1}>
                    //                 <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                    //                     {moment(data?.post_date).format('MMMM Do YYYY')}
                    //                 </Typography>
                    //                 <Typography
                    //                     sx={{
                    //                         // background: '#F6E9FF',
                    //                         padding: '16px 32px',
                    //                         alignItems: 'flex-end',
                    //                         gap: '10px',
                    //                         borderRadius: '15px',
                    //                         textTransform: 'none',
                    //                         fontSize: '14px',
                    //                         fontWeight: '700',
                    //                         color: "#8976FD"
                    //                     }}
                    //                 >
                    //                     Read More
                    //                 </Typography>
                    //             </Box>
                    //         </Card>
                    //     </Grid>
                    // ))
                }
            </Grid>
        </Box>
    )
}

export default CurrentAffairSection