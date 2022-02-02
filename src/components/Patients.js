import PageHeader from './PageHeader';

const Patients = () => {
	return (
		<>
			<PageHeader
				pageTitle='Hasta Ekle'
				btnLink='/hasta-ekle'
				btnIcon='fas fa-plus'
				btnName='Hasta Ekle'
				btnColor='btn-green'
			/>
			<h1>Patients</h1>
		</>
	);
};

export default Patients;
