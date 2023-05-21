import React from 'react';
import Banner from './Banner/Banner';
import ImageGallary from './ImageGallary/ImageGallary';
import ReactTabs from './ReactTabs/ReactTabs';
import LocalTIme from './LocalTIme/LocalTIme';
import Marquee from 'react-fast-marquee';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <LocalTIme></LocalTIme>
            <ImageGallary></ImageGallary>
            <ReactTabs></ReactTabs>
            <Marquee></Marquee>
        </div>
    );
};

export default Home;