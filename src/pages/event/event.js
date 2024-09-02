import React from 'react';
import Header from '../../components/header/header';
import BreadCam from '../../components/breadcam/breadcam';
import Reson from '../../components/Reson/reson';
import Footer from '../../components/footer/footer'
import Counter from '../../components/counter/counter';

import './event.css';

const Event = () => {
    return (
        <div className="home-container">
            <Header />
            <BreadCam text={'Events'} />
            <Reson text={'Upcoming Events'} />
            <Reson text={'Past Events'} />
            <Counter />
            <Footer />
        </div>
    );
};

export default Event;
