import { useState, useEffect } from 'react';
import {
	Grid,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from '@mui/material';
import axios from 'axios';
import PageHeader from './PageHeader';

const Exchange = () => {
	const [currency, setCurrency] = useState('');
	const [amount, setAmount] = useState('');
	const [rate, setRate] = useState({});
	const [result, setResult] = useState('');
	console.log(rate);
	useEffect(() => {
		const moneyExchange = () => {
			if (currency === 'USD') {
				setResult(
					(
						parseInt(amount) / parseFloat(rate.USD.Alış.replace(',', '.'))
					).toFixed(2)
				);
			} else if (currency === 'EUR') {
				setResult(
					(
						parseInt(amount) / parseFloat(rate.EUR.Alış.replace(',', '.'))
					).toFixed(2)
				);
			} else if (currency === 'GBP') {
				setResult(
					(
						parseInt(amount) / parseFloat(rate.GBP.Alış.replace(',', '.'))
					).toFixed(2)
				);
			} else if (currency === 'CHF') {
				setResult(
					(
						parseInt(amount) / parseFloat(rate.CHF.Alış.replace(',', '.'))
					).toFixed(2)
				);
			}
		};
		moneyExchange();
	}, [currency, amount, rate]);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				'https://finans.truncgil.com/today.json'
			);
			setRate(data);
		};
		getData();
	}, []);

	return (
		<>
			<PageHeader pageTitle='Para Birimi Dönüştürücü' />
			<div className='form-box'>
				<Grid container spacing={2}>
					<Grid item md={4} xs={12}>
						<TextField
							id='outlined-basic'
							label='Miktar'
							variant='outlined'
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							fullWidth
						/>
					</Grid>
					<Grid item md={4} xs={12}>
						<FormControl fullWidth>
							<InputLabel id='para-birimi'>Para Birimi</InputLabel>
							<Select
								value={currency}
								labelId='para-birimi'
								label='Para Birimi'
								onChange={(e) => setCurrency(e.target.value)}
							>
								<MenuItem value='USD'>Amerikan Doları</MenuItem>
								<MenuItem value='EUR'>Euro</MenuItem>
								<MenuItem value='GBP'>İngiliz Sterlini</MenuItem>
								<MenuItem value='CHF'>İsviçre Frangı</MenuItem>
							</Select>
							{currency && (
								<span style={{ marginTop: '10px', color: '#aaa' }}>
									Kur :{' '}
									{(currency === 'USD' && rate.USD.Alış) ||
										(currency === 'EUR' && rate.EUR.Alış) ||
										(currency === 'GBP' && rate.GBP.Alış) ||
										(currency === 'CHF' && rate.CHF.Alış)}
								</span>
							)}
						</FormControl>
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField
							id='outlined-basic'
							label='Sonuç'
							value={amount && currency && result}
							variant='outlined'
							fullWidth
							disabled
						/>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Exchange;
