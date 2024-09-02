import React from 'react';
import './breadcam.css';

const BreadCam = (props) => {
    return (
        <div class="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="bradcam_text text-center">
                            <h3>{props.text}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCam;