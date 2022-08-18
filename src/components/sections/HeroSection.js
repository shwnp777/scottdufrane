import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import Paper from '../../images/paper.svg';

const HeroSection = () => {
	return (
		<div id='hero' className='hero-section'>
			<div className='circle-one'></div>
			<div className='circle-two'></div>
			<Row>
				<Col className='gutter-row' sm={24} md={12}>
					<div className='hero-half hero-left'>
						<div className='hero-left-text'>
							<h3>Taking care of leads takes too much time!</h3>
						</div>
						<div className='paper-img'>
							<img src={Paper} alt='paper for office' />
						</div>
					</div>
				</Col>
				<Col className='gutter-row' sm={24} md={12}>
					<div className='hero-half hero-right'>
						<h1 className='hero-right-text'>ARE YOU READY TO MOVE FORWARD?</h1>
						<Link to='/user/auth/register'>
							<button>Sign Up Here!</button>
						</Link>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default HeroSection;
