import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';

const Payments = () => {
	return (
		<>
			<PageHeader
				pageTitle='Tüm Ödemeler'
				btnIcon='fas fa-plus'
				btnName='Ödeme Ekle'
				btnLink='/odeme-ekle'
				btnColor='btn-green'
			/>
			<h1>Ödemeler</h1>
			<Link to='/odeme-ekle?patient=Eray+Hacıoğlu'>Ödeme Oluştur</Link>
		</>
	);
};

export default Payments;
