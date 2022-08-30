import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import profilesReducer from './profiles/profilesSlice';
import messageReducer from './message';
// import usersReducer from "./userList";
// import postsReducer from "./posts/postsSlice";
// import postCommentReducer from "./posts/commentSlice";
// import usersReducer from "./users/usersSlice";

const reducer = {
	profiles: profilesReducer,
	auth: authReducer,
	message: messageReducer,
};

export const store = configureStore({
	reducer: reducer,
});
