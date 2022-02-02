import PageHeader from './PageHeader';

const Personals = () => {
	return (
		<>
			<PageHeader
				pageTitle='Personeller'
				btnLink='/personel-ekle'
				btnIcon='fas fa-plus'
				btnName='Personel Ekle'
				btnColor='btn-green'
			/>
			<h1>Personeller</h1>
		</>
	);
};

export default Personals;
