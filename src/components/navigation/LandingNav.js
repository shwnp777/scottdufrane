import React from 'react';
import { Link } from 'react-scroll';

const LandingNav = () => {
	return (
		<div className='landing-nav' id='landNav'>
			<div className='landing-logo'>
				<h1>Logo</h1>
			</div>
			<div className='landing-nav-right'>
				<Link to='about' spy={true} smooth={true} offset={50} duration={500}>
					About
				</Link>
				<Link to='service' spy={true} smooth={true} offset={50} duration={500}>
					Services
				</Link>
				<Link to='benefits' spy={true} smooth={true} offset={50} duration={500}>
					Benefits
				</Link>
				<Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
					Contact Us
				</Link>
			</div>
		</div>
	);
};

export default LandingNav;
