import React from 'react';
import AppAbout from '../Components/Home/About';
import AppContact from '../Components/Home/Contact';
import AppFaq from '../Components/Home/Faq';
import AppFeatures from '../Components/Home/Features';
// import '.././App.css'
import AppHero from '../Components/Home/Hero';
import AppPricing from '../Components/Home/Pricing';
import AppWorks from '../Components/Home/Works';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeatures />
            <AppWorks />
            <AppFaq />
            <AppPricing />
            <AppContact/>
        </div>
    )
};

export default AppHome;
