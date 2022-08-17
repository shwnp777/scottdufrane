import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Popover } from 'antd';
import { MenuOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const DashboardNav = ({ showDrawer }) => {
	const [visible, setVisible] = useState(false);

	const hide = () => {
		setVisible(false);
	};

	const handleVisibleChange = (newVisible) => {
		setVisible(newVisible);
	};

	const content = (
		<div className='nav-top-links'>
			<Link to='/user/dashboard/'>
				<div className='side-drawer-links'>
					<p>Account Settings</p>
				</div>
			</Link>
			<Link to='/user/dashboard/edit-profile'>
				<div className='side-drawer-links'>
					<p>Edit Profile</p>
				</div>
			</Link>
			<Link to='/user/dashboard'>
				<div className='side-drawer-links'>
					<p>Logout</p>
				</div>
			</Link>
		</div>
	);

	return (
		<div className='dashboard-nav'>
			<div className='left-nav'>
				<h3>Logo</h3>
				<button className='icon-button' onClick={showDrawer}>
					<MenuOutlined />
				</button>
			</div>
			<div className='right-nav'>
				<Link to='/user/dashboard/messages'>
					<Badge count={5}>
						<button className='icon-button'>
							<BellOutlined />
						</button>
					</Badge>
				</Link>
				<Popover
					onClick={hide}
					content={content}
					trigger='click'
					visible={visible}
					onVisibleChange={handleVisibleChange}
					className='pop-over'
				>
					<button className='icon-button' onClick={() => setVisible(true)}>
						<UserOutlined />
					</button>
				</Popover>
			</div>
		</div>
	);
};

export default DashboardNav;
