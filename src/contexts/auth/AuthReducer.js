import { AUTH, USER_LOGGING_IN } from '../types';

const AuthReducer = (state, action) => {
	switch (action.type) {
		case USER_LOGGING_IN:
			return {
				...state,
				loading: action.payload,
			};
		case AUTH:
			return {
				...state,
				token: action.payload.token,
				user: action.payload.user,
				loading: action.payload,
			};
		default:
			return state;
	}
};

export default AuthReducer;
