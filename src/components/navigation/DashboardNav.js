import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth';
import { Badge, Popover } from 'antd';
import { MenuOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../images/lotus.png';

const DashboardNav = ({ showDrawer }) => {
	const { user: currentUser } = useSelector((state) => state.auth);

	const [visible, setVisible] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const hide = () => {
		setVisible(false);
	};

	const handleVisibleChange = (newVisible) => {
		setVisible(newVisible);
	};

	const logOut = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	const handleLogout = () => {
		logOut();
		navigate('/');
	};

	const content = (
		<div className='nav-top-links'>
			<Link to='/user/dashboard/account'>
				<div className='side-drawer-links'>
					<p>Account Settings</p>
				</div>
			</Link>
			<Link to='/user/dashboard/edit-profile'>
				<div className='side-drawer-links'>
					<p>Edit Profile</p>
				</div>
			</Link>

			{currentUser ? (
				<div
					className='side-drawer-links'
					onClick={handleLogout}
					style={{ cursor: 'pointer' }}
				>
					<p>Logout</p>
				</div>
			) : (
				''
			)}
		</div>
	);

	return (
		<div className='dashboard-nav'>
			<div className='left-nav'>
				<div className='image-div'>
					<img src={Logo} alt='' />
				</div>
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
