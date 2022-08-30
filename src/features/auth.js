import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from './services/auth-service';

const user = JSON.parse(localStorage.getItem('user'));

export const register = createAsyncThunk(
	'auth/register',
	async (
		{ username, email, password, password2, first_name, last_name },
		thunkAPI
	) => {
		try {
			const response = await AuthService.register(
				username,
				email,
				password,
				password2,
				first_name,
				last_name
			);
			thunkAPI.dispatch(setMessage(response.data.message));
			return response.data;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, password }, thunkAPI) => {
		try {
			const data = await AuthService.login(username, password);
			return { user: data };
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout();
});

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers(builder) {
		builder
			.addCase(register.pending, (state, action) => {})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoggedIn = false;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoggedIn = false;
			})
			.addCase(login.pending, (state) => {})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoggedIn = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.user = null;
				console.log('User Logged Out');
			});
	},
});

const { reducer } = authSlice;
export default reducer;
