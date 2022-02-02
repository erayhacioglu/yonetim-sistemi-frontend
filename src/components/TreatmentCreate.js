import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader';
import AdultTeeth from '../images/yetiskin-diş-formu.png';
import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Checkbox,
	ListItemText,
	OutlinedInput,
} from '@mui/material';
import axios from 'axios';

const TreatmentCreate = () => {
	const [toothType, setToothType] = useState('Yetişkin');
	const [treatmentDocs, setTreatmentDocs] = useState([]);
	const [EUR, setEUR] = useState();
	const [treatments, setTreatments] = useState([]);
	const [treatmentName, setTreatmentName] = useState('');
	const filteredTreatment = allTreatments.find(
		(item) => item.treatment === treatmentName
	);

	const [treatmentTooth, setTreatmentTooth] = useState([]);
	const [treatmentPrice, setTreatmentPrice] = useState('');
	const [treatmentPriceType, setTreatmentPriceType] = useState('');
	const [treatmentRate, setTreatmentRate] = useState('');

	useEffect(() => {
		if (!treatmentName) return;
		else if (treatmentName) {
			setTreatmentPrice(filteredTreatment.price);
			setTreatmentPriceType(filteredTreatment.priceType);
			setTreatmentRate(filteredTreatment.priceType === 'EUR' ? EUR : '');
		}
	}, [treatmentName, EUR]);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				'https://finans.truncgil.com/today.json'
			);
			setEUR(data.EUR.Alış.replace(',', '.'));
		};
		getData();
	}, [treatmentName]);

	const createTreatment = () => {
		setTreatments([
			...treatments,
			{
				treatmentName,
				treatmentTooth,
				treatmentPrice,
				treatmentPriceType,
				treatmentRate,
			},
		]);
		setTreatmentName('');
		setTreatmentTooth([]);
		setTreatmentPrice('');
		setTreatmentPriceType('');
		setTreatmentRate('');
	};

	const deleteTreatment = (item) => {
		const index = treatments.indexOf(item);
		let newTreatments = [...treatments];
		newTreatments.splice(index, 1);
		setTreatments(newTreatments);
	};

	const handleChangeImages = (e) => {
		const files = [...e.target.files];
		let newImages = [];
		files.forEach((file) => {
			if (!file) alert('Dosya Bulunamadı.');
			return newImages.push(file);
		});
		setTreatmentDocs([...treatmentDocs, ...newImages]);
	};

	const handleDeleteDoc = (item) => {
		const index = treatmentDocs.indexOf(item);
		let newTreatmentDocs = [...treatmentDocs];
		newTreatmentDocs.splice(index, 1);
		setTreatmentDocs(newTreatmentDocs);
	};

	const initialState = {
		date: '',
		patient: '',
		dentist: '',
		complain: '',
		note: '',
	};
	const [formData, setFormData] = useState(initialState);
	const { date, patient, dentist, complain, note } = formData;
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		setFormData({ ...formData, treatments: treatments });
	}, [treatments]);

	useEffect(() => {
		setFormData({ ...formData, treatmentDocs: treatmentDocs });
	}, [treatmentDocs]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChangeTooth = (event) => {
		const {
			target: { value },
		} = event;
		setTreatmentTooth(typeof value === 'number' ? value.split(',') : value);
	};

	return (
		<>
			<PageHeader pageTitle='Hasta Tedavi Oluşturma' />
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<div className='tooth-treatment-plan'>
						<div className='tooth-treatment-plan-btn-group'>
							<button
								className={`tooth-treatment-plan-btn ${
									toothType === 'Yetişkin' ? 'active' : ''
								}`}
								onClick={() => setToothType('Yetişkin')}
							>
								Yetişkin
							</button>
							<button
								className={`tooth-treatment-plan-btn ${
									toothType === 'Süt' ? 'active' : ''
								}`}
								onClick={() => setToothType('Süt')}
							>
								Süt
							</button>
						</div>
						<div className='tooth-treatment-plan-photo'>
							{toothType === 'Yetişkin' && (
								<img
									src={AdultTeeth}
									alt=''
									className='tooth-treatment-plan-img'
								/>
							)}
							{toothType === 'Süt' && (
								<img src='' alt='' className='tooth-treatment-plan-img' />
							)}
						</div>
					</div>
					<div className='form-box'>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<FormControl fullWidth>
									<InputLabel id='treatment'>Tedavi</InputLabel>
									<Select
										labelId='treatment'
										label='Tedavi'
										fullWidth
										value={treatmentName}
										onChange={(e) => setTreatmentName(e.target.value)}
									>
										{allTreatments?.map((item, key) => (
											<MenuItem value={item.treatment} key={key}>
												{item.treatment}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12}>
								<FormControl fullWidth>
									<InputLabel id='tooth'>Diş</InputLabel>
									<Select
										labelId='tooth'
										id='tooth'
										multiple
										value={treatmentTooth}
										onChange={handleChangeTooth}
										input={<OutlinedInput label='Diş' />}
										renderValue={(selected) => selected.join(', ')}
									>
										{tooths.map((tooth, key) => (
											<MenuItem key={key} value={tooth}>
												<Checkbox
													checked={treatmentTooth.indexOf(tooth) > -1}
												/>
												<ListItemText primary={tooth} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12}>
								<TextField
									type='number'
									label='Tutar'
									variant='outlined'
									fullWidth
									disabled
									value={treatmentPrice}
									onChange={(e) => setTreatmentPrice(e.target.value)}
								/>
							</Grid>
							<Grid item md={4} xs={12}>
								<TextField
									label='Birim'
									variant='outlined'
									fullWidth
									disabled
									value={treatmentPriceType}
									onChange={(e) => setTreatmentPriceType(e.target.value)}
								/>
							</Grid>
							{treatmentPriceType === 'EUR' && (
								<Grid item md={12} xs={12}>
									<TextField
										label='Kur'
										variant='outlined'
										fullWidth
										disabled
										value={treatmentRate}
										onChange={(e) => setTreatmentRate(e.target.value)}
									/>
								</Grid>
							)}
							<Grid item md={12} xs={12}>
								<button className='btn btn-blue' onClick={createTreatment}>
									Ekle
								</button>
							</Grid>
						</Grid>
					</div>
					<div className='form-box' style={{ margin: '15px 0' }}>
						<div className='prescription-table'>
							<div className='prescription-table-header'>
								<div className='prescription-table-title'>Tedavi</div>
								<div className='prescription-table-title'>Diş</div>
								<div className='prescription-table-title'>Fiyat</div>
								<div className='prescription-table-title'>Tür</div>
								<div className='prescription-table-title'>Kur</div>
								<div className='prescription-table-title'></div>
							</div>
							{treatments?.map((item, key) => (
								<div className='prescription-table-body' key={key}>
									<div className='prescription-table-text'>
										{item.treatmentName}
									</div>
									<div
										className='prescription-table-text'
										style={{ flexWrap: 'wrap' }}
									>
										{item.treatmentTooth?.map((item, key) => (
											<span key={key}>{item},</span>
										))}
									</div>
									<div className='prescription-table-text'>
										{item.treatmentPrice}
									</div>
									<div className='prescription-table-text'>
										{item.treatmentPriceType}
									</div>
									<div className='prescription-table-text'>
										{item.treatmentRate}
									</div>
									<div className='prescription-table-text'>
										<button
											className='prescription-delete'
											onClick={() => deleteTreatment(item)}
										>
											<i className='fas fa-trash' />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</Grid>
				<Grid item md={6} xs={12}>
					<div className='form-box' style={{ marginBottom: '25px' }}>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={2}>
								<Grid item md={12} xs={12}>
									<TextField
										label='Tarih'
										type='date'
										variant='outlined'
										fullWidth
										name='date'
										value={date}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Hasta Adı'
										variant='outlined'
										fullWidth
										name='patient'
										value={patient}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Diş Hekimi'
										variant='outlined'
										fullWidth
										name='dentist'
										value={dentist}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Hasta Şikayet'
										variant='outlined'
										fullWidth
										name='complain'
										value={complain}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Not'
										multiline
										rows={4}
										variant='outlined'
										fullWidth
										name='note'
										value={note}
										onChange={handleChangeInput}
									/>
								</Grid>
								<div className='create-file-box'>
									<label htmlFor='file' className='create-file-btn'>
										Döküman Ekle
										<input
											type='file'
											name='file'
											id='file'
											multiple
											accept='image/*'
											onChange={handleChangeImages}
										/>
									</label>
								</div>
								{treatmentDocs.length > 0 && (
									<Grid item md={12} xs={12}>
										<Grid container spacing={2}>
											{treatmentDocs?.map((item, key) => (
												<Grid item md={3} xs={4} key={key}>
													<div className='show-doc-box'>
														<div
															className='show-doc-close-btn'
															onClick={() => handleDeleteDoc(item)}
														>
															<i className='fas fa-times' />
														</div>
														{item.type === 'image/jpeg' ||
														item.type === 'image/jpg' ||
														item.type === 'image/png' ? (
															<img
																src={URL.createObjectURL(item)}
																alt='images'
																className='show-doc-img'
															/>
														) : (
															<img
																src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/2048px-OneDrive_Folder_Icon.svg.png'
																alt='images'
																className='show-doc-img'
															/>
														)}
													</div>
												</Grid>
											))}
										</Grid>
									</Grid>
								)}
								<Grid item md={12} xs={12}>
									<button className='btn btn-green'>Kaydet</button>
								</Grid>
							</Grid>
						</form>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default TreatmentCreate;

const allTreatments = [
	{
		treatment: 'Genel Muayene',
		price: '250',
		priceType: 'TL',
	},
	{
		treatment: 'Kanal Tedavisi',
		price: '500',
		priceType: 'TL',
	},
	{
		treatment: 'Diş Çekimi',
		price: '420',
		priceType: 'TL',
	},
	{
		treatment: 'Robotik İmplant',
		price: '400',
		priceType: 'EUR',
	},
	{
		treatment: 'Oral Diagnoz',
		price: '150',
		priceType: 'EUR',
	},
];

const tooths = [
	11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33,
	34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,
];
