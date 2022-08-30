import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/users/login/';
const REG_URL = 'http://127.0.0.1:8000/auth/register/';

const register = (
	username,
	email,
	password,
	password2,
	first_name,
	last_name
) => {
	return axios.post(REG_URL, {
		username,
		email,
		password,
		password2,
		first_name,
		last_name,
	});
};

const login = (username, password) => {
	return axios
		.post(API_URL, {
			username,
			password,
		})
		.then((response) => {
			console.log(response.data, 'No Data');
			if (response.data.access) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data;
		});
};
const logout = () => {
	localStorage.removeItem('user');
};
const authService = {
	register,
	login,
	logout,
};
export default authService;
