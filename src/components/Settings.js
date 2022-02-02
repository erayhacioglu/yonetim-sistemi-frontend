import { useState } from 'react';
import {
	Grid,
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from '@mui/material';
import PageHeader from './PageHeader';
import turkeyCity from '../utils/turkey-city';
import InputMask from 'react-input-mask';

const Settings = () => {
	const [tab, setTab] = useState(0);

	const changeAvatar = (e) => {
		const file = e.target.files[0];
		setFormData({ ...formData, avatar: file });
	};

	const initialState = {
		avatar: '',
		personalName: '',
		personalCity: '',
		personalEmail: '',
		personalPhone: '',
		personalAddress: '',
	};

	const [formData, setFormData] = useState(initialState);
	const {
		avatar,
		personalName,
		personalCity,
		personalEmail,
		personalPhone,
		personalAddress,
	} = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const [resetPassword, setResetPassword] = useState({
		personalPassword: '',
		personalPasswordConfirm: '',
	});

	const handleResetPasswordSubmit = (e) => {
		e.preventDefault();
		if (
			!resetPassword.personalPassword ||
			!resetPassword.personalPasswordConfirm
		) {
			alert('Boş alan bırakılamaz');
		} else {
			if (resetPassword.personalPassword.length < 8) {
				alert('Şifre en az 8 karakter olmalı');
			} else {
				if (
					resetPassword.personalPassword !==
					resetPassword.personalPasswordConfirm
				) {
					alert('Şifreler eşleşmiyor');
				}
			}
		}
		console.log(resetPassword);
	};

	return (
		<>
			<PageHeader pageTitle='Ayarlar' />
			<ul className='tab-menu'>
				<li
					className={`tab-menu-list ${tab === 0 ? 'active' : ''}`}
					onClick={() => setTab(0)}
				>
					Genel
				</li>
				<li
					className={`tab-menu-list ${tab === 1 ? 'active' : ''}`}
					onClick={() => setTab(1)}
				>
					Şifre Değiştirme
				</li>
			</ul>
			<div className='tab-page-container'>
				<div className={`tab-page ${tab === 0 ? 'active' : ''}`}>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item md={4} xs={12}>
								<div className='form-box'>
									<div className='form-box-photo'>
										<div className='avatar-container'>
											<img
												src={
													avatar
														? URL.createObjectURL(avatar)
														: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVdA_ob48Fm8NcYnS3f_ZBW_FB1sNy2PKbQ&usqp=CAU'
												}
												alt='avatar'
												className='avatar-img'
											/>
											<label htmlFor='image' className='image-label'>
												<i className='fas fa-camera' />
												<span>Resim Ekle</span>
												<input
													type='file'
													name='image'
													id='image'
													accept='image/*'
													onChange={changeAvatar}
												/>
											</label>
										</div>
									</div>
									<div className='form-box-photo-info'>
										Resim uzantısı *.png,*.jpg,*.jpeg olabilir.Resim boyutu max
										1 Mb.
									</div>
								</div>
							</Grid>
							<Grid item md={8} xs={12}>
								<div className='form-box'>
									<Grid container spacing={2}>
										<Grid item md={6} xs={12}>
											<TextField
												label='Ad Soyad'
												variant='outlined'
												fullWidth
												name='personalName'
												value={personalName}
												onChange={handleChangeInput}
											/>
										</Grid>

										<Grid item md={6} xs={12}>
											<FormControl fullWidth>
												<InputLabel id='city'>Şehir</InputLabel>
												<Select
													labelId='city'
													fullWidth
													label='Şehir'
													name='personalCity'
													value={personalCity}
													onChange={handleChangeInput}
												>
													{turkeyCity?.map((city, key) => (
														<MenuItem value={city.label} key={key}>
															{city.label}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</Grid>

										<Grid item md={6} xs={12}>
											<TextField
												label='Email'
												variant='outlined'
												fullWidth
												name='personalEmail'
												value={personalEmail}
												onChange={handleChangeInput}
											/>
										</Grid>
										<Grid item md={6} xs={12}>
											<InputMask
												mask='(999)-999-99-99'
												name='personalPhone'
												value={personalPhone}
												onChange={handleChangeInput}
											>
												{(inputProps) => (
													<TextField
														label='Telefon'
														{...inputProps}
														type='tel'
														variant='outlined'
														fullWidth
													/>
												)}
											</InputMask>
										</Grid>

										<Grid item md={12} xs={12}>
											<TextField
												label='Adres'
												multiline
												rows={4}
												fullWidth
												name='personalAddress'
												value={personalAddress}
												onChange={handleChangeInput}
											/>
										</Grid>
										<Grid item md={12}>
											<button className='btn btn-green'>Kaydet</button>
										</Grid>
									</Grid>
								</div>
							</Grid>
						</Grid>
					</form>
				</div>
				<div className={`tab-page ${tab === 1 ? 'active' : ''}`}>
					<Grid container spacing={2}>
						<Grid item md={6} xs={12}>
							<form className='form-box' onSubmit={handleResetPasswordSubmit}>
								<Grid item md={12} xs={12}>
									<TextField
										label='Yeni Şifre'
										variant='outlined'
										fullWidth
										value={resetPassword.personalPassword}
										onChange={(e) =>
											setResetPassword({
												...resetPassword,
												personalPassword: e.target.value,
											})
										}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Yeni Şifre Tekrar'
										variant='outlined'
										fullWidth
										style={{ margin: '20px 0' }}
										value={resetPassword.personalPasswordConfirm}
										onChange={(e) =>
											setResetPassword({
												...resetPassword,
												personalPasswordConfirm: e.target.value,
											})
										}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<button className='btn btn-green'>Kaydet</button>
								</Grid>
							</form>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	);
};

export default Settings;
