import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
	return (
		<div className='success-page'>
			<div className='success-registration'>
				<h3>You have successfully registered</h3>
				<p>Please Consider completing the following:</p>
				<ul>
					<li>Complete your profile</li>
					<li>Have your business add you to their site</li>
					<li>Start getting your clients taken care of</li>
				</ul>
				<Link to='/user/auth/login'>Login Here</Link>
			</div>
		</div>
	);
};

export default Success;
