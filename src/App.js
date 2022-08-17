import { Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/App.scss';

import LandingPage from './views/LandingPage';
import Dashboard from './views/dashboardViews/Dashboard';
import DashLayout from './components/layout/DashLayout';
import Payments from './views/dashboardViews/Payments';
import EditProfile from './views/dashboardViews/EditProfile';
import Messages from './views/dashboardViews/Messages';
import Leads from './views/dashboardViews/Leads';
import Clients from './views/dashboardViews/Clients';
import Points from './views/dashboardViews/Points';
import Rewards from './views/dashboardViews/Rewards';
import LoginPage from './views/authViews/LoginPage';
import RegisterPage from './views/authViews/RegisterPage';
import LandLayout from './components/layout/LandLayout';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LandLayout />}>
				<Route index element={<LandingPage />} />
			</Route>
			<Route path='/' element={<LandingPage />} />
			<Route path='/user/dashboard' element={<DashLayout />}>
				<Route path='data' element={<Dashboard />} />
				<Route path='payments' element={<Payments />} />
				<Route path='edit-profile' element={<EditProfile />} />
				<Route path='messages' element={<Messages />} />
				<Route path='leads' element={<Leads />} />
				<Route path='clients' element={<Clients />} />
				<Route path='points' element={<Points />} />
				<Route path='rewards' element={<Rewards />} />
			</Route>

			<Route path='/user/auth' element={<LandLayout />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
			</Route>
		</Routes>
	);
};

export default App;
