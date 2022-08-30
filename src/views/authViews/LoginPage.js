import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Login from '../../components/auth/Login';

const LoginPage = () => {
	return (
		<div className='auth-page'>
			<div className='back-to-home'>
				<Link to='/'>
					<button>
						<ArrowLeftOutlined /> Back to home
					</button>
				</Link>
			</div>
			<Login />
		</div>
	);
};

export default LoginPage;
