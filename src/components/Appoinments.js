import PageHeader from './PageHeader';

const Appoinments = () => {
	return (
		<>
			<PageHeader
				pageTitle='Randevu Oluştur'
				btnLink='/randevu-olustur'
				btnIcon='fas fa-plus'
				btnName='Randevu Oluştur'
				btnColor='btn-green'
			/>
			<h1>Appoinments</h1>
		</>
	);
};

export default Appoinments;
