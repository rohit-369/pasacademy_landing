import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CourseNetwrok from '../../../Network';
import parse from 'html-react-parser';
import premiumBadge from './Images/premiumBadge.svg'
import { Link } from 'react-router-dom';
import Endpoints from '../../../constant/endpoints';

const CourseSection = () => {

    const [courses, setCourses] = useState([]);
    const [tagsList, setTagsList] = useState([]);

    const instId = 94;

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(instId);
        setCourses(response.courses);
    };

    const getTagsList = async () => {
        const response = await CourseNetwrok.getTagsListApi(instId);
        setTagsList(response.tags);
    };

    const handleBuyCourse = (item) => {
        const url = `https://iframe.classiolabs.com/buyCourseDetails/` + `?iframeId=12&courseId=${item?.id}&folderId=${0}&on-click=${true}`

        // const url = `${iframeData?.redirectUri}/buyCourseDetails/${item?.id}/0`
        window.open(url, '_blank', 'noreferrer');
        // navigate(`/buyCourseDetails/${item.id}`);
    };

    useEffect(() => {
        getAllCourses();
        getTagsList();
    }, []);


    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography
                        textAlign={'center'}
                        color={'#540000'}
                        fontSize={'40px'}
                        fontWeight={'700'}
                        lineHeight={'60px'}
                    >
                        Our Programs
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} textAlign={'center'}>
                    {/* <Box sx={{ flexGrow: 1 }}> */}
                    <Typography
                        textAlign={'center'}
                        fontWeight={'600'}
                        fontSize={'18px'}
                        p={2}
                    >
                        {tagsList[0]?.tag}
                    </Typography>
                    <Grid container spacing={1}>
                        {courses && courses
                            .filter(course => course.tags.some(tag => tag.tag === "MPPSC Courses "))
                            .map((filteredCourse, index) => {
                                const first10Words = filteredCourse?.description
                                    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                                    .split(/\s+/) // Split into words
                                    .slice(0, 10) // Take the first 10 words
                                    .join(' ');
                                return (
                                    <Grid item xs={12} sm={3} md={3} display={'flex'} justifyContent={'center'} key={index}>
                                        {/* Your existing Card component code */}
                                        <Card
                                            //  onClick={() => handleBuyCourse(filteredCourse)} 
                                            key={index} sx={{
                                                width: ['90%', '70%'], maxWidth: ['580px', '400px'], height: '100%', borderRadius: '7px',
                                                // background: `${colors?.cardBackground?.default}`, 
                                                // color: `${colors?.color?.default}`, 
                                                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                                            }} className=''>
                                            <div className='relative' style={{ height: '165px' }}>
                                                {/* <Link to={`/courses/${item.id}/0`}> */}
                                                <img style={{ width: '100%', maxWidth: '350px', height: '100%' }} src={Endpoints.mediaBaseUrl + filteredCourse.logo} alt="card thumb image" />
                                                {/* </Link> */}
                                                {filteredCourse.paid && (
                                                    <Avatar
                                                        sx={{ backgroundColor: '#FFD700', position: 'relative', top: ['-165px', '-163px'], left: '5px', width: ['30px', '30px'], height: ['30px', '25px'] }}
                                                    >
                                                        <img src={premiumBadge} alt="cardbadge" />
                                                    </Avatar>
                                                )}
                                            </div>
                                            <CardContent sx={{ paddingBottom: "20px", padding: '10px' }}>
                                                {/* <Link to={`/courses/${item.id}/0`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                                                <Stack gap={'20px'}>
                                                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                                        <Typography noWrap sx={{ width: '200px', fontWeight: '600', fontSize: '16px' }}>
                                                            {filteredCourse.title}
                                                        </Typography>

                                                    </Stack>
                                                    <Typography fontSize={'13px'} noWrap sx={{ width: "300px" }}>
                                                        {parse(first10Words)}
                                                    </Typography>
                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                        {filteredCourse.paid ? (
                                                            <Typography variant='body1'
                                                                // color={`${colors?.color?.default}`} 
                                                                fontWeight={'bold'}>
                                                                {filteredCourse.discount > 0 ? (
                                                                    <>
                                                                        <span style={{ background: 'gold', padding: '5px', borderRadius: '6px', fontWeight: 'bold', color: 'black', fontSize: '14px' }} className="">
                                                                            {Number(filteredCourse.price) - Number(filteredCourse.price) * (Number(filteredCourse.discount) / 100)}/-
                                                                        </span>
                                                                        &nbsp;
                                                                        <s style={{ fontSize: '12px' }}>{filteredCourse.price}/-</s>
                                                                        &nbsp;
                                                                        <span style={{ color: 'red', fontSize: '12px' }} className="">-{filteredCourse.discount}%</span>
                                                                    </>
                                                                ) : (
                                                                    <span style={{ color: 'black', fontWeight: 'bold', border: '15px', padding: '5px' }} className="">{filteredCourse.price}/-</span>
                                                                )}
                                                            </Typography>
                                                        ) : (
                                                            <Typography style={{ background: 'gold', padding: '5px', borderRadius: '6px', fontWeight: 'bold', color: 'black', fontSize: '14px' }} className="">
                                                                Free
                                                            </Typography>
                                                        )}
                                                    </div>
                                                </Stack>
                                                {/* </Link> */}
                                            </CardContent>
                                            <CardActions sx={{ paddingTop: '0px', display: 'block' }}>
                                                <hr style={{ border: '1px solid rgb(128 128 128 / 8%)', width: '95%' }} />

                                                <div>
                                                    <Button
                                                        onClick={() => handleBuyCourse(filteredCourse)}
                                                        // onClick={isMobile ? handleDrawerOpen : handleDrawerOpen}
                                                        fullWidth
                                                        sx={{
                                                            fontWeight: '700',
                                                            textTransform: 'none',
                                                            // background: `${paletteColor.button.default}`,
                                                            background: `#F44336FF`,
                                                            color: 'white',
                                                            '&:hover': {
                                                                background: 'rgb(118, 53, 220)',
                                                                color: 'white',
                                                            }
                                                        }}
                                                    >
                                                        {filteredCourse?.price === 0 ? "View this Course" : "Buy this course"}
                                                    </Button>
                                                </div>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })}
                    </Grid>
                    {/* </Box> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default CourseSection