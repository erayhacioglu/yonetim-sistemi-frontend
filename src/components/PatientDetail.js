import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const PatientDetail = () => {
	const [tab, setTab] = useState(0);
	const { id } = useParams();
	return (
		<>
			<div className='patient-detail-btn-group'>
				<Link to={`hasta-guncelle/${id}`} className='btn btn-green'>
					<i className='fas fa-plus' />
					&nbsp;&nbsp;Hasta Güncelle
				</Link>
				<Link to={`/tedavi-olustur/${id}`} className='btn btn-blue'>
					<i className='fas fa-briefcase-medical' />
					&nbsp;&nbsp;Tedavi Oluştur
				</Link>
				<Link to={`/recete-olustur/${id}`} className='btn btn-red'>
					<i className='fas fa-clipboard-list' />
					&nbsp;&nbsp;Reçete Oluştur
				</Link>
				<Link
					to={`/randevu-olustur?patientId=${id}`}
					className='btn btn-orange'
				>
					<i className='fas fa-calendar-days' />
					&nbsp;&nbsp;Randevu Oluştur
				</Link>
				<Link to={`/not-olustur/${id}`} className='btn btn-pink'>
					<i className='fas fa-sticky-note' />
					&nbsp;&nbsp;Not Oluştur
				</Link>
			</div>
			<div className='patient-detail'>
				<Grid container spacing={2}>
					<Grid item md={5} xs={12}>
						<div className='patient-detail-left'>
							<div className='patient-detail-left-header'>
								<div className='patient-detail-photo'>
									<img
										src='https://i.pinimg.com/564x/0e/35/8d/0e358d98578648662715198235ce64ee.jpg'
										alt=''
										className='patient-detail-img'
									/>
								</div>
							</div>
							<div className='patient-detail-left-body'>
								<div className='patient-detail-left-body-info'>
									<div className='patient-detail-left-body-info-title'>
										<i className='fas fa-envelope' />
										&nbsp;&nbsp;Email
									</div>
									<h2>eray@gmail.com</h2>
								</div>
								<div className='patient-detail-left-body-info'>
									<div className='patient-detail-left-body-info-title'>
										<i className='fas fa-phone' />
										&nbsp;&nbsp;Telefon
									</div>
									<h2>(537)-882-33-87</h2>
								</div>
								<div className='patient-detail-left-body-info'>
									<div className='patient-detail-left-body-info-title'>
										<i className='fas fa-map-marker-alt' />
										&nbsp;&nbsp;Lokasyon
									</div>
									<h2>Türkiye/İstanbul</h2>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item md={7} xs={12}>
						<div className='patient-detail-right'>
							<div className='patient-detail-right-box'>
								<h2>Hasta Bilgileri</h2>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Ad Soyad<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>
									Eray Hacıoğlu
								</div>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Kimlik No<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>13262453668</div>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Doğum Tarihi<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>17.05.1998</div>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Kan Grubu<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>A Rh+</div>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Hasta Tipi<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>Yerli Hasta</div>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Cinsiyet<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>Erkek</div>
							</div>
							<div className='patient-detail-right-box'>
								<div className='patient-detail-right-box-title'>
									Adres<span>:</span>
								</div>
								<div className='patient-detail-right-box-text'>
									Cengiz Topel Caddesi/Şemsipaşa Mahallesi/8.Sokak/No:5/Daire:4
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
			<ul className='tab-menu'>
				<li
					className={`tab-menu-list ${tab === 0 ? 'active' : ''}`}
					onClick={() => setTab(0)}
				>
					Randevular
				</li>
				<li
					className={`tab-menu-list ${tab === 1 ? 'active' : ''}`}
					onClick={() => setTab(1)}
				>
					Tedaviler
				</li>
				<li
					className={`tab-menu-list ${tab === 2 ? 'active' : ''}`}
					onClick={() => setTab(2)}
				>
					Reçeteler
				</li>
			</ul>
			<div className='tab-page-container'>
				<div className={`tab-page ${tab === 0 ? 'active' : ''}`}>
					Randevular
				</div>
				<div className={`tab-page ${tab === 1 ? 'active' : ''}`}>Tedaviler</div>
				<div className={`tab-page ${tab === 2 ? 'active' : ''}`}>Reçeteler</div>
			</div>
		</>
	);
};

export default PatientDetail;
