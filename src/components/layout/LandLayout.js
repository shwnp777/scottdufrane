import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingNav from '../navigation/LandingNav';

const LandLayout = () => {
	return (
		<div>
			<LandingNav />
			<Outlet />
		</div>
	);
};

export default LandLayout;
