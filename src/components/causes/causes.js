import React from 'react';
import './causes.css';

const Causes = () => {
    return (
        <div className="popular_causes_area section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb-55">
                            <h3><span>Popular Causes</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="causes_active owl-carousel">
                            <div className="single_cause">
                                <div className="thumb">
                                    <img src="../../assets/img/causes/1.png" alt="" />
                                </div>
                                <div className="causes_content">
                                    <div className="custom_progress_bar">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar"
                                                style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                <span className="progres_count">
                                                    30%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance d-flex justify-content-between align-items-center">
                                        <span>Raised: $5000.00 </span>
                                        <span>Goal: $9000.00 </span>
                                    </div>
                                    <h4>Help us to Send Food</h4>
                                    <p>The passage is attributed to an
                                        unknown typesetter in the century
                                        who is thought</p>
                                    <a className="read_more" href="cause_details.html">Read More</a>
                                </div>
                            </div>
                            <div className="single_cause">
                                <div className="thumb">
                                    <img src="../../assets/img/causes/2.png" alt="" />
                                </div>
                                <div className="causes_content">
                                    <div className="custom_progress_bar">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                <span className="progres_count">
                                                    30%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance d-flex justify-content-between align-items-center">
                                        <span>Raised: $5000.00 </span>
                                        <span>Goal: $9000.00 </span>
                                    </div>
                                    <h4>Clothes For Everyone</h4>
                                    <p>The passage is attributed to an
                                        unknown typesetter in the century
                                        who is thought</p>
                                    <a className="read_more" href="cause_details.html">Read More</a>
                                </div>
                            </div>
                            <div className="single_cause">
                                <div className="thumb">
                                    <img src="../../assets/img/causes/3.png" alt="" />
                                </div>
                                <div className="causes_content">
                                    <div className="custom_progress_bar">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                <span className="progres_count">
                                                    30%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance d-flex justify-content-between align-items-center">
                                        <span>Raised: $5000.00 </span>
                                        <span>Goal: $9000.00 </span>
                                    </div>
                                    <h4>Water For All Children</h4>
                                    <p>The passage is attributed to an
                                        unknown typesetter in the century
                                        who is thought</p>
                                    <a className="read_more" href="cause_details.html">Read More</a>
                                </div>
                            </div>
                            <div className="single_cause">
                                <div className="thumb">
                                    <img src="../../assets/img/causes/1.png" alt="" />
                                </div>
                                <div className="causes_content">
                                    <div className="custom_progress_bar">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                <span className="progres_count">
                                                    30%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance d-flex justify-content-between align-items-center">
                                        <span>Raised: $5000.00 </span>
                                        <span>Goal: $9000.00 </span>
                                    </div>
                                    <h4>Help us to Send Food</h4>
                                    <p>The passage is attributed to an
                                        unknown typesetter in the century
                                        who is thought</p>
                                    <a className="read_more" href="cause_details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Causes;