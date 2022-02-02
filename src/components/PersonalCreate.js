import { useState } from 'react';
import {
	Grid,
	TextField,
	InputAdornment,
	InputLabel,
	Select,
	FormControl,
	MenuItem,
} from '@mui/material';
import PageHeader from './PageHeader';
import turkeyCity from '../utils/turkey-city';
import InputMask from 'react-input-mask';

const PersonalCreate = () => {
	const changeAvatar = (e) => {
		const file = e.target.files[0];
		setPersonalForm({ ...personalForm, avatar: file });
	};

	const initialState = {
		avatar: '',
		personalName: '',
		personalIdentityNumber: '',
		personalPassword: '',
		personalBloodGroup: '',
		personalGender: '',
		personalCity: '',
		personalBirthday: '2022-01-01',
		personalEmail: '',
		personalPhone: '',
		personalSalary: '',
		personalClinic: '',
		personalAuthority: '',
		personalAddress: '',
	};

	const [personalForm, setPersonalForm] = useState(initialState);
	const {
		avatar,
		personalName,
		personalIdentityNumber,
		personalPassword,
		personalBloodGroup,
		personalGender,
		personalCity,
		personalBirthday,
		personalEmail,
		personalPhone,
		personalSalary,
		personalClinic,
		personalAuthority,
		personalAddress,
	} = personalForm;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setPersonalForm({ ...personalForm, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(personalForm);
	};

	return (
		<>
			<PageHeader pageTitle='Yeni Personel Ekleme' />
			<form onSubmit={handleSubmit} style={{ paddingBottom: '25px' }}>
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
								Resim uzantısı *.png,*.jpg,*.jpeg olabilir.Resim boyutu max 1
								Mb.
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
									<TextField
										label='Tc Kimlik No'
										variant='outlined'
										fullWidth
										name='personalIdentityNumber'
										value={personalIdentityNumber}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										label='Şifre'
										variant='outlined'
										fullWidth
										name='personalPassword'
										value={personalPassword}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										type='date'
										label='Doğum Tarihi'
										variant='outlined'
										pattern='\d{4}-\d{2}-\d{2}'
										fullWidth
										name='personalBirthday'
										value={personalBirthday}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='kan-grubu'>Kan Grubu</InputLabel>
										<Select
											labelId='kan-grubu'
											label='Kan Grubu'
											fullWidth
											value={personalBloodGroup}
											name='personalBloodGroup'
											onChange={handleChangeInput}
										>
											<MenuItem value='0 Rh-'>0 Rh-</MenuItem>
											<MenuItem value='0 Rh+'>0 Rh+</MenuItem>
											<MenuItem value='A Rh-'>A Rh-</MenuItem>
											<MenuItem value='A Rh+'>A Rh+</MenuItem>
											<MenuItem value='B Rh+'>B Rh-</MenuItem>
											<MenuItem value='B Rh+'>B Rh+</MenuItem>
											<MenuItem value='AB Rh-'>AB Rh-</MenuItem>
											<MenuItem value='AB Rh+'>AB Rh+</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='gender'>Cinsiyet</InputLabel>
										<Select
											labelId='gender'
											label='Cinsiyet'
											fullWidth
											name='personalGender'
											value={personalGender}
											onChange={handleChangeInput}
										>
											<MenuItem value='Erkek'>Erkek</MenuItem>
											<MenuItem value='Kadın'>Kadın</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='city'>Şehir</InputLabel>
										<Select
											labelId='city'
											label='Şehir'
											name='personalCity'
											value={personalCity}
											onChange={handleChangeInput}
										>
											{turkeyCity?.map((item, key) => (
												<MenuItem value={item.label} key={key}>
													{item.label}
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
										value={personalPhone}
										name='personalPhone'
										onChange={handleChangeInput}
									>
										{(inputProps) => (
											<TextField
												type='tel'
												{...inputProps}
												label='Telefon'
												variant='outlined'
												fullWidth
											/>
										)}
									</InputMask>
								</Grid>

								<Grid item md={6} xs={12}>
									<TextField
										endAdornment={
											<InputAdornment position='end'>₺</InputAdornment>
										}
										variant='outlined'
										label='Maaş'
										fullWidth
										name='personalSalary'
										value={personalSalary}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='klinik'>Klinik</InputLabel>
										<Select
											labelId='klinik'
											label='Klinik'
											fullWidth
											name='personalClinic'
											value={personalClinic}
											onChange={handleChangeInput}
										>
											<MenuItem value='Mecidiyekoy'>Mecidiyeköy</MenuItem>
											<MenuItem value='Konak'>Konak</MenuItem>
											<MenuItem value='Kızılay'>Kızılay</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='yetki'>Yetki</InputLabel>
										<Select
											labelId='yetki'
											label='Yetki'
											fullWidth
											name='personalAuthority'
											value={personalAuthority}
											onChange={handleChangeInput}
										>
											<MenuItem value='Yok'>Yok</MenuItem>
											<MenuItem value='Admin'>Admin</MenuItem>
											<MenuItem value='Doktor'>Doktor</MenuItem>
											<MenuItem value='Asistan'>Asistan</MenuItem>
											<MenuItem value='Operatör'>Operatör</MenuItem>
										</Select>
									</FormControl>
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
								<Grid item md={12} xs={12}>
									<button className='btn btn-green'>Kaydet</button>
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default PersonalCreate;
