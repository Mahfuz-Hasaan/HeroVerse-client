import React from 'react';
import Banner from './Banner/Banner';
import ImageGallary from './ImageGallary/ImageGallary';
import ReactTabs from './ReactTabs/ReactTabs';
import LocalTIme from './LocalTIme/LocalTIme';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LocalTIme></LocalTIme>
            <ImageGallary></ImageGallary>
            <ReactTabs></ReactTabs>
        </div>
    );
};

export default Home;