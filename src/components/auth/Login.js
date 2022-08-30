import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth';
import { clearMessage } from '../../features/message';

const Login = (props) => {
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { isLoggedIn } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	const handleLogin = (e) => {
		e.preventDefault();
		setLoading(true);
		dispatch(login({ username, password }))
			.unwrap()
			.then(() => {
				props.history.push('/user/dashboard/data');
				window.location.reload();
			})
			.catch(() => {
				setLoading(false);
			});
	};

	if (isLoggedIn) {
		return <Navigate to='/user/dashboard/data' />;
	}

	return (
		<div className='auth-form'>
			<div className='circle-one'></div>
			<div className='circle-two'></div>
			{loading ? <h3>Loading</h3> : <h3>Login Here</h3>}

			<form onSubmit={handleLogin} className='auth-inputs'>
				<div className='reg-input'>
					<input
						style={{ color: '#000000' }}
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						placeholder='Username'
					/>
				</div>
				<div className='reg-input'>
					<input
						style={{ color: '#000000' }}
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder='Password'
					/>
				</div>

				<div className='submit'>
					<button className='submit-button' type='submit'>
						Submit
					</button>
				</div>
				<p>
					Don't have an account?{' '}
					<Link to='/user/auth/register' styles={{ color: 'pink' }}>
						Register Here
					</Link>
				</p>
			</form>
			{message}
		</div>
	);
};

export default Login;
