import { useState,useEffect } from 'react';
import PageHeader from './PageHeader';
import { Grid, TextField } from '@mui/material';

const PrescriptionCreate = () => {
	const [prescriptions, setPrescriptions] = useState([]);
	const [prescription, setPrescription] = useState({});

	const addPrescription = () => {
		if (
			prescription.medicine &&
			prescription.dosage &&
			prescription.days &&
			prescription.frequency &&
			prescription.intruction
		) {
			setPrescriptions([...prescriptions, prescription]);
			setPrescription({
				medicine: '',
				dosage: '',
				days: '',
				frequency: '',
				intruction: '',
				description: '',
			});
		} else {
			alert('Lütfen gerekli alanları doldurun.');
		}
	};

	const deletePrescription = (prescription) => {
		const index = prescriptions.indexOf(prescription);
		let newPrescriptions = [...prescriptions];
		newPrescriptions.splice(index, 1);
		setPrescriptions(newPrescriptions);
	};

	const initialState = {
		date: '',
		patient: '',
		dentist: '',
		complain: '',
	};

	const [formData, setFormData] = useState(initialState);
	const { date, patient, dentist, complain } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		setFormData((prev) => ({ ...prev, prescriptions: prescriptions }));
	}, [prescriptions]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<PageHeader pageTitle='Yeni Reçete Oluştur' />
			<Grid container spacing={2}>
				<Grid item md={3} xs={12}>
					<div className='form-box'>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<TextField
									label='İlaç Adı'
									variant='outlined'
									fullWidth
									value={prescription.medicine}
									onChange={(e) =>
										setPrescription({
											...prescription,
											medicine: e.target.value,
										})
									}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<Grid container spacing={2}>
									<Grid item md={6} xs={6}>
										<TextField
											label='Dozaj'
											variant='outlined'
											fullWidth
											value={prescription.dosage}
											onChange={(e) =>
												setPrescription({
													...prescription,
													dosage: e.target.value,
												})
											}
										/>
									</Grid>
									<Grid item md={6} xs={6}>
										<TextField
											label='Sıklık'
											variant='outlined'
											fullWidth
											value={prescription.frequency}
											onChange={(e) =>
												setPrescription({
													...prescription,
													frequency: e.target.value,
												})
											}
										/>
									</Grid>
									<Grid item md={6} xs={6}>
										<TextField
											label='Günler'
											variant='outlined'
											fullWidth
											value={prescription.days}
											onChange={(e) =>
												setPrescription({
													...prescription,
													days: e.target.value,
												})
											}
										/>
									</Grid>
									<Grid item md={6} xs={6}>
										<TextField
											label='Talimat'
											variant='outlined'
											fullWidth
											value={prescription.intruction}
											onChange={(e) =>
												setPrescription({
													...prescription,
													intruction: e.target.value,
												})
											}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									label='Açıklama'
									multiline
									rows={3}
									fullWidth
									value={prescription.description}
									onChange={(e) =>
										setPrescription({
											...prescription,
											description: e.target.value,
										})
									}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<button className='btn btn-blue' onClick={addPrescription}>
									İlaç Ekle
								</button>
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid item md={5} xs={12}>
					<div className='form-box'>
						<div className='prescription-table'>
							<div className='prescription-table-header'>
								<div className='prescription-table-title'>İlaç Adı</div>
								<div className='prescription-table-title'>Dozaj</div>
								<div className='prescription-table-title'>Sıklık</div>
								<div className='prescription-table-title'>Günler</div>
								<div className='prescription-table-title'>Talimat</div>
								<div className='prescription-table-title'></div>
							</div>
							{prescriptions?.map((prescription, key) => (
								<div className='prescription-table-body' key={key}>
									<div className='prescription-table-text'>
										{prescription.medicine}
									</div>
									<div className='prescription-table-text'>
										{prescription.dosage}
									</div>
									<div className='prescription-table-text'>
										{prescription.frequency}
									</div>
									<div className='prescription-table-text'>
										{prescription.days}
									</div>
									<div className='prescription-table-text'>
										{prescription.intruction}
									</div>
									<div className='prescription-table-text'>
										<button
											className='prescription-delete'
											onClick={() => deletePrescription(prescription)}
										>
											<i className='fas fa-trash' />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</Grid>
				<Grid item md={4} xs={12}>
					<div className='form-box'>
						<form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
							<Grid container spacing={2}>
								<Grid item md={12} xs={12}>
									<TextField
										type='date'
										label='Tarih'
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
										label='Şikayet Detay'
										multiline
										rows={3}
										variant='outlined'
										fullWidth
										name='complain'
										value={complain}
										onChange={handleChangeInput}
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<button className='btn btn-green'>Oluştur</button>
								</Grid>
							</Grid>
						</form>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default PrescriptionCreate;
