import React from 'react';
import './counter.css';

const Counter = () => {
    return (
        <div className="counter_area">
            <div className="container">
                <div className="counter_bg overlay">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single_counter d-flex align-items-center justify-content-center">
                                <div className="icon">
                                    <i className="flaticon-calendar"></i>
                                </div>
                                <div className="events">
                                    <h3 className="counter">120</h3>
                                    <p>Finished Event</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_counter d-flex align-items-center justify-content-center">
                                <div className="icon">
                                    <i className="flaticon-heart-beat"></i>
                                </div>
                                <div className="events">
                                    <h3 className="counter">120</h3>
                                    <p>Finished Event</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_counter d-flex align-items-center justify-content-center">
                                <div className="icon">
                                    <i className="flaticon-in-love"></i>
                                </div>
                                <div className="events">
                                    <h3 className="counter">120</h3>
                                    <p>Finished Event</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_counter d-flex align-items-center justify-content-center">
                                <div className="icon">
                                    <i className="flaticon-hug"></i>
                                </div>
                                <div className="events">
                                    <h3 className="counter">120</h3>
                                    <p>Finished Event</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
