import React from 'react';
import Banner from './Banner/Banner';
import ImageGallary from './ImageGallary/ImageGallary';
import ReactTabs from './ReactTabs/ReactTabs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGallary></ImageGallary>
            <ReactTabs></ReactTabs>
        </div>
    );
};

export default Home;