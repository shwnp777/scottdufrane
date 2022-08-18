import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
						<NavLink to='/user/dashboard/data'>
							<div className='side-drawer-links'>
								<LineChartOutlined />
								<p>Analytics</p>
							</div>
						</NavLink>
						<Divider orientation='left' plain>
							Leads
						</Divider>
						<NavLink
							to='/user/dashboard/leads'
							className={({ isActive }) => (isActive ? 'active' : 'inActive')}
						>
							<div className='side-drawer-links'>
								<ExperimentOutlined />
								<p>Leads</p>
							</div>
						</NavLink>
						<NavLink
							to='/user/dashboard/clients'
							className={({ isActive }) => (isActive ? 'active' : 'inActive')}
						>
							<div className='side-drawer-links'>
								<AuditOutlined />
								<p>Clients</p>
							</div>
						</NavLink>
						<Divider orientation='left' plain>
							Account
						</Divider>
						<NavLink
							to='/user/dashboard/account'
							className={({ isActive }) => (isActive ? 'active' : 'inActive')}
						>
							<div className='side-drawer-links'>
								<DollarCircleOutlined />
								<p>My Account</p>
							</div>
						</NavLink>
						<NavLink
							to='/user/dashboard/messages'
							className={({ isActive }) => (isActive ? 'active' : 'inActive')}
						>
							<div className='side-drawer-links'>
								<DollarCircleOutlined />
								<p>Messages</p>
							</div>
						</NavLink>
						<NavLink
							to='/user/dashboard/points'
							className={({ isActive }) => (isActive ? 'active' : 'inActive')}
						>
							<div className='side-drawer-links'>
								<RocketOutlined />
								<p>Points</p>
							</div>
						</NavLink>
						<NavLink
							to='/user/dashboard/rewards'
							className={({ isActive }) => (isActive ? 'active' : 'inActive')}
						>
							<div className='side-drawer-links'>
								<GiftOutlined />
								<p>Rewards</p>
							</div>
						</NavLink>
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
