import React from 'react';
import { Link } from 'react-scroll';
import {
	MenuOutlined,
	BulbOutlined,
	SnippetsOutlined,
	LikeOutlined,
	MailOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';

const LandingNav = () => {
	const menu = (
		<div className='mobile-landing-nav'>
			<Link to='about' spy={true} smooth={true} offset={50} duration={500}>
				<BulbOutlined /> About
			</Link>
			<Link to='service' spy={true} smooth={true} offset={50} duration={500}>
				<SnippetsOutlined /> Services
			</Link>
			<Link to='benefits' spy={true} smooth={true} offset={50} duration={500}>
				<LikeOutlined /> Benefits
			</Link>
			<Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
				<MailOutlined /> Contact Us
			</Link>
		</div>
	);

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

			<Dropdown overlay={menu} trigger={['click']} className='mobile-trigger'>
				<div className='mobile-links'>
					<MenuOutlined />
				</div>
			</Dropdown>
		</div>
	);
};

export default LandingNav;
