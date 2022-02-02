import { useState, useEffect } from 'react';
import {
	Grid,
	TextField,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
} from '@mui/material';
import PageHeader from './PageHeader';
import turkeyCity from '../utils/turkey-city';
import turkeyDistrict from '../utils/turkey-district';
import InputMask from 'react-input-mask';

const ClinicCreate = () => {
	const initialState = {
		avatar: '',
		clinicName: '',
		clinicTaxNumber: '',
		clinicCity: '',
		clinicDistrict: '',
		clinicEmail: '',
		clinicPhone: '',
		clinicAddress: '',
		clinicMap: '',
	};
	const [clinicForm, setClinicForm] = useState(initialState);
	const {
		avatar,
		clinicName,
		clinicTaxNumber,
		clinicCity,
		clinicDistrict,
		clinicEmail,
		clinicPhone,
		clinicAddress,
		clinicMap,
	} = clinicForm;

	const changeAvatar = (e) => {
		const file = e.target.files[0];
		setClinicForm({ ...clinicForm, avatar: file });
	};

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setClinicForm({ ...clinicForm, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(clinicForm);
	};

	const [cityCode, setCityCode] = useState(0);
	const [districtsArray, setDistrictsArray] = useState([]);

	useEffect(() => {
		const filteredCode = turkeyCity.find(
			(element) => element.label === clinicCity
		);
		setCityCode(filteredCode?.code);
	}, [clinicCity]);

	useEffect(() => {
		const selectedDistricts = turkeyDistrict.filter(
			(district) => district.code === cityCode
		);
		setDistrictsArray(selectedDistricts);
	}, [cityCode]);

	return (
		<>
			<PageHeader pageTitle='Yeni Klinik Ekleme' />
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
										label='Klinik Adı'
										variant='outlined'
										fullWidth
										name='clinicName'
										value={clinicName}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										label='Klinik Vergi Numarası'
										variant='outlined'
										fullWidth
										type='number'
										name='clinicTaxNumber'
										value={clinicTaxNumber}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='il'>İl</InputLabel>
										<Select
											labelId='il'
											fullWidth
											label='İl'
											name='clinicCity'
											value={clinicCity}
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
									<FormControl fullWidth>
										<InputLabel id='ilçe'>İlçe</InputLabel>
										<Select
											labelId='ilçe'
											fullWidth
											label='İlçe'
											disabled={clinicCity ? false : true}
											name='clinicDistrict'
											value={clinicDistrict}
											onChange={handleChangeInput}
										>
											{districtsArray?.map((item, key) => (
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
										name='clinicEmail'
										value={clinicEmail}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<InputMask
										mask='(999) 999-99-99'
										value={clinicPhone}
										name='clinicPhone'
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
								<Grid item md={12} xs={12}>
									<TextField
										label='Adres'
										multiline
										rows={4}
										fullWidth
										name='clinicAddress'
										value={clinicAddress}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Klinik Harita'
										multiline
										rows={4}
										fullWidth
										name='clinicMap'
										value={clinicMap}
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

export default ClinicCreate;
