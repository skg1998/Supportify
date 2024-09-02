import React from 'react';
import './ProgramsEvents.css'; // Import a CSS file for styling

const ProgramsEvents = () => {
    return (
        <div className="programs-events-container">
            <h1>Programs and Events</h1>
            <p>We offer a variety of programs and events designed to empower women and raise awareness about safety. From self-defense workshops to community outreach initiatives, there’s something for everyone.</p>
            <h2>Upcoming Events</h2>
            <ul>
                <li>Self-Defense Workshop - September 15, 2024</li>
                <li>Community Safety Awareness Walk - October 10, 2024</li>
                <li>Women’s Empowerment Conference - November 25, 2024</li>
            </ul>
            <h2>Ongoing Programs</h2>
            <ul>
                <li>Weekly Support Group Meetings</li>
                <li>Online Safety Webinars</li>
                <li>Mentorship Program for Young Women</li>
            </ul>
        </div>
    );
};

export default ProgramsEvents;
