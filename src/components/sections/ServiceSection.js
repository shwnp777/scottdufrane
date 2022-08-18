import React from 'react';
import ServiceOne from '../../images/businessman.svg';

const ServiceSection = () => {
	return (
		<div id='service' className='service-section'>
			<h3>What We Offer</h3>
			<div className='service-div'>
				<div className='service-text-left'>
					<h3>This One Thing</h3>
					<p>
						This is one example of ProjectX and we will be telling you about
						what our service does and then explain the benefits in a seperate
						section. However, I will be putting a cool picture next to these
						statments so there is something good to look at.{' '}
					</p>
				</div>
				<div className='service-image'>
					<img src={ServiceOne} alt='' />
				</div>
			</div>
			<div className='service-div'>
				<div className='service-image'>
					<img src={ServiceOne} alt='' />
				</div>
				<div className='service-text-right'>
					<h3>This One Thing</h3>
					<p>
						This is one example of ProjectX and we will be telling you about
						what our service does and then explain the benefits in a seperate
						section. However, I will be putting a cool picture next to these
						statments so there is something good to look at.{' '}
					</p>
				</div>
			</div>
			<div className='service-div'>
				<div className='service-text-left'>
					<h3>This One Thing</h3>
					<p>
						This is one example of ProjectX and we will be telling you about
						what our service does and then explain the benefits in a seperate
						section. However, I will be putting a cool picture next to these
						statments so there is something good to look at.{' '}
					</p>
				</div>
				<div className='service-image'>
					<img src={ServiceOne} alt='' />
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
