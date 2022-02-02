import { Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/auth/AuthContext';

const Login = () => {
	const initialState = {
		personalEmail: '',
		personalPassword: '',
	};
	const [data, setData] = useState(initialState);
	const { personalEmail, personalPassword } = data;
	const auth = useContext(AuthContext);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const submitData = async (e) => {
		e.preventDefault();
		await auth.login(data);
	};

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'fixed',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				zIndex: '99999',
			}}
		>
			<form
				className='form-box'
				style={{
					width: '90%',
					maxWidth: '500px',
					margin: '50px auto',
				}}
				onSubmit={submitData}
			>
				<h1
					style={{
						textAlign: 'center',
						marginBottom: '25px',
						fontSize: '2.5rem',
						fontWeight: '700',
						color: 'grey',
					}}
				>
					Giriş
				</h1>
				<Grid container spacing={2}>
					<Grid item md={12} xs={12}>
						<TextField
							type='email'
							label='Email'
							variant='outlined'
							fullWidth
							name='personalEmail'
							value={personalEmail}
							onChange={handleChangeInput}
						/>
					</Grid>
					<Grid item md={12} xs={12}>
						<TextField
							type='password'
							label='Şifre'
							variant='outlined'
							fullWidth
							name='personalPassword'
							value={personalPassword}
							onChange={handleChangeInput}
						/>
					</Grid>
					<Grid item md={12} xs={12}>
						<button style={{ width: '100%' }} className='btn btn-green'>
							Giriş Yap
						</button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default Login;
