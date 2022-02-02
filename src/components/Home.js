import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const [birthday, setBirthday] = useState('');
	const [birthdayDay, setbirthdayDay] = useState('');
	const [birthdayMonth, setBirthdayMonth] = useState('');
	const [currentDay, setCurrentDay] = useState('');
	const [currentMonth, setCurrentMonth] = useState('');
	const [birthdayMessage, setBirthdayMessage] = useState('');
	let location = useLocation();

	console.log(currentDay);

	useEffect(() => {
		setBirthdayMonth(birthday.split('-')[1]);
		setbirthdayDay(birthday.split('-')[2]);
	}, [birthday]);

	useEffect(() => {
		if (birthdayDay && birthdayMonth && currentDay && currentMonth) {
			if (
				parseInt(birthdayDay) === parseInt(currentDay) &&
				parseInt(birthdayMonth) === parseInt(currentMonth)
			) {
				setBirthdayMessage('Doğum Günün Kutlu Olsun');
			} else {
				setBirthdayMessage('');
			}
		}
	}, [birthdayDay, birthdayMonth, currentDay, currentMonth]);

	useEffect(() => {
		const generateDate = (d) => {
			const date = d.getDate();
			const month = d.getMonth();
			setCurrentDay(date);
			setCurrentMonth(month + 1);
		};
		generateDate(new Date());
	}, []);

	return (
		<>
			<div>
				<input
					type='date'
					name='birthday'
					value={birthday}
					onChange={(e) => setBirthday(e.target.value)}
					pattern='\d{4}-\d{2}-\d{2}'
				/>
			</div>
			{birthdayMessage ? (
				<div className='birthday-message'>
					{birthdayMessage}&nbsp;
					<span className='birthday-message-name'>Eray Hacıoğlu!!!</span>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Home;
