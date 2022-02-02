import { useState, useEffect, useContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Clinics from './components/Clinics';
import ClinicDetail from './components/ClinicDetail';
import ClinicCreate from './components/ClinicCreate';
import ClinicUpdate from './components/ClinicUpdate';
import Personals from './components/Personals';
import PersonalDetail from './components/PersonalDetail';
import PersonalCreate from './components/PersonalCreate';
import PersonalUpdate from './components/PersonalUpdate';
import Patients from './components/Patients';
import PatientDetail from './components/PatientDetail';
import PatientCreate from './components/PatientCreate';
import PatientUpdate from './components/PatientUpdate';
import Appoinments from './components/Appoinments';
import AppoinmentDetail from './components/AppoinmentDetail';
import AppoinmentCreate from './components/AppoinmentCreate';
import AppoinmentUpdate from './components/AppoinmentUpdate';
import Accounts from './components/Accounts';
import Statistics from './components/Statistics';
import Settings from './components/Settings';
import Search from './components/Search';
import Exchange from './components/Exchange';
import TreatmentModal from './components/TreatmentModal';
import Payments from './components/Payments';
import PaymentCreate from './components/PaymentCreate';
import Prescriptions from './components/Prescriptions';
import PrescriptionCreate from './components/PrescriptionCreate';
import Login from './components/Login';
import TreatmentCreate from './components/TreatmentCreate';

import AuthContext from './contexts/auth/AuthContext';

const App = () => {
	const [sidebar, setSidebar] = useState(true);
	const deviceWidth = window.screen.width;
	const [treatmentModal, setTreatmentModal] = useState(false);
	const auth = useContext(AuthContext);

	useEffect(() => {
		if (deviceWidth === 992) {
			setSidebar(false);
		}
	}, [deviceWidth]);

	useEffect(() => {
		auth.refreshToken();
	}, []);

	return (
		<Router>
			{treatmentModal && (
				<TreatmentModal
					treatmentModal={treatmentModal}
					setTreatmentModal={setTreatmentModal}
				/>
			)}
			{auth.state?.token && <Sidebar sidebar={sidebar} />}
			<main className={`main ${sidebar ? '' : 'active'}`}>
				{auth.state?.token && (
					<Header sidebar={sidebar} setSidebar={setSidebar} />
				)}

				<section className={`${auth.state?.token ? 'page' : ''}`}>
					<div className={`${auth.state?.token ? 'container' : ''}`}>
						<Switch>
							<Route exact path='/giris' component={Login} />
							<PrivateRouter exact path='/' component={Home} />
							<Route exact path='/profil' component={Profile} />
							<Route exact path='/klinikler' component={Clinics} />
							<Route exact path='/klinik/:id'>
								<ClinicDetail setTreatmentModal={setTreatmentModal} />
							</Route>
							<Route exact path='/klinik-ekle' component={ClinicCreate} />
							<Route
								exact
								path='/klinik-guncelle/:id'
								component={ClinicUpdate}
							/>
							<Route exact path='/personeller' component={Personals} />
							<Route exact path='/personel/:id' component={PersonalDetail} />
							<Route exact path='/personel-ekle' component={PersonalCreate} />
							<Route
								exact
								path='/personel-guncelle/:id'
								component={PersonalUpdate}
							/>
							<Route exact path='/hastalar' component={Patients} />
							<Route exact path='/hasta/:id' component={PatientDetail} />
							<Route exact path='/hasta-ekle' component={PatientCreate} />
							<Route
								exact
								path='/hasta-guncelle/:id'
								component={PatientUpdate}
							/>
							<Route exact path='/randevular' component={Appoinments} />
							<Route exact path='/randevu/:id' component={AppoinmentDetail} />
							<Route
								exact
								path='/randevu-olustur'
								component={AppoinmentCreate}
							/>
							<Route
								exact
								path='/randevu-guncelle/:id'
								component={AppoinmentUpdate}
							/>
							<Route exact path='/odemeler' component={Payments} />
							<Route exact path='/odeme-ekle' component={PaymentCreate} />
							<Route exact path='/receteler' component={Prescriptions} />
							<Route
								exact
								path='/recete-olustur/:id'
								component={PrescriptionCreate}
							/>
							<Route
								exact
								path='/tedavi-olustur/:id'
								component={TreatmentCreate}
							/>
							<Route exact path='/ceviri' component={Exchange} />
							<Route exact path='/hesaplar' component={Accounts} />
							<Route exact path='/istatistikler' component={Statistics} />
							<Route exact path='/ayarlar' component={Settings} />
							<Route exact path='/arama' component={Search} />
						</Switch>
					</div>
				</section>
			</main>
		</Router>
	);
};

export default App;
