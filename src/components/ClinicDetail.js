import { useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const ClinicDetail = ({ setTreatmentModal }) => {
	const [tab, setTab] = useState(0);
	return (
		<>
			<PageHeader pageTitle='Mars Sağlık Grubu Mecidiyeköy' />
			<div className='detail'>
				<Grid container spacing={2}>
					<Grid item md={12} xs={12}>
						<div className='clinic-map'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3058943579395!2d28.901715714785286!3d41.062305724048386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab062ddd1d97d%3A0xca4b3799c4d0c31a!2zxZ5lbXNpcGHFn2EsIDguIFNrLiwgMzQyNTAgR2F6aW9zbWFucGHFn2EvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1635808251542!5m2!1str!2str'
								width='100%'
								height='100%'
								loading='lazy'
								title='sdf'
							/>
						</div>
					</Grid>
				</Grid>
				<ul className='tab-menu'>
					<li
						className={`tab-menu-list ${tab === 0 ? 'active' : ''}`}
						onClick={() => setTab(0)}
					>
						Çalışanlar
					</li>
					<li
						className={`tab-menu-list ${tab === 1 ? 'active' : ''}`}
						onClick={() => setTab(1)}
					>
						Tedaviler
					</li>
				</ul>
				<div className='tab-page-container'>
					<div className={`tab-page ${tab === 0 ? 'active' : ''}`}>
						<Grid container spacing={3}>
							<Grid item md={3} xs={12}>
								<Link to='/' className='user-card'>
									<div className='user-card-photo'>
										<img
											src='https://i.pinimg.com/236x/ad/81/c1/ad81c1bcfdc18424447ea7cb1cc9e424.jpg'
											alt=''
											className='user-card-img'
										/>
									</div>
									<div className='user-card-content'>
										<h3>Esra Hacıoğlu</h3>
										<h5>Diş Hekimi</h5>
									</div>
								</Link>
							</Grid>
						</Grid>
					</div>
					<div className={`tab-page ${tab === 1 ? 'active' : ''}`}>
						<button
							className='btn btn-green'
							style={{ marginBottom: '10px' }}
							onClick={() => setTreatmentModal(true)}
						>
							Tedavi Ekle
						</button>
						<div className='service-table'>
							<div className='service-table-header'>
								<div className='service-table-header-title'>Tedavi</div>
								<div className='service-table-header-title'>Fiyat</div>
							</div>
							<div className='service-table-body'>
								<div className='service-table-body-text'>Muayene</div>
								<div className='service-table-body-text'>200&nbsp;₺</div>
							</div>
							<div className='service-table-body'>
								<div className='service-table-body-text'>Kanal Tedavisi</div>
								<div className='service-table-body-text'>500&nbsp;₺</div>
							</div>
							<div className='service-table-body'>
								<div className='service-table-body-text'>Robotik İmplant</div>
								<div className='service-table-body-text'>3200&nbsp;₺</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClinicDetail;
