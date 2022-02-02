import PageHeader from './PageHeader';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Clinics = () => {
	return (
		<>
			<PageHeader
				pageTitle='Klinik Ekle'
				btnLink='/klinik-ekle'
				btnIcon='fas fa-plus'
				btnName='Klinik Ekle'
				btnColor='btn-green'
			/>
			<Grid container spacing={3}>
				<Grid item md={4} xs={12}>
					<Link to='/klinik/35' className='clinic-card'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6TO2CSf1IK6PltwBDnfh23W3D3diLRBHLaP-5SVJI-GNCTi_dTJ6p_977ZunSGHsU80&usqp=CAU'
							alt=''
							className='clinic-card-img'
						/>
						<div className='clinic-card-content'>
							<h2>Mars Health Group Mecidiyeköy</h2>
							<h4>Mecidiyeköy/İstanbul</h4>
						</div>
					</Link>
				</Grid>
				<Grid item md={4} xs={12}>
					<Link to='/klinik/35' className='clinic-card'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6TO2CSf1IK6PltwBDnfh23W3D3diLRBHLaP-5SVJI-GNCTi_dTJ6p_977ZunSGHsU80&usqp=CAU'
							alt=''
							className='clinic-card-img'
						/>
						<div className='clinic-card-content'>
							<h2>Mars Health Group Mecidiyeköy</h2>
							<h4>Mecidiyeköy/İstanbul</h4>
						</div>
					</Link>
				</Grid>
				<Grid item md={4} xs={12}>
					<Link to='/klinik/35' className='clinic-card'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6TO2CSf1IK6PltwBDnfh23W3D3diLRBHLaP-5SVJI-GNCTi_dTJ6p_977ZunSGHsU80&usqp=CAU'
							alt=''
							className='clinic-card-img'
						/>
						<div className='clinic-card-content'>
							<h2>Mars Health Group Mecidiyeköy</h2>
							<h4>Mecidiyeköy/İstanbul</h4>
						</div>
					</Link>
				</Grid>
				<Grid item md={4} xs={12}>
					<Link to='/klinik/35' className='clinic-card'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6TO2CSf1IK6PltwBDnfh23W3D3diLRBHLaP-5SVJI-GNCTi_dTJ6p_977ZunSGHsU80&usqp=CAU'
							alt=''
							className='clinic-card-img'
						/>
						<div className='clinic-card-content'>
							<h2>Mars Health Group Mecidiyeköy</h2>
							<h4>Mecidiyeköy/İstanbul</h4>
						</div>
					</Link>
				</Grid>
				<Grid item md={4} xs={12}>
					<Link to='/klinik/35' className='clinic-card'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6TO2CSf1IK6PltwBDnfh23W3D3diLRBHLaP-5SVJI-GNCTi_dTJ6p_977ZunSGHsU80&usqp=CAU'
							alt=''
							className='clinic-card-img'
						/>
						<div className='clinic-card-content'>
							<h2>Mars Health Group Mecidiyeköy</h2>
							<h4>Mecidiyeköy/İstanbul</h4>
						</div>
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Clinics;
