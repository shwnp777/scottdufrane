import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearMessage } from '../../features/message';
import { Checkbox, message } from 'antd';

import { register } from '../../features/auth';

const Register = (props) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('@email.com');
	const [password, setPassword] = useState('Jem777!!!!!');
	const [password2, setPassword2] = useState('Jem777!!!!!');
	const [first_name, setFirst_name] = useState('Shawn');
	const [last_name, setLast_name] = useState('Jorlk');

	const dispatch = useDispatch();

	const openSuccess = () => {
		message.success('Registration successful');
	};

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	const handleRegister = () => {
		setLoading(true);
		dispatch(
			register({ username, email, password, password2, first_name, last_name })
		)
			.then(() => {
				setLoading(false);
				setSuccess(true);
				if (success) {
					openSuccess();
				}
			})
			.catch(() => {
				setLoading(false);
			});
	};
	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<div className='auth-form'>
			<div className='circle-one'></div>
			<div className='circle-two'></div>
			{loading ? <h3>Loading...</h3> : <h3>Register Here</h3>}

			<form>
				<div>
					<div className='auth-inputs'>
						<div className='reg-input'>
							<input
								style={{ color: '#000000' }}
								type='text'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								placeholder='Enter a Username'
							/>
						</div>
						<div className='reg-input'>
							<input
								style={{ color: '#000000' }}
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								placeholder='Enter your Email'
							/>
						</div>
						<div className='reg-input'>
							<input
								style={{ color: '#000000' }}
								type='text'
								value={first_name}
								onChange={(e) => setFirst_name(e.target.value)}
								required
								placeholder='Enter your First Name'
							/>
						</div>
						<div className='reg-input'>
							<input
								style={{ color: '#000000' }}
								type='text'
								value={last_name}
								onChange={(e) => setLast_name(e.target.value)}
								required
								placeholder={'Enter your Last Name'}
							/>
						</div>
						<div className='reg-input'>
							<input
								style={{ color: '#000000' }}
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder='Enter your Password'
							></input>
						</div>
						<div className='reg-input'>
							<input
								style={{ color: '#000000' }}
								type='password'
								value={password2}
								onChange={(e) => setPassword2(e.target.value)}
								required
								placeholder='Confirm your Password'
							/>
						</div>

						<div>
							<Checkbox
								onChange={onChange}
								style={{ zIndex: '2000', color: '#fff' }}
							>
								By checking the box, you argee to our Terms of Service.
							</Checkbox>
						</div>

						<div className='submit' onClick={handleRegister}>
							<Link to='/success'>
								<button className='submit-button'>Submit</button>
							</Link>
						</div>
						<p>
							Already have an account?{' '}
							<Link to='/user/auth/login'>Login Here!</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;
