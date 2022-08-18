import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Register from '../../components/auth/Register';

const RegisterPage = () => {
	return (
		<div className='auth-page'>
			<div className='back-to-home'>
				<Link to='/'>
					<button>
						<ArrowLeftOutlined /> Back to home
					</button>
				</Link>
			</div>
			<Register />
		</div>
	);
};

export default RegisterPage;
