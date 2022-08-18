import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const { name, email, phone, message } = formValues;

	return (
		<div id='contact' className='contact-section'>
			<div className='circle-one-contact'></div>
			<div className='circle-two-contact'></div>
			<div className='contact-text'>
				<h3>Got Questions?</h3>
				<p>
					Feel free to contact us in order to get all of your questions
					answered. Eventhough you will not be able to understand them, our
					operators are stnding by to take your call and money.
				</p>
			</div>
			<div className='contact-form'>
				<div className='auth-inputs'>
					<input
						type='text'
						value={email}
						onChange={(e) => setFormValues.email(e.target.value)}
						required
						placeholder='Enter your Name'
					/>
					<input
						type='text'
						value={name}
						onChange={(e) => setFormValues.name(e.target.value)}
						required
						placeholder='Enter your Email'
					/>
					<input
						type='text'
						value={phone}
						onChange={(e) => setFormValues.phone(e.target.value)}
						required
						placeholder='Enter your Phone Number'
					/>
					<textarea
						rows='4'
						value={message}
						onChange={(e) => setFormValues.message(e.target.value)}
						required
						placeholder='Enter your Question Here'
						style={{ width: '100%', borderRadius: '15px', padding: '10px' }}
					/>

					<div className='submit'>
						<Link to='/user/dashboard'>
							<button className='submit-button'>Submit</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
