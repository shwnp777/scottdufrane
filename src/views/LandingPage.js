import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<Link to='/user/dashboard'>
			<button>Dashboard</button>
		</Link>
	);
};

export default LandingPage;
