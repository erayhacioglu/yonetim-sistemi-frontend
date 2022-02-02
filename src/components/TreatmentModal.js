import { Grid, TextField } from '@mui/material';

const TreatmentModal = ({ setTreatmentModal }) => {
	return (
		<div className='modal-bg'>
			<div className='overlay' onClick={() => setTreatmentModal(false)}></div>
			<div className='modal'>
				<div className='modal-header'>
					<h2 className='modal-title'>Yeni Tedavi Ekleme</h2>
					<button
						className='modal-close-btn'
						onClick={() => setTreatmentModal(false)}
					>
						<i className='fas fa-times' />
					</button>
				</div>
				<form>
					<div className='modal-body'>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<TextField label='Tedavi' variant='outlined' fullWidth />
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField label='Fiyat' variant='outlined' fullWidth />
							</Grid>
						</Grid>
					</div>
					<div className='modal-footer'>
						<button
							type='submit'
							className='btn btn-blue'
							style={{ marginRight: '10px' }}
						>
							Kaydet
						</button>
						<button
							className='btn btn-red'
							onClick={() => setTreatmentModal(false)}
						>
							Kapat
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TreatmentModal;
