import { useState, useMemo, useContext, useEffect } from 'react';
import {
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import PageHeader from './PageHeader';
import { useLocation } from 'react-router-dom';
import AuthContext from '../contexts/auth/AuthContext';
import axios from 'axios';

const treatments = [
	{
		treatmentName: 'Kanal Tedavisi',
		treatmentPrice: 500,
		treatmentPriceType: 'TL',
		treatmentRate: '',
		treatmentTooth: [11, 12, 13, 14],
	},
	{
		treatmentName: 'Diş Çekimi',
		treatmentPrice: 250,
		treatmentPriceType: 'TL',
		treatmentRate: '',
		treatmentTooth: [41, 42],
	},
	{
		treatmentName: 'Robotik İmplant',
		treatmentPrice: 400,
		treatmentPriceType: 'EUR',
		treatmentRate: 15.2535,
		treatmentTooth: [15, 16, 17, 18, 21],
	},
	{
		treatmentName: 'Alman İmplant',
		treatmentPrice: 500,
		treatmentPriceType: 'EUR',
		treatmentRate: 15.2535,
		treatmentTooth: [33, 34, 35],
	},
];

const useQuery = () => {
	const { search } = useLocation();
	return useMemo(() => new URLSearchParams(search), [search]);
};

const PaymentCreate = () => {
	const [discount, setDiscount] = useState(0);
	const [EUR, setEUR] = useState();
	const filterTl = treatments.filter(
		(item) => item.treatmentPriceType === 'TL'
	);
	const filterEur = treatments.filter(
		(item) => item.treatmentPriceType === 'EUR'
	);
	const TlPrice = filterTl.reduce(
		(a, c) => a + c.treatmentPrice * c.treatmentTooth.length,
		0
	);
	const EurPrice = filterEur.reduce(
		(a, c) => a + c.treatmentRate * c.treatmentPrice * c.treatmentTooth.length,
		0
	);
	const newEurPrice = filterEur.reduce(
		(a, c) => a + EUR * c.treatmentPrice * c.treatmentTooth.length,
		0
	);
	const initialIncrease = (newEurPrice - EurPrice).toFixed(2);
	const [increase, setIncrease] = useState();
	const treatmentsPrice = parseInt(TlPrice + EurPrice);
	//const [totalPrice, setTotalPrice] = useState();
	const totalPrice = treatmentsPrice + increase - discount;
	const auth = useContext(AuthContext);
	console.log(totalPrice + 425);

	const query = useQuery();
	const currentPatient = query.get('patient');
	const currentClinic = auth?.state?.user?.personalClinic;
	const currentOperator = auth.state?.user?.personalName;
	const [currentDate, setCurrentDate] = useState('');

	// useEffect(() => {
	// 	setTotalPrice(treatmentsPrice + increase);
	// }, [increase]);

	useEffect(() => {
		setIncrease(parseInt(initialIncrease));
	}, [initialIncrease]);

	useEffect(() => {
		const generateDate = (d) => {
			const date = d.getDate();
			const month = d.getMonth();
			const year = d.getFullYear();
			setCurrentDate(`${year}-${month < 10 ? `0${month + 1}` : month}-${date}`);
		};
		generateDate(new Date());
	}, []);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				'https://finans.truncgil.com/today.json'
			);
			setEUR(parseFloat(data.EUR.Alış.replace(',', '.')));
		};
		getData();
	}, []);

	return (
		<>
			<PageHeader pageTitle='Yeni Ödeme Ekle' />
			<form>
				<Grid container spacing={2}>
					<Grid item md={4} xs={12}>
						<div className='form-box'>
							<Grid container spacing={2}>
								<Grid item md={12} xs={12}>
									<TextField
										label='Klinik'
										variant='outlined'
										fullWidth
										value={currentClinic}
										disabled
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										type='date'
										label='Tarih'
										variant='outlined'
										fullWidth
										value={currentDate}
										pattern='\d{4}-\d{2}-\d{2}'
										disabled
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Hasta Adı'
										variant='outlined'
										fullWidth
										value={currentPatient}
										disabled
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Diş Hekimi'
										value=''
										disabled
										variant='outlined'
										fullWidth
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Ödeme Alan'
										value={currentOperator}
										variant='outlined'
										fullWidth
										disabled
									/>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid item md={5} xs={12}>
						<div className='form-box'>
							<div className='payment-table'>
								<div className='payment-table-header'>
									<div className='payment-table-title'>Tedavi</div>
									<div className='payment-table-title'>Ücret</div>
									<div className='payment-table-title'>Kur</div>
									<div className='payment-table-title'>Miktar</div>
								</div>

								{treatments?.map((item, key) => (
									<div className='payment-table-body' key={key}>
										<div className='payment-table-text'>
											{item.treatmentName}
										</div>
										<div className='payment-table-text'>
											{item.treatmentPrice}&nbsp;{item.treatmentPriceType}
										</div>
										<div className='payment-table-text'>
											{item.treatmentRate}
										</div>
										<div className='payment-table-text'>
											x&nbsp;{item.treatmentTooth.length}
										</div>
									</div>
								))}
							</div>
						</div>
					</Grid>
					<Grid item md={3} xs={12}>
						<div className='form-box'>
							<Grid container spacing={2}>
								<Grid item md={12} xs={12}>
									<TextField
										label='Ara Toplam'
										variant='outlined'
										fullWidth
										disabled
										value={treatmentsPrice}
										type='number'
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='İndirim'
										variant='outlined'
										fullWidth
										onChange={(e) => setDiscount(e.target.value)}
										value={discount}
										type='number'
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Arttırım'
										variant='outlined'
										fullWidth
										value={increase}
										onChange={(e) => setIncrease(e.target.value)}
										type='number'
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField
										label='Genel Toplam'
										variant='outlined'
										fullWidth
										disabled
										value={totalPrice}
										type='number'
									/>
								</Grid>
								<Grid item md={12} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='demo-simple-select-label'>
											Ödeme Tipi
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											label='Ödeme Tipi'
											fullWidth
										>
											<MenuItem value='Kart'>Kart</MenuItem>
											<MenuItem value='Nakit'>Nakit</MenuItem>
											<MenuItem value='Senet'>Senet</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item md={12} xs={12}>
									<FormControl fullWidth>
										<InputLabel id='demo-simple-select-label'>
											Ödeme Durumu
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											label='Ödeme Durumu'
											fullWidth
										>
											<MenuItem value='Bekleniyor'>Bekleniyor</MenuItem>
											<MenuItem value='Tamamlandı'>Tamamlandı</MenuItem>
											<MenuItem value='İptal'>İptal</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item md={12} xs={12}>
									<TextField label='Not' multiline rows={2} fullWidth />
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

export default PaymentCreate;

const treatmentsData = [
	{
		id: 1,
		treatment: 'Genel Muayene',
		price: 200,
	},
	{
		id: 2,
		treatment: 'Diş Çekimi',
		price: 300,
	},
	{
		id: 3,
		treatment: 'Dolgu',
		price: 500,
	},
	{
		id: 4,
		treatment: 'Kanal Tedavisi',
		price: 1000,
	},
	{
		id: 5,
		treatment: 'Robotik İmplant',
		price: 2500,
	},
];
