import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Divider } from 'antd';
import {
	LineChartOutlined,
	ExperimentOutlined,
	AuditOutlined,
	RocketOutlined,
	DollarCircleOutlined,
	GiftOutlined,
} from '@ant-design/icons';
import DashboardNav from '../navigation/DashboardNav';

const DashLayout = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(!open);
	};

	return (
		<div>
			<DashboardNav showDrawer={showDrawer} />
			<div className='main-content-wrapper'>
				<div
					className='sideDrawer'
					style={
						open
							? { left: '0', marginLeft: '0' }
							: { left: '-250px', marginLeft: '-250px' }
					}
				>
					<div className='sidebar-nav'>
						<Link to='/user/dashboard'>
							<div className='side-drawer-links'>
								<LineChartOutlined />
								<p>Analytics</p>
							</div>
						</Link>
						<Divider orientation='left' plain>
							Leads
						</Divider>
						<Link to='/user/dashboard/leads'>
							<div className='side-drawer-links'>
								<ExperimentOutlined />
								<p>Leads</p>
							</div>
						</Link>
						<Link to='/user/dashboard/clients'>
							<div className='side-drawer-links'>
								<AuditOutlined />
								<p>Clients</p>
							</div>
						</Link>
						<Divider orientation='left' plain>
							Account
						</Divider>
						<Link to='/user/dashboard/points'>
							<div className='side-drawer-links'>
								<DollarCircleOutlined />
								<p>My Account</p>
							</div>
						</Link>
						<Link to='/user/dashboard/points'>
							<div className='side-drawer-links'>
								<RocketOutlined />
								<p>Points</p>
							</div>
						</Link>
						<Link to='/user/dashboard/rewards'>
							<div className='side-drawer-links'>
								<GiftOutlined />
								<p>Rewards</p>
							</div>
						</Link>
					</div>
				</div>
				<div className='main-div'>
					<main className='dashboard-main'>
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
};

export default DashLayout;
