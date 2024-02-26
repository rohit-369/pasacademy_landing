import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CourseNetwrok from '../Network';

const BuyThisCourse = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const queryParam = new URLSearchParams(location.search);
    const iframeId = queryParam.get("iframeId");
    const courseId = queryParam.get("courseId");
    const onClick = queryParam.get("on-click");
    const totalCoursePrice = queryParam.get("totalCoursePrice");
    const campaignId = queryParam.get("campaignId");
    const [courseIdData, setCourseIdData] = useState([]);
    const [iFrameInstId, setIFrameInstId] = useState([]);
    const [colorPaletteId, setColorPaletteId] = useState(null);
    const [suggestedLength, setSuggestedLength] = useState([]);
    const [courses, setCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedIds, setSelectedIds] = useState([Number(courseId)]);

    const getIframe = async () => {
        const response = await CourseNetwrok.fetchIFrame(iframeId);
        setIFrameInstId(response?.iFrame);
        setColorPaletteId(response?.iFrame?.colorPalette);
    };

    useEffect(() => {
        getIframe();
    }, []);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(iFrameInstId?.instId);
        setCourses(response.courses);
    };

    useEffect(() => {
        const filteredCourses = courses.filter(item => (item.tags || []).some(tag => tag.id === item.setting.checkoutTag) && item.id !== Number(courseId));
        setSuggestedLength(filteredCourses)
        if (courses.length > 0) {
            for (let item of courses) {
                if (courseId == item.id) {
                    setCourseIdData(item);
                }
            };
        };
    }, [courses]);

    useEffect(() => {
        if (iFrameInstId && iFrameInstId.instId) {
            getAllCourses();
        };
    }, [iFrameInstId]);

    const handleCourseChecked = (item) => {
        const coursePrice = Number(item.price) - Number(item.price) * (Number(item.discount) / 100);
        const id = item.id;
        const purchaseObject = {
            purchaseType: "course",
            entityId: id,
        };
        const updatedPurchaseObjects = [...purchaseArray];
        const isSelected = selectedIds.includes(id);

        if (isSelected) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice - coursePrice);
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
            const indexToRemove = updatedPurchaseObjects.findIndex((obj) => obj.entityId === id);
            updatedPurchaseObjects.splice(indexToRemove, 1);
        } else {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + coursePrice);
            setSelectedIds([...selectedIds, id]);
            updatedPurchaseObjects.push(purchaseObject);
        }
        setPurchaseArray(updatedPurchaseObjects);
    };

    return (
        <>
            <iframe src={`https://iframe.classiolabs.com/buyCourseDetails/?iframeId=${iframeId}&courseId=${courseId}&on-click=${onClick}`} width={'100%'} height={'100%'} />
            {/* <source  /> */}
            {/* </iframe> */}
        </>
    )
}

export default BuyThisCourse