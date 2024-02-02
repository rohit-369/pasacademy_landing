import React from 'react';
import backgroundImage from './Images/bgImage.svg'
import appLogo from './Images/appLogosvg.svg'
import { Box, Button, Typography } from '@mui/material';
import smssvg from './Images/smssvg.svg'

const SectionThree = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                paddingTop: '5px',
                pt: '60px',
                paddingBottom: '1px'
            }}>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                mb={5}
            >
                <img width={'12%'} alt='' src={appLogo} />
            </Box>
            <Box mb={5}>
                <Typography
                    fontWeight={'700'}
                    fontSize={'50px'}
                    fontFamily={'Inter'}
                    textAlign={'center'}
                    lineHeight={'45px'}
                    color={'white'}
                >
                    Answer Writing Skill Development Program
                </Typography>
                <Typography
                    fontWeight={'400'}
                    fontSize={'30px'}
                    fontFamily={'Inter'}
                    textAlign={'center'}
                    lineHeight={'60px'}
                    color={'white'}
                >
                    For English Medium & Hindi Medium
                </Typography>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
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
                            width: ['100%', '15%'],
                            borderRadius: '0px'
                        }}
                    >
                        <img alt='' src={smssvg} />
                        Join Now
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SectionThree