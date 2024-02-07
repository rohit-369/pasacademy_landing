import React from 'react'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import Navbar from '../Components/Navbar'
import SecondFooter from '../Components/SecondFooter'
import Footer from '../Components/Footer'
import { Button } from '@mui/material'
import SectionFourth from '../Components/HomeSections/SectionFourth/SectionFourth'
import SectionThree from '../Components/HomeSections/SectionThree/SectionThree'
import SectionTwo from '../Components/HomeSections/SectionTwo/SectionTwo'
import ContentSectionOne from '../Components/ContentSections/ContentSectionOne/ContentSectionOne'
import ContentSectionTwo from '../Components/ContentSections/ContentSectionTwo/ContentSectionTwo'
import ContentBannerSection from '../Components/ContentSections/ContentBanner/ConentBannerSection'
import CalenderSection from '../Components/ContentSections/CalenderSection/CalenderSection'
import SecondBlogSection from '../Components/ContentSections/CalenderSection/SecondBlogSection'
import CurrentAffairSection from '../Components/ContentSections/CurrentAffairSection/CurrentAffairSection'

const BlogContent = () => {
    return (
        <div>
            <Header />
            <SecondHeader />
            <Navbar />
            {/* <ContentSectionTwo /> */}
            {/* <SectionOne /> */}
            {/* <BannerSection /> */}
            {/* <CourseSection /> */}
            {/* <CurrentAffairSection />
            <CalenderSection /> */}
            <ContentBannerSection />
            <SecondBlogSection />
            <SectionThree />
            {/* <SectionFourth /> */}
            {/* <SectionGellary /> */}
            <ContentSectionOne />
            <SectionTwo />
            <SecondFooter />
            <Footer />
        </div>
    )
}

export default BlogContent