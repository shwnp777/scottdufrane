import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/sections/AboutSection';
import ServiceSection from '../components/sections/ServiceSection';
import ContactSection from '../components/sections/ContactSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import BacktoTop from '../components/sections/BacktoTop';
import HeroSection from '../components/sections/HeroSection';

const LandingPage = () => {
	return (
		<div className='land-div'>
			<div className='section-div'>
				<HeroSection />
				<AboutSection />
				<ServiceSection />
				<BenefitsSection />
				<ContactSection />
			</div>
			<Link to='/user/dashboard'>
				<button>DashBoard</button>
			</Link>
			<BacktoTop />
		</div>
	);
};

export default LandingPage;
