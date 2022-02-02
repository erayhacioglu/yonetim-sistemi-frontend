import { useState } from 'react';
import {
	Grid,
	TextField,
	InputLabel,
	Select,
	FormControl,
	MenuItem,
} from '@mui/material';
import PageHeader from './PageHeader';
import InputMask from 'react-input-mask';

const PatientUpdate = () => {
	const changeAvatar = (e) => {
		const file = e.target.files[0];
		setPatientForm({ ...patientForm, avatar: file });
	};

	const initialState = {
		avatar: '',
		patientName: '',
		patientIdentityNo: '',
		patientBloodGroup: '',
		patientOption: '',
		patientBirthday: '2022-01-01',
		patientGender: '',
		patientCountry: '',
		patientCity: '',
		patientEmail: '',
		patientPhone: '',
		patientAddress: '',
	};
	const [patientForm, setPatientForm] = useState(initialState);
	const {
		patientName,
		patientIdentityNo,
		patientBloodGroup,
		patientOption,
		patientBirthday,
		patientGender,
		patientCountry,
		patientCity,
		patientEmail,
		patientPhone,
		patientAddress,
	} = patientForm;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setPatientForm({ ...patientForm, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(patientForm);
	};

	return (
		<>
			<PageHeader pageTitle='Hasta Güncelleme' />
			<form onSubmit={handleSubmit} style={{ paddingBottom: '25px' }}>
				<Grid container spacing={2}>
					<Grid item md={4} xs={12}>
						<div className='form-box'>
							<div className='form-box-photo'>
								<div className='avatar-container'>
									<img
										src={
											patientForm.avatar
												? URL.createObjectURL(patientForm.avatar)
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
										id='outlined-basic'
										label='Ad Soyad'
										variant='outlined'
										fullWidth
										value={patientName}
										name='patientName'
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										id='outlined-basic'
										label='Tc Kimlik No/Pasaport No'
										variant='outlined'
										fullWidth
										value={patientIdentityNo}
										name='patientIdentityNo'
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										type='date'
										label='Doğum Tarihi'
										variant='outlined'
										fullWidth
										pattern='\d{4}-\d{2}-\d{2}'
										value={patientBirthday}
										name='patientBirthday'
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
											value={patientBloodGroup}
											name='patientBloodGroup'
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
										<InputLabel id='cinsiyet'>Cinsiyet</InputLabel>
										<Select
											labelId='cinsiyet'
											label='Cinsiyet'
											fullWidth
											value={patientGender}
											name='patientGender'
											onChange={handleChangeInput}
										>
											<MenuItem value='erkek'>Erkek</MenuItem>
											<MenuItem value='kadin'>Kadın</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='hasta-secenek'>Hasta Seçenek</InputLabel>
										<Select
											labelId='hasta-secenek'
											label='Hasta Seçenek'
											fullWidth
											value={patientOption}
											name='patientOption'
											onChange={handleChangeInput}
										>
											<MenuItem value='Yerli Hasta'>Yerli Hasta</MenuItem>
											<MenuItem value='Yabancı Hasta'>Yabancı Hasta</MenuItem>
										</Select>
									</FormControl>
								</Grid>

								<Grid item md={6} xs={12}>
									<TextField
										label='Ülke'
										variant='outlined'
										fullWidth
										value={patientCountry}
										name='patientCountry'
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										label='Şehir'
										variant='outlined'
										fullWidth
										value={patientCity}
										name='patientCity'
										onChange={handleChangeInput}
									/>
								</Grid>

								<Grid item md={6} xs={12}>
									<TextField
										label='Email'
										variant='outlined'
										fullWidth
										value={patientEmail}
										name='patientEmail'
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									{patientOption === 'Yabancı Hasta' ? (
										<TextField
											type='tel'
											label='Telefon'
											variant='outlined'
											fullWidth
											value={patientPhone}
											name='patientPhone'
											onChange={handleChangeInput}
										/>
									) : (
										<InputMask
											mask='(999) 999-99-99'
											value={patientPhone}
											name='patientPhone'
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
									)}
								</Grid>

								<Grid item md={12} xs={12}>
									<TextField
										label='Adres'
										multiline
										rows={4}
										fullWidth
										value={patientAddress}
										name='patientAddress'
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

export default PatientUpdate;
