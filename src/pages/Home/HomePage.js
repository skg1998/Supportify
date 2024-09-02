import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Reson from '../../components/Reson/reson';
import Activity from '../../components/activity/activity';
import Causes from '../../components/causes/causes';
import Volunteer from '../../components/volunteer/volunteer'
import Counter from '../../components/counter/counter';
import News from '../../components/news/news';
import Footer from '../../components/footer/footer'

import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <Header />
            <Slider />
            <Reson text={'Reason of Helping'} />
            <Activity />
            <Causes />
            <Counter />
            <Volunteer />
            <News />
            <Footer />
        </div>
    );
};

export default HomePage;
