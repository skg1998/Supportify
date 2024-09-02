import React from 'react';
import './SafetyResources.css'; // Import a CSS file for styling

const SafetyResources = () => {
    return (
        <div className="safety-resources-container">
            <h1>Safety Resources</h1>
            <p>We provide a variety of resources to help women stay safe and informed. Whether you're looking for tips on personal safety, emergency contacts, or educational materials, we've got you covered.</p>
            <h2>Personal Safety Tips</h2>
            <ul>
                <li>Be aware of your surroundings at all times.</li>
                <li>Trust your instincts—if something feels off, it probably is.</li>
                <li>Carry a safety device, such as a whistle or pepper spray.</li>
                <li>Plan your route and share it with someone you trust.</li>
            </ul>
            <h2>Emergency Contacts</h2>
            <p>If you or someone you know is in immediate danger, please contact:</p>
            <ul>
                <li>Emergency Services: 911</li>
                <li>National Domestic Violence Hotline: 1-800-799-7233</li>
                <li>Local Women’s Shelter: [Insert Local Number]</li>
            </ul>
            <h2>Educational Materials</h2>
            <p>We offer downloadable resources on various topics related to women’s safety. Check out our latest guides and handouts:</p>
            <ul>
                <li><a href="#safety-guide">Women’s Safety Guide</a></li>
                <li><a href="#self-defense">Self-Defense Techniques</a></li>
                <li><a href="#online-safety">Online Safety Tips</a></li>
            </ul>
        </div>
    );
};

export default SafetyResources;
