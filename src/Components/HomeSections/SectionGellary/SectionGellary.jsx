import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CourseNetwrok from '../../../Network';
import Endpoints from '../../../constant/endpoints';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const SectionGellary = () => {

    const instId = '94';
    const [galleryList, setGalleryList] = useState([]);
    const getInstituteList = async () => {
        const response = await CourseNetwrok.fetchInstitute(instId);
        setGalleryList(response?.institute?.gallery);
        console.log('response?.institute?', response?.institute);
        Endpoints.mediaBaseUrl = response.instituteTechSettingModals.mediaUrl;
    };

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    useEffect(() => {
        getInstituteList();
    }, []);

    return (
        <Box p={4}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
                    <Typography
                        color={'#212529'}
                        fontFamily={'Inter'}
                        fontSize={'31px'}
                        fontStyle={'normal'}
                        fontWeight={'700'}
                        lineHeight={'38px'}
                    >
                        Gallery
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'end'}>
                    {/* <Button
                        onClick={handleViewAllClick}
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
                        {showAll ? 'View Less' : 'View All'}
                    </Button> */}
                </Grid>
            </Grid>
            <Grid container spacing={2} padding={'2rem'}>
                <ImageList
                    sx={{ width: '1005', height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {galleryList.map((item, index) => (
                        <ImageListItem key={index} cols={index?.length || 1} rows={index?.length || 2}>
                            <img
                                {...srcset(Endpoints.mediaBaseUrl + item, 121, index, index)}
                                // alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                {/* {displayedGallery.map((data, index) => (
                    <img key={index} alt='' width={'10%'} src={Endpoints.mediaBaseUrl + data} />
                ))} */}
            </Grid>
        </Box>
    )
}

export default SectionGellary