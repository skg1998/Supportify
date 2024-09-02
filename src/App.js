import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import WhyJoin from './pages/WhyJoin/WhyJoin';
import SafetyResources from './pages/SafetyResources/SafetyResources';
import GetInvolved from './pages/GetInvolved/GetInvolved';
import ProgramsEvents from './pages/ProgramsEvents/ProgramsEvents';
import ContactUs from './pages/ContactUs/ContactUs';
import SupportUs from './pages/SupportUs/SupportUs';
import Blogs from './pages/Blog/blog';
import Donate from './pages/Donate/donate';
import Volunteer from './pages/Volunteer/volunteer';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutUs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/why-join" element={<WhyJoin />} />
        <Route path="/safety-resources" element={<SafetyResources />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/programs" element={<ProgramsEvents />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/support" element={<SupportUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
