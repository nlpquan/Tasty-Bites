import React from 'react';
import '../components/About/AboutStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import About from '../components/About/About';
import AboutUs from '../container/AboutUs/AboutUs.jsx';


function AboutPage () {
    return (
        <>
            <Navbar />
            <AboutUs />
            <Footer />
        </>
        
    );
}

export default AboutPage;