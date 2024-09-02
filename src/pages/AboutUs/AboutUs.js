import React from 'react';
import Header from '../../components/header/header';
import BreadCam from '../../components/breadcam/breadcam';
import Activity from '../../components/activity/activity';
import Footer from '../../components/footer/footer'

import './AboutUs.css'; // Import a CSS file for styling

const AboutUs = () => {
    return (
        <div>
            <Header />
            <BreadCam text={'About Us'} />
            <Activity />
            <Footer />
        </div>
    );
};

export default AboutUs;
