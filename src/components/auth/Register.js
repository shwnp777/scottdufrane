import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<div className='auth-form'>
			<div className='circle-one'></div>
			<div className='circle-two'></div>
			<h3>Register Here</h3>
			<div className='auth-inputs'>
				<input
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					placeholder='Enter your Email'
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					placeholder='Enter your Password'
				/>
				<Checkbox onChange={onChange} style={{ zIndex: '2000', color: '#fff' }}>
					By checking the box, you argee to our Terms of Service.
				</Checkbox>
				<div className='submit'>
					<Link to='/user/dashboard'>
						<button className='submit-button'>Submit</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
