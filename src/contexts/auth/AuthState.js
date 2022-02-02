import { AUTH, USER_LOGGING_IN } from '../types';
import { useReducer } from 'react';
import { postDataAPI } from '../../utils/fetchData';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const initilaState = {
	user: {},
	loading: false,
	token: '',
};

const AuthState = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initilaState);

	const login = async (data) => {
		dispatch({
			type: USER_LOGGING_IN,
			payload: {
				loading: true,
			},
		});
		const res = await postDataAPI('personal/login', data);

		dispatch({
			type: AUTH,
			payload: {
				token: res.data.access_token,
				user: res.data.personal,
				loading: false,
			},
		});
		localStorage.setItem('isLogin', true);
	};

	const refreshToken = async () => {
		const isLogin = localStorage.getItem('isLogin');
		if (isLogin) {
			try {
				const res = await postDataAPI('personal/refresh_token');
				dispatch({
					type: AUTH,
					payload: {
						token: res.data.access_token,
						user: res.data.personal,
					},
				});
			} catch (err) {
				console.log(err.response.data.msg);
			}
		}
	};

	return (
		<AuthContext.Provider value={{ state, login, refreshToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
