import React from 'react';
import { Col, Row } from 'antd';

const Dashboard = () => {
	return (
		<div>
			<div className='grid-flex'>
				<Row gutter={[20, 20]}>
					<Col xs={24} sm={12} md={18}>
						<div className='dashboard-card'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<div className='dashboard-card2'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={18}>
						<div className='dashboard-card2'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<div className='dashboard-card'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={18}>
						<div className='dashboard-card'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<div className='dashboard-card2'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={18}>
						<div className='dashboard-card2'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<div className='dashboard-card'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={18}>
						<div className='dashboard-card'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<div className='dashboard-card2'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={18}>
						<div className='dashboard-card2'>stats</div>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<div className='dashboard-card'>stats</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Dashboard;
