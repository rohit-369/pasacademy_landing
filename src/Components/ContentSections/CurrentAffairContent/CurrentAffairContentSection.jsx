import { Box, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser'

const CurrentAffairContentSection = ({ data }) => {

  return (
    <Box p={4}>
      {Array.isArray(data) && data.map((data, index) => (
        <Grid item xs={12} sm={8} md={8} p={3}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'}>
            <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'35px'} mb={5} mt={5}>
              {data?.post_title}
            </Typography>
            <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'20px'}>
              {moment(data?.post_date).format('MMMM Do YYYY')}
            </Typography>
          </Box>
          <img alt='' src={data?.guid} />
          <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'25px'}>
            {parse(data?.post_content)}
          </Typography>
        </Grid>
      ))}
    </Box>
  )
}

export default CurrentAffairContentSection