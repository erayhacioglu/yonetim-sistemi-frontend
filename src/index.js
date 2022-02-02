import React from 'react';
import ReactDOM from 'react-dom';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some CSS that access to theme
//   }
// });
import AuthState from './contexts/auth/AuthState';

import App from './App';
import './scss/main.scss';

ReactDOM.render(
	<AuthState>
		<App />
	</AuthState>,
	document.getElementById('root')
);
