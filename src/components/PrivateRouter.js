import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = (props) => {
	const isLogin = localStorage.getItem('isLogin');
	return isLogin ? <Route {...props} /> : <Redirect to='/giris' />;
};

export default PrivateRouter;
