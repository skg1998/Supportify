import React from 'react';
import './volunteer.css'; // Import a CSS file for styling
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BreadCam from '../../components/breadcam/breadcam';
import Volunteer from '../../components/volunteer/volunteer';

const ContactUs = () => {
    return (
        <div >
            <Header />
            <BreadCam text={'Volunteer'} />
            <Volunteer />
            <section class="contact-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="contact-title">Be a Volunteer</h2>
                        </div>
                        <div class="col-lg-8">
                            <form class="form-contact contact_form">
                                <div class="row">
                                    <div class="col-sm-6 mb-2 mt-2">
                                        <div class="form-group">
                                            <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 mb-2 mt-2">
                                        <div class="form-group">
                                            <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Name"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactUs;
