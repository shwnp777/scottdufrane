import React from 'react';
import BenefitsOne from '../../images/rocket.svg';

const BenefitsSection = () => {
	return (
		<div id='benefits' className='benefits-section'>
			<h3>Your Beneifits</h3>
			<div className='benefits-div'>
				<div className='benefits-image'>
					<img src={BenefitsOne} alt='' />
				</div>
				<div className='benefits-text-right'>
					<h3>Benefit One</h3>
					<p>
						You will certainly benefot from what we offer at ProjectX and will
						probably tell all your friends and family about it at your next
						renunion. THis is the next best app for sales and business to keep
						track of their sales and Leads.
					</p>
				</div>
			</div>

			<div className='benefits-div'>
				<div className='benefits-text-left'>
					<h3>Benefit One</h3>
					<p>
						You will certainly benefot from what we offer at ProjectX and will
						probably tell all your friends and family about it at your next
						renunion. THis is the next best app for sales and business to keep
						track of their sales and Leads.
					</p>
				</div>
				<div className='benefits-image'>
					<img src={BenefitsOne} alt='' />
				</div>
			</div>
			<div className='benefits-div'>
				<div className='benefits-image'>
					<img src={BenefitsOne} alt='' />
				</div>
				<div className='benefits-text-right'>
					<h3>Benefit One</h3>
					<p>
						You will certainly benefot from what we offer at ProjectX and will
						probably tell all your friends and family about it at your next
						renunion. THis is the next best app for sales and business to keep
						track of their sales and Leads.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BenefitsSection;
