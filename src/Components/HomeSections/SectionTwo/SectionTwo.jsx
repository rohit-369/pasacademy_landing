import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputBase, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import smssvg from './Images/smssvg.svg'
import appLogo from './Images/appLogosvg.svg'
import checkBoxsvg from './Images/checkBoxsvg.svg'
import CourseNetwrok from '../../../Network'

const SectionTwo = () => {

  const instId = '94'

  const [course, setCourse] = useState('');
  const [coursesData, setCoursesData] = React.useState([]);

  const handleChangeCourse = (event) => {
    setCourse(event.target.value);
  };

  const getAllCourses = async () => {
    const response = await CourseNetwrok.fetchCourses(instId);
    setCoursesData(response.courses);
  };

  React.useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: '#D93535',
        width: '100%',
        height: '100%',
        paddingTop: '25px',
        // pt: '60px',
      }}>
      <Grid container spacing={2}
        p={[4, 8]}
      >
        <Grid item xs={12} sm={6} md={6} mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                left: '15px'
              }}
            >
              <img alt='' src={appLogo} />
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
          <Grid container spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* <Grid item xs={6}> */}

            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: 'Inter , sans-serif',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: '44px',
                }}
              >
                Here are the reasons
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter , sans-serif',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: '44px'
                }}
              >
                why you should join
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter , sans-serif',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: '44px'
                }}
              >
                PS Academy ?
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >
                <img alt='' src={checkBoxsvg} /> Provide precise and pin-pointed guidance.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >
                <img alt='' src={checkBoxsvg} />Hand holding and mentoring of students by people who have
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >
                cracked the exam themselves.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >
                <img alt='' src={checkBoxsvg} /> Provide academic growth and continuation of formal education
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >
                along with focused UPSC preparation.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >
                <img alt='' src={checkBoxsvg} /> Answer Writing skill and creativity development program,
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  lineHeight: '45px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px'
                }}
              >including test practice.
              </Typography>
            </Box>
            {/* </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ maxWidth: [700, 500] }}>
            <CardContent sx={{ p: [2, 5] }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                fontFamily={'Inter , sans-serif'}
                fontSize={'46px'}
                fontWeight={'500'}
                lineHeight={'60px'}
              >
                Get In Touch
              </Typography>
              <Typography
                sx={{
                  padding: '9px',
                  textAlign: 'center',
                  width: '100%'
                }}
                fontFamily={'Inter , sans-serif'}
                fontSize={'15px'}
                fontWeight={'400'}
                lineHeight={'22px'}
              >
                We'd love to hear from you, please drop us a line if you've any
                query related to our program and courses.
              </Typography>
              <Grid container spacing={2} mb={4} mt={2}>
                <Grid item xs={12}>
                  <Typography>
                    Name :
                  </Typography>
                  <TextField fullWidth id="outlined-basic" label="Name" type='text' variant="outlined" />
                </Grid>
              </Grid>
              <Grid container spacing={2} mb={4}>
                <Grid item xs={6}>
                  <Typography>
                    Phone :
                  </Typography>
                  <TextField fullWidth id="outlined-basic" label="Phone" type='number' variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Email :
                  </Typography>
                  <TextField fullWidth id="outlined-basic" label="Email" type='email' variant="outlined" />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    Course :
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      value={course}
                      onChange={handleChangeCourse}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <em>Select Your Course</em>
                      </MenuItem>
                      {coursesData && coursesData
                        .filter(course => course.tags.some(tag => tag.tag === "MPPSC Courses "))
                        .map((filteredCourse, index) => {
                          return (
                            <MenuItem>
                              {filteredCourse.title}
                            </MenuItem>
                          )
                        })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12}>
                  <Typography>
                    Message :
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'none',
                  background: '#FFD80D',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  lineHeight: '24px',
                  fontSize: '16px',
                  color: '#000',
                  gap: '10px',
                  width: ['95%', '87%'],
                  borderRadius: '0px'
                }}
              >
                <img alt='' src={smssvg} />
                Send Message
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionTwo