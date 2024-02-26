import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import SecondFooter from '../Components/SecondFooter'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <SecondHeader />
            <Navbar />
            <Box m={'20px'}>
                <Box p={2}
                    sx={{
                        background: '#540005',
                        color: 'white'
                    }}
                >
                    <Typography
                        fontSize={['25px', '40px']}
                        textAlign={'center'}
                        fontWeight={'600'}
                    >
                        Privacy Policy
                    </Typography>
                </Box>
                <Typography
                    fontSize={['20px']}
                    textAlign={'end'}
                    fontWeight={'600'}
                    p={2}
                >
                    Effective Date : 22 Feb 2024
                </Typography>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'center'}
                        fontWeight={'500'}
                    >
                        PS Academy Indore ("PS Academy," "we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy describes how we collect, use, and disclose information when you use our educational platform.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        1. Information We Collect:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Personal Information:</span>When you register on our platform or interact with us, we may collect personal information such as your name, email address, phone number, and other relevant details.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Usage Data:</span>We may collect information about how you interact with our platform, including your browsing activity, access times, and referring website addresses.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        2. How We Use Your Information:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>To Provide Services: </span>Your information helps us improve our platform, personalize your experience, and develop new features.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Improvement of Services: </span>We may collect information about how you interact with our platform, including your browsing activity, access times, and referring website addresses.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (c)<span style={{ fontWeight: '500' }}>Communication: </span>We may use your contact information to send you updates, newsletters, and marketing communications. You can opt-out of these communications at any time.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (d)<span style={{ fontWeight: '500' }}>Legal Compliance: </span>We may process your information to comply with legal obligations or enforce our policies.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        3. Information Sharing and Disclosure:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Service Providers: </span>We may share your information with third-party service providers who assist us in operating our platform, conducting our business, or servicing you.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Business Transfers: </span>We may disclose your information if required by law or in response to valid requests from governmental authorities.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (c)<span style={{ fontWeight: '500' }}>Legal Requirements: </span>We may use your contact information to send you updates, newsletters, and marketing communications. You can opt-out of these communications at any time.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        4. Data Security:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        5. Third-Party Links:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of those websites.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        6. Children's Privacy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Our platform is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us to remove the information.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        7. Changes to This Privacy Policy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our platform after the changes indicates your acceptance of the revised Privacy Policy.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        8. Contact Us:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        If you have any questions or concerns about our Privacy Policy or practices, please contact us at <a href='care@psacademy.co.in.' >care@psacademy.co.in.</a>.

                        By using our educational platform, you consent to the collection and use of your information as described in this Privacy Policy.
                    </Typography>
                </Box>
            </Box>
            <SecondFooter />
            <Footer />
        </>
    )
}

export default PrivacyPolicy