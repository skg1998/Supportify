import React from 'react';
import './ContactUs.css'; // Import a CSS file for styling

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, concerns, or just want to learn more about our organization, we’d love to hear from you. Reach out to us using the information below.</p>
            <h2>Get in Touch</h2>
            <ul>
                <li>Email: support@womensafety.org</li>
                <li>Phone: +1 234 567 8901</li>
                <li>Address: 123 Safety Street, Safe City, SC 12345</li>
            </ul>
            <h2>Follow Us</h2>
            <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
        </div>
    );
};

export default ContactUs;
