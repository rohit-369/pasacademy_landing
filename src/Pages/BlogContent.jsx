import React, { useEffect, useState } from 'react'
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
import { useLocation, useParams } from 'react-router-dom'
import BlogContentSecionOne from '../Components/BlogContentSections/BlogContentSecionOne/BlogContentSecionOne'
import BlogContentSectionTwo from '../Components/BlogContentSections/BlogContentSectionTwo/BlogContentSectionTwo'

const BlogContent = () => {

    const {id} = useParams();

    const [index, setIndex] = useState(0);
    const [blogData, setBlogData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5001/getContentById/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setBlogData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

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
            <BlogContentSecionOne blogData={blogData} />
            <BlogContentSectionTwo />
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