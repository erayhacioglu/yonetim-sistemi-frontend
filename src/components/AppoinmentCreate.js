import { useState, useEffect, useMemo } from 'react';
import {
	Grid,
	TextField,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
} from '@mui/material';
import PageHeader from './PageHeader';
import { useLocation } from 'react-router-dom';

function useQuery() {
	const { search } = useLocation();
	return useMemo(() => new URLSearchParams(search), [search]);
}

const AppoinmentCreate = () => {
	const query = useQuery();
	const initialState = { date: '', patient: '', clinic: '', doctor: '' };
	const [formData, setFormData] = useState(initialState);
	const { date, patient, clinic, doctor } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<PageHeader pageTitle='Yeni Randevu Oluşturma' />
			<h1>{query?.get('patientId')}</h1>
			<Grid container spacing={2} justifyContent='center'>
				<Grid item md={6} xs={12}>
					<form
						className='form-box'
						onSubmit={handleSubmit}
						style={{ marginBottom: '20px' }}
					>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<TextField
									type='datetimepicker'
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
									label='Hasta'
									variant='outlined'
									fullWidth
									disabled
									name='patient'
									value={patient}
									onChange={handleChangeInput}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<FormControl fullWidth>
									<InputLabel id='clinic'>Klinik</InputLabel>
									<Select
										labelId='clinic'
										label='Klinik'
										fullWidth
										name='clinic'
										value={clinic}
										onChange={handleChangeInput}
									>
										<MenuItem value=''>Klinik Adı</MenuItem>
										<MenuItem value=''>Klinik Adı</MenuItem>
										<MenuItem value=''>Klinik Adı</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={12} xs={12}>
								<FormControl fullWidth>
									<InputLabel id='doctor'>Doktor</InputLabel>
									<Select
										labelId='doctor'
										label='Doktor'
										fullWidth
										name='doctor'
										value={doctor}
										onChange={handleChangeInput}
									>
										<MenuItem value=''>Doktor Adı</MenuItem>
										<MenuItem value=''>Doktor Adı</MenuItem>
										<MenuItem value=''>Doktor Adı</MenuItem>
										<MenuItem value=''>Doktor Adı</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={12} xs={12}>
								<button className='btn btn-green'>Kaydet</button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</>
	);
};

export default AppoinmentCreate;
