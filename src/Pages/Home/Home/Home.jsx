import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ImageGallary from './ImageGallary/ImageGallary';
import ReactTabs from './ReactTabs/ReactTabs';
import LocalTIme from './LocalTIme/LocalTIme';
import Marquee from 'react-fast-marquee';
import useTitle from '../../../hooks/useTitle';
import MarqueeTag from './Marquee/MarqueeTag';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
        window.addEventListener('load', AOS.refresh);
    }, []);

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <LocalTIme></LocalTIme>
            <ImageGallary></ImageGallary>
            <div data-aos="fade-right">
                <ReactTabs></ReactTabs>
            </div>
            <MarqueeTag></MarqueeTag>
        </div>
    );
};

export default Home;
