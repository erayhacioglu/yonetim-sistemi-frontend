import { Grid } from '@mui/material';

const Profile = () => {
	return (
		<div className='detail'>
			<Grid container spacing={2}>
				<Grid item md={4} xs={12}>
					<div className='detail-photo'>
						<div className='detail-img-container'>
							<img
								src='https://i.pinimg.com/236x/ad/81/c1/ad81c1bcfdc18424447ea7cb1cc9e424.jpg'
								alt=''
								className='detail-img'
							/>
						</div>
					</div>
				</Grid>
				<Grid item md={8} xs={12}>
					<div className='detail-info'>
						<h2>Esra Hacıoğlu/Diş Hekimi</h2>

						<h4>
							<i className='fas fa-map-marker-alt' />
							Mars Sağlık Grubu Mecidiyeköy
						</h4>
						<h4>
							<i className='fas fa-envelope' />
							esra@gmail.com
						</h4>
						<h4>
							<i className='fas fa-phone-alt' />
							(555)-555-55-55
						</h4>
						<address>
							<i className='fas fa-map-marked-alt' />
							Cengiz Topel caddesi/Şemsipaşa mahallesi/8.sokak/No:5/Daire:4
						</address>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
